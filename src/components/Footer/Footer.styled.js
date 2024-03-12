import styled from "styled-components";


export const FooterStyled = styled.footer`
    padding: 54px 0 96px 0;
    background-color: ${p => p.theme.color.footer_bg};

    .top-cont{
        margin-top: 30px;
        margin-bottom: 30px;

        @media screen and (min-width: 980px){
            display: flex;
            justify-content: flex-start;
            flex-direction: column;
            align-items: flex-start;
            margin-top: 0;
            margin-bottom: 25px;
            max-width: 40%;
        }
    }

    .footer-title{
        font-weight: 400;
        font-size: 20px;
        line-height: 1.5;
        margin-top: 15px;
        margin-bottom: 15px;
        color: ${p => p.theme.color.white};
        text-align: center;

        @media screen and (min-width: 1440px){
            font-size: 22px;
        }
        @media screen and (min-width: 1920px){
            font-size: 26px;
        }
    }

    .footer-social-list{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

        @media screen and (min-width: 980px){
            margin-top: 10px;
            justify-content: space-between;
            width: 100%;
        }
    }

    .footer-social-item{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 25%;
        padding: 16px 0;

        @media screen and (min-width: 980px){
            padding: 0;
            width: 25px;
        }   
    }

    .footer-social-link{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .footer-link-svg{
        width: 24px;
        height: 24px;
        fill: ${p => p.theme.color.white};
        transition: fill ${p => p.theme.transition.main_transition};

        @media screen and (min-width: 980px){
            width: 16px;
            height: 16px;
        } 
    }

    .footer-social-link:hover .footer-link-svg{
        fill: ${p => p.theme.color.light_yellow};
    }


    .bottom-cont{
        border-top: 1px solid #8998ff;
        padding-top: 34px;

        @media screen and (min-width: 768px){
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }

    .bottom-text{
        margin-top: 8px;
        margin-bottom: 8px;
        text-align: center;
        color: #8998ff;
        font-size: 12px;
        font-weight: 400;
        line-height: 1.5;

        @media screen and (min-width: 1440px){
            font-size: 14px;
        }
        @media screen and (min-width: 1920px){
            font-size: 16px;
        }
    }

    .footer-btn-cont{
        padding: 8px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 3px;
    }

    .footer-modal-btn{
        border: none;
        outline: none;
        background-color: transparent;
        color: #42b983;
        font-size: 12px;
        font-weight: 400;
        line-height: 1.5;
        padding: 0;
        text-decoration: underline;
        cursor: pointer;
        transition: color ${p => p.theme.transition.main_transition};

        &:hover{
            color: ${p => p.theme.color.header_orange};;
        }

        @media screen and (min-width: 1440px){
            font-size: 14px;
        }
        @media screen and (min-width: 1920px){
            font-size: 16px;
        }
    }

    .footer-span{
        color: #8998ff;
    }
`