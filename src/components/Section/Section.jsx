import { SectionStyled } from "./Section.styled";
import {HeroSectionStyled} from "./Section.styled";
import {ProblemSectionStyled} from "./Section.styled";
import {AdvisorsSectionStyled} from "./Section.styled";
import { PartnersSectionStyled } from "./Section.styled";




export const Section = ({children}) => {
    return (
        <SectionStyled>
            {children}
        </SectionStyled>
    )
};

export const HeroSection = ({children}) => {
    return (
        <HeroSectionStyled>
            {children}
        </HeroSectionStyled>
    )
};

export const ProblemSolutionSection = ({children}) => {
    return (
        <ProblemSectionStyled>
            {children}
        </ProblemSectionStyled>
    )
};

export const AdvisorsSection = ({children}) => {
    return (
        <AdvisorsSectionStyled>
            {children}
        </AdvisorsSectionStyled>
    )
};

export const PartnersSection = ({children}) => {
    return (
        <PartnersSectionStyled>
            {children}
        </PartnersSectionStyled>
    )
};