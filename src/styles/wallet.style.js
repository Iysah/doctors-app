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

export const FirstContainer = styled.div`
    align-items: center;
    column-gap: 25px;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 1440px) {
        flex-direction: column;
        row-gap: 100px;
    }
`;

export const WalletDetails = styled.div`
    border-radius: 10px;
    background: #fff;
    box-shadow: 0px 18px 23px 0px rgba(76, 103, 100, 0.1);
    row-gap: 35px;
    display: flex;
    flex-direction: column;
    padding: 30px 35px 40px 25px;
    height: 100%;
    width: 50%;

    @media screen and (max-width: 1440px) {
        box-shadow: 0px 8px 10px 0px rgba(76, 103, 100, 0.1);
        width: 100%;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
    }

    @media screen and (max-width: 400px) {
        padding: 25px 30px 35px 20px;
    }

    .wallet-balance {
        border-radius: 10px;
        background: #1a4942;
        column-gap: 20px;
        display: flex;
        min-width: 350px;
        padding: 25px 16px;

        @media screen and (max-width: 768px) {
            min-width: initial;
            width: 100%;

            > svg {
                height: 50px;
                width: 50px;
            }

            .naira {
                height: 16px;
                width: 19px;
            }
        }

        @media screen and (max-width: 480px) {
            > svg {
                height: 35px;
                width: 35px;
            }

            .naira {
                height: 14px;
                width: 17px;
            }
        }

        .normal {
            color: rgba(255, 255, 255, 0.7);
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
            padding-bottom: 10px;

            @media screen and (max-width: 768px) {
                font-size: 12px;
            }
        }

        .large {
            color: #fff;
            font-size: 24px;
            font-weight: 600;
            line-height: 20px;

            @media screen and (max-width: 768px) {
                font-size: 20px;
            }

            @media screen and (max-width: 400px) {
                font-size: 18px;
            }
        }
    }
`;

export const DetailsButtons = styled.div`
    column-gap: 16px;
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media screen and (max-width: 768px) {
        display: flex;
        justify-content: space-between;
    }
`;

export const button = styled.button`
    align-items: center;
    display: flex;
    font-size: 15px;
    font-weight: 600;
    justify-content: center;
    line-height: 24px;
    padding: 10px 25px;
    text-align: center;
    text-transform: capitalize;
    max-width: 215px;
    white-space: nowrap;

    @media screen and (max-width: 768px) {
        font-size: 12px;
        width: 50%;
        max-width: initial;
    }

    @media screen and (max-width: 480px) {
        padding: 8px 16px;
    }
`;

export const GreenButton = styled(button)`
    border-radius: 10px;
    background: #1a4942;
    color: #fff;
`;

export const BorderedButton = styled(button)`
    border-radius: 10px;
    border: 1px solid #1a4942;
    color: #222;

    @media screen and (max-width: 768px) {
        justify-self: flex-end;

        svg {
            display: none;
        }
    }
`;

export const Chart = styled.div`
    white-space: nowrap;
    width: 50%;

    @media screen and (max-width: 1440px) {
        width: 100%;
    }

    .wrapper {
        border-radius: 10px;
        background: #fff;
        box-shadow: 0px 15px 20px 0px rgba(76, 103, 100, 0.1);
        padding: 40px 35px;
        overflow-x: auto;
    }

    .chart {
        color: #969696;
        font-size: 14px;
        font-weight: 500;
        margin-top: 50px;
        position: relative;
        min-width: 480px;
    }

    .x-axis {
        align-items: center;
        column-gap: 10px;
        display: flex;
        justify-content: space-between;
        padding-bottom: 30px;
    }

    .x-axis.last {
        padding-bottom: 0;
    }

    .line {
        background: #e0e0e0;
        height: 1px;

        width: 100%;

        @media screen and (max-width: 500px) {
            min-width: initial;
        }
    }

    .absolute {
        column-gap: 8px;
        display: flex;
        height: 100%;

        position: absolute;
        bottom: -5px;
        left: 50%;
        transform: translateX(-50%);
    }

    .bar-container {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }

    .bar {
        border-radius: 50px 50px 0px 0px;
        background: #1a4942;
        width: 2.5vw;
        min-width: 35px;
    }

    .bar-one {
        height: calc(20% - 5px);
    }

    .bar-two {
        height: calc(80% - 20px);
    }

    .bar-three {
        height: calc(60% - 15px);
    }

    .bar-two {
        height: calc(80% - 20px);
    }

    .title {
        font-size: 10px;
        text-align: center;
    }
`;

export const SecondContainer = styled.div`
    margin-top: 80px;

    .header {
        align-items: center;
        display: flex;
        justify-content: space-between;

        @media screen and (max-width: 480px) {
            align-items: flex-start;
            flex-direction: column;
            row-gap: 20px;
        }

        p.heading {
            color: #878787;
            font-size: 19px;
            font-weight: 400;

            @media screen and (max-width: 768px) {
                font-size: 16px;
            }
        }
    }
`;

export const Table = styled.div`
    border-radius: 15px;
    background: #fff;
    box-shadow: 2px 5px 20px 0px rgba(76, 103, 100, 0.1);
    margin-top: 35px;
    padding: 0 25px;

    @media screen and (max-width: 768px) {
        overflow: auto;
    }

    table {
        text-align: left;
        white-space: nowrap;
        width: 100%;

        th {
            color: #191919;
            font-size: 15px;
            font-weight: 700;
            padding: 16px 4px 18px;

            @media screen and (max-width: 768px) {
                font-size: 12px;
                padding: 14px 4px;
            }
        }

        td {
            color: rgba(34, 34, 34, 0.7);
            font-size: 15px;
            font-weight: 400;
            padding: 16px 4px;

            @media screen and (max-width: 768px) {
                font-size: 12px;
                padding: 12px 6px;

                > svg {
                    height: 9px;
                    width: 10px;
                }
            }
        }

        .center {
            text-align: center;
        }

        .amount {
            color: #222;
        }
    }

    .load-more {
        padding: 30px 0;
        display: flex;
        justify-content: center;
    }
`;

export const Sort = styled.div`
    color: #353535;
    font-size: 16px;
    font-weight: 500;

    @media screen and (max-width: 768px) {
        font-size: 14px;
    }

    @media screen and (max-width: 480px) {
        font-size: 12px;
    }

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

        @media screen and (max-width: 768px) {
            font-size: 10px;
        }

        @media screen and (max-width: 480px) {
            padding: 8px 10px;
            padding-right: 35px;
        }

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
