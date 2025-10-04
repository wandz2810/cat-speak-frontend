import { useState } from 'react';
import Button from '../common/Button';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Cộng đồng', hasDropdown: true },
    { label: 'Cat Speak', hasDropdown: false },
    { label: 'Gia hàng', hasDropdown: true },
    { label: 'Kết nối', hasDropdown: false },
  ];

  return (
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

              <Button variant="secondary" size="sm" className="ml-4 bg-red-700 hover:bg-red-800 text-white border-0">
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
              <div className="pt-4 px-4">
                <Button variant="secondary" size="md" className="w-full bg-red-700 hover:bg-red-800 text-white">
                  Get started
                </Button>
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

