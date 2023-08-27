import React from "react";
import LandingLayout from "../../components/dashboard/layout";
import PharmacyRequest from '../../components/dashboard/pharmacy-request'

const IndexPage = () => {
    return (
        <>
            <LandingLayout>
                <PharmacyRequest />
            </LandingLayout>
        </>
    );
};

export const metadata = {
    title: "Theraswift | Dashboard",
    description: "Theraswift",
};

export default IndexPage;
