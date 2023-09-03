import React from "react";
import LandingLayout from "../../../components/dashboard/layouts/main";
import Patients from "../../../components/dashboard/patients";

const Page = () => {
    return (
        <>
            <LandingLayout>
                <Patients />
            </LandingLayout>
        </>
    );
};

export const metadata = {
    title: "Theraswift | Dashboard - Patient",
    description: "Theraswift",
};

export default Page;
