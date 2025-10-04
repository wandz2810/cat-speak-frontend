import { FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-orange-500 via-orange-600 to-red-700 text-white py-16 px-4 relative overflow-hidden">
      {/* Decorative silhouette - left side */}
      <div className="absolute bottom-0 left-0 opacity-10 h-64 w-64">
        <svg viewBox="0 0 200 200" className="h-full w-full">
          <path d="M20,180 L30,160 L25,140 L35,120 L30,100 L40,80 L35,60 L45,40 L50,20 L60,40 L70,30 L80,50 L90,40 L100,60" 
                stroke="white" strokeWidth="2" fill="none"/>
        </svg>
      </div>

      {/* Decorative silhouette - right side woman */}
      <div className="absolute bottom-0 right-0 h-80 w-48 opacity-15">
        <svg viewBox="0 0 100 200" className="h-full w-full">
          {/* Woman silhouette */}
          <ellipse cx="50" cy="20" rx="12" ry="15" fill="white"/>
          <path d="M50,35 Q45,50 40,80 L35,120 L30,160 L25,200" stroke="white" strokeWidth="8" fill="none"/>
          <path d="M50,35 Q55,50 60,80 L65,120 L70,160 L75,200" stroke="white" strokeWidth="8" fill="none"/>
          <path d="M45,50 L20,100" stroke="white" strokeWidth="6" fill="none"/>
          <path d="M55,50 L80,100" stroke="white" strokeWidth="6" fill="none"/>
        </svg>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Column 1 - Social */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Follow Us !</h3>
            <p className="text-sm opacity-90 mb-6 leading-relaxed">
              Kết nối với chúng tôi trên mạng xã hội để cập nhật những thông tin mới nhất.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-12 h-12 bg-white text-red-600 rounded-full flex items-center justify-center hover:bg-white/90 transition-all transform hover:scale-110 shadow-lg">
                <FaFacebookF className="text-xl" />
              </a>
              <a href="#" className="w-12 h-12 bg-white text-red-600 rounded-full flex items-center justify-center hover:bg-white/90 transition-all transform hover:scale-110 shadow-lg">
                <FaYoutube className="text-xl" />
              </a>
              <a href="#" className="w-12 h-12 bg-white text-red-600 rounded-full flex items-center justify-center hover:bg-white/90 transition-all transform hover:scale-110 shadow-lg">
                <FaInstagram className="text-xl" />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 opacity-90">Danh mục liên kết</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#" className="hover:opacity-100 hover:underline transition-opacity">Về chúng tôi</a></li>
              <li><a href="#" className="hover:opacity-100 hover:underline transition-opacity">Khóa học</a></li>
              <li><a href="#" className="hover:opacity-100 hover:underline transition-opacity">Giáo viên</a></li>
              <li><a href="#" className="hover:opacity-100 hover:underline transition-opacity">Blog</a></li>
            </ul>
          </div>

          {/* Column 3 - Support */}
          <div>
            <h3 className="text-lg font-bold mb-4 opacity-90">Hỗ trợ</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#" className="hover:opacity-100 hover:underline transition-opacity">Trung tâm trợ giúp</a></li>
              <li><a href="#" className="hover:opacity-100 hover:underline transition-opacity">Liên hệ</a></li>
              <li><a href="#" className="hover:opacity-100 hover:underline transition-opacity">Điều khoản</a></li>
              <li><a href="#" className="hover:opacity-100 hover:underline transition-opacity">Chính sách</a></li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 opacity-90">Liên hệ</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Email: info@catspeak.vn</li>
              <li>Phone: +84 123 456 789</li>
              <li>Address: Hà Nội, Việt Nam</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm opacity-80">
            <p>© 2025 Spech Invest | CAT SPEAK - LANGUAGE AS ANSWER</p>
            <p className="mt-2 md:mt-0">Bản quyền thuộc Tâm Nông</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

