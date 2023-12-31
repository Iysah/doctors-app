"use client";
import React from "react";
import {
    BorderedButton,
    Chart,
    DetailsButtons,
    FirstContainer,
    GreenButton,
    SecondContainer,
    Sort,
    Table,
    WalletDetails,
    Wrapper,
} from "../../styles/wallet.style";

import { Heading2 } from "../../styles/dashboard.style";

const Wallet = () => {
    function generateWeekRangesForYear(year) {
        const months = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ];

        const weekRanges = [];
        let singleRange = [];

        for (let monthIndex = 0; monthIndex < months.length; monthIndex++) {
            const month = months[monthIndex];

            // Calculate the last day of the month
            const lastDay = new Date(year, monthIndex + 1, 0).getDate();

            let startDay = 1;
            while (startDay <= lastDay) {
                const endDay = Math.min(startDay + 6, lastDay);
                const weekRange = `${month} ${startDay} - ${endDay}`;
                singleRange.push(weekRange);
                startDay += 7;
            }
            singleRange[singleRange.length - 1] = "Final week";

            weekRanges.push(singleRange);
            singleRange = [];
        }

        return weekRanges;
    }

    const getCurrentMonthRange = () => {
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth();
        const currentYear = currentDate.getFullYear();

        const currentMonthRange =
            generateWeekRangesForYear(currentYear)[currentMonth];
        return currentMonthRange;
    };

    const monthRange = getCurrentMonthRange();

    return (
        <Wrapper>
            <FirstContainer>
                <WalletDetails>
                    <div className="wallet-balance">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="65"
                            height="65"
                            viewBox="0 0 65 65"
                            fill="none"
                        >
                            <path
                                d="M52.6375 11.0078H12.3646C10.5688 11.0078 8.84666 11.7212 7.57688 12.9909C6.3071 14.2607 5.59375 15.9829 5.59375 17.7786V47.2182C5.59375 49.014 6.3071 50.7361 7.57688 52.0059C8.84666 53.2757 10.5688 53.9891 12.3646 53.9891H52.6375C54.4332 53.9891 56.1554 53.2757 57.4252 52.0059C58.695 50.7361 59.4083 49.014 59.4083 47.2182V17.7786C59.4083 15.9829 58.695 14.2607 57.4252 12.9909C56.1554 11.7212 54.4332 11.0078 52.6375 11.0078ZM56.7 37.9016H39.3125C37.8759 37.9016 36.4982 37.3309 35.4823 36.3151C34.4665 35.2992 33.8958 33.9215 33.8958 32.4849C33.8958 31.0483 34.4665 29.6706 35.4823 28.6547C36.4982 27.6389 37.8759 27.0682 39.3125 27.0682H56.7V37.9016ZM39.3125 24.3599C37.1576 24.3599 35.091 25.2159 33.5673 26.7397C32.0435 28.2634 31.1875 30.33 31.1875 32.4849C31.1875 34.6398 32.0435 36.7064 33.5673 38.2301C35.091 39.7539 37.1576 40.6099 39.3125 40.6099H56.7V47.2182C56.7 48.2957 56.272 49.329 55.5101 50.0908C54.7483 50.8527 53.7149 51.2807 52.6375 51.2807H12.3646C11.2871 51.2807 10.2538 50.8527 9.49196 50.0908C8.7301 49.329 8.30208 48.2957 8.30208 47.2182V17.7786C8.30208 16.7012 8.7301 15.6679 9.49196 14.906C10.2538 14.1442 11.2871 13.7161 12.3646 13.7161H52.6375C53.7149 13.7161 54.7483 14.1442 55.5101 14.906C56.272 15.6679 56.7 16.7012 56.7 17.7786V24.3599H39.3125Z"
                                fill="white"
                            />
                            <path
                                d="M39.3211 35.1979C40.8169 35.1979 42.0295 33.9854 42.0295 32.4896C42.0295 30.9938 40.8169 29.7812 39.3211 29.7812C37.8254 29.7812 36.6128 30.9938 36.6128 32.4896C36.6128 33.9854 37.8254 35.1979 39.3211 35.1979Z"
                                fill="white"
                            />
                        </svg>

                        <div>
                            <p className="normal">Your Wallet Balance is</p>
                            <p className="large">
                                <svg
                                    className="naira"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="21"
                                    height="18"
                                    viewBox="0 0 21 18"
                                    fill="none"
                                >
                                    <path
                                        d="M3.58333 17V2.40267C3.58324 2.09243 3.68298 1.79095 3.86688 1.54558C4.05078 1.30021 4.30843 1.12483 4.59935 1.04701C4.89028 0.969185 5.19801 0.993314 5.47422 1.11561C5.75042 1.2379 5.97945 1.45143 6.12533 1.72267L10.0417 9L13.958 16.2773C14.1039 16.5486 14.3329 16.7621 14.6091 16.8844C14.8853 17.0067 15.1931 17.0308 15.484 16.953C15.7749 16.8752 16.0326 16.6998 16.2165 16.4544C16.4004 16.209 16.5001 15.9076 16.5 15.5973V1M1 6.33333H19.0833M1 11.6667H19.0833"
                                        stroke="white"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <span>250000</span>
                            </p>
                        </div>
                    </div>

                    <DetailsButtons>
                        <GreenButton>receive funds </GreenButton>

                        <BorderedButton>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="28"
                                height="28"
                                viewBox="0 0 28 28"
                                fill="none"
                            >
                                <path
                                    d="M14.875 18.887L18.0483 15.7137C18.1285 15.6277 18.2251 15.5588 18.3324 15.511C18.4397 15.4631 18.5556 15.4374 18.6731 15.4353C18.7906 15.4333 18.9073 15.4549 19.0162 15.4989C19.1252 15.5429 19.2241 15.6084 19.3072 15.6915C19.3903 15.7746 19.4558 15.8735 19.4998 15.9825C19.5438 16.0915 19.5654 16.2082 19.5634 16.3256C19.5613 16.4431 19.5356 16.559 19.4878 16.6663C19.4399 16.7737 19.371 16.8703 19.285 16.9504L14.6183 21.617C14.4543 21.7809 14.2319 21.8729 14 21.8729C13.7681 21.8729 13.5457 21.7809 13.3817 21.617L8.71502 16.9504C8.62905 16.8703 8.5601 16.7737 8.51227 16.6663C8.46445 16.559 8.43873 16.4431 8.43666 16.3256C8.43459 16.2082 8.4562 16.0915 8.50021 15.9825C8.54421 15.8735 8.60972 15.7746 8.6928 15.6915C8.77589 15.6084 8.87487 15.5429 8.98382 15.4989C9.09277 15.4549 9.20947 15.4333 9.32696 15.4353C9.44445 15.4374 9.56031 15.4631 9.66764 15.511C9.77498 15.5588 9.87158 15.6277 9.95168 15.7137L13.125 18.887V7.58203C13.125 7.34997 13.2172 7.12741 13.3813 6.96331C13.5454 6.79922 13.768 6.70703 14 6.70703C14.2321 6.70703 14.4546 6.79922 14.6187 6.96331C14.7828 7.12741 14.875 7.34997 14.875 7.58203V18.887Z"
                                    fill="#222222"
                                />
                            </svg>
                            <span>Withdraw Funds</span>
                        </BorderedButton>
                    </DetailsButtons>
                </WalletDetails>

                <Chart>
                    <div className="wrapper">
                        <Heading2>Your earned for this month</Heading2>

                        <div className="chart">
                            <div className="x-axis">
                                <span>25 000 </span>
                                <div className="line"></div>
                            </div>
                            <div className="x-axis">
                                <span>15 000 </span>
                                <div className="line"></div>
                            </div>
                            <div className="x-axis">
                                <span>10 000</span>
                                <div className="line"></div>
                            </div>
                            <div className="x-axis">
                                <span>5 000</span>
                                <div className="line"></div>
                            </div>
                            <div className="x-axis last">
                                <span>0 </span>
                                <div className="line"></div>
                            </div>

                            <div className="absolute">
                                <div className="bar-container">
                                    <div className="bar bar-one"></div>
                                    <p className="title">{monthRange[0]}</p>
                                </div>

                                <div className="bar-container">
                                    <div className="bar bar-one"></div>
                                    <p className="title">{monthRange[1]}</p>
                                </div>

                                <div className="bar-container">
                                    <div className="bar bar-one"></div>
                                    <p className="title">{monthRange[2]}</p>
                                </div>

                                <div className="bar-container">
                                    <div className="bar bar-two"></div>
                                    <p className="title">{monthRange[3]}</p>
                                </div>

                                <div className="bar-container">
                                    <div className="bar bar-three"></div>
                                    <p className="title">{monthRange[4]}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Chart>
            </FirstContainer>

            <SecondContainer>
                <div className="header">
                    <p className="heading">Transactions History</p>

                    <Sort>
                        <label htmlFor="sort">
                            Sort:
                            <select>
                                <option>Last Week</option>
                                <option>Today</option>
                            </select>
                            <div className="svg">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                >
                                    <path
                                        d="M5.99999 8.39982C5.64999 8.39982 5.29999 8.26482 5.03499 7.99982L1.77499 4.73982C1.70525 4.66926 1.66614 4.57404 1.66614 4.47482C1.66614 4.37561 1.70525 4.28039 1.77499 4.20982C1.91999 4.06482 2.15999 4.06482 2.30499 4.20982L5.56499 7.46982C5.80499 7.70982 6.19499 7.70982 6.43499 7.46982L9.69499 4.20982C9.83999 4.06482 10.08 4.06482 10.225 4.20982C10.37 4.35482 10.37 4.59482 10.225 4.73982L6.96499 7.99982C6.69999 8.26482 6.34999 8.39982 5.99999 8.39982Z"
                                        fill="#CCCCCC"
                                    />
                                </svg>
                            </div>
                        </label>
                    </Sort>
                </div>

                <Table>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th className="center">Status</th>
                                <th className="center">Transaction Type</th>
                                <th className="center">Date</th>
                                <th>Amount</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Aisha Sani</td>
                                <td className="center">Complete</td>
                                <td className="center">Credit</td>
                                <td className="center">17 Apr, 2023</td>
                                <td>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="13"
                                        height="12"
                                        viewBox="0 0 13 12"
                                        fill="none"
                                    >
                                        <path
                                            d="M2.57143 10.8421V1.96261C2.57137 1.7739 2.63204 1.59051 2.74391 1.44125C2.85577 1.29199 3.0125 1.18531 3.18947 1.13797C3.36644 1.09063 3.55363 1.10531 3.72164 1.1797C3.88966 1.25409 4.02897 1.38398 4.11771 1.54897L6.5 5.97573L8.88229 10.4025C8.97103 10.5675 9.11034 10.6974 9.27836 10.7718C9.44637 10.8462 9.63356 10.8608 9.81053 10.8135C9.9875 10.7662 10.1442 10.6595 10.2561 10.5102C10.368 10.361 10.4286 10.1776 10.4286 9.98886V1.10938M1 4.35361H12M1 7.59785H12"
                                            stroke="#222222"
                                            strokeWidth="1.21659"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    <span className="amount">160.00</span>
                                </td>
                            </tr>

                            <tr>
                                <td>Ibrahim Sani</td>
                                <td className="center">Complete</td>
                                <td className="center">Credit</td>
                                <td className="center">17 Apr, 2023</td>
                                <td>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="13"
                                        height="12"
                                        viewBox="0 0 13 12"
                                        fill="none"
                                    >
                                        <path
                                            d="M2.57143 10.8421V1.96261C2.57137 1.7739 2.63204 1.59051 2.74391 1.44125C2.85577 1.29199 3.0125 1.18531 3.18947 1.13797C3.36644 1.09063 3.55363 1.10531 3.72164 1.1797C3.88966 1.25409 4.02897 1.38398 4.11771 1.54897L6.5 5.97573L8.88229 10.4025C8.97103 10.5675 9.11034 10.6974 9.27836 10.7718C9.44637 10.8462 9.63356 10.8608 9.81053 10.8135C9.9875 10.7662 10.1442 10.6595 10.2561 10.5102C10.368 10.361 10.4286 10.1776 10.4286 9.98886V1.10938M1 4.35361H12M1 7.59785H12"
                                            stroke="#222222"
                                            strokeWidth="1.21659"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    <span className="amount">160.00</span>
                                </td>
                            </tr>

                            <tr>
                                <td>Victoria Victor</td>
                                <td className="center">Complete</td>
                                <td className="center">Credit</td>
                                <td className="center">17 Apr, 2023</td>
                                <td>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="13"
                                        height="12"
                                        viewBox="0 0 13 12"
                                        fill="none"
                                    >
                                        <path
                                            d="M2.57143 10.8421V1.96261C2.57137 1.7739 2.63204 1.59051 2.74391 1.44125C2.85577 1.29199 3.0125 1.18531 3.18947 1.13797C3.36644 1.09063 3.55363 1.10531 3.72164 1.1797C3.88966 1.25409 4.02897 1.38398 4.11771 1.54897L6.5 5.97573L8.88229 10.4025C8.97103 10.5675 9.11034 10.6974 9.27836 10.7718C9.44637 10.8462 9.63356 10.8608 9.81053 10.8135C9.9875 10.7662 10.1442 10.6595 10.2561 10.5102C10.368 10.361 10.4286 10.1776 10.4286 9.98886V1.10938M1 4.35361H12M1 7.59785H12"
                                            stroke="#222222"
                                            strokeWidth="1.21659"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    <span className="amount">160.00</span>
                                </td>
                            </tr>

                            <tr>
                                <td>Aisha Sani</td>
                                <td className="center">Complete</td>
                                <td className="center">Credit</td>
                                <td className="center">17 Apr, 2023</td>
                                <td>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="13"
                                        height="12"
                                        viewBox="0 0 13 12"
                                        fill="none"
                                    >
                                        <path
                                            d="M2.57143 10.8421V1.96261C2.57137 1.7739 2.63204 1.59051 2.74391 1.44125C2.85577 1.29199 3.0125 1.18531 3.18947 1.13797C3.36644 1.09063 3.55363 1.10531 3.72164 1.1797C3.88966 1.25409 4.02897 1.38398 4.11771 1.54897L6.5 5.97573L8.88229 10.4025C8.97103 10.5675 9.11034 10.6974 9.27836 10.7718C9.44637 10.8462 9.63356 10.8608 9.81053 10.8135C9.9875 10.7662 10.1442 10.6595 10.2561 10.5102C10.368 10.361 10.4286 10.1776 10.4286 9.98886V1.10938M1 4.35361H12M1 7.59785H12"
                                            stroke="#222222"
                                            strokeWidth="1.21659"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    <span className="amount">160.00</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="load-more">
                        <GreenButton>Load More</GreenButton>
                    </div>
                </Table>
            </SecondContainer>
        </Wrapper>
    );
};

export default Wallet;
