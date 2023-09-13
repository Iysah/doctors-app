"use client";
import React from "react";
import { Card, Cards, Save, Wrapper } from "../../styles/settings.style";
import ToggleButton from "../toggle-button";

const Settings = () => {
    return (
        <Wrapper>
            <Cards>
                <Card>
                    <div className="top">
                        <p>My Details</p>
                        <p>Edit</p>
                    </div>
                    <div className="card">
                        <div>
                            <p className="title">Address</p>

                            <p className="content">
                                CH 4 Isa Kaita U/Rimi kaduna
                            </p>
                        </div>

                        <div>
                            <p className="title">Date of Brith</p>
                            <p className="content">17/4/1994</p>
                        </div>

                        <div>
                            <p className="title">Contact</p>
                            <p className="content">09035000000</p>
                        </div>
                    </div>
                </Card>

                <Card>
                    <div className="top">
                        <p>Notification Setting</p> <p>Edit</p>
                    </div>

                    <div className="card">
                        <div>
                            <p className="heading">
                                Prescribers I am following
                            </p>
                        </div>

                        <div>
                            <p className="small">Sulaiman San</p>
                            <p className="small">John Micheal </p>
                        </div>

                        <div className="clinic-super-admin">
                            <p className="smalller">Clinic Super Admin</p>
                            <p className="smaller">
                                Super admin receive email update anytime anytime
                                there are actions required on a a prescription
                                without any user following them. at least one
                                super admin per clinic is recommended
                            </p>
                        </div>

                        <ToggleButton />
                    </div>
                </Card>

                <Card>
                    <div className="top">
                        <p>Edit my notification</p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            viewBox="0 0 31 31"
                            fill="none"
                        >
                            <path
                                d="M8.81738 22.3522L15.3294 15.8402L21.8415 22.3522M21.8415 9.32812L15.3282 15.8402L8.81738 9.32812"
                                stroke="white"
                                stroke-width="1.86307"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </div>

                    <div className="card">
                        <div>
                            <p className="heading">
                                Prescribers I am following
                            </p>
                        </div>

                        <table>
                            <thead>
                                <tr>
                                    <th>Following</th>
                                    <th>Prescriber </th>
                                    <th> Reg. No</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>
                                        <button className="unfollow">
                                            Unfollow
                                        </button>
                                    </td>
                                    <td>Yusuf Jamiu</td>
                                    <td>098465</td>
                                </tr>
                            </tbody>
                        </table>

                        <div>
                            <p className="smaller">
                                Super admin receive email antime there is action
                                on prescription for patient without users
                                following them
                            </p>
                        </div>

                        <Save>Save</Save>
                    </div>
                </Card>
            </Cards>
        </Wrapper>
    );
};

export default Settings;
