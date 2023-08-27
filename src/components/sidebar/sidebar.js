import React from "react";
import { Logo, MobileUser, Route, Routes, Wrapper } from "./styles";
import {
    ChatIcon,
    HMOAuthorizationIcon,
    PatientIcon,
    PendingPrescribersIcon,
    PharmacyIcon,
    SettingsIcon,
    WalletManagementIcon,
} from "../svg-icons";
import Image from "next/image";
import { FullLogo } from '../../assets/index'
import { usePathname } from "next/navigation";

const SideBar = () => {
    const pathname = usePathname();

    return (
        <Wrapper>
            <Logo>
                <Image
                    src={FullLogo}
                    width="214"
                    height="58"
                    alt="theraswift logo"
                />
            </Logo>

            <Routes>
                <div className="first">
                    <Route $active={pathname === "/"}>
                        <PharmacyIcon />
                        <span className="pr-first">Pharmacy Request</span>
                    </Route>

                    <Route $active={pathname === "/chat"}>
                        <ChatIcon />
                        <span>Chat</span>
                    </Route>

                    <Route $active={pathname === "/Patient"}>
                        <PatientIcon />
                        <span>Patient</span>
                    </Route>

                    <Route $active={pathname === "/hmo-authorization"}>
                        <HMOAuthorizationIcon />
                        <span>HMO Authorization</span>
                    </Route>

                    <Route $active={pathname === "/pending-prescribers"}>
                        <PendingPrescribersIcon />
                        <span>Pending Prescribers</span>
                    </Route>

                    {/* <Route $active={pathname === "/"}>
                        <span></span>
                    </Route> */}
                </div>

                <div className="second">
                    <Route $active={pathname === "/wallet-management"}>
                        <WalletManagementIcon />
                        <span>Wallet Management</span>
                    </Route>

                    <Route $active={pathname === "/settings"}>
                        <SettingsIcon />
                        <span>Settings</span>
                    </Route>
                </div>
            </Routes>

            <MobileUser></MobileUser>
        </Wrapper>
    );
};

export default SideBar;
