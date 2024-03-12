import styled from "styled-components";
import BackGround from "../../images/images/main-bg.png";
import BackGroundWhite from "../../images/images/bg-white.png";


export const ProblemSectionStyled = styled.div`

    .section-title{
        font-weight: 300;
        font-size: 43px;
        color: ${p => p.theme.color.title_blue};
        letter-spacing: 1px;
        text-align: center;
        margin-bottom: 43px;
    }

    .descr-cont{
        padding-bottom: 20px;
    }

    .problem-list{
        @media screen and (min-width: 768px){
            display: flex;
        }
    }

    .broblem-item{
        display: flex;
        align-items: flex-start;
        justify-content: center;
        padding-bottom: 30px;

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

    .broblem-item-number{
        margin-right: 20px;
        color: ${p => p.theme.color.title_blue};
        font-weight: 400;
        font-size: 18px;
        letter-spacing: 1px;
    }

    .broblem-item-text{
        font-weight: 600;
        font-size: 12px;
        line-height: 1.5;
        letter-spacing: .03rem;
        color: ${p => p.theme.color.close_black};;
    }

    .solution-wrap{
        background-image: url(${BackGround}), linear-gradient(180deg, #091049, #2b229c);
        background-position: center;
        background-repeat: no-repeat;
        object-fit: cover;
    }

    .solution-triangle{
        min-height: 100px;
        background-color: transparent;
        background-image: url(${BackGroundWhite});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        -webkit-clip-path: polygon(0 0, 50% 100%, 102% -2%);
        clip-path: polygon(0 0, 50% 100%, 102% -2%);
        

        @media screen and (min-width: 768px){
            min-height: 350px;
            -webkit-clip-path: polygon(-1% -2%, 50% 100%, 101% -2%);
            clip-path: polygon(-1% -2%, 50% 100%, 101% -2%);
        }
    }

    .solution-bottom{
        padding-top: 50px;
    }

    .solution-title{
        font-weight: 300;
        font-size: 42px;
        letter-spacing: 1px;
        color: ${p => p.theme.color.white};
        text-align: center;
        margin-bottom: 36px;
    }

    .solution-text-cont{
        padding: 48px 30px 72px 30px;
        border: 2px solid ${p => p.theme.color.header_orange};
        border-radius: 10px;
        font-size: 18px;
        line-height: 1.6;
        color: ${p => p.theme.color.white};
        text-align: center;
        position: relative;
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


    .solution-steps{
        margin-top: -30px;
        background-image: linear-gradient(90deg, #17a9f9, #6145f5);
        padding-top: 84px;
        min-height: 262px;

        @media screen and (min-width: 1440px){
            padding-top: 96px;
 
        }
        @media screen and (min-width: 1920px){
            padding-top: 110px;
            min-height: 282px;
        }
    }

    .solution-steps-cont{
        @media screen and (min-width: 768px){
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
        }
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

`