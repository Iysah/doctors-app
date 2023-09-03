import { styled } from "styled-components";

export const MaxContainer = styled.div`
    max-width: 700px;
    margin: auto;
    margin-top: 30px;
`;

export const Form = styled.div`
    margin-top: 35px;

    label {
        display: block;
        margin-bottom: 20px;

        span {
            color: #222;
            display: block;
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 8px;

            @media screen and (max-width: 768px) {
                font-size: 14px;
            }
        }

        input {
            border-radius: 8px;
            border: 2.065px solid rgba(17, 71, 124, 0.2);
            background: #fff;
            color: rgba(34, 34, 34, 0.4);
            display: block;
            font-family: "Poppins";
            font-size: 16px;
            font-weight: 400;
            padding: 10px 15px;
            width: 100%;

            @media screen and (max-width: 768px) {
                font-size: 14px;
            }

            &:focus {
                color: rgba(34, 34, 34);
                outline-color: #777;
            }
        }
    }

    label.record {
        input {
            display: none;
        }

        .input {
            align-items: center;
            background: #fff;
            border-radius: 10px;
            border: 2px dashed rgba(17, 71, 124, 0.2);
            display: flex;
            justify-content: center;
            padding: 10px;
            width: 100%;

            @media screen and (max-width: 650px) {
                padding: 8px;

                svg {
                    height: 30px;
                    width: 30px;
                }
            }

            span {
                color: #0f5d52;
                font-size: 16px;
                font-weight: 600;
                margin-left: 10px;
                margin-top: 3px;

                @media screen and (max-width: 650px) {
                    font-size: 14px;
                }
            }
        }
    }

    .error-message {
        color: #ed0303;
        font-size: 14px;
        font-weight: 400;

        @media screen and (max-width: 650px) {
            font-size: 12px;
        }
    }
`;

export const Sumbit = styled.button`
    border-radius: 8px;
    background: #0e5f53;
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    padding: 10px;
    width: 100%;

    margin: 50px 0 20px;

    @media screen and (max-width: 650px) {
        font-size: 16px;
    }
`;

export const Prescribe = styled.button`
    border-radius: 8px;
    border: 2px solid #0e5f53;
    color: #0e5f53;
    /* font-family: Poppins; */
    font-size: 18px;
    font-weight: 500;
    padding: 8px;
    width: 100%;

    @media screen and (max-width: 650px) {
        font-size: 16px;
    }
`;

//----------------------Prescribe Page----------------------//

export const SumbitForPrescribe = styled(Sumbit)`
    margin: 20px 0;
`;
