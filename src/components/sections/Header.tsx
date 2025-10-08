import { useState } from 'react';
import Button from '../common/Button';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import LoginModal from '../auth/LoginModal';
import RegisterModal from '../auth/RegisterModal';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [registerModalOpen, setRegisterModalOpen] = useState(false);

  const navItems = [
    { label: 'Cộng đồng', hasDropdown: true },
    { label: 'Cat Speak', hasDropdown: false },
    { label: 'Giỏ Hàng', hasDropdown: false },
    { label: 'Kết nối', hasDropdown: false },
  ];

  const handleOpenLogin = () => {
    setRegisterModalOpen(false);
    setLoginModalOpen(true);
    setMobileMenuOpen(false);
  };

  const handleOpenRegister = () => {
    setLoginModalOpen(false);
    setRegisterModalOpen(true);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 rounded-full shadow-2xl px-8 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center space-x-2">
                <div className="text-2xl font-bold flex items-center">
                  <span className="text-white">CAT</span>
                  <span className="text-red-900">•</span>
                  <span className="text-white">SPEAK</span>
                </div>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-1">
                {navItems.map((item, index) => (
                  <div key={index} className="relative group">
                    <button className="flex items-center space-x-1 text-white hover:text-white/80 transition-colors px-4 py-2 rounded-full hover:bg-white/10">
                      <span className="font-medium">{item.label}</span>
                      {item.hasDropdown && <FaChevronDown className="text-xs" />}
                    </button>
                  </div>
                ))}
                
                {/* Language Selector */}
                <div className="relative group">
                  <button className="flex items-center space-x-1 text-white hover:text-white/80 transition-colors px-4 py-2 rounded-full hover:bg-white/10">
                    <span className="font-medium">Tiếng Việt</span>
                    <FaChevronDown className="text-xs" />
                  </button>
                </div>

                <Button 
                  variant="secondary" 
                  size="sm" 
                  className="ml-4 bg-white hover:bg-gray-100 text-gray-800 shadow-md border-0"
                  onClick={handleOpenRegister}
                >
                  Get started
                </Button>
              </nav>

              {/* Mobile Menu Button */}
              <button 
                className="lg:hidden text-white text-2xl"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <nav className="lg:hidden mt-4 pb-4 space-y-2 border-t border-white/20 pt-4">
                {navItems.map((item, index) => (
                  <div key={index}>
                    <button className="w-full text-left text-white hover:text-white/80 transition-colors py-2 px-4 rounded-lg hover:bg-white/10">
                      {item.label}
                    </button>
                  </div>
                ))}
                <div className="pt-4 px-4 space-y-2">
                  <Button 
                    variant="secondary" 
                    size="md" 
                    className="w-full bg-white hover:bg-gray-100 text-gray-800"
                    onClick={handleOpenLogin}
                  >
                    Đăng nhập
                  </Button>
                  <Button 
                    variant="secondary" 
                    size="md" 
                    className="w-full bg-red-700 hover:bg-red-800 text-white"
                    onClick={handleOpenRegister}
                  >
                    Đăng ký
                  </Button>
                </div>
              </nav>
            )}
          </div>
        </div>
      </header>

      {/* Modals */}
      <LoginModal 
        isOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
        onSwitchToRegister={handleOpenRegister}
      />
      <RegisterModal 
        isOpen={registerModalOpen}
        onClose={() => setRegisterModalOpen(false)}
        onSwitchToLogin={handleOpenLogin}
      />
    </>
  );
};

export default Header;

