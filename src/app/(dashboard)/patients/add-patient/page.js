import React from "react";
import HeaderOnlyLayout from "../../../../components/dashboard/layouts/header-only";
import AddPatient from "../../../../components/dashboard/add-patient";

const Page = () => {
    return (
        <>
            <HeaderOnlyLayout>
                <AddPatient />
            </HeaderOnlyLayout>
        </>
    );
};

export const metadata = {
    title: "Theraswift | Dashboard - Patient",
    description: "Theraswift",
};

export default Page;
