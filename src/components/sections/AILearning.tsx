import Button from '../common/Button';
import { FaCheckCircle } from 'react-icons/fa';

const AILearning = () => {
  const benefits = [
    'Mở phòng hội thoại với và dạng các chủ đề và cấp độ',
    'Chatbot, AI hosting và cá nhân hóa lộ trình theo đổi tiến độ học tập/báo cáo xây cẩu với AI',
    'Dễ xuất cải thiên, điều chính ngữ pháp và phát âm từ thối bài Cat Speak.'
  ];

  return (
    <section className="py-20 px-4 bg-white relative">
      {/* Decorative dots */}
      <div className="absolute top-20 right-20 opacity-20">
        <div className="grid grid-cols-4 gap-2">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-gray-400 rounded-full"></div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Images with phone mockup */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Top left image */}
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-gray-800">
                  <img 
                    src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?q=80&w=1470&auto=format&fit=crop"
                    alt="Online Learning"
                    className="w-full h-44 object-cover"
                  />
                </div>
              </div>
              
              {/* Large phone mockup */}
              <div className="row-span-2 -ml-8">
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-black p-3">
                  <div className="rounded-[2rem] overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?q=80&w=1374&auto=format&fit=crop"
                      alt="AI Learning"
                      className="w-full h-[420px] object-cover"
                    />
                  </div>
                </div>
              </div>
              
              {/* Bottom left - phone with app */}
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl bg-black p-2">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop"
                    alt="Mobile App"
                    className="w-full h-44 object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
            
            {/* Speech bubble */}
            <div className="absolute -top-6 -left-6 z-10">
              <div className="relative bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-3xl shadow-2xl font-bold text-lg">
                Xin chào ^^
                <div className="absolute -bottom-2 left-8 w-4 h-4 bg-orange-600 transform rotate-45"></div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            <div>
              <p className="text-orange-500 font-bold mb-3 text-sm uppercase tracking-wide">
                CỘNG ĐỒNG HỌC NGÔN NGỮ TỐT NHẤT
              </p>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 leading-tight mb-6">
                Học, luyện tập và thực hành với ngôn ngữ với AI
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                Hệ thống giáo trình và phần mềm được người dùng đánh giá cao với AI và trình học khác - Chính sách bản quyền được đảm bảo trong quá trình tự học trực tuyến và cá nhân hóa những bài học giúp phù hợp với người học về ngôn ngữ và AI.
              </p>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3 bg-gray-50 p-4 rounded-xl">
                  <FaCheckCircle className="text-green-500 text-xl flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 text-sm lg:text-base">{benefit}</p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button variant="primary" size="lg" className="bg-gradient-to-r from-yellow-400 to-orange-500">
                Tìm hiểu thêm
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom decorative dots */}
      <div className="absolute bottom-20 right-40 opacity-10">
        <div className="grid grid-cols-3 gap-3">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="w-3 h-3 bg-orange-400 rounded-full"></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AILearning;

