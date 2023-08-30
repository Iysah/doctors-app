"use client";

import React from "react";
import { ChildrenContainer, Wrapper } from "../../../styles/layout.style";

import Header from "../../header/header-without-sort";

const HeaderOnlyLayout = ({ children }) => {
    return (
        <Wrapper>
            <ChildrenContainer>
                <Header />
                <>{children}</>
            </ChildrenContainer>
        </Wrapper>
    );
};

export default HeaderOnlyLayout;
