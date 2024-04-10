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
import { RefreshLoading } from "../components/CustomLoaders/CustomLoaders";
import Facebook1 from "../tracking/Facebook1";
import Facebook2 from "../tracking/Facebook2";


export const App= () => {
  const {isPrivacyModalOpen, isTermsModalOpen, isRegisterModalOpen, isLoading} = useModal();
  const registerFormRef = useRef(null);


  return (
    <> 
      <Facebook1/>
      {isRegisterModalOpen && <Facebook2/>}
      {isLoading && <RefreshLoading />}
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
