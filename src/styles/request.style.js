import { styled } from "styled-components";

export const Wrapper = styled.div`
    padding: 130px 6vw 100px;
    width: 100%;

    @media screen and (max-width: 1000px) {
        padding: 110px 6vw 100px;
    }
`;

export const MaxContainer = styled.div`
    max-width: 900px;
    margin: auto;

    @media screen and (max-width: 980px) {
        max-width: 600px;
    }

    @media screen and (max-width: 680px) {
        max-width: 80vw;
    }
`;

export const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 60px;
    .time {
        color: #222;
        font-size: 16px;
        font-weight: 600;
    }

    .text {
        color: rgba(34, 34, 34, 0.7);
        font-size: 14px;
        font-weight: 400;
        margin-bottom: 40px;

        @media screen and (max-width: 480px) {
            font-size: 12px;
        }
    }
`;

export const ReportCard = styled.div`
    margin: 30px 0 70px;

    align-items: center;
    background: #fff;
    box-shadow: 2px 5px 10px 0px rgba(0, 0, 0, 0.25);
    display: flex;
    padding: 16px;
    width: -moz-fit-content;
    width: fit-content;

    @media screen and (max-width: 480px) {
        padding: 12px 16px;
        margin-left: auto;
        margin-right: auto;
    }

    .content {
        margin: 0 50px 0 20px;

        h3 {
            color: #000;
            font-size: 16px;
            font-weight: 600;

            @media screen and (max-width: 480px) {
                font-size: 14px;
            }
        }

        p {
            color: rgba(34, 34, 34, 0.7);
            font-size: 10px;
            font-weight: 400;

            @media screen and (max-width: 480px) {
                font-size: 8px;
            }
        }
    }
`;
