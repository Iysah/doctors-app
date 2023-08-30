"use client";

import React from "react";

import {
    Grid,
    GridContainer,
    Heading1,
    Heading2,
    RequestCard,
    Wrapper,
} from "../../styles/dashboard.style";
import { useRouter } from "next/navigation";

const PharmacyRequest = () => {
    const router = useRouter();

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
                        <p
                            className="time border-left"
                            onClick={() => router.push("/request")}
                        >
                            17:14
                        </p>
                        <p
                            className="info"
                            onClick={() => router.push("/request")}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad
                        </p>
                        <p onClick={() => router.push("/request")}></p>
                        <p
                            className="patient"
                            onClick={() => router.push("/request")}
                        >
                            Ibrahim Sani
                        </p>
                        <p
                            className="prescriber"
                            onClick={() => router.push("/request")}
                        >
                            Ben Sani
                        </p>
                        <p
                            className="med border-right"
                            onClick={() => router.push("/request")}
                        >
                            Paracetamol
                        </p>

                        {/* second row */}
                        <p className="time border-left">1:00</p>
                        <p
                            className="info"
                            onClick={() => router.push("/request")}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad
                        </p>
                        <p onClick={() => router.push("/request")}></p>
                        <p
                            className="patient"
                            onClick={() => router.push("/request")}
                        >
                            Ibrahim Sani
                        </p>
                        <p
                            className="prescriber"
                            onClick={() => router.push("/request")}
                        >
                            Ben Sani
                        </p>
                        <p
                            className="med border-right"
                            onClick={() => router.push("/request")}
                        >
                            Paracetamol
                        </p>

                        {/* third row */}
                        <p
                            className="time border-left border-bottom"
                            onClick={() => router.push("/request")}
                        >
                            Yesterday
                        </p>
                        <p
                            className="info border-bottom"
                            onClick={() => router.push("/request")}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad
                        </p>
                        <p
                            className="border-bottom"
                            onClick={() => router.push("/request")}
                        ></p>
                        <p
                            className="patient border-bottom"
                            onClick={() => router.push("/request")}
                        >
                            Ibrahim Sani
                        </p>
                        <p
                            className="prescriber border-bottom"
                            onClick={() => router.push("/request")}
                        >
                            Ben Sani
                        </p>
                        <p
                            className="med border-right border-bottom"
                            onClick={() => router.push("/request")}
                        >
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
                        <p
                            className="time border-left"
                            onClick={() => router.push("/request")}
                        >
                            17:14
                        </p>
                        <p
                            className="info"
                            onClick={() => router.push("/request")}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad
                        </p>
                        <p onClick={() => router.push("/request")}></p>
                        <p
                            className="patient"
                            onClick={() => router.push("/request")}
                        >
                            Ibrahim Sani
                        </p>
                        <p
                            className="prescriber"
                            onClick={() => router.push("/request")}
                        >
                            Ben Sani
                        </p>
                        <p
                            className="med border-right"
                            onClick={() => router.push("/request")}
                        >
                            Paracetamol
                        </p>

                        {/* second row */}
                        <p
                            className="time border-left"
                            onClick={() => router.push("/request")}
                        >
                            1:00
                        </p>
                        <p
                            className="info"
                            onClick={() => router.push("/request")}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad
                        </p>
                        <p onClick={() => router.push("/request")}></p>
                        <p
                            className="patient"
                            onClick={() => router.push("/request")}
                        >
                            Ibrahim Sani
                        </p>
                        <p
                            className="prescriber"
                            onClick={() => router.push("/request")}
                        >
                            Ben Sani
                        </p>
                        <p
                            className="med border-right"
                            onClick={() => router.push("/request")}
                        >
                            Paracetamol
                        </p>

                        {/* third row */}
                        <p
                            className="time border-left border-bottom"
                            onClick={() => router.push("/request")}
                        >
                            Yesterday
                        </p>
                        <p
                            className="info border-bottom"
                            onClick={() => router.push("/request")}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad
                        </p>
                        <p
                            className="border-bottom"
                            onClick={() => router.push("/request")}
                        ></p>
                        <p
                            className="patient border-bottom"
                            onClick={() => router.push("/request")}
                        >
                            Ibrahim Sani
                        </p>
                        <p
                            className="prescriber border-bottom"
                            onClick={() => router.push("/request")}
                        >
                            Ben Sani
                        </p>
                        <p
                            className="med border-right border-bottom"
                            onClick={() => router.push("/request")}
                        >
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
                        <p
                            className="time border-left"
                            onClick={() => router.push("/request")}
                        >
                            17:14
                        </p>
                        <p
                            className="info"
                            onClick={() => router.push("/request")}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad
                        </p>
                        <p onClick={() => router.push("/request")}></p>
                        <p
                            className="patient"
                            onClick={() => router.push("/request")}
                        >
                            Ibrahim Sani
                        </p>
                        <p
                            className="prescriber"
                            onClick={() => router.push("/request")}
                        >
                            Ben Sani
                        </p>
                        <p
                            className="med border-right"
                            onClick={() => router.push("/request")}
                        >
                            Paracetamol
                        </p>

                        {/* second row */}
                        <p
                            className="time border-left"
                            onClick={() => router.push("/request")}
                        >
                            1:00
                        </p>
                        <p
                            className="info"
                            onClick={() => router.push("/request")}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad
                        </p>
                        <p onClick={() => router.push("/request")}></p>
                        <p
                            className="patient"
                            onClick={() => router.push("/request")}
                        >
                            Ibrahim Sani
                        </p>
                        <p
                            className="prescriber"
                            onClick={() => router.push("/request")}
                        >
                            Ben Sani
                        </p>
                        <p
                            className="med border-right"
                            onClick={() => router.push("/request")}
                        >
                            Paracetamol
                        </p>

                        {/* third row */}
                        <p
                            className="time border-left border-bottom"
                            onClick={() => router.push("/request")}
                        >
                            Yesterday
                        </p>
                        <p
                            className="info border-bottom"
                            onClick={() => router.push("/request")}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad
                        </p>
                        <p
                            className="border-bottom"
                            onClick={() => router.push("/request")}
                        ></p>
                        <p
                            className="patient border-bottom"
                            onClick={() => router.push("/request")}
                        >
                            Ibrahim Sani
                        </p>
                        <p
                            className="prescriber border-bottom"
                            onClick={() => router.push("/request")}
                        >
                            Ben Sani
                        </p>
                        <p
                            className="med border-right border-bottom"
                            onClick={() => router.push("/request")}
                        >
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
                        <p
                            className="info"
                            onClick={() => router.push("/request")}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad
                        </p>
                        <p onClick={() => router.push("/request")}></p>
                        <p
                            className="patient"
                            onClick={() => router.push("/request")}
                        >
                            Ibrahim Sani
                        </p>
                        <p
                            className="prescriber"
                            onClick={() => router.push("/request")}
                        >
                            Ben Sani
                        </p>
                        <p
                            className="med border-right"
                            onClick={() => router.push("/request")}
                        >
                            Paracetamol
                        </p>

                        {/* second row */}
                        <p
                            className="time border-left"
                            onClick={() => router.push("/request")}
                        >
                            1:00
                        </p>
                        <p
                            className="info"
                            onClick={() => router.push("/request")}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad
                        </p>
                        <p onClick={() => router.push("/request")}></p>
                        <p
                            className="patient"
                            onClick={() => router.push("/request")}
                        >
                            Ibrahim Sani
                        </p>
                        <p
                            className="prescriber"
                            onClick={() => router.push("/request")}
                        >
                            Ben Sani
                        </p>
                        <p
                            className="med border-right"
                            onClick={() => router.push("/request")}
                        >
                            Paracetamol
                        </p>

                        {/* third row */}
                        <p
                            className="time border-left"
                            onClick={() => router.push("/request")}
                        >
                            Yesterday
                        </p>
                        <p
                            className="info"
                            onClick={() => router.push("/request")}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad
                        </p>
                        <p
                            className=""
                            onClick={() => router.push("/request")}
                        ></p>
                        <p
                            className="patient"
                            onClick={() => router.push("/request")}
                        >
                            Ibrahim Sani
                        </p>
                        <p
                            className="prescriber"
                            onClick={() => router.push("/request")}
                        >
                            Ben Sani
                        </p>
                        <p
                            className="med border-right"
                            onClick={() => router.push("/request")}
                        >
                            Paracetamol
                        </p>

                        {/* first row */}
                        <p
                            className="time border-left"
                            onClick={() => router.push("/request")}
                        >
                            17:14
                        </p>
                        <p
                            className="info"
                            onClick={() => router.push("/request")}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad
                        </p>
                        <p onClick={() => router.push("/request")}></p>
                        <p
                            className="patient"
                            onClick={() => router.push("/request")}
                        >
                            Ibrahim Sani
                        </p>
                        <p
                            className="prescriber"
                            onClick={() => router.push("/request")}
                        >
                            Ben Sani
                        </p>
                        <p
                            className="med border-right"
                            onClick={() => router.push("/request")}
                        >
                            Paracetamol
                        </p>

                        {/* second row */}
                        <p
                            className="time border-left"
                            onClick={() => router.push("/request")}
                        >
                            1:00
                        </p>
                        <p
                            className="info"
                            onClick={() => router.push("/request")}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad
                        </p>
                        <p onClick={() => router.push("/request")}></p>
                        <p
                            className="patient"
                            onClick={() => router.push("/request")}
                        >
                            Ibrahim Sani
                        </p>
                        <p
                            className="prescriber"
                            onClick={() => router.push("/request")}
                        >
                            Ben Sani
                        </p>
                        <p
                            className="med border-right"
                            onClick={() => router.push("/request")}
                        >
                            Paracetamol
                        </p>

                        {/* third row */}
                        <p
                            className="time border-left border-bottom"
                            onClick={() => router.push("/request")}
                        >
                            Yesterday
                        </p>
                        <p
                            className="info border-bottom"
                            onClick={() => router.push("/request")}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad
                        </p>
                        <p
                            className="border-bottom"
                            onClick={() => router.push("/request")}
                        ></p>
                        <p
                            className="patient border-bottom"
                            onClick={() => router.push("/request")}
                        >
                            Ibrahim Sani
                        </p>
                        <p
                            className="prescriber border-bottom"
                            onClick={() => router.push("/request")}
                        >
                            Ben Sani
                        </p>
                        <p
                            className="med border-right border-bottom"
                            onClick={() => router.push("/request")}
                        >
                            Paracetamol
                        </p>
                    </div>
                </Grid>
            </GridContainer>
        </Wrapper>
    );
};

export default PharmacyRequest;
