"use client";

import React from "react";
import { ChildrenContainer, Wrapper } from "../../../styles/layout.style";
import SideBar from "../../sidebar/sidebar";
import Header from "../../header/header-without-sort-mobile";

const LayoutWithoutSort = ({ children }) => {
    return (
        <Wrapper>
            <SideBar />
            <ChildrenContainer>
                <Header />
                <>{children}</>
            </ChildrenContainer>
        </Wrapper>
    );
};

export default LayoutWithoutSort;
