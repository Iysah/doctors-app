import { styled } from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    padding: 130px 6vw 100px;
    width: 100%;

    @media screen and (max-width: 1000px) {
        padding: 110px 6vw 100px;
    }
`;

export const Cards = styled.div`
    column-gap: 70px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    row-gap: 70px;
`;

export const Card = styled.div`
    min-width: 380px;
    width: calc(50% - 70px);

    @media screen and (max-width: 1313px) {
        min-width: auto;
        width: 100%;
    }

    .top {
        align-items: center;
        border-radius: 10px 10px 0px 0px;
        background: #1a4942;
        color: #fff;
        display: flex;
        justify-content: space-between;
        font-size: 20px;
        font-weight: 600;
        padding: 10px 15px;

        @media screen and (max-width: 768px) {
            font-size: 18px;
        }
    }

    .card {
        border-radius: 0 0 10px 10px;
        background: #fff;
        box-shadow: 2px 5px 10px 0px rgba(0, 0, 0, 0.25);
        display: flex;
        flex-direction: column;
        padding: 30px;
        row-gap: 18px;

        @media screen and (max-width: 380px) {
            padding: 20px;
        }
    }

    .title {
        color: rgba(34, 34, 34, 0.7);
        font-size: 16px;
        font-weight: 400;

        @media screen and (max-width: 768px) {
            font-size: 14px;
        }
    }

    .content {
        color: #222;
        font-size: 20px;
        font-weight: 500;

        @media screen and (max-width: 768px) {
            font-size: 16px;
        }
    }

    .heading {
        color: #222;
        font-size: 18px;
        font-weight: 600;

        @media screen and (max-width: 768px) {
            font-size: 16px;
        }
    }

    .small {
        color: #222;
        font-size: 16px;
        font-weight: 500;

        @media screen and (max-width: 768px) {
            font-size: 13px;
        }
    }

    .smaller {
        color: #222;
        font-size: 13px;
        font-weight: 500;
        max-width: 400px;

        @media screen and (max-width: 768px) {
            font-size: 12px;
        }
    }

    .bold {
        font-weight: 600;
    }

    table {
        text-align: left;
    }

    th,
    td {
        color: #222;
        font-size: 16px;
        font-weight: 500;

        @media screen and (max-width: 768px) {
            font-size: 14px;
        }
    }

    button.unfollow {
        border-radius: 8px;
        background: #1a4942;
        color: #fff;
        font-family: Poppins;
        font-size: 10px;
        font-weight: 600;
        padding: 6px 8px;
    }
`;

export const Save = styled.button`
    align-self: flex-end;
    border-radius: 12px;
    background: #1a4942;
    color: #fff;
    font-family: Poppins;
    font-size: 14px;
    font-weight: 600;
    padding: 6px 28px;
    width: -moz-fit-content;
    width: fit-content;
`;
