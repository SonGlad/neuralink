import styled from "styled-components";
import BackGround from "../../images/images/main-bg.png";
import BackGroundWhite from "../../images/images/bg-white.png";


export const SectionStyled = styled.section`

`

export const HeroSectionStyled = styled.section`
    background-image: url(${BackGround}), linear-gradient(180deg, #081047, #201193);
    background-position: center;
    background-repeat: no-repeat;
    object-fit: cover;
`

export const ProblemSectionStyled = styled.section`
    padding-top: 54px;
    background-image: url(${BackGroundWhite});
    background-position: center;
    background-repeat: no-repeat;
    object-fit: cover;
    background-color: ${p => p.theme.color.white_2};
`

export const AdvisorsSectionStyled = styled.section`
    position: relative;
    background-color: ${p => p.theme.color.white_2};
    background-image: linear-gradient(155deg, #201c81 55vw, #f5f7f7 0, #f5f7f7);

    @media screen and (min-width: 768px){
        background-image: none;

        &:before{
            content: "";
            background-image: url(${BackGround}), linear-gradient(180deg, #201c81, #2c229c);
            background-position: center;
            background-repeat: no-repeat;
            object-fit: cover;
            top: 0;
            left: 0;
            z-index: 0;
            width: 100%;
            height: 100%;
            position: absolute;
            -webkit-clip-path: polygon(0 -1%, 0 90%, 87.5% -1%);
            clip-path: polygon(0 -1%, 0 90%, 87.5% -1%);

            @media screen and (min-width: 980px){
                webkit-clip-path: polygon(0 -1%, 0 130%, 87.5% -1%);
                clip-path: polygon(0 -1%, 0 130%, 87.5% -1%);
            }
        }
    }  
`

export const PartnersSectionStyled = styled.section`
    background-color: ${p => p.theme.color.white_2};
`