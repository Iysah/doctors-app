"use client";
import React from "react";
import { Card, Cards, Wrapper } from "../../styles/claim-hmo.style";
import { Heading1 } from "../../styles/dashboard.style";

const ClaimHMO = () => {
    return (
        <Wrapper>
            <Heading1>Claim HMO</Heading1>

            <Cards>
                <Card>
                    <div>
                        <p className="title">
                            Name: <span className="content">Ibrahim Sani</span>
                        </p>

                        <p className="title">
                            Membership No:
                            <span className="content">1000000000</span>
                        </p>
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <th>S/N</th>
                                <th>Name of Drug</th>
                                <th>Quantity</th>
                                <th>Total Cost</th>
                                <th>Decision</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Amlodipine</td>
                                <td>28 tablets</td>
                                <td>1000</td>
                                <td>
                                    <div className="buttons">
                                        <button>Approve</button>
                                        <button>Reject</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Card>

                <Card>
                    <div>
                        <p className="title">
                            Name: <span className="content">Ibrahim Sani</span>
                        </p>

                        <p className="title">
                            Membership No:
                            <span className="content">1000000000</span>
                        </p>
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <th>S/N</th>
                                <th>Name of Drug</th>
                                <th>Quantity</th>
                                <th>Total Cost</th>
                                <th>Decision</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Amlodipine</td>
                                <td>28 tablets</td>
                                <td>1000</td>
                                <td>
                                    <div className="buttons">
                                        <button>Approve</button>
                                        <button>Reject</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Card>

                <Card>
                    <div>
                        <p className="title">
                            Name: <span className="content">Ibrahim Sani</span>
                        </p>

                        <p className="title">
                            Membership No:
                            <span className="content">1000000000</span>
                        </p>
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <th>S/N</th>
                                <th>Name of Drug</th>
                                <th>Quantity</th>
                                <th>Total Cost</th>
                                <th>Decision</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Amlodipine</td>
                                <td>28 tablets</td>
                                <td>1000</td>
                                <td>
                                    <div className="buttons">
                                        <button>Approve</button>
                                        <button>Reject</button>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>2</td>
                                <td>Amoxilin</td>
                                <td>20 tablets</td>
                                <td>1200</td>
                                <td>
                                    <div className="buttons">
                                        <button>Approve</button>
                                        <button>Reject</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Card>
            </Cards>
        </Wrapper>
    );
};

export default ClaimHMO;
