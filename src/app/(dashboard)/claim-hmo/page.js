import React from "react";
import LayoutWithoutsort from "../../../components/dashboard/layouts/layout-without-sort";
import ClaimHMO from "../../../components/dashboard/claim-hmo";

const Page = () => {
    return (
        <>
            <LayoutWithoutsort>
                <ClaimHMO />
            </LayoutWithoutsort>
        </>
    );
};

export const metadata = {
    title: "Theraswift | Dashboard - Claim HMO",
    description: "Theraswift",
};

export default Page;
