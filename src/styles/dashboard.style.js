import { styled } from "styled-components";

export const Wrapper = styled.div`
    /* height(100px) of header plus 30px padding for top */

    padding: 130px 35px 50px;
    /* width: calc(100vw - 285px); */
`;

export const Heading1 = styled.h1`
    color: #1a4942;
    font-size: 28px;
    font-weight: 600;
`;

export const Heading2 = styled.h2`
    color: #222;
    font-size: 22px;
    font-weight: 600;
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

    h3 {
        font-size: 24px;
        font-weight: 600;
        letter-spacing: 0.2px;
        margin-bottom: 10px;
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
    }
`;

export const GridContainer = styled.div`
    margin-top: 30px;
`;

export const Grid = styled.div`
    padding: 15px 0 25px;

    .grid {
        border: 1px solid rgba(34, 34, 34, 0.25);
        border-top: none;
        display: grid;
        grid-template-columns: 1fr 2fr repeat(3, 1fr);

        p {
            padding: 8px 25px 8px 17px;
            color: rgba(34, 34, 34, 0.7);
            font-size: 14px;
            font-weight: 400;
        }
    }

    .top-border {
        border-top: 1px solid rgba(34, 34, 34, 0.25);
    }

    .grid-heading {
        border: none;
        p {
            color: #111;
            font-size: 18px;
            font-weight: 600;
            padding-bottom: 14px;
        }

        .info {
            overflow: visible;
        }
    }

    .info {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`;
