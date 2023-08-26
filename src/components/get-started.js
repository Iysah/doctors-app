"use client";

import React from "react";
import {
    Heading,
    Title,
    RadioButtons,
    Wrapper,
    Instruction,
    Form,
    Submit,
    Buttons,
    Logout,
    Email,
} from "../styles/get-started.style";

const GetStarted = () => {
    return (
        <Wrapper>
            <div>
                <Title>Theraswift | Connect</Title>
                <Heading>Lets get you set up with your clinic </Heading>
                <p className="grey">
                    We need to add yor clinic to Theraswift connect
                </p>
            </div>

            <RadioButtons>
                <label htmlFor="have-code">
                    <input type="radio" id="have-code" />I have a Theraswift
                    clinic code
                </label>

                <label htmlFor="need-code">
                    <input type="radio" id="need-code" />I need a Theraswift
                    clinic code
                </label>
            </RadioButtons>

            <Instruction>
                Please enter your Theraswift clinic code. This is used to
                validate your clinic
            </Instruction>

            <Form>
                <label htmlFor="code">
                    Clinic Code
                    <input
                        type="text"
                        id="code"
                        placeholder="Enter your clinic code"
                    />
                </label>

                <p>
                    This is a unique code generated specifically for your clinic{" "}
                </p>
                <Buttons>
                    <Submit>Submit</Submit>
                    <Logout>Log out</Logout>
                </Buttons>
            </Form>

            <Email>
                <p className="black">Need help? Email </p>
                <p className="green">help@theraswift.com</p>
            </Email>
        </Wrapper>
    );
};

export default GetStarted;
