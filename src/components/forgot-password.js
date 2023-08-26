"use client";

import { FullLogo } from "../assets";
import {
    BgGreen,
    BgWhite,
    InnerContainer,
    Wrapper,
    Logo,
    Title,
    Heading,
    Form,
    BgButton,
    SignUp,
    Prompt,
} from "../styles/auth.style";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ForgotPassword = () => {
    const router = useRouter();
    return (
        <Wrapper>
            <BgGreen>
                <div>
                    <Logo>
                        <Image src={FullLogo} alt="" />
                    </Logo>
                </div>
            </BgGreen>

            <BgWhite>
                <InnerContainer>
                    <Title>Theraswift | Connect</Title>
                    <Heading>Forget your password ?</Heading>
                    <p className="grey">
                        Enter your details to reset your password
                    </p>

                    <Form>
                        <label htmlFor="email">
                            Email
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                            />
                        </label>

                        <BgButton
                            type="button"
                            role="submit"
                            onClick={() => router.push("/get-started")}
                        >
                            Send
                        </BgButton>
                    </Form>

                    <Prompt
                        type="button"
                        onClick={() => router.push("/auth/login")}
                    >
                        Did you remembered your password? <span>Login</span>
                    </Prompt>
                </InnerContainer>
            </BgWhite>
        </Wrapper>
    );
};

export default ForgotPassword;
