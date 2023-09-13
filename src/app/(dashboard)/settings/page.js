import React from "react";
import LayoutWithoutsort from "../../../components/dashboard/layouts/layout-without-sort";
import Settings from "../../../components/dashboard/settings";

const Page = () => {
    return (
        <>
            <LayoutWithoutsort>
                <Settings />
            </LayoutWithoutsort>
        </>
    );
};

export const metadata = {
    title: "Theraswift | Dashboard - Settings",
    description: "Theraswift",
};

export default Page;
