"use client";

import React from "react";
import Header from '../header/header'
import {
    Grid,
    GridContainer,
    GridOne,
    Heading1,
    Heading2,
    RequestCard,
    Wrapper,
} from "../../styles/dashboard.style";

const PharmacyRequest = () => {
    return (
        <Wrapper>
            <Heading1>Pharmacy Request</Heading1>

            <RequestCard>
                <h3>Good Morning Ben!</h3>
                <p>
                    You Have Unresolved Pharmacy Request
                    <span>
                        In order to continue providing excellent care for your
                        patients , Please respond to Theraswift’s request ASAP
                    </span>
                </p>
            </RequestCard>

            <GridContainer>
                <Heading2>Newest Pharmacy Request </Heading2>

                <Grid>
                    <div className="grid grid-heading">
                        <p className="time">Time</p>
                        <p className="info">
                            Info needed for HMO authorization
                        </p>
                        <p className="patient">Patient</p>
                        <p className="prescriber">Prescriber</p>
                        <p className="med">Medication</p>
                    </div>

                    <div className="grid top-border">
                        <p className="time">17:14</p>
                        <p className="info">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad
                        </p>
                        <p className="patient">Ibrahim Sani</p>
                        <p className="prescriber">Ben Sani</p>
                        <p className="med">Paracetamol</p>
                    </div>

                    <div className="grid">
                        <p className="time">1:00</p>
                        <p className="info">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad
                        </p>
                        <p className="patient">Ibrahim Sani</p>
                        <p className="prescriber">Ben Sani</p>
                        <p className="med">Paracetamol</p>
                    </div>

                    <div className="grid">
                        <p className="time">Yesterday</p>
                        <p className="info">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad
                        </p>
                        <p className="patient">Ibrahim Sani</p>
                        <p className="prescriber">Ben Sani</p>
                        <p className="med">Paracetamol</p>
                    </div>
                </Grid>

                <Grid>
                    <div className="grid grid-heading">
                        <p className="time">Time</p>
                        <p className="info">Prescription Clarification</p>
                        <p className="patient">Patient</p>
                        <p className="prescriber">Prescriber</p>
                        <p className="med">Medication</p>
                    </div>

                    <div className="grid top-border">
                        <p className="time">17:14</p>
                        <p className="info">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad
                        </p>
                        <p className="patient">Ibrahim Sani</p>
                        <p className="prescriber">Ben Sani</p>
                        <p className="med">Paracetamol</p>
                    </div>

                    <div className="grid">
                        <p className="time">1:00</p>
                        <p className="info">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad
                        </p>
                        <p className="patient">Ibrahim Sani</p>
                        <p className="prescriber">Ben Sani</p>
                        <p className="med">Paracetamol</p>
                    </div>

                    <div className="grid">
                        <p className="time">Yesterday</p>
                        <p className="info">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad
                        </p>
                        <p className="patient">Ibrahim Sani</p>
                        <p className="prescriber">Ben Sani</p>
                        <p className="med">Paracetamol</p>
                    </div>
                </Grid>

                <Grid>
                    <div className="grid grid-heading">
                        <p className="time">Time</p>
                        <p className="info">Therapeutic Substitution</p>
                        <p className="patient">Patient</p>
                        <p className="prescriber">Prescriber</p>
                        <p className="med">Medication</p>
                    </div>

                    <div className="grid top-border">
                        <p className="time">17:14</p>
                        <p className="info">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad
                        </p>
                        <p className="patient">Ibrahim Sani</p>
                        <p className="prescriber">Ben Sani</p>
                        <p className="med">Paracetamol</p>
                    </div>

                    <div className="grid">
                        <p className="time">1:00</p>
                        <p className="info">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad
                        </p>
                        <p className="patient">Ibrahim Sani</p>
                        <p className="prescriber">Ben Sani</p>
                        <p className="med">Paracetamol</p>
                    </div>

                    <div className="grid">
                        <p className="time">Yesterday</p>
                        <p className="info">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad
                        </p>
                        <p className="patient">Ibrahim Sani</p>
                        <p className="prescriber">Ben Sani</p>
                        <p className="med">Paracetamol</p>
                    </div>
                </Grid>
            </GridContainer>

            <GridContainer>
                <Heading2>Newest Theraswift Message</Heading2>

                <Grid>
                    <div className="grid top-border">
                        <p className="time">17:14</p>
                        <p className="info">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad
                        </p>
                        <p className="patient">Ibrahim Sani</p>
                        <p className="prescriber">Ben Sani</p>
                        <p className="med">Paracetamol</p>
                    </div>

                    <div className="grid">
                        <p className="time">1:00</p>
                        <p className="info">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad
                        </p>
                        <p className="patient">Ibrahim Sani</p>
                        <p className="prescriber">Ben Sani</p>
                        <p className="med">Paracetamol</p>
                    </div>

                    <div className="grid">
                        <p className="time">Yesterday</p>
                        <p className="info">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad
                        </p>
                        <p className="patient">Ibrahim Sani</p>
                        <p className="prescriber">Ben Sani</p>
                        <p className="med">Paracetamol</p>
                    </div>

                    <div className="grid">
                        <p className="time">17:14</p>
                        <p className="info">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad
                        </p>
                        <p className="patient">Ibrahim Sani</p>
                        <p className="prescriber">Ben Sani</p>
                        <p className="med">Paracetamol</p>
                    </div>

                    <div className="grid">
                        <p className="time">1:00</p>
                        <p className="info">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad
                        </p>
                        <p className="patient">Ibrahim Sani</p>
                        <p className="prescriber">Ben Sani</p>
                        <p className="med">Paracetamol</p>
                    </div>

                    <div className="grid">
                        <p className="time">Yesterday</p>
                        <p className="info">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad
                        </p>
                        <p className="patient">Ibrahim Sani</p>
                        <p className="prescriber">Ben Sani</p>
                        <p className="med">Paracetamol</p>
                    </div>
                </Grid>
            </GridContainer>
        </Wrapper>
    );
};

export default PharmacyRequest;
