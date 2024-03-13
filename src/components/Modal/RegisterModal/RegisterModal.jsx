import { RegisterModalStyled } from "./RegisterModal.styled";
import { useModal } from "../../../hooks/useModal";
import {ReactComponent as CloseSVG} from "../../../images/svg-icons/close.svg";
import {ReactComponent as SuccsessIcon} from "../../../images/svg-icons/ok.svg";
import {ReactComponent as ErrorIcon} from "../../../images/svg-icons/error-logo.svg";



export const RegisterModal = ({handleClickClose}) => {
    const {isSuccsess} = useModal();


    
    return (
        <RegisterModalStyled>
            <button type="button" className="modal-close-btn" onClick={handleClickClose}>
                <CloseSVG className="close-svg" width={18} height={18}/>
            </button>
            {isSuccsess ? (
                <div className="content-container">
                    <div className="shadow-div">
                        <div className="content">
                            <SuccsessIcon className="modal-icon" width={24} height={24}/>
                            <p className="contact-modal-text sucsess">Don't miss our call!</p>
                        </div>
                        <p className="contact-modal-text">Our manager will contact you and help you get started!</p>
                    </div>
                    <button type='button' className="continue-btn" onClick={handleClickClose}>Continue</button>
                </div>
            ):(
                <div className="content-container">
                    <div className="shadow-div">
                        <div className="content">
                            <ErrorIcon className="modal-icon" width={24} height={24}/>
                            <p className="contact-modal-text error">Oops... Something went wrong.</p>
                        </div>
                        <p className="contact-modal-text">Please try again later...</p>
                    </div>
                    <button type='button' className="continue-btn" onClick={handleClickClose}>Continue</button>
                </div>
            )}
        </RegisterModalStyled>
    )
};