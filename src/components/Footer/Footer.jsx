import { FooterStyled } from "./Footer.styled";
import { Container } from "../Container/Container";
import { NavLink } from "react-router-dom";
import {ReactComponent as MediumSVG} from "../../images/svg-icons/medium.svg";
import {ReactComponent as FacebookSVG} from "../../images/svg-icons/facebook.svg";
// import {ReactComponent as LinkedinSVG} from "../../images/svg-icons/linkedin.svg";
// import {ReactComponent as TwitterSVG} from "../../images/svg-icons/twitter.svg";
// import {ReactComponent as RedditSVG} from "../../images/svg-icons/reddit.svg";
import {ReactComponent as TelegramSVG} from "../../images/svg-icons/telegram.svg";
// import {ReactComponent as BitcoinSVG} from "../../images/svg-icons/bitcoin.svg";
// import {ReactComponent as YoutubeSVG} from "../../images/svg-icons/youtube.svg";
import { useDispatch } from "react-redux";
import {openModalPrivacy, openModalTerms} from "../../redux/Modal/modal-slice";



export const Footer = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const dispatch = useDispatch();

    const openModalforPrivacy = () => {
        dispatch(openModalPrivacy());
    };

    const openModalforTerms = () => {
        dispatch(openModalTerms());
    };


    return(
        <FooterStyled>
            <Container>
                <div className="top-cont">
                    <h3 className="footer-title">Follow our journey</h3>
                    <ul className="footer-social-list">
                        <li className="footer-social-item">
                            <NavLink className='footer-social-link' to='#'>
                                <MediumSVG className="footer-link-svg" width={28} height={28}/>
                            </NavLink>
                        </li>
                        <li className="footer-social-item">
                            <NavLink className='footer-social-link' to='#'>
                                <FacebookSVG className="footer-link-svg" width={28} height={28}/>
                            </NavLink>
                        </li>
                        {/* <li className="footer-social-item">
                            <NavLink className='footer-social-link' to='#'>
                                <LinkedinSVG className="footer-link-svg" width={28} height={28}/>
                            </NavLink>
                        </li> */}
                        {/* <li className="footer-social-item">
                            <NavLink className='footer-social-link' to='#'>
                                <TwitterSVG className="footer-link-svg" width={28} height={28}/>
                            </NavLink>
                        </li> */}
                        {/* <li className="footer-social-item">
                            <NavLink className='footer-social-link' to='#'>
                                <RedditSVG className="footer-link-svg" width={28} height={28}/>
                            </NavLink>
                        </li> */}
                        <li className="footer-social-item">
                            <NavLink className='footer-social-link' to='#'>
                                <TelegramSVG className="footer-link-svg" width={28} height={28}/>
                            </NavLink>
                        </li>
                        {/* <li className="footer-social-item">
                            <NavLink className='footer-social-link' to='#'>
                                <BitcoinSVG className="footer-link-svg" width={28} height={28}/>
                            </NavLink>
                        </li> */}
                        {/* <li className="footer-social-item">
                            <NavLink className='footer-social-link' to='#'>
                                <YoutubeSVG className="footer-link-svg" width={28} height={28}/>
                            </NavLink>
                        </li> */}
                    </ul>
                </div>
                <div className="bottom-cont">
                    <p className="bottom-text">&#169;<span> {currentYear} </span>Neuralink AI</p>
                    <div className="footer-btn-cont">
                        <button className="footer-modal-btn" type="button" onClick={openModalforPrivacy}>Privacy Policy</button>
                        <span className="footer-span"> &#124; </span>
                        <button className="footer-modal-btn" type="button" onClick={openModalforTerms}>Terms of Use</button>
                    </div>
                </div>
            </Container>
        </FooterStyled>
    )
};