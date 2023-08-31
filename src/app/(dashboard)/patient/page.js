import React from "react";
import LandingLayout from "../../../components/dashboard/layouts/main";
import Patient from "../../../components/dashboard/patient";

const Page = () => {
    return (
        <>
            <LandingLayout>
                <Patient />
            </LandingLayout>
        </>
    );
};

export const metadata = {
    title: "Theraswift | Dashboard - Patient",
    description: "Theraswift",
};

export default Page;
