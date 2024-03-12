import styled from "styled-components";


export const HeaderStyled = styled.header`
    position: fixed;
    background-color: ${p => p.theme.color.header_bg_color};
    padding-top: 10px;
    padding-bottom: 10px;
    width: 100%;
    z-index: 20;

    .header-container{
        display: flex;
        align-items: center;

        min-width: 300px;
        margin: 0 auto;
        /* max-width: 320px; */
        padding: 0 18px;

        /* outline: 2px solid red;
        outline-offset: -2px; */

        @media screen and (min-width: 1000px) {
            /* max-width: 834px; */
            padding: 0 40px;
        }

        @media screen and (min-width: 1920px) {
            /* max-width: 1440px; */
            padding: 0 55px;
        }
    }

    .header-logo{
        width: 140px;
        height: 62px;
        margin-right: 6px;
    }

    .register-link{
        margin-right: 30px;
        margin-left: auto;
        padding: 6px 12px;
        font-weight: 400;
        display: inline-block;
        background-color: transparent;
        box-shadow: none;
        border: 2px solid ${p => p.theme.color.header_orange};
        border-radius: 4px;
        color: ${p => p.theme.color.white};
        text-decoration: none;
        transition: color ${p => p.theme.transition.main_transition},
                    background-color ${p => p.theme.transition.main_transition};

        &:hover{
            color: ${p => p.theme.color.black};
            background-color: ${p => p.theme.color.header_orange};
        }
    }
`