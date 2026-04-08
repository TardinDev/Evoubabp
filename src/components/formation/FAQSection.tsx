import { faqData, pageTexts } from "../../utils/formationData";

export default function FAQSection() {
  return (
    <section
      id="faq-section"
      className="py-20 px-8 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%)' }}
    >
      {/* Background pattern overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239CA3AF' fill-opacity='0.03'%3E%3Cpath d='M15 15c0-8.284-6.716-15-15-15v15h15zm15 0c0-8.284-6.716-15-15-15v15h15z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}
      />

      <h2 className="relative z-[2] text-center text-5xl md:text-3xl font-black mb-4 text-[#2d3748]">
        {pageTexts.faq.title}
      </h2>
      <p className="relative z-[2] text-center text-lg text-[#718096] mb-12 max-w-[600px] mx-auto">
        {pageTexts.faq.subtitle}
      </p>

      <div className="relative z-[2] max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-6 md:gap-8">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-[15px] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.1)] border border-white/30 backdrop-blur-[20px] transition-all duration-300 ease-in-out hover:-translate-y-[5px] hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)]"
          >
            <h3 className="text-xl font-bold text-[#667eea] mb-4 leading-tight">
              {item.question}
            </h3>
            <p className="text-[#4a5568] leading-relaxed text-base">
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
