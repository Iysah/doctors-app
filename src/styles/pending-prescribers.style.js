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

        @media screen and (max-width: 480px) {
            font-size: 15px;
        }
    }
`;

export const Table = styled.table`
    text-align: left;

    @media screen and (max-width: 768px) {
        margin: auto;
        width: 100%;
    }

    p.elipsis {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 70%;

        @media screen and (max-width: 350px) {
            width: 70px;
        }
    }

    th {
        color: #222;
        font-size: 20px;
        font-weight: 600;
        padding: 10px;

        @media screen and (max-width: 768px) {
            font-size: 18px;
        }

        @media screen and (max-width: 480px) {
            font-size: 15px;
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

        @media screen and (max-width: 480px) {
            font-size: 12px;
        }
    }
`;
