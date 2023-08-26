import { styled } from "styled-components";

export const Wrapper = styled.div`
    background-color: #fff;
    position: fixed;
    top: 0;
    padding: 20px;
    padding-right: 50px;
    width: calc(100vw - 240px);

    /* fix for nav rounded border */
    left: 240px;
    padding-left: 80px;
`;

export const InnerContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
`;

export const Sort = styled.div`
    color: #353535;
    font-size: 16px;
    font-weight: 500;

    label {
        display: inline-block;
        position: relative;
    }

    select {
        appearance: none;
        border-radius: 8px;
        border: 1px solid rgba(90, 87, 255, 0.1);
        margin-left: 12px;
        padding: 8px 16px;
        padding-right: 45px;

        color: #ccc;
        font-family: Poppins;
        font-size: 12px;
        font-weight: 500;

        &:focus {
            outline-color: #777;
        }
    }

    .svg {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 16px;
    }
`;

export const UserWrapper = styled.div`
    align-items: center;
    column-gap: 20px;
    display: flex;
`;

export const User = styled.div`
    align-items: center;
    column-gap: 15px;
    display: flex;

    .name {
        color: #111;
        font-size: 14px;
        font-weight: 600;
    }

    .email {
        color: #ccc;
        font-size: 12px;
        font-weight: 300;
    }

    .code {
        color: #333;
        font-size: 12px;
        font-weight: 300;
    }
`;
