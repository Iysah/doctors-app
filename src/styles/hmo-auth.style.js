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
                font-size: 14px;
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
                font-size: 14px;
            }
        }

        td,
        th {
            cursor: pointer;
            white-space: nowrap;

            padding: 12px 16px;
        }

        .date {
            /* text-align: center; */
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

export const ColoredTd = styled.td`
    color: ${({ $status }) =>
        $status === "denied"
            ? "#ED0303"
            : $status === "approved"
            ? "#2EC875"
            : "rgba(51, 51, 51, 0.7)"};
`;

export const Chart = styled.div`
    overflow-x: auto;
    .wrapper {
        border-radius: 16px;
        background: #fff;
        box-shadow: 0px 15px 20px 0px rgba(76, 103, 100, 0.1);
        margin: auto;
        margin-top: 70px;
        padding: 60px 35px;

        @media screen and (max-width: 580px) {
            min-width: 350px;
            width: 100%;
        }
    }

    .chart {
        color: #969696;
        font-size: 16px;
        font-weight: 500;
        margin-top: 50px;
        position: relative;

        @media screen and (max-width: 580px) {
            font-size: 14px;
            width: 100%;
        }
    }

    .x-axis {
        align-items: center;
        column-gap: 16px;
        display: flex;
        padding-bottom: 30px;

        @media screen and (max-width: 580px) {
            column-gap: 14px;
        }
    }

    .x-axis.last {
        padding-bottom: 0;
    }

    .line {
        background: #e0e0e0;
        height: 1px;
        min-width: 350px;
        max-width: 400px;
        width: 30vw;

        @media screen and (max-width: 580px) {
            min-width: initial;
            max-width: initial;
            width: 100%;
        }
    }

    .absolute {
        column-gap: 50px;
        display: flex;
        height: 100%;

        position: absolute;
        bottom: -11px;
        left: 50%;
        transform: translateX(-50%);

        @media screen and (max-width: 580px) {
            column-gap: 30px;
            margin-left: 10px;
        }
    }

    .bar-container {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }

    .bar {
        border-radius: 10px 10px 0px 0px;
        width: 55px;

        @media screen and (max-width: 580px) {
            width: 45px;
        }
    }

    .red {
        background-color: #ed0303;
        height: calc(20% - 5px);

        @media screen and (max-width: 580px) {
            height: calc(20% - 3px);
        }
    }

    .grey {
        background-color: #919094;
        height: calc(80% - 20px);

        @media screen and (max-width: 580px) {
            height: calc(80% - 15px);
        }
    }

    .green {
        background-color: #2ec875;
        height: calc(60% - 15px);

        @media screen and (max-width: 580px) {
            height: calc(60% - 12px);
        }
    }
`;

export const MaxContainer = styled.div`
    max-width: 600px;
    margin-top: 80px;

    .red {
        color: #ff0000;
        display: inline;
    }
`;

// export const
