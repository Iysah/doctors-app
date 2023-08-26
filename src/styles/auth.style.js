import styled from "styled-components";
import theme from "./theme";

export const Wrapper = styled.div`
    display: flex;

    @media screen and (max-width: 990px) {
        flex-direction: column;
    }
`;

export const Bg = styled.div`
    display: flex;
    justify-content: center;
    min-height: 100vh;
    width: 50%;

    @media screen and (max-width: 990px) {
        min-height: 50vh;
        width: 100%;
    }
`;

export const BgGreen = styled(Bg)`
    align-items: center;
    background-color: ${theme.colors.primaryColor};
    justify-content: center;
    @media screen and (max-width: 990px) {
        display: none;
        min-height: 480px;
    }
`;

export const BgWhite = styled(Bg)`
    background-color: #fff;
    padding: 100px 0;

    @media screen and (min-width: ${theme.sizes.wrapperWidth}) {
        align-items: center;
    }
`;

export const InnerContainer = styled.div`
    padding: 0 30px;
    min-width: 40%;
    p.grey {
        color: rgba(34, 34, 34, 0.7);
    }

    .large-screen-only {
        @media screen and (max-width: 1250px) {
            display: none;
        }
    }

    @media screen and (max-width: 990px) {
        p.grey {
            text-align: center;
        }
    }
`;

export const Logo = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;

    img {
        width: 70%;
    }

    @media screen and (min-width: 990px) {
        position: fixed;
        top: 55%;
        transform: translateY(-50%);
        left: 0%;
        width: 45%;
    }

    @media screen and (max-width: 990px) {
        img {
            width: 60%;
        }
    }
`;

export const Title = styled.p`
    color: ${theme.colors.primaryColor};
    font-size: 18px;
    @media screen and (max-width: 990px) {
        font-size: 16px;
        text-align: center;
    }
`;

export const Heading = styled.h1`
    color: ${theme.colors.primaryColor};
    font-size: 30px;
    font-weight: 600;
    margin-top: 18px;
    @media screen and (max-width: 990px) {
        font-size: 20px;
        text-align: center;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 20px;

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
        min-width: 544px;
        outline: none;
        padding: 12px 18px;
        width: 100%;
    }

    label.checkbox {
        color: #646464;
        display: flex;
        font-size: 10px;
        margin-top: 10px;
    }

    label.checkbox span {
        color: #1a4942;
        font-weight: 700;
        margin: 0 2px;
    }

    label.checkbox input {
        display: inline-block;
        min-width: auto;
        margin-right: 4px;
        width: fit-content;
    }

    span.input {
        position: relative;
        display: flex;
    }

    span.eye-icon {
        cursor: pointer;
        position: absolute;
        top: 50%;
        right: 20px;
        transform: translateY(-50%);
    }

    @media screen and (max-width: 1188px) {
        label input {
            min-width: 450px;
        }
    }

    @media screen and (max-width: 520px) {
        label.checkbox {
            font-size: 7.5px;
        }

        label {
            font-size: 12px;
        }

        label input {
            font-size: 14px;
            min-width: 388px;
        }
    }

    @media screen and (max-width: 475px) {
        label input {
            min-width: 250px;
        }
    }

    @media screen and (max-width: 350px) {
        label.checkbox {
            font-size: 6.5px;
        }
    }
`;

export const Button = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: block;
    font: inherit;
    outline: none;
`;

export const ColoredButton = styled(Button)`
    color: ${theme.colors.primaryColor};
    align-self: flex-end;

    @media screen and (max-width: 990px) {
        font-size: 12px;
    }
`;

export const BgButton = styled(Button)`
    background-color: ${theme.colors.primaryColor};
    border-radius: 5px;
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.25);
    color: #fff;
    font-size: 20px;
    font-weight: 600;
    margin-top: 40px;
    padding: 10px 16px;
    @media screen and (max-width: 990px) {
        font-size: 18px;
    }

    @media screen and (max-width: 475px) {
        font-size: 16px;
    }
`;

export const Prompt = styled(Button)`
    color: rgba(34, 34, 34, 0.7);
    font-size: 18px;
    font-weight: 400;
    margin: 60px auto;
    text-align: center;

    span {
        color: ${theme.colors.primaryColor};
        font-size: 20px;
        font-weight: 500;
    }

    @media screen and (max-width: 990px) {
        font-size: 14px;

        span {
            font-size: 16px;
        }
    }
`;

export const Info = styled.p`
    color: ${theme.colors.primaryColor};
    font-size: 18px;
    font-weight: 500;
    line-height: 157%;
    max-width: 500px;
`;

export const ShowCase = styled.div`
    display: flex;
    column-gap: 20px;
    overflow-x: auto;
    div.item {
        display: flex;
        flex-direction: column;
        max-width: 180px;
    }

    div.item img {
    }

    div.item h2 {
        color: #222;
        font-size: 18px;
        font-weight: 700;
    }

    .content {
        font-size: 13px;
    }
`;

export const HowItWorks = styled.div`
    border-radius: 17px;
    background: #fff;
    box-shadow: 2px 5px 20px 0px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 60px;
    padding: 23px 27px 27px;
    position: relative;
    text-align: center;

    h2 {
        font-size: 21px;
        font-weight: 600;
    }

    img {
        margin: 13px auto;
    }

    p.green {
        color: #40b36e;
        font-size: 14px;
        font-weight: 700;
    }

    span {
        color: #40b36e;
    }

    div.content {
        font-size: 12px;
        font-weight: 500;
    }

    div.absolute {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        align-self: flex-end;
    }

    @media screen and (max-width: 990px) {
        display: none;
    }
`;
