import { useState } from 'react';
import Modal from '../common/Modal';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToRegister: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onSwitchToRegister }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [savePassword, setSavePassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement login logic with backend
    console.log('Login:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Đăng nhập">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Email */}
        <div>
          <label className="block text-lg font-bold text-gray-900 mb-2">
            Email
          </label>
          <input
            type="text"
            name="email"
            placeholder="Email / SĐT"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-6 py-4 rounded-full border-2 border-gray-300 focus:border-orange-500 focus:outline-none transition-colors text-gray-800"
            required
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-lg font-bold text-gray-900 mb-2">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Mật khẩu"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-6 py-4 pr-14 rounded-full border-2 border-gray-300 focus:border-orange-500 focus:outline-none transition-colors text-gray-800"
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

        {/* Save Password & Forgot Password */}
        <div className="flex items-center justify-between px-2">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={savePassword}
              onChange={(e) => setSavePassword(e.target.checked)}
              className="w-5 h-5 rounded border-2 border-gray-300"
            />
            <span className="text-gray-700">Save Password</span>
          </label>
          <button
            type="button"
            className="text-blue-600 hover:underline font-medium"
          >
            Quên mật khẩu
          </button>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-red-700 via-orange-600 to-orange-500 text-white font-bold text-xl py-4 rounded-full hover:shadow-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
        >
          LOGIN
        </button>

        {/* Switch to Register */}
        <div className="text-center pt-4">
          <span className="text-gray-700">Bạn chưa có tài khoản? </span>
          <button
            type="button"
            onClick={onSwitchToRegister}
            className="text-blue-600 hover:underline font-semibold"
          >
            Đăng ký
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default LoginModal;

