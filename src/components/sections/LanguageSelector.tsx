import Card from '../common/Card';

const languages = [
  { name: 'Việt Nam', flag: '🇻🇳' },
  { name: 'Trung Quốc', flag: '🇨🇳' },
  { name: 'Nhật Bản', flag: '🇯🇵' },
  { name: 'Đức', flag: '🇩🇪' },
  { name: 'Anh', flag: '🇬🇧' },
];

const LanguageSelector = () => {
  return (
    <section className="py-8 px-4 relative">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto -mt-8">
          {languages.map((language, index) => (
            <Card key={index} hover className="text-center cursor-pointer bg-white transform transition-all">
              <div className="text-4xl mb-3">{language.flag}</div>
              <h3 className="font-bold text-gray-800 text-lg">{language.name}</h3>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LanguageSelector;

