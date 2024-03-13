import { useSelector } from "react-redux";
import {
    selectPrivacyModal, 
    selectTermsModal,
    selectRegisterModal,
    selectSuccsess,
    selectLoading,
} from "../redux/Modal/modal-selector";


export const useModal = () => {
    const isPrivacyModalOpen = useSelector(selectPrivacyModal);
    const isTermsModalOpen = useSelector(selectTermsModal);
    const isRegisterModalOpen = useSelector(selectRegisterModal);
    const isSuccsess = useSelector(selectSuccsess);
    const isLoading = useSelector(selectLoading);


    return {
        isPrivacyModalOpen,
        isTermsModalOpen,
        isRegisterModalOpen,
        isSuccsess,
        isLoading,
    }
};