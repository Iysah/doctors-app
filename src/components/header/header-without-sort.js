"use client";

import React from "react";
import {
    InnerContainerWithoutSort,
    User,
    UserWrapper,
    WrapperWithoutSort,
} from "./styles";
import Image from "next/image";

const Header = () => {
    return (
        <WrapperWithoutSort>
            <InnerContainerWithoutSort>
                <UserWrapper>
                    <div className="bell">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M12.02 2.91016C8.71003 2.91016 6.02003 5.60016 6.02003 8.91016V11.8002C6.02003 12.4102 5.76003 13.3402 5.45003 13.8602L4.30003 15.7702C3.59003 16.9502 4.08003 18.2602 5.38003 18.7002C9.69003 20.1402 14.34 20.1402 18.65 18.7002C19.86 18.3002 20.39 16.8702 19.73 15.7702L18.58 13.8602C18.28 13.3402 18.02 12.4102 18.02 11.8002V8.91016C18.02 5.61016 15.32 2.91016 12.02 2.91016Z"
                                stroke="#CCCCCC"
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                            />
                            <path
                                d="M13.87 3.19994C12.6607 2.85553 11.3793 2.85553 10.17 3.19994C10.46 2.45994 11.18 1.93994 12.02 1.93994C12.86 1.93994 13.58 2.45994 13.87 3.19994V3.19994Z"
                                stroke="#CCCCCC"
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M15.02 19.0601C15.02 20.7101 13.67 22.0601 12.02 22.0601C11.2 22.0601 10.44 21.7201 9.90002 21.1801C9.33818 20.6174 9.02181 19.8552 9.02002 19.0601"
                                stroke="#CCCCCC"
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                            />
                            <circle
                                cx="18"
                                cy="4"
                                r="3.5"
                                fill="#FED440"
                                stroke="white"
                            />
                        </svg>
                    </div>

                    <User>
                        <div className="image">
                            <Image
                                src="/user-pic.png"
                                alt="user"
                                width="40"
                                height="40"
                            />
                        </div>

                        <div className="info">
                            <p className="name">Medison Hospital</p>
                            <p className="email">medison@gmail.com</p>
                            <p className="code">T000001</p>
                        </div>
                    </User>
                </UserWrapper>
            </InnerContainerWithoutSort>
        </WrapperWithoutSort>
    );
};

export default Header;
