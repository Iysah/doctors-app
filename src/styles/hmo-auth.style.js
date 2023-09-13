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

export const Table = styled.div`
    overflow-x: auto;
    table {
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

            @media screen and (max-width: 580px) {
                font-size: 12px;
            }

            @media screen and (max-width: 378px) {
                font-size: 10px;
            }
        }

        td,
        th {
            cursor: pointer;
            white-space: nowrap;

            padding: 12px 8px;
        }

        .date {
            /* text-align: center; */
        }

        td {
            color: ${({ $status }) =>
                $status === "declined"
                    ? "#ED0303"
                    : $status === "approved"
                    ? "#2EC875"
                    : "rgba(51, 51, 51, 0.7)"};
        }

        @media screen and (max-width: 768px) {
            border-spacing: 0px 2px;
            tr {
                border-bottom: 1px solid rgba(34, 34, 34, 0.2);
                box-shadow: 1px 2px 4px 0px rgba(0, 0, 0, 0.25);
            }

            td:first-child,
            th:first-child {
                padding-left: 16px;

                @media screen and (max-width: 378px) {
                    padding-left: 10px;
                }
            }

            td:last-child,
            th:last-child {
                padding-right: 10px;

                @media screen and (max-width: 378px) {
                    padding-right: 10px;
                }
            }
        }
    }
`;

export const Chart = styled.div``;

export const MaxContainer = styled.div`
    max-width: 600px;
    margin-top: 50px;

    .red {
        color: #ff0000;
        display: inline;
    }
`;

// export const
