import { HeaderStyled } from "./Header.styled";
import Logo from "../../images/images/Logo.png"


export const Header = () => {


    return(
        <HeaderStyled>
            <div className="header-container">
                <img className="header-logo" src={Logo} alt="header_logo" width={140} height={62} />
                <a className="register-link" href="#register">
                    <span>Create account</span>
                </a>
            </div>
        </HeaderStyled>
    )
};

