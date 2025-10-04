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
      question: 'Tôi kết nối với người cùng luyện tập như thế nào?'
    },
    {
      question: 'Tại cơ thời gian bảo lưu ưu mất'
    },
    {
      question: 'Làm sao tôi kết nối chức với nhóm người?'
    },
    {
      question: 'Tại phần mềm với người quản trị phù hợp thế nào?'
    },
    {
      question: 'Số lượng người trong một groups là bao nhiêu?'
    },
    {
      question: 'Tại kết nối có giáo viên nào dạy?',
      answer: 'By the end of this trial lesson, you will be able to: structures for covered numbers this tools of online lessons is eight for you or not. In our experience, most students express this benefits các towards cái after just a few lessons so study online.'
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

