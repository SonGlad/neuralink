import { Container } from "../components/Container/Container";
import { Section, HeroSection, ProblemSolutionSection, AdvisorsSection, PartnersSection } from "../components/Section/Section";
import { Header } from "../components/Header/Header";
import { PromoSection } from "../components/PromoSection/PromoSection";
import { ProblemSection } from "../components/ProblemSection/ProblemSection";
import { Description } from "../components/Description/Description";
import { Advisors } from "../components/Advisors/Advisors";
import { Partners } from "../components/Partners/Partners";
import { Footer } from "../components/Footer/Footer";
import { useModal } from "../hooks/useModal";
import { Modal } from "./Modal/Modal";
import { useRef } from "react";



export const App= () => {
  const {isPrivacyModalOpen, isTermsModalOpen, isRegisterModalOpen} = useModal();
  const registerFormRef = useRef(null);


  return (
    <>
      <Header registerFormRef={registerFormRef}/>
        <HeroSection>
          <Container>
            <PromoSection registerFormRef={registerFormRef}/>
          </Container>
        </HeroSection>
        <ProblemSolutionSection>
          <ProblemSection/>
        </ProblemSolutionSection>
        <Section>
          <Container>
            <Description/>
          </Container>
        </Section>
        <AdvisorsSection>
          <Container>
            <Advisors/>
          </Container>
        </AdvisorsSection>
        <PartnersSection>
          <Container>
            <Partners/>
          </Container>
        </PartnersSection>
      <Footer/>
      {(isPrivacyModalOpen || isTermsModalOpen || isRegisterModalOpen) && <Modal/>}
    </>
  );
};
