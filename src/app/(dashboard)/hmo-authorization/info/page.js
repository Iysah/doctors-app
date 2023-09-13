import React from "react";
import HeaderOnlyLayout from "../../../../components/dashboard/layouts/header-only";
import Info from "../../../../components/dashboard/info";

const Page = () => {
    return (
        <>
            <HeaderOnlyLayout>
                <Info />
            </HeaderOnlyLayout>
        </>
    );
};

export const metadata = {
    title: "Theraswift | Dashboard - HMO Authorization",
    description: "Theraswift",
};

export default Page;
