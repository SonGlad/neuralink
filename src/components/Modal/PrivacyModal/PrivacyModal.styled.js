import styled from "styled-components";


export const PrivacyModalStyled = styled.div`
    width: 90%;
    height: 80%;
    background-color: ${p => p.theme.color.white};
    position: relative;
    padding: 20px;
    overflow-y: auto;
    color: ${p => p.theme.color.black};
    border-right: 3px solid transparent;

    &::-webkit-scrollbar {
        width: 7px;
        background-color: transparent;
    }
    &::-webkit-scrollbar-thumb {
        width: 7px;
        border-radius: 20px;
        background-color: ${p => p.theme.color.grey};
    }


    @media screen and (min-width: 768px){
        padding: 0 40px;
    }

    .modal-h1-title{
        display: none;
    }

    .modal-close-btn{
        cursor: pointer;
        position: sticky;
        top: 0;
        left: 100%;
        margin: 0;
        padding: 0;
        border: none;
        outline: none;
        background-color: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;

        @media screen and (min-width: 768px){
            top: 20px;
        }
    }

    .close-svg{
        stroke: black;
        width: 18px;
        height: 18px;

        @media screen and (min-width: 1440px){
            width: 21px;
            height: 21px;
        }
        @media screen and (min-width: 1920px){
            width: 24px;
            height: 24px;
        }
    }

    .modal-title{
        font-weight: 300;
        font-size: 36px;
        line-height: 1.2;
        letter-spacing: 1px;
        text-align: center;

        @media screen and (min-width: 575px){
            font-size: 42px;
            line-height: 1.8;
        }
        @media screen and (min-width: 768px){
            font-size: 44px;
        }
        @media screen and (min-width: 1440px){
            font-size: 48px;
        }
        @media screen and (min-width: 1920px){
            font-size: 54px;
        }
    }

    .paragraf-title{
        font-size: 22px;
        font-weight: 300;
        letter-spacing: 1px;
        line-height: 1;
        text-align: center;
        margin: 12px 0;
        color: ${p => p.theme.color.light_blue};

        @media screen and (min-width: 768px){
            font-size: 23px;
            margin: 13px 0;
        }
        @media screen and (min-width: 1440px){
            font-size: 25px;
            margin: 15px 0;
        }
        @media screen and (min-width: 1920px){
            font-size: 28px;
            margin: 16px 0;
        }
    }

    .paragraf-text{
        font-weight: 400;
        line-height: 1.5;
        font-size: 12px;
        color: ${p => p.theme.color.close_black};

        @media screen and (min-width: 1440px){
            font-size: 14px;
        }
        @media screen and (min-width: 1920px){
            font-size: 16px;
        }
    }

    .paragraf-subject-list{
        margin: 12px 0;

        @media screen and (min-width: 768px){
            margin: 13px 0;
        }
        @media screen and (min-width: 1440px){
            margin: 15px 0;
        }
        @media screen and (min-width: 1920px){
            margin: 16px 0;
        }
    }

    .for-margin{
        margin-bottom: 15px;
    }

`