import { createPortal } from "react-dom";
import { ModalStyled } from "./Modal.styled";
import { PrivacyModal } from "./PrivacyModal/PrivacyModal";
import { TermsModal } from "./TermsModal/TermsModal";
import { RegisterModal } from "./RegisterModal/RegisterModal";
import { useDispatch } from "react-redux";
import { useEffect, useCallback} from "react";
import {closeModalPrivacy, closeModalTerms, closeModalRegister} from "../../redux/Modal/modal-slice";
import { useModal } from "../../hooks/useModal";


const modalRoot = document.querySelector("#modal-root");


export const Modal = () => {
    const dispatch = useDispatch();
    const {isPrivacyModalOpen, isTermsModalOpen, isRegisterModalOpen} = useModal();


    const handleClickClose = useCallback(() => {
        if (isPrivacyModalOpen){
            dispatch(closeModalPrivacy());
        }
        if(isTermsModalOpen) {
            dispatch(closeModalTerms());
        }
        if(isRegisterModalOpen) {
            dispatch(closeModalRegister());
        }
    },[dispatch, isPrivacyModalOpen, isRegisterModalOpen, isTermsModalOpen]);


    const handleBackdropClick = useCallback(event => {
        if (event.target === event.currentTarget) {
            handleClickClose();
        }
    },[handleClickClose]);


    const handleKeyDown = useCallback(event => {
        if (event.key === "Escape") {
            handleClickClose();
        }
    },[handleClickClose]);


    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener('click', handleBackdropClick);
    
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener('click', handleBackdropClick);
        };
    },[handleBackdropClick, handleKeyDown]);



    return createPortal(
        (isPrivacyModalOpen || isTermsModalOpen || isRegisterModalOpen) && (
            <ModalStyled onClick={handleBackdropClick}>
                {isPrivacyModalOpen && (
                    <PrivacyModal handleClickClose={handleClickClose}/>
                )}
                {isTermsModalOpen && (
                    <TermsModal handleClickClose={handleClickClose}/>
                )}
                {isRegisterModalOpen && (
                    <RegisterModal handleClickClose={handleClickClose}/>
                )}
            </ModalStyled>
        ),
        modalRoot
    );
};