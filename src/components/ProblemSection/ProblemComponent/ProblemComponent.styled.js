import styled from "styled-components";


export const ProblemComponentStyled = styled.div`

    .for-animation{
       display: block;
    }

    .hidden .section-title{
        animation: none;
        opacity: 0;
    }

    .visible .section-title{
        opacity: 0;
        font-weight: 300;
        font-size: 43px;
        color: ${p => p.theme.color.title_blue};
        letter-spacing: 1px;
        text-align: center;
        margin-bottom: 43px;
        animation: slideProblemDown 1s ease forwards;
    }

    @keyframes slideProblemDown {
        0%{
            opacity: 0;
            transform: translateY(-100px);
        }
        100%{
            opacity: 1;
            transform: translateY(0px);
        }
    }



    .descr-cont{
        padding-bottom: 20px;
        border: none;
        outline: none;
    }

    .problem-list{
        @media screen and (min-width: 768px){
            display: flex;
        }
    }

    .hidden .problem-item{
        animation: none;
        opacity: 0;
    }

    .problem-item{
        display: flex;
        align-items: flex-start;
        justify-content: center;
        padding-bottom: 30px;
        opacity: 0;
        animation: opacityAppearence 1s ease forwards;
        animation-delay: calc(0.2s * var(--i));

        @media screen and (min-width: 768px){
            padding: 0 42px 30px 24px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 6px;
            max-width: 25%;
            position: relative;

            &:not(:last-of-type):after {
                position: absolute;
                z-index: 1;
                content: "";
                top: 0;
                right: 0;
                width: 2px;
                height: 100%;
                background-image: linear-gradient(180deg, transparent, #4979e6);
            }

            &:nth-of-type(2):after {
                height: 150%;
            }
        }
    }

    @keyframes opacityAppearence {
        0%{
            opacity: 0;
            z-index: 1;
        }
        100%{
            opacity: 1;
            z-index: 2;
        }
    }


    .problem-item-number{
        margin-right: 20px;
        color: ${p => p.theme.color.title_blue};
        font-weight: 400;
        font-size: 18px;
        letter-spacing: 1px;
    }

    .problem-item-text{
        font-weight: 600;
        font-size: 12px;
        line-height: 1.5;
        letter-spacing: .03rem;
        color: ${p => p.theme.color.close_black};;
    }
`