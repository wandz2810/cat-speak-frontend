# Authentication Modals Documentation

## Overview

The Cat Speak platform includes beautifully designed Login and Register modal popups that match the provided UI design.

---

## 📁 Components Created

### 1. **Modal Component** (`src/components/common/Modal.tsx`)
Reusable modal wrapper with:
- Backdrop overlay with blur effect
- Close button (X) in top-right
- ESC key to close
- Click outside to close
- Prevent body scroll when open
- Smooth animations

### 2. **LoginModal** (`src/components/auth/LoginModal.tsx`)
Login popup with:
- Email/Phone Number input
- Password input with show/hide toggle
- "Save Password" checkbox
- "Forgot Password" link
- Gradient LOGIN button
- Switch to Register link

### 3. **RegisterModal** (`src/components/auth/RegisterModal.tsx`)
Registration popup with:
- Full Name input
- Email input
- Phone Number input
- Language dropdown (7 languages)
- Password input with show/hide toggle
- Country dropdown (10 countries)
- Two terms & conditions checkboxes
- Gradient Register button
- Switch to Login link

---

## 🎨 Design Features

### Visual Elements
✅ **Rounded corners** - 3rem border radius matching design  
✅ **Red gradient buttons** - From red-700 to orange-400  
✅ **Password toggle** - Eye icon to show/hide password  
✅ **Form validation** - Required fields  
✅ **Smooth transitions** - Hover and focus states  
✅ **Responsive design** - Mobile and desktop optimized  

### Color Scheme
- **Title:** Red-800 (#991B1B)
- **Buttons:** Red → Orange gradient
- **Inputs:** Gray borders, orange focus
- **Links:** Blue-600 (#2563EB)

---

## 🔌 Integration Points

### Header Component
The modals are integrated into the Header:

```typescript
// State management
const [loginModalOpen, setLoginModalOpen] = useState(false);
const [registerModalOpen, setRegisterModalOpen] = useState(false);

// Buttons trigger modals
<Button onClick={handleOpenRegister}>Get started</Button>
<Button onClick={handleOpenLogin}>Đăng nhập</Button>
```

### Hero Section
Login/Register buttons in the hero image also trigger modals:

```typescript
<Button onClick={handleOpenLogin}>Đăng nhập</Button>
<Button onClick={handleOpenRegister}>Đăng ký</Button>
```

---

## 🛠️ Usage Examples

### Opening Modals

```typescript
import { useState } from 'react';
import LoginModal from './components/auth/LoginModal';
import RegisterModal from './components/auth/RegisterModal';

function MyComponent() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

  return (
    <>
      <button onClick={() => setLoginOpen(true)}>Login</button>
      <button onClick={() => setRegisterOpen(true)}>Register</button>

      <LoginModal 
        isOpen={loginOpen}
        onClose={() => setLoginOpen(false)}
        onSwitchToRegister={() => {
          setLoginOpen(false);
          setRegisterOpen(true);
        }}
      />

      <RegisterModal 
        isOpen={registerOpen}
        onClose={() => setRegisterOpen(false)}
        onSwitchToLogin={() => {
          setRegisterOpen(false);
          setLoginOpen(true);
        }}
      />
    </>
  );
}
```

---

## 🔐 Backend Integration

### Current State
The modals currently log form data to console:
```typescript
console.log('Login:', formData);
console.log('Register:', formData);
```

### Next Steps - Connect to .NET Backend

#### 1. Update `authService.ts`

```typescript
// src/services/authService.ts

export const authService = {
  login: async (email: string, password: string) => {
    const response = await apiClient.post('/auth/login', {
      email,
      password
    });
    
    if (response.token) {
      localStorage.setItem('authToken', response.token);
      localStorage.setItem('user', JSON.stringify(response.user));
    }
    
    return response;
  },

  register: async (userData: RegisterRequest) => {
    const response = await apiClient.post('/auth/register', userData);
    
    if (response.token) {
      localStorage.setItem('authToken', response.token);
      localStorage.setItem('user', JSON.stringify(response.user));
    }
    
    return response;
  }
};
```

#### 2. Update Modal Components

**LoginModal.tsx:**
```typescript
import { authService } from '../../services/authService';

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const response = await authService.login(
      formData.email, 
      formData.password
    );
    
    // Close modal and redirect
    onClose();
    window.location.href = '/dashboard';
  } catch (error) {
    alert('Login failed. Please check your credentials.');
  }
};
```

**RegisterModal.tsx:**
```typescript
import { authService } from '../../services/authService';

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  if (!formData.agreeTerms || !formData.agreePayment) {
    alert('Please agree to terms and conditions');
    return;
  }

  try {
    const response = await authService.register({
      firstName: formData.fullName.split(' ')[0],
      lastName: formData.fullName.split(' ').slice(1).join(' '),
      email: formData.email,
      password: formData.password,
      phone: formData.phone,
      language: formData.language,
      country: formData.country
    });
    
    // Close modal and redirect
    onClose();
    window.location.href = '/dashboard';
  } catch (error) {
    alert('Registration failed. Please try again.');
  }
};
```

#### 3. .NET Backend Endpoints Required

```csharp
// POST /api/auth/login
[HttpPost("login")]
public async Task<IActionResult> Login([FromBody] LoginRequest request)
{
    // Validate credentials
    var user = await _authService.ValidateUser(request.Email, request.Password);
    
    if (user == null)
        return Unauthorized(new { message = "Invalid credentials" });
    
    // Generate JWT token
    var token = _tokenService.GenerateToken(user);
    
    return Ok(new LoginResponse
    {
        Token = token,
        User = user,
        ExpiresAt = DateTime.UtcNow.AddHours(24)
    });
}

// POST /api/auth/register
[HttpPost("register")]
public async Task<IActionResult> Register([FromBody] RegisterRequest request)
{
    // Check if user exists
    if (await _authService.UserExists(request.Email))
        return BadRequest(new { message = "User already exists" });
    
    // Create user
    var user = await _authService.CreateUser(request);
    
    // Generate JWT token
    var token = _tokenService.GenerateToken(user);
    
    return Ok(new LoginResponse
    {
        Token = token,
        User = user,
        ExpiresAt = DateTime.UtcNow.AddHours(24)
    });
}
```

---

## 📝 Form Fields

### Login Form
| Field | Type | Required | Validation |
|-------|------|----------|------------|
| Email/Phone | text | Yes | Email or phone format |
| Password | password | Yes | Min 6 characters |
| Save Password | checkbox | No | - |

### Register Form
| Field | Type | Required | Validation |
|-------|------|----------|------------|
| Full Name | text | Yes | Min 2 characters |
| Email | email | Yes | Valid email format |
| Phone | tel | Yes | Valid phone number |
| Language | select | Yes | From dropdown list |
| Password | password | Yes | Min 6 characters |
| Country | select | Yes | From dropdown list |
| Terms Agreement | checkbox | Yes | Must be checked |
| Payment Agreement | checkbox | Yes | Must be checked |

---

## 🌐 Supported Languages

- Tiếng Việt (Vietnamese)
- English
- 中文 (Chinese)
- 日本語 (Japanese)
- Deutsch (German)
- Français (French)
- Español (Spanish)

---

## 🌍 Supported Countries

- Việt Nam
- United States
- United Kingdom
- China
- Japan
- Germany
- France
- Spain
- Korea
- Thailand

---

## ✨ Features

### Modal Behavior
- ✅ **ESC key closes modal**
- ✅ **Click outside closes modal**
- ✅ **Body scroll prevented when open**
- ✅ **Smooth fade-in animation**
- ✅ **Only one modal open at a time**

### Form Validation
- ✅ **Required field validation**
- ✅ **Email format validation**
- ✅ **Password visibility toggle**
- ✅ **Checkbox validation**
- ✅ **Form submission handling**

### User Experience
- ✅ **Switch between Login/Register**
- ✅ **Forgot password link**
- ✅ **Save password option**
- ✅ **Clear error messages**
- ✅ **Loading states (to be added)**

---

## 🎯 Next Steps

### Immediate
1. ✅ Modal components created
2. ✅ Integration with Header and Hero
3. ✅ Form validation
4. ✅ Password visibility toggle

### Short-term
- [ ] Connect to .NET backend API
- [ ] Add loading spinners during submission
- [ ] Add error message displays
- [ ] Add success notifications
- [ ] Implement "Forgot Password" functionality

### Long-term
- [ ] Add social login (Google, Facebook)
- [ ] Add email verification
- [ ] Add password strength meter
- [ ] Add reCAPTCHA
- [ ] Add multi-step registration

---

## 🔒 Security Considerations

### Current Implementation
- Password inputs use `type="password"`
- Forms prevent default submission
- Basic client-side validation

### Recommended Improvements
1. **Password Strength:** Add password strength indicator
2. **HTTPS Only:** Ensure all auth requests over HTTPS
3. **CSRF Protection:** Add CSRF tokens
4. **Rate Limiting:** Implement on backend
5. **Input Sanitization:** Sanitize all user inputs
6. **JWT Security:** Store tokens securely (httpOnly cookies)

---

## 📱 Responsive Design

### Mobile (< 768px)
- Full-width modal
- Single-column form layout
- Larger touch targets
- Adjusted spacing

### Tablet (768px - 1024px)
- Centered modal
- Two-column layout for some fields
- Optimized button sizes

### Desktop (> 1024px)
- Maximum width 768px
- Two-column layout
- Full feature set

---

## 🐛 Testing Checklist

- [ ] Modal opens on button click
- [ ] Modal closes on X button
- [ ] Modal closes on ESC key
- [ ] Modal closes on backdrop click
- [ ] Form validation works
- [ ] Password toggle works
- [ ] Switch between modals works
- [ ] Form submits correctly
- [ ] Responsive on mobile
- [ ] Accessible (keyboard navigation)
- [ ] No console errors

---

## 📞 Support

For questions or issues:
1. Check `GETTING_STARTED.md`
2. Review `BACKEND_INTEGRATION.md`
3. Check browser console for errors
4. Verify .NET backend is running

---

**Authentication modals are ready to use! Connect to your .NET backend to enable full functionality.** 🚀

