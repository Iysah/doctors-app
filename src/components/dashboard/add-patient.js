"use client";

import React from "react";
import { BackButton, Heading1 } from "../../styles/dashboard.style";
import { Wrapper } from "../../styles/request.style";
import {
    Form,
    MaxContainer,
    Prescribe,
    Sumbit,
} from "../../styles/add-patient.style";
import { useRouter } from "next/navigation";

const AddPatient = () => {
    const router = useRouter();
    return (
        <Wrapper>
            <BackButton onClick={() => router.back()}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="15"
                    viewBox="0 0 25 22"
                    fill="none"
                >
                    <path
                        d="M23.4986 9.50041H5.70857L11.1536 2.96041C11.4082 2.65409 11.5307 2.25917 11.4941 1.86253C11.4575 1.46589 11.2649 1.10002 10.9586 0.845414C10.6522 0.590806 10.2573 0.468313 9.86068 0.504882C9.46404 0.541452 9.09817 0.734089 8.84356 1.04041L1.34357 10.0404C1.29311 10.112 1.24798 10.1872 1.20857 10.2654C1.20857 10.3404 1.20857 10.3854 1.10357 10.4604C1.03558 10.6324 0.999977 10.8155 0.998566 11.0004C0.999977 11.1853 1.03558 11.3684 1.10357 11.5404C1.10357 11.6154 1.10357 11.6604 1.20857 11.7354C1.24798 11.8136 1.29311 11.8888 1.34357 11.9604L8.84356 20.9604C8.9846 21.1297 9.16121 21.2659 9.36084 21.3592C9.56046 21.4526 9.7782 21.5008 9.99857 21.5004C10.349 21.5011 10.6887 21.379 10.9586 21.1554C11.1105 21.0295 11.236 20.8748 11.328 20.7003C11.4201 20.5258 11.4768 20.3348 11.4949 20.1384C11.513 19.9419 11.4922 19.7438 11.4336 19.5554C11.375 19.367 11.2799 19.192 11.1536 19.0404L5.70857 12.5004H23.4986C23.8964 12.5004 24.2779 12.3424 24.5592 12.0611C24.8405 11.7798 24.9986 11.3982 24.9986 11.0004C24.9986 10.6026 24.8405 10.2211 24.5592 9.93975C24.2779 9.65845 23.8964 9.50041 23.4986 9.50041Z"
                        fill="#6F6E70"
                    />
                </svg>
                <span>Back</span>
            </BackButton>

            <MaxContainer>
                <Heading1>Add Patient</Heading1>

                <Form>
                    <label htmlFor="first-name">
                        <span>First Name</span>
                        <input
                            id="first-name"
                            type="text"
                            placeholder="Enter patient name"
                        />
                    </label>

                    <label htmlFor="surname">
                        <span>Surname</span>
                        <input
                            id="surname"
                            type="text"
                            placeholder="Enter patient surname"
                        />
                    </label>

                    <label htmlFor="tel">
                        <span>Phone Number</span>
                        <input
                            id="tel"
                            type="tel"
                            placeholder="Enter phone number"
                        />
                    </label>

                    <label htmlFor="email">
                        <span>Email Address</span>
                        <input
                            id="email"
                            type="email"
                            placeholder="Enter email address"
                        />
                    </label>

                    <label htmlFor="address">
                        <span>Address</span>
                        <input
                            id="address"
                            type="text"
                            placeholder="Enter Address"
                        />
                    </label>

                    <label htmlFor="prescription">
                        <span>Prescription</span>
                        <input
                            id="prescription"
                            type="text"
                            placeholder="Enter prescription"
                        />
                    </label>

                    <label htmlFor="record" className="record">
                        <span>Medical Record</span>
                        <input id="record" type="file" />
                        <div className="input">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="40"
                                height="40"
                                viewBox="0 0 56 56"
                                fill="none"
                            >
                                <g clipPath="url(#clip0_636_14004)">
                                    <path
                                        d="M45.6595 24.2631H44.9943C44.134 15.9012 37.0452 9.35156 28.4539 9.35156C19.8625 9.35156 12.7738 15.9012 11.9135 24.2631H11.2482C5.55886 24.2631 0.924805 28.8972 0.924805 34.5865C0.924805 40.2759 5.55886 44.9099 11.2482 44.9099H45.6595C51.3489 44.9099 55.9829 40.2759 55.9829 34.5865C55.9829 28.8972 51.3489 24.2631 45.6595 24.2631ZM38.3185 28.3007C37.9743 28.6678 37.5155 28.8513 37.0567 28.8513C36.6323 28.8513 36.2194 28.7022 35.8867 28.3925L30.1744 23.0587V37.4542C30.1744 38.4062 29.4059 39.1747 28.4539 39.1747C27.5018 39.1747 26.7333 38.4062 26.7333 37.4542V23.0587L21.021 28.3925C20.3328 29.0348 19.2431 29.0004 18.5893 28.3007C17.9469 27.6125 17.9814 26.5228 18.6811 25.869L27.2839 17.8397C27.9377 17.2318 28.97 17.2318 29.6239 17.8397L38.2267 25.869C38.9264 26.5228 38.9608 27.6125 38.3185 28.3007Z"
                                        fill="#0F5D52"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_636_14004">
                                        <rect
                                            width="55.0581"
                                            height="55.0581"
                                            fill="white"
                                            transform="translate(0.924805 0.175781)"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                            <span>Upload</span>
                        </div>
                    </label>

                    <div className="error-message">
                        Required file size is a maximum of 5 mb*
                    </div>

                    <Sumbit type="submit">Submit</Sumbit>

                    <Prescribe>Prescribe for this patient...</Prescribe>
                </Form>
            </MaxContainer>
        </Wrapper>
    );
};

export default AddPatient;
