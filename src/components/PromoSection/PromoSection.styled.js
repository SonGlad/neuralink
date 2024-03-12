import styled from "styled-components";


export const PromoSectionStyled = styled.div`
    padding: 90px 0;

    @media screen and (min-width: 640px){
        padding-top: 140px;
    }

    @media screen and (min-width: 768px){
        .hero-container{
            display: flex;
        }
    }

    .text-container{
        @media screen and (min-width: 1440px){
            max-width: 40%;
        }
    }


    .title{
        margin-bottom: 20px;
        font-weight: 300;
        font-size: 36px;
        line-height: 1.2;
        color: ${p => p.theme.color.white};
        letter-spacing: 1px;

        @media screen and (min-width: 576px){
            font-size: 42px;
            line-height: 1.8;
        }
        @media screen and (min-width: 1440px){
            font-size: 48px;
        }
        @media screen and (min-width: 1920px){
            font-size: 55px;
        }

    }

    .title-text{
        margin-bottom: 40px;
        font-weight: 400;
        line-height: 29px;
        font-size: 18px;
        color: ${p => p.theme.color.white};

        @media screen and (min-width: 576px){
            font-size: 13px;
            line-height: 1.7;
        }
    }

    .video-container{
        display: flex;
        align-items: center;
        justify-content: center;

        @media screen and (min-width: 768px){
            align-items: flex-start;
        }
    }

    .video{
        width: 95%;
        height: auto;
    }

    .form-container{
        width: 100%;
        display: flex;
        justify-content: center;

        @media screen and (min-width: 768px){
            justify-content: flex-start;
        }
    }


    .ios-container{
        width: 100%;
        margin-top: 36px;
        margin-bottom: 46px;
        font-weight: 400;
        line-height: 1.5;

        @media screen and (min-width: 1000px){
            margin-top: 116px;
            margin-bottom: 55px;
        }
    }

    .ios-link{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        background-color: ${p => p.theme.color.link_back};
        border-bottom: 6px solid #2c0f6d;
        box-shadow: 0 5px 30px 0 rgba(0, 0, 0, .2);
        padding: 6px 24px 6px 12px;
        border-radius: 10px;
        line-height: 1.5;
        font-size: 12px;
        color: ${p => p.theme.color.white};
        box-shadow: none;
        transition: box-shadow ${p => p.theme.transition.main_transition};

        &:hover,
        &:focus{
            box-shadow: 0 0 30px hsla(0, 0%, 100%, .5);
        }
    }

    .img-cont{
        margin-right: 15px;
    }

    .link-text-cont{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        font-size: 18px;
    }

    .flickering{
        font-size: 24px;
        animation: blinking .8s step-end .8s infinite;
    }

    @keyframes blinking {
        0%,
        50%,
        100% {
            color: #ff0000;
        }
        25%,
        75% {
            color: #3eff00;
        }
    }
`