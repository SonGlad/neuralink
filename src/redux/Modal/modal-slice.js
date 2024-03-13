import { createSlice } from "@reduxjs/toolkit";


const modalSlice = createSlice({
    name: "modal",
    initialState: {
        isPrivacyModal: false,
        isTermsModal: false,
        isRegisterModal: false,
        isSuccsess: true,
        isLoading: false,
    },

    reducers: {
        openModalPrivacy: (state) => {
            state.isPrivacyModal = true;
        },
        closeModalPrivacy: (state) => {
            state.isPrivacyModal = false;
        },
        openModalTerms: (state) => {
            state.isTermsModal = true;
        },
        closeModalTerms: (state) => {
            state.isTermsModal = false;
        },
        openModalRegister: (state) => {
            state.isRegisterModal = true;
        },
        closeModalRegister: (state) => {
            state.isRegisterModal = false;
        },
        setSuccsessTrue: (state) => {
            state.isSuccsess = true;
        },
        setSuccsessFalse: (state) => {
            state.isSuccsess = false;
        },
        openLoader: (state) => {
            state.isLoading = true;
        },
        closeLoader: (state) => {
            state.isLoading = false;
        },
    }
});


export const modalReducer = modalSlice.reducer;


export const {
    openModalPrivacy,
    closeModalPrivacy,
    openModalTerms,
    closeModalTerms,
    openModalRegister,
    closeModalRegister,
    setSuccsessTrue,
    setSuccsessFalse,
    openLoader,
    closeLoader,
} = modalSlice.actions;