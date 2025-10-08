import { useState } from 'react';
import Button from '../common/Button';
import LoginModal from '../auth/LoginModal';
import RegisterModal from '../auth/RegisterModal';

const Hero = () => {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [registerModalOpen, setRegisterModalOpen] = useState(false);

  const handleOpenLogin = () => {
    setRegisterModalOpen(false);
    setLoginModalOpen(true);
  };

  const handleOpenRegister = () => {
    setLoginModalOpen(false);
    setRegisterModalOpen(true);
  };

  return (
    <>
      <section className="pt-32 pb-8 px-4">
        <div className="container mx-auto">
          <div className="relative bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600 rounded-[3rem] overflow-visible shadow-2xl p-6 lg:p-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Side - Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=1470&auto=format&fit=crop"
                  alt="Hoan Kiem Lake, Hanoi"
                  className="w-full h-full object-cover min-h-[400px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 flex gap-4">
                  <Button 
                    variant="secondary" 
                    size="md" 
                    className="flex-1 bg-white/95 hover:bg-white text-gray-800 shadow-lg"
                    onClick={handleOpenLogin}
                  >
                    Đăng nhập
                  </Button>
                  <Button 
                    variant="primary" 
                    size="md" 
                    className="flex-1 bg-gradient-to-r from-yellow-400 to-orange-500 shadow-lg"
                    onClick={handleOpenRegister}
                  >
                    Đăng ký
                  </Button>
                </div>
              </div>

              {/* Right Side - Content Card */}
              <div className="relative">
                <div className="bg-gradient-to-br from-red-700 to-red-900 rounded-3xl p-8 lg:p-10 shadow-xl h-full flex flex-col justify-center">
                  <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-yellow-300 mb-6">
                    Một cách tiếp cận độc đáo để học ngoại ngữ trực tuyến
                  </h1>
                  <p className="text-base lg:text-lg text-white/90 leading-relaxed mb-4">
                    Học theo tốc độ của riêng bạn với các công cụ thiết kế toàn diện để giúp bạn lập nền tảng bằng từng bài học.
                  </p>
                  <p className="text-sm lg:text-base text-white/80">
                    Học theo tốc độ của riêng bạn với các công cụ thiết kế toàn diện để giúp bạn lập nền tảng bằng từng bài học.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Decorative circles */}
            <div className="absolute -bottom-6 left-12 w-12 h-12 bg-yellow-300 rounded-full opacity-50"></div>
            <div className="absolute -bottom-4 left-28 w-8 h-8 bg-orange-400 rounded-full opacity-40"></div>
          </div>
        </div>
      </section>

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

export default Hero;

