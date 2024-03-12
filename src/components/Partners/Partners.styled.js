import styled from "styled-components";


export const PartnersStyled = styled.div`
    padding: 55px 0;

    .partners-title{
        font-weight: 300;
        font-size: 42px;
        color: ${p => p.theme.color.title_blue};
        margin-bottom: 55px;
        letter-spacing: 1px;
        line-height: 1;
        text-align: center;

        @media screen and (min-width: 1440px){
            font-size: 48px;
        }
        @media screen and (min-width: 1920px){
            font-size: 54px;
        }
    }

    .partners-list{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        @media screen and (min-width: 768px){
            flex-direction: row;
            flex-wrap: wrap;
        }
        @media screen and (min-width: 950px){
            justify-content: space-between;
        }
    }

    .partners-item{
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 110px;

        @media screen and (min-width: 768px){
            padding: 0 36px;
        }
        @media screen and (min-width: 950px){
            width: 33%;
        }
    }

    .partners-img-cont{
        cursor: pointer;
        opacity: 1;
        transition: opacity ${p => p.theme.transition.main_transition};

        &:hover,
        &:focus{
            opacity: 0.3;
        }
    }

    .partners-img{
        width: 100%;
        height: auto;
    }
`