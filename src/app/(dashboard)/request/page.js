import React from "react";
import HeaderOnlyLayout from "../../../components/dashboard/layouts/header-only";
import Request from "../../../components/dashboard/request";

const Page = () => {
    return (
        <>
            <HeaderOnlyLayout>
                <Request />
            </HeaderOnlyLayout>
        </>
    );
};

export const metadata = {
    title: "Theraswift | Dashboard",
    description: "Theraswift",
};

export default Page;
