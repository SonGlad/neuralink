import { HeaderStyled } from "./Header.styled";
import Logo from "../../images/images/Logo.png";
import { forwardRef } from 'react';



export const Header = forwardRef(({registerFormRef}, ref) => {


    return(
        <HeaderStyled>
            <div className="header-container">
                <img className="header-logo" src={Logo} alt="header_logo" width={140} height={62} />
                <button type="button" className="register-link" onClick={() => 
                    registerFormRef.current.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                    })}
                >
                    <span>Create account</span>
                </button>
            </div>
        </HeaderStyled>
    )
});

