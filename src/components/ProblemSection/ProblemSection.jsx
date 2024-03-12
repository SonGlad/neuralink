import { ProblemSectionStyled } from "./ProblemSection.styled";
import { Container } from "../Container/Container";




export const ProblemSection = () => {


    return(
        <ProblemSectionStyled>
            <Container>
                <h2 className="section-title">Problem</h2>
                <div className="descr-cont">
                    <ul className="problem-list">
                        <li className="broblem-item ">
                            <span className="broblem-item-number">1</span>
                            <p className="broblem-item-text">
                                Poverty is a global issue, one which we aim to solve - forever. When you invest with 250$, you're directly helping us save people's lives - and making money!
                            </p>
                        </li>
                        <li className="broblem-item">
                            <span className="broblem-item-number">2</span>
                            <p className="broblem-item-text">
                                Big corporations are the ones holding all the keys to those big paychecks. With Neuralink AI Computing, that's no longer true. Now YOU have the power to make a great income. The power that was once reserve for the richest among us, is now yours.
                            </p>
                        </li>
                        <li className="broblem-item">
                            <span className="broblem-item-number">3</span>
                            <p className="broblem-item-text">
                                Neuralink AI is designed to make the world better. Elon developed this idea as a win-win. Have loans to pay off, or a mortgage to pay? Want to help people? Now you can do both.
                            </p>
                        </li>
                        <li className="broblem-item">
                            <span className="broblem-item-number">4</span>
                            <p className="broblem-item-text">
                                A country's economy is so fragile. As you saw in 2008, it only takes a few people at the top to ruin it. We want to stop that from happening ever again.
                            </p>
                        </li>
                    </ul>
                </div>
            </Container>
            <div className="solution-wrap">
                <div className="solution-triangle"></div>
                <Container>
                    <div className="solution-bottom">
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
                </Container>
                <div className="solution-steps">
                    <Container>
                        <div className="solution-steps-cont">
                            <h2 className="solution-title solution-steps-title">So, what do you need to do to start?</h2>
                            <ul className="solution-steps-list">
                                <li className="solution-steps-item">
                                    <span className="solution-steps-item-span">1</span>
                                    <h3 className="solution-steps-item-title">Deposit</h3>
                                    <p className="solution-steps-item-text">Deposit 250 Dollars</p>
                                </li>
                                <li className="solution-steps-item">
                                    <span className="solution-steps-item-span2">2</span>
                                    <h3 className="solution-steps-item-title">Pick</h3>
                                    <p className="solution-steps-item-text">Pick the trades Neuralink AI recommends (with the power of Neuralink AI!)</p>
                                </li>
                                <li className="solution-steps-item">
                                    <span className="solution-steps-item-span">3</span>
                                    <h3 className="solution-steps-item-title">Withdraw</h3>
                                    <p className="solution-steps-item-text">Withdraw any funds in matter of hours!</p>
                                </li>
                            </ul>
                        </div>
                    </Container>
                </div>
            </div>
        </ProblemSectionStyled>
    )
};