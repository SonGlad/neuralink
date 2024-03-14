import { DescriptionStyled } from "./Description.styled";
import { useInView } from 'react-intersection-observer';



export const Description = () => {

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });


    return(
        <DescriptionStyled>
            <div className={`for-animation-cont ${inView ? 'visible' : 'hidden'}`} ref={ref}>
                <h2 className="description-title">What Makes Neuralink AI So Good For Investing</h2>
                <ul className="description-list">
                    <li className="description-item">
                        <p className="description-text">
                            This is the world's first Neuralink AI machine; unlike your home PC, this computer is smart - it makes thousands of simultaneous 'decisions' at once. Your brain thinks one thought at a time, in a sequence. Imagine if you could have thousands of thoughts at once, each as clear as the other. That's Neuralink AI.
                        </p>
                    </li>
                    <li className="description-item">
                        <p className="description-text">
                            Using that power, our Neuralink AI machine will help you make smarter trades and make more money than you thought possible. Even better, it's designed so that you can make money and help others while you profit!
                        </p>
                    </li>
                    <li className="description-item">
                        <p className="description-text">
                            It finds trades by analysing differentials between stock prices every nano-second that stock markets are live (and makes predictions even when the markets are closed, so you'll know what's likely to happen when they re-open). Your current computer (and everyone else's) can't match the decision speeds of this new system.
                        </p>
                    </li>
                    <li className="description-item">
                        <p className="description-text">
                            Sign up, and be one of the exclusive few using this technology (before everyone else gets wind of it!)
                        </p>
                    </li>
                </ul>
            </div>
        </DescriptionStyled>
    )
};