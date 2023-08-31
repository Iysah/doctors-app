import React from "react";
import LandingLayout from "../../../components/dashboard/layouts/main";
import PendingPrescribers from "../../../components/dashboard/pending-prescribers";

const Page = () => {
    return (
        <>
            <LandingLayout>
                <PendingPrescribers />
            </LandingLayout>
        </>
    );
};

export const metadata = {
    title: "Theraswift | Dashboard - Pending Prescribers",
    description: "Theraswift",
};

export default Page;
