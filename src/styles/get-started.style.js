import styled from "styled-components";

import theme from "./theme";
import { Button } from "./auth.style";
const { colors } = theme;

export const Wrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    max-width: 900px;
    margin: 90px auto;
    width: 70vw;

    div {
        width: 100%;
    }

    p.grey {
        color: rgba(34, 34, 34, 0.7);
    }

    @media screen and (max-width: 975px) {
        max-width: none;

        p.grey {
            text-align: center;
        }
    }

    @media screen and (max-width: 525px) {
        width: 85vw;
    }
`;

export const Title = styled.p`
    color: ${theme.colors.primaryColor};
    font-size: 18px;
    @media screen and (max-width: 975px) {
        font-size: 16px;
        text-align: center;
    }
`;

export const Heading = styled.h1`
    color: ${theme.colors.primaryColor};
    font-size: 30px;
    font-weight: 600;
    margin-top: 18px;
    @media screen and (max-width: 975px) {
        font-size: 20px;
        text-align: center;
    }
`;

export const RadioButtons = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
    label {
        display: block;
        font-size: 20px;
        font-weight: 400;
    }

    label input {
        margin-right: 10px;
    }

    @media screen and (max-width: 975px) {
        label {
            font-size: 16px;
        }
    }

    @media screen and (max-width: 800px) {
        flex-direction: column;
        justify-content: center;
    }
`;

export const Instruction = styled.p`
    align-self: flex-start;
    color: ${colors.primaryColor};
    font-size: 20px;
    font-weight: 500;
    margin: 50px 0 30px;

    @media screen and (max-width: 975px) {
        font-size: 16px;
    }

    @media screen and (max-width: 475px) {
        font-size: 12px;
    }
`;

export const Form = styled.form`
    align-self: flex-start;
    display: flex;
    flex-direction: column;
    label {
        display: block;
        margin: 10px 0;
    }

    label input {
        border: none;
        border-radius: 5px;
        background: #efecec;
        box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.25);
        color: rgba(34, 34, 34, 0.7);
        display: block;
        font-family: inherit;
        font-size: 16px;
        max-width: 544px;
        outline: none;
        padding: 12px 18px;
        width: 100%;
    }

    p {
        color: rgba(34, 34, 34, 0.7);
        font-size: 12px;
        font-weight: 400;
    }

    @media screen and (max-width: 800px) {
        width: 100%;
        label {
            width: 100%;
        }
    }

    @media screen and (max-width: 475px) {
        label input {
            font-size: 14px;
        }
    }
`;

export const Buttons = styled.div`
    align-self: center;
    display: flex;
    flex-direction: column;
    width: auto;
`;

export const Submit = styled(Button)`
    background-color: ${colors.primaryColor};
    border-radius: 5px;
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.25);
    color: #fff;
    font-size: 20px;
    font-weight: 600;
    margin-top: 30px;
    min-width: 320px;
    padding: 10px 16px;
    @media screen and (max-width: 975px) {
        font-size: 17px;
    }

    @media screen and (max-width: 800px) {
        min-width: 100%;
    }

    @media screen and (max-width: 475px) {
        font-size: 15px;
    }
`;

export const Logout = styled(Button)`
    color: ${colors.primaryColor};
    font-size: 18px;
    font-weight: 400;
    text-align: right;
    margin-top: 10px 4px 0 0;
    @media screen and (max-width: 975px) {
        font-size: 16px;
    }

    @media screen and (max-width: 475px) {
        font-size: 14px;
    }
`;

export const Email = styled.div`
    font-size: 16px;
    margin-top: 70px;
    .black {
        color: #222;
        font-weight: 400;
    }

    .green {
        color: ${colors.primaryColor};
        font-weight: 500;
    }

    @media screen and (max-width: 975px) {
        font-size: 14px;
    }
`;

// export const = styled.``
