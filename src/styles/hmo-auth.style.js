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

export const Table = styled.table`
    margin-top: 40px;
    text-align: left;
    width: 100%;

    thead {
        color: #1a4942;
        font-size: 18px;

        @media screen and (max-width: 768px) {
            font-size: 16px;
        }

        @media screen and (max-width: 580px) {
            font-size: 10px;
        }

        @media screen and (max-width: 378px) {
            font-size: 8px;
        }

        th {
            font-weight: 500;
        }
    }

    tbody {
        color: rgba(51, 51, 51, 0.7);
        font-size: 16px;
        font-weight: 400;

        @media screen and (max-width: 768px) {
            font-size: 14px;
        }

        @media screen and (max-width: 580px) {
            font-size: 8px;
        }

        @media screen and (max-width: 378px) {
            font-size: 8px;
        }
    }

    td,
    th {
        cursor: pointer;
    }

    td,
    th {
        padding: 12px 2px;
    }

    .date {
        /* text-align: center; */
    }

    td {
    }

    @media screen and (max-width: 768px) {
        border-spacing: 4px 6px;
        tr {
            border-bottom: 1px solid rgba(34, 34, 34, 0.2);
            box-shadow: 2px 4px 10px 0px rgba(0, 0, 0, 0.25);
        }

        td:first-child,
        th:first-child {
            padding-left: 16px;

            @media screen and (max-width: 378px) {
                padding-left: 8px;
            }
        }

        td:last-child,
        th:last-child {
            padding-right: 10px;

            @media screen and (max-width: 378px) {
                padding-right: 8px;
            }
        }
    }
`;
