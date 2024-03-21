import styled from "styled-components";


export const SolutionComponentStyled = styled.div`

    .solution-bottom{
        padding-top: 50px;
    }

    .solution-title{
        opacity: 0;
        transform: translateY(-100px);
        font-weight: 300;
        font-size: 42px;
        letter-spacing: 1px;
        color: ${p => p.theme.color.white};
        text-align: center;
        margin-bottom: 36px;
        transition: opacity 1s ease,
                    transform 1s ease;
    }

    .active .solution-title{
        opacity: 1;
        transform: translateY(0px);
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
        transition: opacity 2s ease;
        transition-delay: 0.5s;
    }

    .active .solution-text-cont{
        opacity: 1;
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