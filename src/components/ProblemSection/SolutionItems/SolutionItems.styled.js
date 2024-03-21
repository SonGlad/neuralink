import styled from "styled-components";


export const SolutionItemsStyled = styled.div`

    .solution-steps-cont{
        @media screen and (min-width: 768px){
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
        }
    }

    .solution-title{
        font-weight: 300;
        font-size: 42px;
        letter-spacing: 1px;
        color: ${p => p.theme.color.white};
        text-align: center;
        margin-bottom: 36px;
    }

    .solution-steps-title{
        margin-bottom: 54px;
        line-height: 1;

        @media screen and (min-width: 768px){
            margin-bottom: 0px;
            max-width: 40%;
        }
        @media screen and (min-width: 1440px){
            font-size: 48px;
        }
        @media screen and (min-width: 1920px){
            font-size: 54px;
        }
    }

    .solution-steps-list{
        @media screen and (min-width: 768px){
            display: flex;
            align-items: flex-start;
        }
    }

    .solution-steps-item{
        padding-bottom: 60px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;

        @media screen and (min-width: 768px){
            padding-bottom: 0px;
            flex-grow: 1;
        }
        @media screen and (min-width: 977px){
            width: 33%;
        }
    }

    .solution-steps-item-span{
        font-weight: 100;
        position: absolute;
        font-size: 150px;
        line-height: 1;
        left: 4%;
        top: -35px;
        color: hsla(0, 0%, 100%, .1);

        @media screen and (min-width: 768px){
            left: 8%;
        }
        @media screen and (min-width: 1440px){
            font-size: 171px;
        }
        @media screen and (min-width: 1920px){
            font-size: 195px;
        }
    }

    .solution-steps-item-span2{
        font-weight: 100;
        position: absolute;
        font-size: 150px;
        line-height: 1;
        right: 10%;
        top: -35px;
        color: hsla(0, 0%, 100%, .1);

        @media screen and (min-width: 768px){
            right: 0;
            left: 8%;
        }
        @media screen and (min-width: 1440px){
            font-size: 171px;
        }
        @media screen and (min-width: 1920px){
            font-size: 195px;
        }
    }

    .solution-steps-item-title{
        margin-bottom: 12px;
        line-height: 1.5;
        font-weight: 700;
        font-size: 42px;
        color: ${p => p.theme.color.light_yellow};
        text-align: center;
        @media screen and (min-width: 1440px){
            font-size: 48px;
        }
        @media screen and (min-width: 1920px){
            font-size: 54px;
        }
    }

    .solution-steps-item-text{
        font-weight: 500;
        font-size: 12px;
        line-height: 1.5;
        color: ${p => p.theme.color.white};
        max-width: 90%; 
        text-align: center;

        @media screen and (min-width: 768px){
            max-width: 60%;
        }
    }

    .solution-steps-list .item-1{
        transform: translateX(100%);
        opacity: 0;
        transition: transform 1s ease,
                    opacity 1s ease;
        transition-delay: 0.2s;
    }

    .active .solution-steps-list .item-1{
        opacity: 1;
        transform: translateX(0%);
    }

    .solution-steps-list .item-2{
        opacity: 0;
        transform: translateX(-100%);
        transition: transform 1s ease,
                    opacity 1s ease;
        transition-delay: 0.2s;
    }

    .active .solution-steps-list .item-2{
        opacity: 1;
        transform: translateX(0%);
    }

    .solution-steps-list .item-3{
        opacity: 0;
        transform: translateX(100%);
        transition: transform 1s ease,
                    opacity 1s ease;
        transition-delay: 0.2s;
    }

    .active .solution-steps-list .item-3{
        opacity: 1;
        transform: translateX(0%);
    }
`