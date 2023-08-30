import { styled } from "styled-components";

export const Wrapper = styled.div`
    /* height(100px) of header plus 30px padding for top */

    padding: 130px 35px 50px;
    max-width: calc(100vw - 285px);

    @media screen and (max-width: 1000px) {
        max-width: initial;
        padding: 110px 35px 50px;
        width: 100%;
    }

    @media screen and (max-width: 416px) {
        padding: 110px 20px 50px;
    }

    @media screen and (max-width: 330px) {
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
        font-size: 18px;
    }

    @media screen and (max-width: 570px) {
        font-size: 14px;
    }
`;

export const RequestCard = styled.div`
    background-image: url("/request-card.svg");
    background-repeat: no-repeat;
    background-position: left;
    background-size: cover;
    border-radius: 30px;
    margin-top: 30px;
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

        @media screen and (max-width: 570px) {
            font-size: 16px;
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
        }

        @media screen and (max-width: 768px) {
            font-size: 14px;

            span {
                font-size: 12px;
            }
        }

        @media screen and (max-width: 570px) {
            font-size: 10px;

            span {
                font-size: 8px;
            }
        }
    }
`;

export const GridContainer = styled.div`
    margin-top: 30px;
`;

export const Grid = styled.div`
    padding: 15px 0 25px;

    .grid {
        display: grid;
        grid-template-columns: 1fr 1.625fr 0.375fr repeat(3, 1fr);

        @media screen and (max-width: 570px) {
            grid-template-columns: 1fr 2fr 0fr repeat(3, 1fr);
        }

        @media screen and (max-width: 385px) {
            grid-template-columns: 1fr 1.9fr 0fr 1.625fr repeat(2, 1fr);
        }

        p {
            border-top: 1px solid rgba(34, 34, 34, 0.25);
            color: rgba(34, 34, 34, 0.7);
            cursor: pointer;
            font-size: 14px;
            font-weight: 400;
            padding: 8px;

            @media screen and (max-width: 768px) {
                font-size: 10px;
            }

            @media screen and (max-width: 570px) {
                font-size: 7px;
                padding: 4px;
            }
        }
    }

    p.no-border {
        border: none;
    }

    p.border-left {
        border-left: 1px solid rgba(34, 34, 34, 0.25);
    }

    p.border-right {
        border-right: 1px solid rgba(34, 34, 34, 0.25);
    }

    p.border-bottom {
        border-bottom: 1px solid rgba(34, 34, 34, 0.25);
    }

    p.grid-heading {
        color: #111;
        cursor: auto;
        font-size: 18px;
        font-weight: 600;
        padding-bottom: 14px;

        @media screen and (max-width: 768px) {
            font-size: 14px;
        }

        @media screen and (max-width: 570px) {
            font-size: 10px;
        }
    }

    .info {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
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
        font-size: 13px;
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
