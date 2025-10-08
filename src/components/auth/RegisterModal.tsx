import { useState } from 'react';
import Modal from '../common/Modal';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToLogin: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onClose, onSwitchToLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    language: '',
    password: '',
    country: '',
    agreeTerms: false,
    agreePayment: false
  });

  const languages = [
    'Tiếng Việt',
    'English',
    '中文 (Chinese)',
    '日本語 (Japanese)',
    'Deutsch (German)',
    'Français (French)',
    'Español (Spanish)'
  ];

  const countries = [
    'Việt Nam',
    'United States',
    'United Kingdom',
    'China',
    'Japan',
    'Germany',
    'France',
    'Spain',
    'Korea',
    'Thailand'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreeTerms || !formData.agreePayment) {
      alert('Vui lòng đồng ý với điều khoản và chính sách');
      return;
    }
    // TODO: Implement registration logic with backend
    console.log('Register:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Đăng Ký">
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Full Name */}
        <div>
          <label className="block text-base font-bold text-gray-900 mb-2">
            Họ và Tên
          </label>
          <input
            type="text"
            name="fullName"
            placeholder="Nhập họ và tên"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-6 py-3.5 rounded-full border-2 border-gray-300 focus:border-orange-500 focus:outline-none transition-colors text-gray-800"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-base font-bold text-gray-900 mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-6 py-3.5 rounded-full border-2 border-gray-300 focus:border-orange-500 focus:outline-none transition-colors text-gray-800"
            required
          />
        </div>

        {/* Phone and Language */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-base font-bold text-gray-900 mb-2">
              Số điện thoại
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="Nhập sđt của bạn ở đây"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-6 py-3.5 rounded-full border-2 border-gray-300 focus:border-orange-500 focus:outline-none transition-colors text-gray-800"
              required
            />
          </div>
          <div>
            <label className="block text-base font-bold text-gray-900 mb-2">
              Ngôn ngữ
            </label>
            <select
              name="language"
              value={formData.language}
              onChange={handleChange}
              className="w-full px-6 py-3.5 rounded-full border-2 border-gray-300 focus:border-orange-500 focus:outline-none transition-colors text-gray-800 appearance-none bg-white cursor-pointer"
              required
            >
              <option value="">Chọn cộng đồng ngôn ngữ cho bạn</option>
              {languages.map((lang) => (
                <option key={lang} value={lang}>{lang}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Password and Country */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-base font-bold text-gray-900 mb-2">
              Mật khẩu
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Nhập mật khẩu của bạn ở đây"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-6 py-3.5 pr-14 rounded-full border-2 border-gray-300 focus:border-orange-500 focus:outline-none transition-colors text-gray-800"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-900"
              >
                {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
              </button>
            </div>
          </div>
          <div>
            <label className="block text-base font-bold text-gray-900 mb-2">
              Quốc gia
            </label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full px-6 py-3.5 rounded-full border-2 border-gray-300 focus:border-orange-500 focus:outline-none transition-colors text-gray-800 appearance-none bg-white cursor-pointer"
              required
            >
              <option value="">Chọn quốc gia của bạn</option>
              {countries.map((country) => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className="space-y-3 px-2">
          <label className="flex items-start space-x-3 cursor-pointer">
            <input
              type="checkbox"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
              className="w-5 h-5 mt-0.5 rounded border-2 border-gray-300 flex-shrink-0"
            />
            <span className="text-sm text-gray-700 leading-relaxed">
              Tôi đồng ý với <span className="font-bold">Điều khoản dịch vụ</span> và <span className="font-bold">Chính sách bảo mật</span> của công ty
            </span>
          </label>
          <label className="flex items-start space-x-3 cursor-pointer">
            <input
              type="checkbox"
              name="agreePayment"
              checked={formData.agreePayment}
              onChange={handleChange}
              className="w-5 h-5 mt-0.5 rounded border-2 border-gray-300 flex-shrink-0"
            />
            <span className="text-sm text-gray-700 leading-relaxed">
              Tôi đồng ý với <span className="font-bold">Chính sách thanh toán</span> và <span className="font-bold">Bản quyền sở hữu trí tuệ</span> của công ty
            </span>
          </label>
        </div>

        {/* Register Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-red-700 via-orange-600 to-orange-400 text-white font-bold text-xl py-4 rounded-full hover:shadow-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] mt-6"
        >
          Đăng ký
        </button>

        {/* Divider */}
        <div className="relative py-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-4 text-gray-500 font-medium">Hoặc</span>
          </div>
        </div>

        {/* Switch to Login */}
        <div className="text-center">
          <span className="text-gray-700">Bạn đã có tài khoản? </span>
          <button
            type="button"
            onClick={onSwitchToLogin}
            className="text-blue-600 hover:underline font-semibold"
          >
            Đăng nhập
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default RegisterModal;

