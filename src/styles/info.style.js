import { styled } from "styled-components";
import { MaxContainer } from "./request.style";

export const IMaxContainer = styled(MaxContainer)`
    margin-top: 35px;
    h1 {
        text-align: center;
    }
`;

export const InfoItem = styled.div`
    margin-top: 50px;
    h2 {
        color: #1a4942;
    }

    .content {
        color: rgba(34, 34, 34, 0.7);
        font-size: 14px;
        font-weight: 400;
    }

    @media screen and (max-width: 768px) {
        font-size: 12px;
    }
`;
