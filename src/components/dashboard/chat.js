"use client";

import React from "react";
import {
    ChatArea,
    ChatCard,
    Filter,
    RightAligned,
    SearchBar,
    Wrapper,
} from "../../styles/chat.style";

const chats = [
    {
        name: "Pharmacy",
        body: [
            "Lorem ipsum dolor sit amet consectetur. Proin suspendisse felis commodo sit lacus enim erat malesuada Lorem ipsum dolor sit amet...",
        ],
        time: "17:14 (7 hours ago)",
        isPatient: false,
    },

    {
        name: "Pharmacy",
        body: [
            "Lorem ipsum dolor sit amet consectetur. Proin suspendisse felis commodo sit lacus enim erat malesuada Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur. Proin suspendisse felis commodo sit lacus enim erat malesuada Lorem ipsum dolor sit amet ",
            "Lorem ipsum dolor sit amet consectetur. Proin suspendisse felis commodo sit lacus enim erat malesuada Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur. Proin suspendisse felis commodo sit lacus enim erat malesuada Lorem ipsum dolor sit amet ",
        ],
        time: "00:00 (7 hours ago)",
        isPatient: false,
    },

    {
        name: "Ben Sani",
        body: [
            "Lorem ipsum dolor sit amet consectetur. Proin suspendisse felis commodo sit lacus enim erat malesuada Lorem ipsum dolor sit amet ...",
        ],
        time: "00:00 (8 hours ago)",
        isPatient: true,
    },
];

const Chat = () => {
    return (
        <Wrapper>
            <RightAligned>
                <SearchBar htmlFor="search">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                    >
                        <g clipPath="url(#clip0_874_7886)">
                            <path
                                d="M11.7419 10.3441C12.7102 9.02279 13.1439 7.38459 12.9562 5.75725C12.7685 4.12991 11.9733 2.63344 10.7297 1.56723C9.48604 0.501022 7.88567 -0.0562959 6.24876 0.00677721C4.61184 0.0698504 3.05911 0.748663 1.90119 1.90741C0.743273 3.06615 0.0655718 4.61938 0.00366997 6.25633C-0.0582319 7.89329 0.500231 9.49326 1.56733 10.7361C2.63443 11.979 4.13147 12.7732 5.75894 12.9597C7.38641 13.1462 9.0243 12.7113 10.3449 11.7421H10.3439C10.3739 11.7821 10.4059 11.8201 10.4419 11.8571L14.2919 15.7071C14.4794 15.8947 14.7338 16.0002 14.9991 16.0003C15.2643 16.0004 15.5188 15.8951 15.7064 15.7076C15.8941 15.5201 15.9995 15.2657 15.9996 15.0005C15.9997 14.7352 15.8944 14.4807 15.7069 14.2931L11.8569 10.4431C11.8212 10.4069 11.7827 10.3745 11.7419 10.3441ZM11.9999 6.5001C11.9999 7.22237 11.8577 7.93757 11.5813 8.60486C11.3049 9.27215 10.8997 9.87847 10.389 10.3892C9.87829 10.8999 9.27197 11.305 8.60468 11.5814C7.93739 11.8578 7.22219 12.0001 6.49992 12.0001C5.77765 12.0001 5.06245 11.8578 4.39516 11.5814C3.72787 11.305 3.12156 10.8999 2.61083 10.3892C2.10011 9.87847 1.69498 9.27215 1.41858 8.60486C1.14218 7.93757 0.999921 7.22237 0.999921 6.5001C0.999921 5.04141 1.57938 3.64246 2.61083 2.61101C3.64228 1.57956 5.04123 1.0001 6.49992 1.0001C7.95861 1.0001 9.35756 1.57956 10.389 2.61101C11.4205 3.64246 11.9999 5.04141 11.9999 6.5001Z"
                                fill="#CCCCCC"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_874_7886">
                                <rect width="16" height="16" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>

                    <input id="search" type="search" placeholder="Search" />
                </SearchBar>

                <Filter>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 39 39"
                        fill="none"
                    >
                        <path
                            d="M14.625 8.12508C14.194 8.12508 13.7807 8.29628 13.476 8.60103C13.1712 8.90577 13 9.3191 13 9.75008C13 10.1811 13.1712 10.5944 13.476 10.8991C13.7807 11.2039 14.194 11.3751 14.625 11.3751C15.056 11.3751 15.4693 11.2039 15.774 10.8991C16.0788 10.5944 16.25 10.1811 16.25 9.75008C16.25 9.3191 16.0788 8.90577 15.774 8.60103C15.4693 8.29628 15.056 8.12508 14.625 8.12508ZM10.0263 8.12508C10.362 7.17358 10.9846 6.34966 11.8082 5.76686C12.6319 5.18406 13.616 4.87109 14.625 4.87109C15.634 4.87109 16.6181 5.18406 17.4418 5.76686C18.2654 6.34966 18.888 7.17358 19.2238 8.12508H30.875C31.306 8.12508 31.7193 8.29628 32.024 8.60103C32.3288 8.90577 32.5 9.3191 32.5 9.75008C32.5 10.1811 32.3288 10.5944 32.024 10.8991C31.7193 11.2039 31.306 11.3751 30.875 11.3751H19.2238C18.888 12.3266 18.2654 13.1505 17.4418 13.7333C16.6181 14.3161 15.634 14.6291 14.625 14.6291C13.616 14.6291 12.6319 14.3161 11.8082 13.7333C10.9846 13.1505 10.362 12.3266 10.0263 11.3751H8.125C7.69402 11.3751 7.2807 11.2039 6.97595 10.8991C6.67121 10.5944 6.5 10.1811 6.5 9.75008C6.5 9.3191 6.67121 8.90577 6.97595 8.60103C7.2807 8.29628 7.69402 8.12508 8.125 8.12508H10.0263ZM24.375 17.8751C23.944 17.8751 23.5307 18.0463 23.226 18.351C22.9212 18.6558 22.75 19.0691 22.75 19.5001C22.75 19.9311 22.9212 20.3444 23.226 20.6491C23.5307 20.9539 23.944 21.1251 24.375 21.1251C24.806 21.1251 25.2193 20.9539 25.524 20.6491C25.8288 20.3444 26 19.9311 26 19.5001C26 19.0691 25.8288 18.6558 25.524 18.351C25.2193 18.0463 24.806 17.8751 24.375 17.8751ZM19.7762 17.8751C20.112 16.9236 20.7346 16.0997 21.5582 15.5169C22.3819 14.9341 23.366 14.6211 24.375 14.6211C25.384 14.6211 26.3681 14.9341 27.1918 15.5169C28.0154 16.0997 28.638 16.9236 28.9737 17.8751H30.875C31.306 17.8751 31.7193 18.0463 32.024 18.351C32.3288 18.6558 32.5 19.0691 32.5 19.5001C32.5 19.9311 32.3288 20.3444 32.024 20.6491C31.7193 20.9539 31.306 21.1251 30.875 21.1251H28.9737C28.638 22.0766 28.0154 22.9005 27.1918 23.4833C26.3681 24.0661 25.384 24.3791 24.375 24.3791C23.366 24.3791 22.3819 24.0661 21.5582 23.4833C20.7346 22.9005 20.112 22.0766 19.7762 21.1251H8.125C7.69402 21.1251 7.2807 20.9539 6.97595 20.6491C6.67121 20.3444 6.5 19.9311 6.5 19.5001C6.5 19.0691 6.67121 18.6558 6.97595 18.351C7.2807 18.0463 7.69402 17.8751 8.125 17.8751H19.7762ZM14.625 27.6251C14.194 27.6251 13.7807 27.7963 13.476 28.101C13.1712 28.4058 13 28.8191 13 29.2501C13 29.6811 13.1712 30.0944 13.476 30.3991C13.7807 30.7039 14.194 30.8751 14.625 30.8751C15.056 30.8751 15.4693 30.7039 15.774 30.3991C16.0788 30.0944 16.25 29.6811 16.25 29.2501C16.25 28.8191 16.0788 28.4058 15.774 28.101C15.4693 27.7963 15.056 27.6251 14.625 27.6251ZM10.0263 27.6251C10.362 26.6736 10.9846 25.8497 11.8082 25.2669C12.6319 24.6841 13.616 24.3711 14.625 24.3711C15.634 24.3711 16.6181 24.6841 17.4418 25.2669C18.2654 25.8497 18.888 26.6736 19.2238 27.6251H30.875C31.306 27.6251 31.7193 27.7963 32.024 28.101C32.3288 28.4058 32.5 28.8191 32.5 29.2501C32.5 29.6811 32.3288 30.0944 32.024 30.3991C31.7193 30.7039 31.306 30.8751 30.875 30.8751H19.2238C18.888 31.8266 18.2654 32.6505 17.4418 33.2333C16.6181 33.8161 15.634 34.1291 14.625 34.1291C13.616 34.1291 12.6319 33.8161 11.8082 33.2333C10.9846 32.6505 10.362 31.8266 10.0263 30.8751H8.125C7.69402 30.8751 7.2807 30.7039 6.97595 30.3991C6.67121 30.0944 6.5 29.6811 6.5 29.2501C6.5 28.8191 6.67121 28.4058 6.97595 28.101C7.2807 27.7963 7.69402 27.6251 8.125 27.6251H10.0263Z"
                            fill="#1A4942"
                        />
                    </svg>
                </Filter>
            </RightAligned>

            <ChatArea>
                {chats.map((item) => (
                    <ChatCard key={chats.indexOf(item)}>
                        <div className="innercard">
                            <div
                                className={`avatar ${
                                    item.isPatient ? "light-green" : ""
                                }`}
                            >
                                {/* get only first letter of name */}
                                <p>{item.name.slice(0, 1)}</p>
                            </div>

                            <div className="content">
                                <h2>{item.name}</h2>

                                {item.body.map((chat) => (
                                    <p
                                        key={item.body.indexOf(chat)}
                                        className="body"
                                    >
                                        {chat}
                                    </p>
                                ))}

                                <p className="time">{item.time}</p>
                            </div>
                        </div>
                    </ChatCard>
                ))}
            </ChatArea>
        </Wrapper>
    );
};

export default Chat;
