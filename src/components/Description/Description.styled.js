import styled from "styled-components";


export const DescriptionStyled = styled.div`
    padding-top: 54px;
    padding-bottom: 14px;

    .hidden .description-title{
        animation: none;
        opacity: 0;
    }

    .visible .description-title{
        opacity: 0;
        color: ${p => p.theme.color.light_blue};
        margin-bottom: 54px;
        letter-spacing: 1px;
        line-height: 1;
        font-size: 42px;
        font-weight: 300;
        text-align: center;
        animation: slideDescriptionTitleToRight 1s ease forwards;

        @media screen and (min-width: 1440px){
            font-size: 48px;
        }
        @media screen and (min-width: 1920px){
            font-size: 54px;
        }
    }

    @keyframes slideDescriptionTitleToRight {
        0%{
            opacity: 0;
            transform: translateX(-25%);
        }
        100%{
            opacity: 1;
            transform: translateX(0%);
        }
    }

    .description-item{
        padding-bottom: 60px;
        color: ${p => p.theme.color.close_black};
        font-weight: 400;

        @media screen and (min-width: 768px){
            display: flex;
        }
    }

    .description-text{
        font-size: 12px;
        text-align: center;

        @media screen and (min-width: 768px){
            margin: 0 auto;
            max-width: 90%;
        }
        @media screen and (min-width: 1440px){
            font-size: 14px;
        }
        @media screen and (min-width: 1920px){
            font-size: 16px;
        }
    }
`