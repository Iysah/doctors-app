import { styled } from "styled-components";

export const InnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 50px;
`;

export const Top = styled.div`
    display: flex;
    justify-content: space-between;

    .right-aligned {
        column-gap: 20px;
        display: flex;
    }

    @media screen and (max-width: 768px) {
        h1 {
            display: none;
        }

        justify-content: center;
    }
`;

export const AddButton = styled.button`
    align-self: flex-end;
    color: #1a4942;
    font-family: Poppins;
    font-size: 14px;
    font-weight: 600;
    padding: 10px 12px;
    margin: 40px 0;

    border-radius: 11.395px;
    border: 1.519px solid #1a4942;
    box-shadow: 1.74px 4.34px 8.68px 0px rgba(0, 0, 0, 0.25);

    @media screen and (max-width: 768px) {
        font-size: 12px;
    }

    @media screen and (max-width: 580px) {
        font-size: 10px;
        padding: 7px 10px;
    }
`;

export const Table = styled.table`
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

    tr {
        cursor: pointer;
    }

    td,
    th {
        padding: 11px 2px;
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
