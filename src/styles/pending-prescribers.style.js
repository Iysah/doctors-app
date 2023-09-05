import { styled } from "styled-components";

export const Prompt = styled.div`
    margin: 65px 0 70px;

    p {
        color: #222;
        font-size: 20px;
        font-weight: 600;
        max-width: 900px;

        @media screen and (max-width: 768px) {
            font-size: 18px;
            margin: auto;
            max-width: 600px;
            text-align: center;
        }
    }
`;

export const Table = styled.table`
    text-align: left;

    @media screen and (max-width: 768px) {
        margin: auto;
        width: 100%;
    }

    th {
        color: #222;
        font-size: 20px;
        font-weight: 600;
        padding: 10px;

        @media screen and (max-width: 768px) {
            font-size: 18px;
        }
    }

    td {
        color: #222;
        font-size: 18px;
        font-weight: 500;
        padding: 10px;

        @media screen and (max-width: 768px) {
            font-size: 16px;
        }
    }
`;
