import React from "react";
import Chat from "../../../components/dashboard/chat";
import LayoutWithoutsort from "../../../components/dashboard/layouts/layout-without-sort";

const Page = () => {
    return (
        <>
            <LayoutWithoutsort>
                <Chat />
            </LayoutWithoutsort>
        </>
    );
};

export const metadata = {
    title: "Theraswift | Dashboard - Chat",
    description: "Theraswift",
};

export default Page;
