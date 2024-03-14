import styled from "styled-components";
import BackGround from "../../images/images/main-bg.png";
import BackGroundWhite from "../../images/images/bg-white.png";


export const ProblemSectionStyled = styled.div`

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
`