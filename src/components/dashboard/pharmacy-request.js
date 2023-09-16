"use client";

import React from "react";

import {
    Heading1,
    Heading2,
    RequestCard,
    Wrapper,
    TableContainer,
    Table,
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

            <TableContainer>
                <Heading2>Newest Pharmacy Request </Heading2>

                <Table>
                    <table>
                        <thead>
                            <tr>
                                <th>Time</th>
                                <th className="info">
                                    Info needed for HMO authorization
                                </th>
                                <th>Patient</th>
                                <th>Prescriber</th>
                                <th>Medication</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr onClick={() => router.push("/request")}>
                                <td>17:14</td>
                                <td className="info">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad
                                </td>
                                <td>Ibrahim Sani</td>
                                <td>Ben Sani</td>
                                <td>Paracetamol</td>
                            </tr>

                            <tr onClick={() => router.push("/request")}>
                                <td>1:00</td>
                                <td className="info">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad
                                </td>
                                <td>Ibrahim Sani</td>
                                <td>Ben Sani</td>
                                <td>Paracetamol</td>
                            </tr>

                            <tr onClick={() => router.push("/request")}>
                                <td>Yesterday</td>
                                <td className="info">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad
                                </td>
                                <td>Ibrahim Sani</td>
                                <td>Ben Sani</td>
                                <td>Paracetamol</td>
                            </tr>
                        </tbody>
                    </table>
                </Table>

                <Table>
                    <table>
                        <thead>
                            <tr>
                                <th>Time</th>
                                <th className="info">
                                    Prescription Clarification
                                </th>
                                <th>Patient</th>
                                <th>Prescriber</th>
                                <th>Medication</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr onClick={() => router.push("/request")}>
                                <td>17:14</td>
                                <td className="info">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad
                                </td>
                                <td>Ibrahim Sani</td>
                                <td>Ben Sani</td>
                                <td>Paracetamol</td>
                            </tr>

                            <tr onClick={() => router.push("/request")}>
                                <td>1:00</td>
                                <td className="info">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad
                                </td>
                                <td>Ibrahim Sani</td>
                                <td>Ben Sani</td>
                                <td>Paracetamol</td>
                            </tr>

                            <tr onClick={() => router.push("/request")}>
                                <td>Yesterday</td>
                                <td className="info">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad
                                </td>
                                <td>Ibrahim Sani</td>
                                <td>Ben Sani</td>
                                <td>Paracetamol</td>
                            </tr>
                        </tbody>
                    </table>
                </Table>

                <Table>
                    <table>
                        <thead>
                            <tr>
                                <th>Time</th>
                                <th className="info">
                                    Therapeutic Substitution
                                </th>
                                <th>Patient</th>
                                <th>Prescriber</th>
                                <th>Medication</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr onClick={() => router.push("/request")}>
                                <td>17:14</td>
                                <td className="info">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad
                                </td>
                                <td>Ibrahim Sani</td>
                                <td>Ben Sani</td>
                                <td>Paracetamol</td>
                            </tr>

                            <tr onClick={() => router.push("/request")}>
                                <td>1:00</td>
                                <td className="info">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad
                                </td>
                                <td>Ibrahim Sani</td>
                                <td>Ben Sani</td>
                                <td>Paracetamol</td>
                            </tr>

                            <tr onClick={() => router.push("/request")}>
                                <td>Yesterday</td>
                                <td className="info">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad
                                </td>
                                <td>Ibrahim Sani</td>
                                <td>Ben Sani</td>
                                <td>Paracetamol</td>
                            </tr>
                        </tbody>
                    </table>
                </Table>
            </TableContainer>

            <TableContainer>
                <Heading2>Newest Pharmacy Request </Heading2>

                <Table>
                    <table>
                        <tbody>
                            <tr onClick={() => router.push("/request")}>
                                <td>17:14</td>
                                <td className="info">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad
                                </td>
                                <td>Ibrahim Sani</td>
                                <td>Ben Sani</td>
                                <td>Paracetamol</td>
                            </tr>

                            <tr onClick={() => router.push("/request")}>
                                <td>1:00</td>
                                <td className="info">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad
                                </td>
                                <td>Ibrahim Sani</td>
                                <td>Ben Sani</td>
                                <td>Paracetamol</td>
                            </tr>

                            <tr onClick={() => router.push("/request")}>
                                <td>Yesterday</td>
                                <td className="info">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad
                                </td>
                                <td>Ibrahim Sani</td>
                                <td>Ben Sani</td>
                                <td>Paracetamol</td>
                            </tr>

                            <tr onClick={() => router.push("/request")}>
                                <td>17:14</td>
                                <td className="info">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad
                                </td>
                                <td>Ibrahim Sani</td>
                                <td>Ben Sani</td>
                                <td>Paracetamol</td>
                            </tr>

                            <tr onClick={() => router.push("/request")}>
                                <td>1:00</td>
                                <td className="info">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad
                                </td>
                                <td>Ibrahim Sani</td>
                                <td>Ben Sani</td>
                                <td>Paracetamol</td>
                            </tr>

                            <tr onClick={() => router.push("/request")}>
                                <td>Yesterday</td>
                                <td className="info">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad
                                </td>
                                <td>Ibrahim Sani</td>
                                <td>Ben Sani</td>
                                <td>Paracetamol</td>
                            </tr>
                        </tbody>
                    </table>
                </Table>
            </TableContainer>
        </Wrapper>
    );
};

export default PharmacyRequest;
