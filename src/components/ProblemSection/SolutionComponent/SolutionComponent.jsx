import { SolutionComponentStyled } from "./SolutionComponent.styled";
import { useInView } from 'react-intersection-observer';



export const SolutionComponent = () => {

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.4,
    });


    return(
        <SolutionComponentStyled>
            <div className={`solution-bottom ${inView ? 'visible' : 'hidden'}`} ref={ref}>
                <h2 className="solution-title">Solution</h2>
                <div className="solution-text-cont">
                    <p className="solution-text">
                        By using the power of Neuralink AI, you can help us take the exclusivity of the top 1%, and solve 4 major problems: Develop a stable, wealthy economy for all, cure poverty, level the playing ground for all (not just the richest), and help you make your financial dreams come true!
                    </p>
                    <span className="solution-decoration solution-decoration1"></span>
                    <span className="solution-decoration solution-decoration2"></span>
                    <span className="solution-decoration solution-decoration3"></span>
                </div>
            </div>
        </SolutionComponentStyled>
    )
};