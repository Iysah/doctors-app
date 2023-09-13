import styled from "styled-components";
import React, { useState } from "react";

const ToggleButton = () => {
    const [isopen, setOpen] = useState(false);
    return (
        <Toggle
            onClick={() => setOpen(!isopen)}
            $active={isopen}
            className="outer"
        >
            <div className="inner"></div>
        </Toggle>
    );
};

export default ToggleButton;

export const Toggle = styled.button`
    background-color: ${({ $active }) => ($active ? "#1A4942" : "#969696")};
    border-radius: 20rem;
    padding: 4px 6px;
    width: 50px;

    @media screen and (max-width: 480px) {
        padding: 2px 4px;
        width: 35px;
    }

    .inner {
        background-color: #fff;
        border-radius: 50%;
        height: 16px;
        width: 16px;

        transform: ${({ $active }) =>
            $active ? "translateX(0)" : "translateX(22px)"};
        transition: transform ease 200ms;

        @media screen and (max-width: 480px) {
            height: 12px;
            width: 12px;

            transform: ${({ $active }) =>
                $active ? "translateX(0)" : "translateX(15px)"};
        }
    }
`;
