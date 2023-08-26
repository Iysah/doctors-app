"use client";

import { FullLogo } from "../assets";

import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import {
    BgGreen,
    BgWhite,
    InnerContainer,
    Wrapper,
    Logo,
    Title,
    Heading,
    Form,
    ColoredButton,
    BgButton,
    Info,
    ShowCase,
    Prompt,
} from "../styles/auth.style";

const Login = () => {
    const router = useRouter();

    return (
        <Wrapper>
            <BgGreen>
                <div>
                    <Logo>
                        <Image src={FullLogo} alt="Logo" />
                    </Logo>
                </div>
            </BgGreen>

            <BgWhite>
                <InnerContainer>
                    <Title>Theraswift | Connect</Title>
                    <Heading>Welcome to Theraswift connect!</Heading>
                    <p className="grey">Please log in to your account</p>

                    <Form>
                        <label htmlFor="email">
                            Email
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                            />
                        </label>

                        <label htmlFor="Password">
                            Password
                            <input
                                type="password"
                                id="password"
                                placeholder="Password"
                            />
                        </label>

                        <ColoredButton
                            type="button"
                            onClick={() => router.push("/auth/forgot-password")}
                        >
                            Forgot your password?
                        </ColoredButton>

                        <BgButton
                            type="button"
                            role="submit"
                            onClick={() => router.push("/get-started")}
                        >
                            Log in
                        </BgButton>
                    </Form>

                    <Prompt
                        type="button"
                        onClick={() => router.push("/auth/signup")}
                    >
                        Don’t have an account? <span>Sign up</span>
                    </Prompt>

                    <div className="large-screen-only">
                        <Info>
                            On average, practices save 3+ hours every day with
                            Theraswift & Theraswift connect
                        </Info>

                        <ShowCase>
                            <div className="item">
                                <Image
                                    src={"/benefits.png"}
                                    alt=""
                                    width="180"
                                    height="140"
                                />
                                <h2>Benefits coordination</h2>
                                <p className="content">
                                    we will jump on the phone with insurance and
                                    handle patients benefits
                                </p>
                            </div>

                            <div className="item">
                                <Image
                                    src={"/skip.png"}
                                    alt=""
                                    width="180"
                                    height="140"
                                />
                                <h2>Skip The paper work </h2>
                                <p className="content"></p>
                            </div>

                            <div className="item">
                                <Image
                                    src={"/more.png"}
                                    alt=""
                                    width="180"
                                    height="140"
                                />
                                <h2>And more </h2>
                                <p className="content">
                                    We hand over their prescription review
                                    refills and more
                                </p>
                            </div>
                        </ShowCase>
                    </div>
                </InnerContainer>
            </BgWhite>
        </Wrapper>
    );
};

export default Login;
