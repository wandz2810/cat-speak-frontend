import Card from '../common/Card';
import { FaQuestionCircle } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      title: 'Tài Liệu và Công cụ Hỗ Trợ',
      description: 'Khi nghiên cứu học sẽ có việc sáng tạo linh hoạt cho ngôn ngữ chuyên biệt.',
      icon: '📚',
      color: 'bg-orange-100',
      position: 'top-left'
    },
    {
      title: 'Kết Nối Toàn Cầu',
      description: 'Học viên sẽ được kết nối với giáo viên kèm riêng và các đối tác học tập giúp nhau học.',
      icon: '🌐',
      color: 'bg-blue-100',
      position: 'middle'
    },
    {
      title: 'Cá Nhân Hóa Trải Nghiệm',
      description: 'Game và bài thống kê sẽ giúp người học bài tập bước học cho đầu học hợp lý ôn tập lại mỗi chủ đề.',
      icon: '👥',
      color: 'bg-yellow-100',
      position: 'bottom'
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        {/* Title */}
        <div className="text-center mb-4 relative">
          <p className="text-orange-500 font-semibold mb-2 text-sm uppercase tracking-wide">TẠI SAO CHỌN CHÚNG TÔI ?</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">Giá trị của Cath</h2>
          <button className="absolute top-0 right-4 lg:right-12 w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-colors shadow-lg">
            <FaQuestionCircle className="text-xl" />
          </button>
        </div>

        {/* Features Grid */}
        <div className="bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600 rounded-[3rem] p-6 lg:p-10 shadow-2xl relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-8 left-8 w-16 h-16 border-4 border-yellow-300/30 rounded-full"></div>
          <div className="absolute bottom-12 left-12 w-20 h-20 bg-red-700/20 rounded-full"></div>
          <div className="absolute top-1/4 right-12 w-12 h-12 bg-yellow-300/20 rounded-full"></div>
          
          <div className="grid lg:grid-cols-2 gap-8 relative z-10">
            {/* Left Side - Feature Cards in flowchart style */}
            <div className="relative space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="relative">
                  <Card hover className="bg-white/95 backdrop-blur-sm shadow-xl">
                    <div className="flex items-start space-x-4">
                      <div className={`text-3xl ${feature.color} p-3 rounded-xl flex-shrink-0`}>
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                  
                  {/* Connecting dots */}
                  {index < features.length - 1 && (
                    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1">
                      <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Side - Dashboard Image */}
            <div className="flex items-center justify-center relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 p-6">
                <img 
                  src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1470&auto=format&fit=crop"
                  alt="Language Learning Dashboard"
                  className="w-full h-auto rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent"></div>
              </div>
              
              {/* Decorative dots around image */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-300 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-red-600 rounded-full"></div>
            </div>
          </div>
          
          {/* Bottom decorative curve */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
            <svg width="200" height="50" viewBox="0 0 200 50" className="opacity-30">
              <path d="M0 25 Q50 0, 100 25 T200 25" stroke="#FFD700" strokeWidth="3" fill="none" />
              <circle cx="100" cy="25" r="6" fill="#FF6B35" />
              <circle cx="50" cy="12" r="4" fill="#FFD700" />
              <circle cx="150" cy="12" r="4" fill="#FFD700" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

