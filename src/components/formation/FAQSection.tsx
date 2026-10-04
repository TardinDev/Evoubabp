import { faqData, pageTexts } from "../../utils/formationData";

export default function FAQSection() {
  return (
    <section id="faq-section" className="py-16 md:py-24 px-6 md:px-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_1.6fr] gap-10 md:gap-16">
        <div>
          <h2
            className="font-extrabold leading-[1.1] tracking-tight mb-4"
            style={{ fontSize: 'clamp(1.8rem, 3.6vw, 2.75rem)' }}
          >
            {pageTexts.faq.title}
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-black/65">
            {pageTexts.faq.subtitle}
          </p>
        </div>

        <div className="border-t border-black/15">
          {faqData.map((item) => (
            <details key={item.question} className="group border-b border-black/15">
              <summary className="flex items-center justify-between gap-6 py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden font-bold text-lg leading-tight hover:text-[#4b0082] transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4b0082]">
                <span>{item.question}</span>
                <span
                  aria-hidden="true"
                  className="shrink-0 font-mono text-xl text-[#4b0082] transition-transform duration-300 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="text-[0.95rem] leading-relaxed text-black/70 m-0 pb-6 max-w-2xl">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
