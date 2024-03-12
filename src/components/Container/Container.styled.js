import styled from "styled-components";


export const StyledContainer = styled.div`
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

    @media screen and (min-width: 1300px) {
        /* max-width: 1440px; */
        padding: 0 165px;
    }

`