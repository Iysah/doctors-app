import { styled } from "styled-components";

export const Wrapper = styled.div`
    /* display: flex;
    flex-direction: column; */

    padding: 130px 6vw 100px;
    /* width: 100%; */

    h1 {
        margin: 30px 0;
        text-align: center;
    }

    @media screen and (max-width: 1000px) {
        padding: 110px 6vw 100px;
    }

    @media screen and (min-width: 769px) {
        h1 {
            display: none;
        }
    }
`;

export const Cards = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 35px;
`;

export const Card = styled.div`
    border-radius: 20px;
    background: #fff;
    box-shadow: 2px 5px 15px 0px rgba(0, 0, 0, 0.25);
    padding: 35px 30px 20px;

    @media screen and (max-width: 620px) {
        padding: 25px 10px 10px;
    }

    .title {
        color: rgba(0, 0, 0, 0.5);
        font-size: 20px;
        font-weight: 600;

        @media screen and (max-width: 700px) {
            font-size: 16px;
        }

        @media screen and (max-width: 450px) {
            font-size: 14px;
        }
    }

    .content {
        color: #222;
        font-size: 20px;
        font-weight: 400;
        margin-left: 5px;

        @media screen and (max-width: 700px) {
            font-size: 16px;
        }

        @media screen and (max-width: 450px) {
            font-size: 14px;
        }
    }

    table {
        border-collapse: collapse;

        color: #111;
        font-size: 18px;
        font-weight: 400;
        margin-top: 20px;
        text-align: left;
        width: 100%;

        @media screen and (max-width: 700px) {
            font-size: 14px;
        }

        @media screen and (max-width: 450px) {
            font-size: 12px;
        }
    }

    tr {
        @media screen and (max-width: 768px) {
            border-bottom: 1px solid rgba(0, 0, 0, 0.2);

            td,
            th {
                padding: 10px 0;
            }
        }
    }

    th {
        font-weight: 400;
    }

    th:last-child,
    td:last-child {
        /* text-align: center; */
    }

    td {
        padding: 5px;
    }

    th {
        padding: 0 5px;
    }

    th:first-child,
    td:first-child {
        @media screen and (max-width: 620px) {
            display: none;
        }
    }

    .buttons {
        display: flex;
        column-gap: 20px;

        @media screen and (max-width: 620px) {
            flex-direction: column;
            row-gap: 8px;
        }
    }

    button {
        border-radius: 10px;
        background: #1a4942;
        box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, 0.25);
        color: #fff;
        font-size: 13px;
        font-weight: 400;
        padding: 8px 12px;

        @media screen and (max-width: 700px) {
            font-size: 11px;
        }

        @media screen and (max-width: 450px) {
            font-size: 9px;
        }
    }
`;
