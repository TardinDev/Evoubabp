import styled from "styled-components";
import { faqData, pageTexts } from "../../utils/formationData";

export default function FAQSection() {
  return (
    <FAQSectionWrapper id="faq-section">
      <FAQTitle>{pageTexts.faq.title}</FAQTitle>
      <FAQSubtitle>{pageTexts.faq.subtitle}</FAQSubtitle>
      
      <FAQGrid>
        {faqData.map((item, index) => (
          <FAQItem key={index}>
            <Question>{item.question}</Question>
            <Answer>{item.answer}</Answer>
          </FAQItem>
        ))}
      </FAQGrid>
    </FAQSectionWrapper>
  );
}

// Styles
const FAQSectionWrapper = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239CA3AF' fill-opacity='0.03'%3E%3Cpath d='M15 15c0-8.284-6.716-15-15-15v15h15zm15 0c0-8.284-6.716-15-15-15v15h15z'/%3E%3C/g%3E%3C/svg%3E") repeat;
    z-index: 1;
  }
`;

const FAQTitle = styled.h2`
  position: relative;
  z-index: 2;
  text-align: center;
  font-size: 3rem;
  font-weight: 900;
  margin-bottom: 1rem;
  color: #2d3748;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const FAQSubtitle = styled.p`
  position: relative;
  z-index: 2;
  text-align: center;
  font-size: 1.1rem;
  color: #718096;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const FAQGrid = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const FAQItem = styled.div`
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(20px);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  }
`;

const Question = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #667eea;
  margin-bottom: 1rem;
  line-height: 1.3;
`;

const Answer = styled.p`
  color: #4a5568;
  line-height: 1.6;
  font-size: 1rem;
`; 