import styled from "styled-components";


export const SolutionComponentStyled = styled.div`

    .solution-bottom{
        padding-top: 50px;
    }

    .hidden .solution-title{
        animation: none;
        opacity: 0;
    }

    .visible .solution-title{
        opacity: 0;
        font-weight: 300;
        font-size: 42px;
        letter-spacing: 1px;
        color: ${p => p.theme.color.white};
        text-align: center;
        margin-bottom: 36px;
        animation: slideSolutionDown 1s ease forwards;
    }

    @keyframes slideSolutionDown {
        0%{
            opacity: 0;
            transform: translateY(-100px);
        }
        100%{
            opacity: 1;
            transform: translateY(0px);
        }
    }

    .hidden .solution-text-cont{
        animation: none;
        opacity: 0;
    }

    .solution-text-cont{
        opacity: 0;
        padding: 48px 30px 72px 30px;
        border: 2px solid ${p => p.theme.color.header_orange};
        border-radius: 10px;
        font-size: 18px;
        line-height: 1.6;
        color: ${p => p.theme.color.white};
        text-align: center;
        position: relative;
        animation: slideSolutionAppear 2s ease forwards;
        animation-delay: 0.5s;

    }

    @keyframes slideSolutionAppear {
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }

    .solution-decoration{
        position: absolute;
        bottom: -14px;
        width: 25px;
        height: 25px;
        border-left: 2px solid ${p => p.theme.color.header_orange};
        border-bottom: 2px solid ${p => p.theme.color.header_orange};
    }

    .solution-decoration1{
        display: block;
        left: 50%;
        transform: translateX(-50%) rotate(-45deg);
        background-color: #3c77f7;
    }

    .solution-decoration2,
    .solution-decoration3{
        display: none;
    }

    @media screen and (min-width: 768px){
        .solution-decoration2{
            display: block;
            left: 15.5%;
            transform: rotate(-45deg);
            background-color: #2891f8;
        }
    
        .solution-decoration3{
            display: block;
            right: 15.5%;
            transform: rotate(-45deg);
            background-color: #4f5ef6;
        }
    }
`