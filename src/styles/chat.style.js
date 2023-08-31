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

export const RightAligned = styled.div`
    align-self: flex-end;
    column-gap: 20px;
    display: flex;

    @media screen and (max-width: 768px) {
        align-self: center;
    }
`;

export const SearchBar = styled.label`
    align-items: center;
    border-radius: 10px;
    background: #fff;
    box-shadow: 2px 5px 8px 0px rgba(0, 0, 0, 0.25);
    column-gap: 20px;
    display: flex;
    padding: 10px;
    @media screen and (max-width: 480px) {
        padding: 8px;

        svg {
            height: 14px;
            width: 14px;
        }
    }

    input {
        color: #ccc;
        font-family: "Poppins";
        font-size: 14px;
        font-weight: 300;
        min-width: 240px;

        @media screen and (max-width: 480px) {
            font-size: 12px;
            min-width: 150px;
        }
    }

    input:focus {
        outline: none;
    }
`;

export const Filter = styled.div`
    align-items: center;
    border-radius: 12px;
    background: #fff;
    box-shadow: 2px 5px 8px 0px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    padding: 10px;

    @media screen and (max-width: 480px) {
        svg {
            height: 26px;
            width: 26px;
        }
    }
`;

export const ChatArea = styled.div`
    margin: 80px 0 20px;
    max-width: 1080px;
`;

export const ChatCard = styled.div`
    background: #fff;
    box-shadow: 2px 5px 16px 0px rgba(0, 0, 0, 0.25);
    display: flex;
    margin-bottom: 30px;
    padding: 20px;

    @media screen and (max-width: 768px) {
        padding: 16px;
    }

    .innercard {
        display: flex;
        column-gap: 30px;

        @media screen and (max-width: 768px) {
            column-gap: 20px;
        }
    }

    .avatar {
        align-items: center;
        background-color: #1a4942;
        border-radius: 50%;
        display: flex;
        height: 50px;
        justify-content: center;
        min-width: 50px;
        width: 50px;

        @media screen and (max-width: 768px) {
            height: 35px;
            min-width: 35px;
            width: 35px;
        }

        @media screen and (max-width: 378px) {
            height: 27px;
            min-width: 27px;
            width: 27px;
        }

        p {
            color: #fff;
            font-size: 24px;
            font-weight: 600;

            @media screen and (max-width: 768px) {
                font-size: 20px;
            }

            @media screen and (max-width: 378px) {
                font-size: 16px;
            }
        }
    }

    .avatar.light-green {
        background-color: #40b36e;
    }

    h2 {
        color: #222;
        font-size: 18px;
        font-weight: 600;

        @media screen and (max-width: 768px) {
            font-size: 14px;
        }
    }

    .content {
        display: flex;
        flex-direction: column;
    }

    .body {
        color: rgba(34, 34, 34, 0.7);
        font-size: 12px;
        font-weight: 400;
        margin-top: 20px;
        max-width: 80%;

        @media screen and (max-width: 768px) {
            font-size: 10px;
        }

        @media screen and (max-width: 480px) {
            max-width: 94%;
        }
    }

    .time {
        align-self: flex-end;
        font-size: 12px;

        @media screen and (max-width: 768px) {
            font-size: 10px;
            margin-top: 10px;
        }
    }
`;
