import { styled } from "styled-components";

export const Wrapper = styled.div`
    /* height(100px) of header plus 30px padding for top */

    padding: 130px 6vw 50px;
    max-width: calc(100vw - 285px);

    @media screen and (max-width: 1000px) {
        max-width: initial;
        padding: 110px 6vw 50px;
        width: 100%;
    }

    @media screen and (max-width: 416px) {
        padding: 110px 20px 50px;
    }

    @media screen and (max-width: 380px) {
        padding: 110px 16px 50px;
    }
`;

export const Heading1 = styled.h1`
    color: #1a4942;
    font-size: 28px;
    font-weight: 600;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 570px) {
        font-size: 20px;
    }
`;

export const Heading2 = styled.h2`
    color: #222;
    font-size: 22px;
    font-weight: 600;

    @media screen and (max-width: 768px) {
        font-size: 20px;
    }

    @media screen and (max-width: 570px) {
        font-size: 18px;
    }
`;

export const RequestCard = styled.div`
    background-image: url("/request-card.svg");
    background-repeat: no-repeat;
    background-position: left;
    background-size: cover;
    border-radius: 30px;
    margin: 30px 0;
    padding: 30px 25px 45px;
    color: #fff;

    @media screen and (max-width: 768px) {
        border-radius: 25px;
    }

    @media screen and (max-width: 386px) {
        border-radius: 20px;
        padding: 20px 25px 35px;
    }

    h3 {
        font-size: 24px;
        font-weight: 600;
        letter-spacing: 0.2px;
        margin-bottom: 10px;

        @media screen and (max-width: 768px) {
            font-size: 20px;
        }
    }

    p {
        font-size: 18px;
        font-weight: 500;
        max-width: 600px;

        span {
            color: rgba(255, 255, 255, 0.7);
            display: block;
            font-size: 16px;
            font-weight: 400;
            margin-top: 5px;

            @media screen and (max-width: 450px) {
                margin-top: 10px;
            }
        }

        @media screen and (max-width: 768px) {
            font-size: 16px;

            span {
                font-size: 14px;
            }
        }
    }
`;

export const TableContainer = styled.div`
    margin-top: 50px;
`;

export const Table = styled.div`
    padding: 15px 0 25px;
    overflow-x: auto;
    table {
        border-collapse: collapse;
        text-align: left;
        width: 100%;
        white-space: nowrap;
    }

    thead {
        color: #000;
        font-size: 16px;

        @media screen and (max-width: 768px) {
            font-size: 14px;
        }

        th {
            font-weight: 600;
            padding-bottom: 13px;
        }
    }

    tr {
        cursor: pointer;
    }

    td,
    th {
        padding: 6px 0;
    }

    th:first-child,
    td:first-child {
        padding-left: 16px;
    }

    th,
    td {
        padding-right: 16px;
    }

    tbody {
        color: rgba(34, 34, 34, 0.7);
        font-size: 14px;
        font-weight: 400;

        @media screen and (max-width: 768px) {
            font-size: 12px;
        }

        tr {
            border: 1px solid rgba(34, 34, 34, 0.2);
            border-bottom: transparent;
        }

        td:first-child {
            font-weight: 500;
        }

        tr:last-child {
            border-bottom: 1px solid rgba(34, 34, 34, 0.2);
        }
    }

    .info {
        overflow: hidden;
        text-overflow: ellipsis;
        min-width: 85px;
        max-width: 150px;
        padding-right: 25px;
    }
`;

export const BackButton = styled.button`
    align-items: center;
    color: rgba(51, 51, 51, 0.7);
    column-gap: 10px;
    display: flex;
    font-family: "Poppins";
    font-size: 17px;
    font-weight: 400;

    @media screen and (max-width: 480px) {
        svg {
            height: 15px;
            width: 13px;
        }
        font-size: 14px;
    }
`;

export const ReplyButton = styled.button`
    align-items: center;
    border-radius: 20px;
    border: 1px solid #222;
    color: rgba(51, 51, 51, 0.7);
    column-gap: 15px;
    display: flex;
    font-family: Poppins;
    font-size: 14px;
    font-weight: 400;
    padding: 6px 25px 6px 18px;

    @media screen and (max-width: 480px) {
        svg {
            height: 19px;
            width: 19px;
        }
        font-size: 12px;
        /* padding: 6px 25px 8px 18px; */
    }
`;
