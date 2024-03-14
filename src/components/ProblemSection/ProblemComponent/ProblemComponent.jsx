import { ProblemComponentStyled } from "./ProblemComponent.styled";
import { useInView } from 'react-intersection-observer';


export const ProblemComponent = () => {

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });


    return(
        <ProblemComponentStyled>
            <div className={`for-animation ${inView ? 'visible' : 'hidden'}`} ref={ref}>
                <h2 className="section-title">Problem</h2>
                <div className="descr-cont">
                    <ul className="problem-list">
                        <li className="problem-item" style={{'--i': 1}}>
                            <span className="problem-item-number">1</span>
                            <p className="problem-item-text">
                                Poverty is a global issue, one which we aim to solve - forever. When you invest with 250$, you're directly helping us save people's lives - and making money!
                            </p>
                        </li>
                        <li className="problem-item" style={{'--i': 2}}>
                            <span className="problem-item-number">2</span>
                            <p className="problem-item-text">
                                Big corporations are the ones holding all the keys to those big paychecks. With Neuralink AI Computing, that's no longer true. Now YOU have the power to make a great income. The power that was once reserve for the richest among us, is now yours.
                            </p>
                        </li>
                        <li className="problem-item" style={{'--i': 3}}>
                            <span className="problem-item-number">3</span>
                            <p className="problem-item-text">
                                Neuralink AI is designed to make the world better. Elon developed this idea as a win-win. Have loans to pay off, or a mortgage to pay? Want to help people? Now you can do both.
                            </p>
                        </li>
                        <li className="problem-item" style={{'--i': 4}}>
                            <span className="problem-item-number">4</span>
                            <p className="problem-item-text">
                                A country's economy is so fragile. As you saw in 2008, it only takes a few people at the top to ruin it. We want to stop that from happening ever again.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </ProblemComponentStyled>
    )
};