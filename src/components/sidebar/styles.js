import { styled } from "styled-components";

export const Wrapper = styled.div`
    height: 100%;

    position: sticky;
    top: 0;
    z-index: 11;

    div.inner-container {
        border-radius: 0px 48px 48px 0px;
        background: linear-gradient(
            180deg,
            #1a4942 0%,
            #1a4942 54.41%,
            #1a4942 77.29%,
            #0e6154 99.48%
        );
        padding: 60px 0;
        min-width: 285px;
        min-height: 100vh;
    }

    @media screen and (max-width: 1000px) {
        background: rgba(0, 0, 0, 0.4);
        width: 100%;

        position: fixed;
        /* visibility: hidden; */
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        div.inner-container {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100%;
            max-width: 285px;
            overflow-y: auto;
        }
    }
`;

export const Logo = styled.div`
    display: flex;
    justify-content: center;
`;

export const Routes = styled.div`
    margin-top: 70px;

    .second {
        margin-top: 50px;
    }
`;

export const Route = styled.button`
    align-items: center;
    display: flex;
    padding: 12.5px 20px 12.5px 50px;
    position: relative;

    @media screen and (max-width: 1000px) {
        padding: 20px 20px 20px 50px;
    }

    svg > path {
        fill: ${({ $active }) => ($active ? "#fff" : "#C2C0FF")};
    }

    span {
        color: ${({ $active }) => ($active ? "#fff" : "#C2C0FF")};
        font-family: "Poppins";
        font-size: 14px;
        font-weight: ${({ $active }) => ($active ? "600" : "500")};
        padding-left: 14px;
    }

    .pr-first {
        /* fix svg default padding */
        padding-left: 7px;
    }

    &::before {
        background-color: #fff;
        border-radius: 0px 48px 48px 0px;
        content: "";
        display: ${({ $active }) => ($active ? "block" : "none")};
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        width: 3px;
    }
`;

export const MobileUser = styled.div``;
