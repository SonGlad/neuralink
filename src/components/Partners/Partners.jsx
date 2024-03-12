import { PartnersStyled } from "./Partners.styled";
import Tesla from "../../images/images/tesla.png";
import SpaceX from "../../images/images/spacex.png";
import PayPal from "../../images/images/paypal.png";
import OpenAI from "../../images/images/openai.png";
import Microsoft from "../../images/images/microsoft.png";
import IBM from "../../images/images/ibm.png";


export const Partners = () => {


    return(
        <PartnersStyled>
            <h2 className="partners-title">Partners</h2>
            <ul className="partners-list">
                <li className="partners-item">
                    <div className="partners-img-cont">
                        <img className='partners-img' src={IBM} alt="IMB" />
                    </div>
                </li>
                <li className="partners-item">
                    <div className="partners-img-cont">
                        <img className='partners-img' src={Microsoft} alt="Microsoft" />
                    </div>
                </li>
                <li className="partners-item">
                    <div className="partners-img-cont">
                        <img className='partners-img' src={OpenAI} alt="OpenAI" />
                    </div>
                </li>
                <li className="partners-item">
                    <div className="partners-img-cont">
                        <img className='partners-img' src={SpaceX} alt="SpaceX" />
                    </div>
                </li>
                <li className="partners-item">
                    <div className="partners-img-cont">
                        <img className='partners-img' src={PayPal} alt="PayPal" />
                    </div>
                </li>
                <li className="partners-item">
                    <div className="partners-img-cont">
                        <img className='partners-img' src={Tesla} alt="Tesla" />
                    </div>
                </li>
            </ul>
        </PartnersStyled>
    )
}; 