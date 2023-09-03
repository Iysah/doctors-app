import React from "react";
import HeaderOnlyLayout from "../../../../components/dashboard/layouts/header-only";
import Patient from "../../../../components/dashboard/patient";

const Page = () => {
    return (
        <>
            <HeaderOnlyLayout>
                <Patient />
            </HeaderOnlyLayout>
        </>
    );
};

export const metadata = {
    title: "Theraswift | Dashboard - Patient",
    description: "Theraswift",
};

export default Page;
