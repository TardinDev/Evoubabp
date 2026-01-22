import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";
import { useState } from "react";
import {
  FaPaperPlane,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaCheckCircle,
  FaExclamationCircle
} from "react-icons/fa";

interface ContactSectionProps {
  id?: string;
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  projectType: string;
  budget: string;
  message: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  subject: "",
  projectType: "",
  budget: "",
  message: ""
};

const ContactSection: React.FC<ContactSectionProps> = ({ id }) => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Simuler l'envoi (remplacer par votre API)
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Envoyer par email via mailto (solution simple)
      const mailtoLink = `mailto:tardindavy@gmail.com?subject=${encodeURIComponent(
        `[Portfolio] ${formData.subject} - ${formData.projectType}`
      )}&body=${encodeURIComponent(
        `Nom: ${formData.name}\nEmail: ${formData.email}\nType de projet: ${formData.projectType}\nBudget: ${formData.budget}\n\nMessage:\n${formData.message}`
      )}`;

      window.location.href = mailtoLink;

      setSubmitStatus("success");
      setFormData(initialFormData);
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      variants={staggerContainer(0.1, 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      <Section id={id || "contact"}>
        <BackgroundPattern />
        <GlowEffect />

        <Container>
          <motion.div variants={fadeIn("up", "tween", 0.1, 0.8)}>
            <Header>
              <TagLine>CONTACT</TagLine>
              <Title>
                Discutons de votre <TitleGradient>projet</TitleGradient>
              </Title>
              <Subtitle>
                Une idée ? Un projet ? Contactez-moi et transformons votre vision en réalité
              </Subtitle>
            </Header>
          </motion.div>

          <ContentGrid>
            <motion.div variants={fadeIn("right", "spring", 0.2, 0.8)}>
              <ContactInfo>
                <InfoCard>
                  <InfoIconWrapper>
                    <FaEnvelope />
                  </InfoIconWrapper>
                  <InfoContent>
                    <InfoLabel>Email</InfoLabel>
                    <InfoLink href="mailto:tardindavy@gmail.com">
                      tardindavy@gmail.com
                    </InfoLink>
                  </InfoContent>
                </InfoCard>

                <InfoCard>
                  <InfoIconWrapper>
                    <FaWhatsapp />
                  </InfoIconWrapper>
                  <InfoContent>
                    <InfoLabel>WhatsApp</InfoLabel>
                    <InfoLink
                      href="https://wa.me/33766450771"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      +33 7 66 45 07 71
                    </InfoLink>
                  </InfoContent>
                </InfoCard>

                <InfoCard>
                  <InfoIconWrapper>
                    <FaMapMarkerAlt />
                  </InfoIconWrapper>
                  <InfoContent>
                    <InfoLabel>Localisation</InfoLabel>
                    <InfoText>France, Europe</InfoText>
                    <InfoSubtext>Disponible en remote worldwide</InfoSubtext>
                  </InfoContent>
                </InfoCard>

                <SocialLinks>
                  <SocialLink
                    href="https://www.linkedin.com/in/davy-tardin-11a7a1159/"
                    target="_blank"
                    rel="noopener noreferrer"
                    platform="linkedin"
                  >
                    <FaLinkedin />
                  </SocialLink>
                  <SocialLink
                    href="https://github.com/TardinDev"
                    target="_blank"
                    rel="noopener noreferrer"
                    platform="github"
                  >
                    <FaGithub />
                  </SocialLink>
                  <SocialLink
                    href="https://wa.me/33766450771"
                    target="_blank"
                    rel="noopener noreferrer"
                    platform="whatsapp"
                  >
                    <FaWhatsapp />
                  </SocialLink>
                </SocialLinks>

                <AvailabilityBadge>
                  <AvailabilityDot />
                  Disponible pour de nouveaux projets
                </AvailabilityBadge>
              </ContactInfo>
            </motion.div>

            <motion.div variants={fadeIn("left", "spring", 0.3, 0.8)}>
              <FormCard>
                <Form onSubmit={handleSubmit}>
                  <FormRow>
                    <FormGroup>
                      <FormLabel>Nom complet *</FormLabel>
                      <FormInput
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Votre nom"
                        required
                      />
                    </FormGroup>
                    <FormGroup>
                      <FormLabel>Email *</FormLabel>
                      <FormInput
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="votre@email.com"
                        required
                      />
                    </FormGroup>
                  </FormRow>

                  <FormGroup>
                    <FormLabel>Sujet *</FormLabel>
                    <FormInput
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Ex: Développement d'une application mobile"
                      required
                    />
                  </FormGroup>

                  <FormRow>
                    <FormGroup>
                      <FormLabel>Type de projet</FormLabel>
                      <FormSelect
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                      >
                        <option value="">Sélectionner...</option>
                        <option value="mobile">Application Mobile</option>
                        <option value="web">Application Web</option>
                        <option value="fullstack">Projet FullStack</option>
                        <option value="consulting">Consulting</option>
                        <option value="formation">Formation</option>
                        <option value="other">Autre</option>
                      </FormSelect>
                    </FormGroup>
                    <FormGroup>
                      <FormLabel>Budget estimé</FormLabel>
                      <FormSelect
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                      >
                        <option value="">Sélectionner...</option>
                        <option value="<5k">&lt; 5 000 EUR</option>
                        <option value="5k-10k">5 000 - 10 000 EUR</option>
                        <option value="10k-25k">10 000 - 25 000 EUR</option>
                        <option value="25k-50k">25 000 - 50 000 EUR</option>
                        <option value=">50k">&gt; 50 000 EUR</option>
                      </FormSelect>
                    </FormGroup>
                  </FormRow>

                  <FormGroup>
                    <FormLabel>Message *</FormLabel>
                    <FormTextarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Décrivez votre projet, vos objectifs et vos besoins..."
                      rows={5}
                      required
                    />
                  </FormGroup>

                  <SubmitButton type="submit" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Spinner />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        Envoyer le message
                      </>
                    )}
                  </SubmitButton>

                  {submitStatus === "success" && (
                    <StatusMessage status="success">
                      <FaCheckCircle />
                      Message envoyé avec succès ! Je vous répondrai rapidement.
                    </StatusMessage>
                  )}

                  {submitStatus === "error" && (
                    <StatusMessage status="error">
                      <FaExclamationCircle />
                      Une erreur est survenue. Veuillez réessayer.
                    </StatusMessage>
                  )}
                </Form>
              </FormCard>
            </motion.div>
          </ContentGrid>
        </Container>
      </Section>
    </motion.div>
  );
};

export default ContactSection;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Section = styled.section`
  position: relative;
  padding: 6rem 2rem;
  background: linear-gradient(180deg, #4b0082 0%, #380062 50%, #2d004f 100%);
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

const BackgroundPattern = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  background-size: 40px 40px;
  pointer-events: none;
`;

const GlowEffect = styled.div`
  position: absolute;
  top: 30%;
  right: 10%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(255, 215, 0, 0.1) 0%, transparent 60%);
  pointer-events: none;
`;

const Container = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  z-index: 2;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;

const TagLine = styled.span`
  display: inline-block;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  letter-spacing: 0.3em;
  color: #ffd700;
  background: rgba(255, 215, 0, 0.1);
  padding: 0.5rem 1rem;
  border: 1px solid rgba(255, 215, 0, 0.2);
  border-radius: 4px;
  margin-bottom: 1.5rem;
`;

const Title = styled.h2`
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
`;

const TitleGradient = styled.span`
  background: linear-gradient(135deg, #ffd700 0%, #ff9500 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Subtitle = styled.p`
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.7);
  max-width: 500px;
  margin: 0 auto;
  line-height: 1.6;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 3rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InfoCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 215, 0, 0.3);
    transform: translateX(8px);
  }
`;

const InfoIconWrapper = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(255, 149, 0, 0.1));
  border-radius: 12px;
  color: #ffd700;
  font-size: 1.25rem;
`;

const InfoContent = styled.div`
  flex: 1;
`;

const InfoLabel = styled.span`
  display: block;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.25rem;
`;

const InfoLink = styled.a`
  font-size: 1.1rem;
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #ffd700;
  }
`;

const InfoText = styled.span`
  display: block;
  font-size: 1.1rem;
  color: white;
`;

const InfoSubtext = styled.span`
  display: block;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 0.25rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a<{ platform: string }>`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: white;
  font-size: 1.25rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);

    ${props => props.platform === 'linkedin' && `
      background: #0a66c2;
      border-color: #0a66c2;
    `}

    ${props => props.platform === 'github' && `
      background: #333;
      border-color: #333;
    `}

    ${props => props.platform === 'whatsapp' && `
      background: #25d366;
      border-color: #25d366;
    `}
  }
`;

const AvailabilityBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  background: rgba(34, 197, 94, 0.1);
  border: 1px solid rgba(34, 197, 94, 0.3);
  border-radius: 12px;
  color: #22c55e;
  font-weight: 500;
  margin-top: 1rem;
`;

const AvailabilityDot = styled.span`
  width: 10px;
  height: 10px;
  background: #22c55e;
  border-radius: 50%;
  animation: ${pulse} 2s infinite;
`;

const FormCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 2.5rem;
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const FormGroup = styled.div``;

const FormLabel = styled.label`
  display: block;
  font-size: 0.9rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 0.5rem;
`;

const inputStyles = `
  width: 100%;
  padding: 1rem 1.25rem;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }

  &:focus {
    outline: none;
    border-color: #ffd700;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 0 3px rgba(255, 215, 0, 0.1);
  }
`;

const FormInput = styled.input`
  ${inputStyles}
`;

const FormSelect = styled.select`
  ${inputStyles}
  cursor: pointer;

  option {
    background: #2d004f;
    color: white;
  }
`;

const FormTextarea = styled.textarea`
  ${inputStyles}
  resize: vertical;
  min-height: 120px;
`;

const SubmitButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1.25rem 2rem;
  background: linear-gradient(135deg, #ffd700, #ff9500);
  border: none;
  border-radius: 12px;
  color: #2d004f;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(255, 215, 0, 0.4);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const Spinner = styled.span`
  width: 20px;
  height: 20px;
  border: 2px solid rgba(45, 0, 79, 0.3);
  border-top-color: #2d004f;
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`;

const StatusMessage = styled.div<{ status: "success" | "error" }>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  font-size: 0.95rem;

  ${props => props.status === 'success' && `
    background: rgba(34, 197, 94, 0.1);
    border: 1px solid rgba(34, 197, 94, 0.3);
    color: #22c55e;
  `}

  ${props => props.status === 'error' && `
    background: rgba(239, 68, 68, 0.1);
    border: 1px solid rgba(239, 68, 68, 0.3);
    color: #ef4444;
  `}
`;
