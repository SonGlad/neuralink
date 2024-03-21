import { createSlice } from "@reduxjs/toolkit";
import { createContact } from "./data-operation"


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
    },

    extraReducers: builder => {
        builder
        .addCase(createContact.pending, state =>{
            state.isLoading = true;
            state.isRegisterModal = false;
        })
        .addCase(createContact.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.isSuccsess = true;
            state.isRegisterModal = true;
        })
        .addCase(createContact.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.isSuccsess = false;
            state.isRegisterModal = true;
        })
    },
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