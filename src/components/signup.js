"use client";
import { FullLogo, right, how_it_works } from "../assets";
import {
    BgGreen,
    BgWhite,
    InnerContainer,
    Wrapper,
    Logo,
    Title,
    Heading,
    Form,
    Button,
    ColoredButton,
    BgButton,
    Prompt,
    Info,
    ShowCase,
    HowItWorks,
} from "../styles/auth.style";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { EyeIcon } from "./svg-icons";

const SignUp = () => {
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
                    <Heading>Create your account</Heading>
                    <p className="grey">Join other doctors using Theraswift</p>

                    <Form>
                        <label htmlFor="first-name">
                            First Name
                            <input
                                type="name"
                                id="first-name"
                                placeholder="Enter your name"
                            />
                        </label>

                        <label htmlFor="surname">
                            Surname
                            <input
                                type="name"
                                id="surname"
                                placeholder="Enter your surname"
                            />
                        </label>

                        <label htmlFor="email">
                            Email
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                            />
                        </label>

                        <label htmlFor="title">
                            Select title
                            <input
                                type="title"
                                id="title"
                                placeholder="Select your title"
                            />
                        </label>

                        <label htmlFor="Password">
                            Password
                            <span className="input">
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Password"
                                />
                                <span className="eye-icon">
                                    <EyeIcon />
                                </span>
                            </span>
                        </label>

                        <label htmlFor="Password">
                            Confirm Password
                            <span className="input">
                                <input
                                    type="password"
                                    id="confirm-password"
                                    placeholder="Confirm Password"
                                />
                                <span className="eye-icon">
                                    <EyeIcon />
                                </span>
                            </span>
                        </label>

                        <BgButton
                            type="button"
                            role="submit"
                            onClick={() => router.push("/get-started")}
                        >
                            Create
                        </BgButton>

                        <label className="checkbox" htmlFor="checkbox">
                            <input type="radio" id="checkbox" />
                            By signing up, you agree to Our
                            <span>Term and & Conditions </span> and
                            <span> Privacy Policy </span>
                        </label>
                    </Form>

                    <Prompt
                        type="button"
                        onClick={() => router.push("/auth/login")}
                    >
                        Already have an account? <span>Login</span>
                    </Prompt>

                    <HowItWorks>
                        <h2>How It Works</h2>
                        <p className="green">STEP 1</p>
                        <Image src={how_it_works} alt="" />

                        <div className="content">
                            <p>
                                E prescribe to Theraswift <span>Rx</span>
                            </p>
                            <p>Or</p>
                            <p>send prescription by phone to:</p>
                            <p> 09065783958</p>
                        </div>

                        <div className="absolute">
                            <Image src={right} alt="" />
                        </div>
                    </HowItWorks>
                </InnerContainer>
            </BgWhite>
        </Wrapper>
    );
};

export default SignUp;
