# .NET Backend Integration Guide

This guide explains how to integrate this React frontend with your ASP.NET Core backend.

## Backend Setup Requirements

### 1. CORS Configuration

Your .NET backend must allow requests from the React development server.

**In `Program.cs` or `Startup.cs`:**

```csharp
// Add CORS services
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp",
        policy =>
        {
            policy.WithOrigins("http://localhost:3000", "http://localhost:5173")
                  .AllowAnyMethod()
                  .AllowAnyHeader()
                  .AllowCredentials();
        });
});

// Use CORS middleware (before UseAuthorization)
app.UseCors("AllowReactApp");
```

### 2. Static Files for Production

To serve the React build from your .NET app:

```csharp
// Add SPA services
builder.Services.AddSpaStaticFiles(configuration =>
{
    configuration.RootPath = "wwwroot";
});

// Serve static files
app.UseStaticFiles();
app.UseSpaStaticFiles();

// At the end of middleware pipeline
app.UseSpa(spa =>
{
    spa.Options.SourcePath = "wwwroot";
    
    if (app.Environment.IsDevelopment())
    {
        spa.UseProxyToSpaDevelopmentServer("http://localhost:3000");
    }
});
```

### 3. JWT Authentication (Optional)

If using JWT tokens:

```csharp
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = builder.Configuration["Jwt:Issuer"],
            ValidAudience = builder.Configuration["Jwt:Audience"],
            IssuerSigningKey = new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"]))
        };
    });
```

## API Endpoints Structure

### Expected Backend API Routes

Match your .NET controllers to these routes for seamless integration:

#### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `POST /api/auth/logout` - User logout
- `POST /api/auth/refresh` - Refresh token

#### Courses
- `GET /api/courses` - Get all courses (with pagination)
- `GET /api/courses/{id}` - Get course by ID
- `POST /api/courses/{id}/enroll` - Enroll in course

#### Languages
- `GET /api/languages` - Get all languages
- `GET /api/languages/{id}` - Get language by ID

#### User
- `GET /api/user/profile` - Get current user profile
- `PUT /api/user/update` - Update user profile

## Example .NET Controllers

### AuthController.cs

```csharp
[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] LoginRequest request)
    {
        // Your authentication logic
        var user = await _authService.LoginAsync(request.Email, request.Password);
        
        if (user == null)
            return Unauthorized(new { message = "Invalid credentials" });
        
        var token = _tokenService.GenerateToken(user);
        
        return Ok(new LoginResponse
        {
            Token = token,
            User = user,
            ExpiresAt = DateTime.UtcNow.AddHours(24)
        });
    }
    
    [HttpPost("register")]
    public async Task<IActionResult> Register([FromBody] RegisterRequest request)
    {
        // Your registration logic
        var user = await _authService.RegisterAsync(request);
        var token = _tokenService.GenerateToken(user);
        
        return Ok(new LoginResponse
        {
            Token = token,
            User = user,
            ExpiresAt = DateTime.UtcNow.AddHours(24)
        });
    }
}
```

### CoursesController.cs

```csharp
[ApiController]
[Route("api/[controller]")]
public class CoursesController : ControllerBase
{
    [HttpGet]
    public async Task<IActionResult> GetCourses(
        [FromQuery] int page = 1,
        [FromQuery] int pageSize = 10,
        [FromQuery] string? languageId = null)
    {
        var courses = await _courseService.GetCoursesAsync(page, pageSize, languageId);
        
        return Ok(new PaginatedResponse<Course>
        {
            Items = courses.Items,
            TotalCount = courses.TotalCount,
            PageNumber = page,
            PageSize = pageSize,
            TotalPages = (int)Math.Ceiling(courses.TotalCount / (double)pageSize)
        });
    }
    
    [HttpGet("{id}")]
    public async Task<IActionResult> GetCourseById(string id)
    {
        var course = await _courseService.GetByIdAsync(id);
        
        if (course == null)
            return NotFound();
        
        return Ok(course);
    }
    
    [Authorize]
    [HttpPost("{id}/enroll")]
    public async Task<IActionResult> EnrollInCourse(string id)
    {
        var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        var result = await _courseService.EnrollUserAsync(id, userId);
        
        return Ok(new { success = result, message = "Enrolled successfully" });
    }
}
```

### LanguagesController.cs

```csharp
[ApiController]
[Route("api/[controller]")]
public class LanguagesController : ControllerBase
{
    [HttpGet]
    public async Task<IActionResult> GetLanguages([FromQuery] bool? active = null)
    {
        var languages = active.HasValue && active.Value
            ? await _languageService.GetActiveLanguagesAsync()
            : await _languageService.GetAllLanguagesAsync();
        
        return Ok(languages);
    }
    
    [HttpGet("{id}")]
    public async Task<IActionResult> GetLanguageById(string id)
    {
        var language = await _languageService.GetByIdAsync(id);
        
        if (language == null)
            return NotFound();
        
        return Ok(language);
    }
}
```

## Data Models

### C# Models to Match TypeScript Types

```csharp
// Models/Language.cs
public class Language
{
    public string Id { get; set; }
    public string Name { get; set; }
    public string Code { get; set; }
    public string Flag { get; set; }
    public bool IsActive { get; set; }
}

// Models/Course.cs
public class Course
{
    public string Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public string LanguageId { get; set; }
    public CourseLevel Level { get; set; }
    public int Duration { get; set; }
    public string ThumbnailUrl { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
}

public enum CourseLevel
{
    Beginner,
    Intermediate,
    Advanced
}

// Models/User.cs
public class User
{
    public string Id { get; set; }
    public string Email { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string AvatarUrl { get; set; }
    public DateTime CreatedAt { get; set; }
}

// DTOs/Auth.cs
public class LoginRequest
{
    public string Email { get; set; }
    public string Password { get; set; }
}

public class LoginResponse
{
    public string Token { get; set; }
    public User User { get; set; }
    public DateTime ExpiresAt { get; set; }
}

public class RegisterRequest
{
    public string Email { get; set; }
    public string Password { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
}

// DTOs/ApiResponse.cs
public class ApiResponse<T>
{
    public bool Success { get; set; }
    public T Data { get; set; }
    public string Message { get; set; }
    public List<string> Errors { get; set; }
}

public class PaginatedResponse<T>
{
    public List<T> Items { get; set; }
    public int TotalCount { get; set; }
    public int PageNumber { get; set; }
    public int PageSize { get; set; }
    public int TotalPages { get; set; }
}
```

## Testing the Integration

### 1. Start .NET Backend
```bash
dotnet run
```

### 2. Start React Frontend
```bash
npm run dev
```

### 3. Test API Call
Open browser console and test:
```javascript
fetch('http://localhost:3000/api/languages')
  .then(res => res.json())
  .then(data => console.log(data));
```

## Deployment

### Option 1: Separate Deployment
- Deploy React to CDN/Static hosting (Vercel, Netlify)
- Deploy .NET API separately
- Update CORS settings for production domains

### Option 2: Integrated Deployment
1. Build React app: `npm run build`
2. Copy `dist/` contents to .NET `wwwroot/`
3. Deploy .NET app (IIS, Azure, AWS)

### Production Environment Variables

Create `.env.production`:
```
VITE_API_BASE_URL=https://your-api-domain.com/api
```

## Troubleshooting

### CORS Errors
- Ensure CORS policy includes your frontend URL
- Check that `AllowCredentials()` is set if using cookies/auth

### 404 on API Calls
- Verify .NET API is running on correct port
- Check proxy configuration in `vite.config.ts`

### Authentication Issues
- Ensure JWT token is included in request headers
- Check token expiration
- Verify token validation parameters match

## Additional Resources

- [ASP.NET Core CORS](https://learn.microsoft.com/en-us/aspnet/core/security/cors)
- [ASP.NET Core SPA](https://learn.microsoft.com/en-us/aspnet/core/client-side/spa/intro)
- [JWT Authentication](https://learn.microsoft.com/en-us/aspnet/core/security/authentication/)

