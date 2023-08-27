"use client";

import React from "react";

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
                    <div className="grid">
                        {/* grid heading */}
                        <p className="time grid-heading no-border">Time</p>
                        <p className="info grid-heading no-border">
                            Info needed for HMO authorization
                        </p>
                        <p className="no-border"></p>
                        <p className="patient grid-heading no-border">
                            Patient
                        </p>
                        <p className="prescriber grid-heading no-border">
                            Prescriber
                        </p>
                        <p className="med grid-heading no-border">Medication</p>

                        {/* first row */}
                        <p className="time border-left">17:14</p>
                        <p className="info">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad
                        </p>
                        <p></p>
                        <p className="patient">Ibrahim Sani</p>
                        <p className="prescriber">Ben Sani</p>
                        <p className="med border-right">Paracetamol</p>

                        {/* second row */}
                        <p className="time border-left">1:00</p>
                        <p className="info">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad
                        </p>
                        <p></p>
                        <p className="patient">Ibrahim Sani</p>
                        <p className="prescriber">Ben Sani</p>
                        <p className="med border-right">Paracetamol</p>

                        {/* third row */}
                        <p className="time border-left border-bottom">
                            Yesterday
                        </p>
                        <p className="info border-bottom">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad
                        </p>
                        <p className="border-bottom"></p>
                        <p className="patient border-bottom">Ibrahim Sani</p>
                        <p className="prescriber border-bottom">Ben Sani</p>
                        <p className="med border-right border-bottom">
                            Paracetamol
                        </p>
                    </div>
                </Grid>

                <Grid>
                    <div className="grid">
                        {/* grid heading */}
                        <p className="time grid-heading no-border">Time</p>
                        <p className="info grid-heading no-border">
                            Prescription Clarification
                        </p>
                        <p className="no-border"></p>
                        <p className="patient grid-heading no-border">
                            Patient
                        </p>
                        <p className="prescriber grid-heading no-border">
                            Prescriber
                        </p>
                        <p className="med grid-heading no-border">Medication</p>

                        {/* first row */}
                        <p className="time border-left">17:14</p>
                        <p className="info">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad
                        </p>
                        <p></p>
                        <p className="patient">Ibrahim Sani</p>
                        <p className="prescriber">Ben Sani</p>
                        <p className="med border-right">Paracetamol</p>

                        {/* second row */}
                        <p className="time border-left">1:00</p>
                        <p className="info">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad
                        </p>
                        <p></p>
                        <p className="patient">Ibrahim Sani</p>
                        <p className="prescriber">Ben Sani</p>
                        <p className="med border-right">Paracetamol</p>

                        {/* third row */}
                        <p className="time border-left border-bottom">
                            Yesterday
                        </p>
                        <p className="info border-bottom">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad
                        </p>
                        <p className="border-bottom"></p>
                        <p className="patient border-bottom">Ibrahim Sani</p>
                        <p className="prescriber border-bottom">Ben Sani</p>
                        <p className="med border-right border-bottom">
                            Paracetamol
                        </p>
                    </div>
                </Grid>

                <Grid>
                    <div className="grid">
                        {/* grid heading */}
                        <p className="time grid-heading no-border">Time</p>
                        <p className="info grid-heading no-border">
                            Therapeutic Substitution
                        </p>
                        <p className="no-border"></p>
                        <p className="patient grid-heading no-border">
                            Patient
                        </p>
                        <p className="prescriber grid-heading no-border">
                            Prescriber
                        </p>

                        <p className="med grid-heading no-border">Medication</p>

                        {/* first row */}
                        <p className="time border-left">17:14</p>
                        <p className="info">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad
                        </p>
                        <p></p>
                        <p className="patient">Ibrahim Sani</p>
                        <p className="prescriber">Ben Sani</p>
                        <p className="med border-right">Paracetamol</p>

                        {/* second row */}
                        <p className="time border-left">1:00</p>
                        <p className="info">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad
                        </p>
                        <p></p>
                        <p className="patient">Ibrahim Sani</p>
                        <p className="prescriber">Ben Sani</p>
                        <p className="med border-right">Paracetamol</p>

                        {/* third row */}
                        <p className="time border-left border-bottom">
                            Yesterday
                        </p>
                        <p className="info border-bottom">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad
                        </p>
                        <p className="border-bottom"></p>
                        <p className="patient border-bottom">Ibrahim Sani</p>
                        <p className="prescriber border-bottom">Ben Sani</p>
                        <p className="med border-right border-bottom">
                            Paracetamol
                        </p>
                    </div>
                </Grid>
            </GridContainer>

            <GridContainer>
                <Heading2>Newest Theraswift Message</Heading2>

                <Grid>
                    <div className="grid">
                        {/* first row */}
                        <p className="time border-left">17:14</p>
                        <p className="info">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad
                        </p>
                        <p></p>
                        <p className="patient">Ibrahim Sani</p>
                        <p className="prescriber">Ben Sani</p>
                        <p className="med border-right">Paracetamol</p>

                        {/* second row */}
                        <p className="time border-left">1:00</p>
                        <p className="info">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad
                        </p>
                        <p></p>
                        <p className="patient">Ibrahim Sani</p>
                        <p className="prescriber">Ben Sani</p>
                        <p className="med border-right">Paracetamol</p>

                        {/* third row */}
                        <p className="time border-left">Yesterday</p>
                        <p className="info">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad
                        </p>
                        <p className=""></p>
                        <p className="patient ">Ibrahim Sani</p>
                        <p className="prescriber">Ben Sani</p>
                        <p className="med border-right">Paracetamol</p>

                        {/* first row */}
                        <p className="time border-left">17:14</p>
                        <p className="info">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad
                        </p>
                        <p></p>
                        <p className="patient">Ibrahim Sani</p>
                        <p className="prescriber">Ben Sani</p>
                        <p className="med border-right">Paracetamol</p>

                        {/* second row */}
                        <p className="time border-left">1:00</p>
                        <p className="info">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad
                        </p>
                        <p></p>
                        <p className="patient">Ibrahim Sani</p>
                        <p className="prescriber">Ben Sani</p>
                        <p className="med border-right">Paracetamol</p>

                        {/* third row */}
                        <p className="time border-left border-bottom">
                            Yesterday
                        </p>
                        <p className="info border-bottom">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad
                        </p>
                        <p className="border-bottom"></p>
                        <p className="patient border-bottom">Ibrahim Sani</p>
                        <p className="prescriber border-bottom">Ben Sani</p>
                        <p className="med border-right border-bottom">
                            Paracetamol
                        </p>
                    </div>
                </Grid>
            </GridContainer>
        </Wrapper>
    );
};

export default PharmacyRequest;
