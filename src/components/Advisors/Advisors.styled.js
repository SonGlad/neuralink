import styled from "styled-components";


export const AdvisorsStyled = styled.div`
    padding-top: 54px;
    position: relative;
    padding-bottom: 100px;

    @media screen and (min-width: 768px){
        padding-bottom: 0;
    }

    .advisors-title{
        margin-bottom: 54px;
        font-weight: 300;
        font-size: 42px;
        letter-spacing: 1px;
        line-height: 1;
        text-align: center;
        color: ${p => p.theme.color.white};

        @media screen and (min-width: 1440px){
            font-size: 48px;
        }
        @media screen and (min-width: 1920px){
            font-size: 54px;
        }
    }

    .advisors-list{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 5px;

        @media screen and (min-width: 980px){
            flex-direction: row;
            gap: 10px;
            padding-bottom: 35px;
            align-items: flex-start;
            align-items: stretch;
        }
    }

    .advisors-item{
        border-radius: 10px;
        box-shadow: 0 5px 10px 0 rgba(0, 0, 0, .1);
        padding: 23px;
        height: 90%;
        width: 100%;
        background-color: ${p => p.theme.color.white};

        @media screen and (min-width: 980px){
            padding-bottom: 0;
            flex: 1
        }
    }

    .advisors-item-top-cont{
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        padding: 0 23px;
    }

    .img-cont{
        width: 102px;
        height: 102px;
        margin-bottom: 36px;
        border-radius: 50%;
        overflow: hidden;
        flex-shrink: 0;
    }

    .picture{
        width: 100%;
        height: auto;
    }

    .advisors-descr-cont{
        padding: 17px 0 17px 30px;
    }

    .advisors-name{
        margin-bottom: 5px;
        font-weight: 500;
        font-size: 18px;
        line-height: 1.5;
        color: ${p => p.theme.color.close_black};
    }

    .advisors-text{
        margin-bottom: 5px;
        font-weight: 500;
        font-size: 12px;
        line-height: 1.5;
        color: ${p => p.theme.color.close_black};
    }

    .advisors-svg{
        width: 26px;
        height: 26px;
        fill: ${p => p.theme.color.grey};
    }

    .advisors-item-text-cont{
        padding: 22px;
        border-top: 1px solid ${p => p.theme.color.grey2};
        position: relative;

        &:before{
            position: absolute;
            content: "";
            top: -9px;
            left: 65px;
            width: 16px;
            height: 16px;
            border-left: 1px solid ${p => p.theme.color.grey2};
            border-top: 1px solid ${p => p.theme.color.grey2};
            background-color: ${p => p.theme.color.white};
            transform: rotate(45deg);
        }
    }

    .advisors-item-text{
        font-weight: 400;
        font-style: italic;
        line-height: 1.5;
        font-size: 12px;

        span{
            opacity: 0;
            visibility: hidden;
        }
    }

`