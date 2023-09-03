import React from "react";
import HeaderOnlyLayout from "../../../../components/dashboard/layouts/header-only";
import Prescribe from "../../../../components/dashboard/prescribe";

const Page = () => {
    return (
        <>
            <HeaderOnlyLayout>
                <Prescribe />
            </HeaderOnlyLayout>
        </>
    );
};

export const metadata = {
    title: "Theraswift | Dashboard - Patient",
    description: "Theraswift",
};

export default Page;
