import { PromoSectionStyled } from "./PromoSection.styled";
import Video from "../../video/video.mp4";
import { RegisterForm } from "../RegisterForm/RegisterForm";
import LogoPicture from "../../images/images/logo_150.png"



export const PromoSection = () => {


    return(
        <PromoSectionStyled >
            <div className="hero-container">
                <div className="text-container">
                    <h1 className="title">Smart Investing That Makes You $1500 in 5 Hours And Cures Poverty</h1>
                    <p className="title-text">Our smart investing can make you thousands in less than 7 days, and will help cure poverty while you earn!</p>
                </div>
                <div className="video-container">
                    <video className="video" controls
                        controlsList="nodownload noremoteplayback noplaybackrate foobar"
                        preload="auto" allowFullScreen playsInline
                    >
                        <source src={Video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <div className="form-container" id="register">
                <RegisterForm/>
            </div>
            <div className="ios-container">
                <a className="ios-link" href="/">
                    <div className="img-cont">
                        <img src={LogoPicture} alt="logo" width={64} height={64}/>
                    </div>
                    <div className="link-text-cont">
                        <span className="">World's first Neuralink AI computer</span>
                        <span className="flickering">IS NOW LIVE!</span>
                    </div>
                </a>
            </div>
        </PromoSectionStyled>
    )
};