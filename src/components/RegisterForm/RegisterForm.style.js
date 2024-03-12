import styled from "styled-components";


export const StyledForm = styled.form`
    max-width: 524px;
    padding: 18px 24px;
    font-weight: 400;
    line-height: 1.5;
    background-color: ${p => p.theme.color.form_back};
    border-radius: 6px;
    margin-top: 20px;
    flex-grow: 1;

    @media screen and (min-width: 768px){
        margin-top: 30px;
    }

    .form-title{
        font-weight: 300;
        font-size: 28px;
        letter-spacing: 1px;
        line-height: 1;
        text-align: center;
        color: ${p => p.theme.color.white};
        margin-bottom: 40px;
    }

    .form-label{
        display: block;
        width: 100%;
        margin-bottom: 20px;
    }

    .form-label-pnone{
        margin-bottom: 0px;
    }

    .form-group{
        width: 100%;
    }

    .form-field{
        display: block;
        width: 100%;
        height: 50px;
        border-radius: 30px;
        padding: 5px;
        padding-left: 20px;
        border: 1px solid #999;
        font-size: 12px;
        line-height: 1.15;
    }

    .form-field[type="number"]::-webkit-inner-spin-button,
    .form-field[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    .form-field-number{
        padding-left: 60px;
    }

    .submit-button{
        margin-top: 20px;
        line-height: 1.2;
        font-size: 18px;
        padding: 15px;
        cursor: pointer;
        text-align: center;
        outline: none;
        border: none;
        border-radius: 28px;
        color: ${p => p.theme.color.white};
        background-color: ${p => p.theme.color.green};
        width: 100%;

        &:disabled {
            opacity: 0.5;
            pointer-events: none;
        }
    }


    .ErrorInput {
        border: 2px solid #e74a3b;
    }

    .SuccessInput {
        border: 2px solid #3cbc81;
    }


    .ErrorText {
        font-style: italic;
        color: #ce0909;
        font-size: 14px;
        font-weight: 400;
        line-height: 14px;
        margin-top: 10px;
    }

    .SuccessText {
        font-style: italic;
        color: #3cbc81;
        font-size: 14px;
        font-weight: 400;
        line-height: 14px;
        margin-top: 10px;
    }


    .dropdown-cont{
        height: 40px;
        outline: none;
        border: none;
        border-radius: 30px;
        background-color: transparent;
        margin-left: 12px;
        top: 50%;
        transform: translateY(-50%);

        &:hover,
        &:focus,
        &:active{
            background-color: transparent;
            border-radius: none;
            border-radius: 50px;
        }
    }
`