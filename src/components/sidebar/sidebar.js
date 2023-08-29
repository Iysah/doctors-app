import React, { useEffect, useRef } from "react";
import { Logo, Route, Routes, Wrapper } from "./styles";
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
import { FullLogo } from "../../assets/index";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../../redux/slices/toggle-mobile-nav";

const SideBar = () => {
    const pathname = usePathname();
    const ref = useRef(null);
    const isMenuOpen = useSelector((state) => state.toggle.isMenuOpen);

    const dispatch = useDispatch();

    useEffect(() => {
        const hideNavBar = () => {
            if (!ref?.current || ref?.current.contains(event.target)) {
                return;
            }

            if (isMenuOpen !== false) {
                dispatch(toggle());
            }
        };

        document.addEventListener("click", hideNavBar);

        return () => {
            document.removeEventListener("click", hideNavBar);
        };
    }, [isMenuOpen]);

    return (
        <Wrapper $isOpen={isMenuOpen}>
            <div className="inner-container" ref={ref}>
                <div>
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
                                <span className="pr-first">
                                    Pharmacy Request
                                </span>
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

                            <Route
                                $active={pathname === "/pending-prescribers"}
                            >
                                <PendingPrescribersIcon />
                                <span>Pending Prescribers</span>
                            </Route>

                            {/* <Route $active={pathname === "/"}>
                        <span></span>
                    </Route> */}
                        </div>
                    </Routes>
                </div>

                <Routes>
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
            </div>
        </Wrapper>
    );
};

export default SideBar;
