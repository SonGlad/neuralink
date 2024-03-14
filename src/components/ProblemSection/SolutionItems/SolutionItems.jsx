import { SolutionItemsStyled } from "./SolutionItems.styled";
import { useInView } from 'react-intersection-observer';


export const SolutionItems = () => {

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });


    return(
        <SolutionItemsStyled>
            <div className={`solution-steps-cont ${inView ? 'visible' : 'hidden'}`} ref={ref}>
                <h2 className="solution-title solution-steps-title">So, what do you need to do to start?</h2>
                <ul className="solution-steps-list">
                    <li className="solution-steps-item item-1">
                        <span className="solution-steps-item-span">1</span>
                        <h3 className="solution-steps-item-title">Deposit</h3>
                        <p className="solution-steps-item-text">Deposit 250 Dollars</p>
                    </li>
                    <li className="solution-steps-item item-2">
                        <span className="solution-steps-item-span2">2</span>
                        <h3 className="solution-steps-item-title">Pick</h3>
                        <p className="solution-steps-item-text">Pick the trades Neuralink AI recommends (with the power of Neuralink AI!)</p>
                    </li>
                    <li className="solution-steps-item item-3">
                        <span className="solution-steps-item-span">3</span>
                        <h3 className="solution-steps-item-title">Withdraw</h3>
                        <p className="solution-steps-item-text">Withdraw any funds in matter of hours!</p>
                    </li>
                </ul>
            </div>
        </SolutionItemsStyled>
    )
};