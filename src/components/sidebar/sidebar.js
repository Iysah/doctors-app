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
import { usePathname, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../../redux/slices/toggle-mobile-nav";

const SideBar = () => {
    const pathname = usePathname();
    const router = useRouter();

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

    //change current route
    const changeRoute = (key) => {
        dispatch(toggle());

        switch (key) {
            case "/":
                router.push(key);
                break;

            case "/chat":
                router.push(key);
                break;

            case "/patient":
                router.push(key);
                break;

            case "/hmo-authorization":
                router.push(key);
                break;

            case "/pending-prescribers":
                router.push(key);
                break;

            default:
                router.push("/");
                break;
        }
    };

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
                            <Route
                                $active={pathname === "/"}
                                onClick={() => changeRoute("/")}
                            >
                                <PharmacyIcon />
                                <span className="pr-first">
                                    Pharmacy Request
                                </span>
                            </Route>

                            <Route
                                $active={pathname === "/chat"}
                                onClick={() => changeRoute("/chat")}
                            >
                                <ChatIcon />
                                <span>Chat</span>
                            </Route>

                            <Route
                                $active={pathname === "/patient"}
                                onClick={() => changeRoute("/patient")}
                            >
                                <PatientIcon />
                                <span>Patient</span>
                            </Route>

                            <Route
                                $active={pathname === "/hmo-authorization"}
                                onClick={() =>
                                    changeRoute("/hmo-authorization")
                                }
                            >
                                <HMOAuthorizationIcon />
                                <span>HMO Authorization</span>
                            </Route>

                            <Route
                                $active={pathname === "/pending-prescribers"}
                                onClick={() =>
                                    changeRoute("/pending-prescribers")
                                }
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
