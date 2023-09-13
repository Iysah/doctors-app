import React from "react";
import LayoutWithoutsort from "../../../components/dashboard/layouts/layout-without-sort";
import Wallet from "../../../components/dashboard/wallet";

const Page = () => {
    return (
        <>
            <LayoutWithoutsort>
                <Wallet />
            </LayoutWithoutsort>
        </>
    );
};

export const metadata = {
    title: "Theraswift | Dashboard - Wallet",
    description: "Theraswift",
};

export default Page;
