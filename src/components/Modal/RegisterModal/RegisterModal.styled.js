import styled from "styled-components";


export const RegisterModalStyled = styled.div`
    width: 80%;
    background-image: linear-gradient(90deg, #17a9f9, #6145f5);
    position: relative;
    padding: 30px 10px 30px 10px;
    overflow: auto;


    @media screen and (min-width: 768px){
        width: 615px;
        padding: 24px 5px 24px 5px;
    }

    @media screen and (min-width: 1200px){
        width: 730px;
        padding: 45px;
    }

    .modal-close-btn{
        cursor: pointer;
        position: absolute;
        top: 5px;
        right: 5px;
        margin: 0;
        padding: 0;
        border: none;
        outline: none;
        background-color: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;

        @media screen and (min-width: 768px){
            top: 5px;
        }
        @media screen and (min-width: 1200px){
            top: 20px;
            right: 20px;
        }
    }

    .close-svg{
        stroke: black;
        width: 18px;
        height: 18px;

        @media screen and (min-width: 1440px){
            width: 21px;
            height: 21px;
        }
        @media screen and (min-width: 1920px){
            width: 24px;
            height: 24px;
        }
    }

    .content-container{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .shadow-div{
        box-shadow: 0px 0px 10px 10px rgba(0,0,2,0.5);
        padding: 12px 5px 12px 5px;
        border-radius: 10px;

        @media screen and (min-width: 768px){
            padding: 18px 5px 18px 5px;
            border-radius: 20px;
        }

        @media screen and (min-width: 1200px){
            padding: 24px;
        }
    }

    .content{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;
        margin-bottom: 15px;

        @media screen and (min-width: 768px){
            margin-bottom: 25px;
        }
        @media screen and (min-width: 1200px){
            margin-bottom: 45px;
        }
    }

    .modal-icon{
        width: 24px;
        height: 24px;
    }

    .contact-modal-text{
        text-align: center;
        font-weight: 400;
        font-size: 16px;
        line-height: calc(24 / 16);
        letter-spacing: 0.04em;
        color: ${p => p.theme.color.close_black};

        @media screen and (min-width: 768px){
            font-weight: 600;
            font-size: 24px;
            line-height: calc(24 / 16);
        }
        
        @media screen and (min-width: 1200px){
            font-weight: 700;
            font-size: 28px;
            line-height: calc(24 / 16);
        }
    }
    .sucsess{
        color: ${p => p.theme.color.green2};
        text-shadow: 2px -2px 3px ${p => p.theme.color.black};
    }
    .error{
        color: ${p => p.theme.color.red};
        text-shadow: 2px -2px 3px ${p => p.theme.color.black};
    }

    .continue-btn{
        cursor: pointer;
        width: 50%;
        border: none;
        outline: none;
        max-width: 200px;
        padding: 5px 10px;
        border-radius: 15px;
        font-size: 16px;
        font-weight: 700;
        background-color: ${p => p.theme.color.text_color};
        color: ${p => p.theme.color.main_color};
        box-shadow: 0px 0px 10px 10px rgba(0,0,0,0.3) inset,
                    0px 0px 0px 0px rgba(0,0,0,0.3);
        transition: color ${p => p.theme.transition.main_transition}, 
                    background-color ${p => p.theme.transition.main_transition},
                    box-shadow ${p => p.theme.transition.main_transition};
        margin-top: 30px;

        &:hover{
            background-color: ${p => p.theme.color.main_color};
            color: ${p => p.theme.color.text_color};
            box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.3) inset,
                        0px 0px 10px 10px rgba(0,0,0,0.3);
        }

        @media screen and (min-width: 768px){
            padding: 10px 15px;  
            margin-top: 40px;
        }
        @media screen and (min-width: 1200px){
            padding: 14px 28px;
            margin-top: 45px;           
        }
    }
`