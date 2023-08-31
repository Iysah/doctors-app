import React from "react";
import LayoutWithoutsort from "../../../components/dashboard/layouts/layout-without-sort";
import HMOAuthorization from "../../../components/dashboard/hmo-authorization";

const Page = () => {
    return (
        <>
            <LayoutWithoutsort>
                <HMOAuthorization />
            </LayoutWithoutsort>
        </>
    );
};

export const metadata = {
    title: "Theraswift | Dashboard - HMO",
    description: "Theraswift",
};

export default Page;
