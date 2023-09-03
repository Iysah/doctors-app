import { styled } from "styled-components";

export const Wrapper = styled.div`
    padding: 130px 6vw 100px;
    width: 100%;

    @media screen and (max-width: 1000px) {
        padding: 110px 6vw 100px;
    }
`;

export const MaxContainer = styled.div`
    max-width: 1080px;
    margin: auto;
    display: flex;
    margin-top: 50px;
    flex-direction: column;
`;

export const PatientInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;

    .image {
        margin: auto;

        @media screen and (max-width: 768px) {
            img {
                height: 100px;
                width: 100px;
            }
        }
    }

    .name {
        color: #1a4942;
        font-size: 28px;
        font-weight: 500;
        text-align: center;

        @media screen and (max-width: 768px) {
            font-size: 24px;
        }

        @media screen and (max-width: 480px) {
            font-size: 22px;
        }
    }

    .info {
        column-gap: 30px;
        display: flex;
        justify-content: space-between;
        color: rgba(0, 0, 0, 0.7);
        font-size: 16px;
        font-weight: 500;

        @media screen and (max-width: 768px) {
            font-size: 14px;
        }

        @media screen and (max-width: 480px) {
            font-size: 12px;
        }
    }
`;

export const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
`;

export const GreenButtons = styled(Buttons)`
    @media screen and (max-width: 768px) {
        align-items: center;
        flex-direction: column;
        justify-content: center;
        row-gap: 20px;
    }
`;

export const GreenButton = styled.button`
    border-radius: 25px;
    background: #1a4942;
    color: #fff;
    font-family: Poppins;
    font-size: 18px;
    font-weight: 500;
    padding: 10px 30px;

    @media screen and (max-width: 768px) {
        font-size: 16px;
    }

    @media screen and (max-width: 480px) {
        font-size: 14px;
    }
`;

export const UnderlineButton = styled.button`
    color: #222;
    font-family: Poppins;
    font-size: 22px;
    font-weight: 500;
    padding-bottom: 8px;
    text-transform: uppercase;

    position: relative;

    @media screen and (max-width: 768px) {
        font-size: 19px;
    }

    @media screen and (max-width: 480px) {
        font-size: 16px;
    }

    &::after {
        background-color: ${({ $active }) => ($active ? "#1A4942" : "#cfced3")};
        border-radius: 10px;
        content: "";
        display: block;
        height: 5px;
        width: 100%;
        transition: background-color ease 500ms;

        position: absolute;
        bottom: 0;
    }
`;

export const Meds = styled.div`
    margin-top: 10px;
`;

export const Med = styled.div`
    border-bottom: 3px solid rgba(34, 34, 34, 0.2);
    color: rgba(34, 34, 34, 0.7);
    font-size: 18px;
    font-weight: 500;
    margin-top: 40px;
    letter-spacing: 0.2px;
    padding-bottom: 30px;
    text-align: left;

    @media screen and (max-width: 768px) {
        font-size: 16px;
    }

    @media screen and (max-width: 480px) {
        font-size: 14px;
    }

    table {
        padding: 25px 0;

        th {
            font-weight: inherit;
        }

        td,
        th {
            padding: 0 30px;

            @media screen and (max-width: 768px) {
                padding: 0 15px;
            }
        }

        td:first-child,
        th:first-child {
            padding-left: 0;
        }
    }
`;

export const Details = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 60px;

    @media screen and (max-width: 990px) {
        flex-direction: column;
        row-gap: 50px;
    }
`;

export const DetailsCard = styled.div`
    min-width: 400px;

    @media screen and (max-width: 768px) {
        min-width: auto;
    }
    .top {
        border-radius: 10px 10px 0px 0px;
        background: #1a4942;
        color: #fff;
        font-size: 20px;
        font-weight: 600;
        padding: 10px 15px;

        @media screen and (max-width: 768px) {
            font-size: 18px;
        }
    }

    .card {
        border-radius: 0 0 10px 10px;
        background: #fff;
        box-shadow: 2px 5px 10px 0px rgba(0, 0, 0, 0.25);
        display: flex;
        flex-direction: column;
        padding: 30px;
        row-gap: 18px;
    }

    .patient-title {
        color: rgba(34, 34, 34, 0.7);
        font-size: 16px;
        font-weight: 400;

        @media screen and (max-width: 768px) {
            font-size: 14px;
        }
    }

    .patient-item {
        color: #222;
        font-size: 20px;
        font-weight: 500;

        @media screen and (max-width: 768px) {
            font-size: 16px;
        }
    }

    .item {
        div {
            align-items: center;
            column-gap: 10px;
            display: flex;
        }
    }

    .message {
        color: #46dff4;
        font-size: 18px;
        font-weight: 600;
        line-height: 1.25;

        @media screen and (max-width: 768px) {
            font-size: 16px;
        }
    }

    .time {
        color: rgba(34, 34, 34, 0.7);
        font-size: 16px;
        font-weight: 500;
        margin-top: 5px;

        @media screen and (max-width: 768px) {
            font-size: 14px;
        }

        span {
            margin-left: 10px;
        }
    }

    .call {
        color: #2ec875;
        font-size: 18px;
        font-weight: 600;
        line-height: 1.25;

        @media screen and (max-width: 768px) {
            font-size: 16px;
        }
    }

    .attachments {
        color: #222;
        font-size: 18px;
        font-weight: 600;

        @media screen and (max-width: 768px) {
            font-size: 16px;
        }
    }
`;

export const DetailsCard100 = styled(DetailsCard)`
    width: 100%;

    .card {
        padding: 10px 25px;
    }
`;
