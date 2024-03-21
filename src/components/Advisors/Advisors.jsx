import { AdvisorsStyled } from "./Advisors.styled";
import {ReactComponent as LinkedinSvg} from "../../images/svg-icons/linkedin.svg";
import JeffBezos from "../../images/images/Jeff.jpg";
import BillGates from "../../images/images/Bill.jpg";
import { useInView } from 'react-intersection-observer';



export const Advisors = () => {

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });


    return(
        <AdvisorsStyled>
            <div className={`advisors-div-for-animation ${inView ? 'active' : ''}`} ref={ref}>
                <h2 className="advisors-title">Advisors</h2>
                <ul className="advisors-list">
                    <li className="advisors-item ad-item-1" style={{'--i': 1}}>
                        <div className="advisors-item-top-cont">
                            <div className="img-cont">
                                <img className="picture" src={JeffBezos} alt="Jeff" width={102} />
                            </div>
                            <div className="advisors-descr-cont">
                                <h3 className="advisors-name">Jeff Bezos:</h3>
                                <p className="advisors-text">Technology entrepreneur, investor, and philanthropist</p>
                                <LinkedinSvg className="advisors-svg" width={26} height={26}/>
                            </div>
                        </div>
                        <div className="advisors-item-text-cont">
                            <p className="advisors-item-text">
                                Neuralink AI is the future. I'm not exaggerating when I say it will change everything. This is the early days of Neuralink AI; not many people know about it, which means very few are using it. The few that are, are making incredibly wise (and profitable) decisions.<span> excited to see where it goes</span>
                            </p>
                        </div>
                    </li>
                    <li className="advisors-item ad-item-2" style={{'--i': 2}}>
                    <div className="advisors-item-top-cont">
                        <div className="img-cont">
                            <img className="picture" src={BillGates} alt="Bill" width={102} />
                        </div>
                        <div className="advisors-descr-cont">
                            <h3 className="advisors-name">Bill Gates:</h3>
                            <p className="advisors-text">Business magnate, investor, author, philanthropist, and humanitarian</p>
                            <LinkedinSvg className="advisors-svg" width={26} height={26}/>
                        </div>
                        </div>
                        <div className="advisors-item-text-cont">
                            <p className="advisors-item-text">
                                I know for a fact Elon has spent $3 billion of his own money to fund this program. Hats off to him for that - that's $3 billion of his own money to fund a better future for everyone, and to help others make profits that'll help him do so! It's a win-win, and I'm very excited to see where it goes.
                            </p>
                        </div>

                    </li>
                </ul>
            </div>
        </AdvisorsStyled>
    )
};