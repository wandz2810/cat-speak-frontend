import { useState } from 'react';
import Card from '../common/Card';
import { FaChevronDown, FaChevronUp, FaSearch } from 'react-icons/fa';

interface FAQItem {
  question: string;
  answer?: string;
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(5);

  const faqItems: FAQItem[] = [
    {
      question: 'Tôi kết nối với người cùng level với tôi thế nào?',
      answer: 'Bạn có thể tìm kiếm và kết bạn với những người dùng có chung sở thích hoặc mục tiêu học tập. Bạn cũng có thể tham gia vào các nhóm học tập cụ thể hoặc các sự kiện do nền tảng tổ chức để gặp gỡ và luyện tập cùng họ.'
    },
    {
      question: 'Làm sao tôi kết nối được với nhiều người?',
      answer: 'Bạn có thể tham gia vào các cuộc họp nhóm hoặc sự kiện cộng đồng do nền tảng tổ chức. Bên cạnh đó, bạn cũng có thể tự tạo phòng chat riêng và mời bạn bè tham gia để mở rộng mạng lưới kết nối của mình.'
    },
    {
      question: 'Số lượng người trong một group là bao nhiêu?',
      answer: 'Số lượng người tối đa trong một group chat thường là 5 người. Điều này được thiết kế để đảm bảo mọi người đều có cơ hội nói chuyện và tương tác một cách hiệu quả.'
    },
    {
      question: 'Tôi có thời gian bao lâu để meet?',
      answer: 'Mỗi cuộc gặp mặt thường kéo dài 15 phút. Đây là khoảng thời gian lý tưởng để bạn luyện tập mà không cảm thấy áp lực. Sau khi hết giờ, hệ thống sẽ tự động ngắt kết nối và bạn có thể bắt đầu một cuộc trò chuyện mới.'
    },
    {
      question: 'Tôi phản ánh về người spam tôi như thế nào?',
      answer: 'Nếu gặp phải người dùng có hành vi spam, bạn hãy sử dụng nút Báo cáo (Report) trên giao diện chat. Nền tảng sẽ tiếp nhận và xử lý báo cáo của bạn một cách nhanh chóng, đồng thời có thể chặn người dùng đó để bảo vệ bạn khỏi những phiền toái tương tự.'
    },
    {
      question: 'Tôi kết nối với giao viên ở đâu?',
      answer: 'Để kết nối với giáo viên, bạn có thể sử dụng tính năng Tìm kiếm giáo viên (Find a Teacher) hoặc Đặt lịch học (Book a Lesson) trên nền tảng. Bạn có thể xem hồ sơ của các giáo viên, bao gồm trình độ chuyên môn, kinh nghiệm giảng dạy và đánh giá từ học viên khác. Sau đó, bạn có thể chọn giáo viên phù hợp và đặt lịch học riêng theo thời gian biểu của mình.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 relative">
      {/* Decorative dots - top right */}
      <div className="absolute top-32 right-12 opacity-10">
        <div className="grid grid-cols-3 gap-2">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-gray-600 rounded-full"></div>
          ))}
        </div>
      </div>
      
      {/* Decorative dots - middle right */}
      <div className="absolute top-1/2 right-20 opacity-10">
        <div className="grid grid-cols-3 gap-2">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-gray-600 rounded-full"></div>
          ))}
        </div>
      </div>
      
      {/* Decorative dots - bottom right */}
      <div className="absolute bottom-32 right-16 opacity-10">
        <div className="grid grid-cols-3 gap-2">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-gray-600 rounded-full"></div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto max-w-5xl">
        {/* Title */}
        <div className="text-center mb-8">
          <p className="text-orange-500 font-bold mb-2 text-sm uppercase tracking-wide">CÂU HỎI PHỔ BIẾN</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">Câu hỏi phổ biến</h2>
        </div>

        {/* FAQ Container */}
        <div className="bg-gradient-to-b from-red-900 via-red-700 to-orange-500 rounded-[3rem] p-8 lg:p-12 shadow-2xl relative">
          {/* Search Box at top */}
          <div className="mb-6">
            <div className="relative">
              <input 
                type="text"
                placeholder="Tìm kiếm câu hỏi..."
                className="w-full px-6 py-4 pr-14 rounded-full border-0 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition-all shadow-lg text-gray-800"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-orange-500 to-orange-600 text-white w-10 h-10 rounded-full hover:from-orange-600 hover:to-orange-700 transition-all flex items-center justify-center shadow-md">
                <FaSearch />
              </button>
            </div>
          </div>
          
          <div className="space-y-3">
            {faqItems.map((item, index) => (
              <Card key={index} className="cursor-pointer transition-all bg-white/95 backdrop-blur-sm" hover>
                <div onClick={() => toggleFAQ(index)}>
                  <div className="flex items-center justify-between">
                    <h3 className="text-base lg:text-lg font-semibold text-gray-800 pr-4">
                      {item.question}
                    </h3>
                    <div className="flex-shrink-0 w-9 h-9 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-md">
                      {openIndex === index ? (
                        <FaChevronUp className="text-white text-sm" />
                      ) : (
                        <FaChevronDown className="text-white text-sm" />
                      )}
                    </div>
                  </div>
                  
                  {openIndex === index && item.answer && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

