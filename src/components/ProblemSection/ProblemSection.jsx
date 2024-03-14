import { ProblemSectionStyled } from "./ProblemSection.styled";
import { Container } from "../Container/Container";
import { ProblemComponent } from "./ProblemComponent/ProblemComponent";
import { SolutionComponent } from "./SolutionComponent/SolutionComponent";
import { SolutionItems } from "./SolutionItems/SolutionItems";


export const ProblemSection = () => {


    return(
        <ProblemSectionStyled>
            <Container>
                <ProblemComponent/>
            </Container>
            <div className="solution-wrap">
                <div className="solution-triangle"></div>
                <Container>
                    <SolutionComponent/>
                </Container>
                <div className="solution-steps">
                    <Container>
                        <SolutionItems/>
                    </Container>
                </div>
            </div>
        </ProblemSectionStyled>
    )
};