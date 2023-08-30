"use client";

import React from "react";
import {
    MaxContainer,
    ReportCard,
    TextBox,
    Wrapper,
} from "../../../styles/request.style";
import { BackButton, ReplyButton } from "../../../styles/dashboard.style";
import { useRouter } from "next/navigation";

const Request = () => {
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
                <TextBox>
                    {/* <p className="time">{}</p> */}
                    <p className="text">
                        Lorem ipsum dolor sit amet consectetur. Proin
                        suspendisse felis commodo sit lacus enim erat malesuada.
                        Elementum quis elit nec risus non orci semper. Neque
                        quisque lobortis nibh placerat nunc. Elit maecenas sed
                        dignissim egestas enim aenean nibh mauris mattis. Varius
                        mauris ullamcorper lectus scelerisque purus quis. Semper
                        vitae dictum vel convallis gravida laoreet nunc
                        tristique quis. Ridiculus a praesent pellentesque turpis
                        sagittis neque curabitur amet. Libero feugiat blandit
                        enim pretium ipsum. Sodales nunc turpis velit porttitor.
                        Lorem ipsum dolor sit amet consectetur. Proin
                        suspendisse felis commodo sit lacus enim erat malesuada.
                        Elementum quis elit nec risus non orci semper. Neque
                        quisque lobortis nibh placerat nunc. Elit maecenas sed
                        dignissim egestas enim aenean nibh mauris mattis. Varius
                        mauris ullamcorper lectus scelerisque purus quis. Semper
                        vitae dictum vel convallis gravida laoreet nunc
                        tristique quis. Ridiculus a praesent pellentesque turpis
                        sagittis neque curabitur amet. Libero feugiat blandit
                        enim pretium ipsum. Sodales nunc turpis velit porttitor.
                    </p>

                    <p className="text">
                        Lorem ipsum dolor sit amet consectetur. Proin
                        suspendisse felis commodo sit lacus enim erat malesuada.
                        Elementum quis elit nec risus non orci semper. Neque
                        quisque lobortis nibh placerat nunc. Elit maecenas sed
                        dignissim egestas enim aenean nibh mauris mattis. Varius
                        mauris ullamcorper lectus scelerisque purus quis. Semper
                        vitae dictum vel convallis gravida laoreet nunc
                        tristique quis. Ridiculus a praesent pellentesque turpis
                        sagittis neque curabitur amet. Libero feugiat blandit
                        enim pretium ipsum. Sodales nunc turpis velit porttitor.
                        Lorem ipsum dolor sit amet consectetur. Proin
                        suspendisse felis commodo sit lacus enim erat malesuada.
                        Elementum quis elit nec risus non orci semper. Neque
                        quisque lobortis nibh placerat nunc. Elit maecenas sed
                        dignissim egestas enim aenean nibh mauris mattis. Varius
                        mauris ullamcorper lectus scelerisque purus quis. Semper
                        vitae dictum vel convallis gravida laoreet nunc
                        tristique quis. Ridiculus a praesent pellentesque turpis
                        sagittis neque curabitur amet. Libero feugiat blandit
                        enim pretium ipsum. Sodales nunc turpis velit porttitor.
                    </p>
                </TextBox>

                <ReportCard>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 53 53"
                        fill="none"
                    >
                        <path
                            d="M30.9167 6.625V15.4583C30.9167 16.044 31.1493 16.6057 31.5635 17.0199C31.9776 17.434 32.5393 17.6667 33.125 17.6667H41.9583"
                            stroke="#1A4942"
                            strokeWidth="4.41667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M19.875 19.875H22.0833M19.875 28.7083H33.125M19.875 37.5417H33.125M37.5417 46.375H15.4583C14.287 46.375 13.1636 45.9097 12.3353 45.0814C11.507 44.2531 11.0417 43.1297 11.0417 41.9583V11.0417C11.0417 9.87029 11.507 8.7469 12.3353 7.91861C13.1636 7.09033 14.287 6.625 15.4583 6.625H30.9167L41.9583 17.6667V41.9583C41.9583 43.1297 41.493 44.2531 40.6647 45.0814C39.8364 45.9097 38.713 46.375 37.5417 46.375Z"
                            stroke="#1A4942"
                            strokeWidth="4.41667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <div className="content">
                        <h3>Medical Report</h3>
                        <p>Size: 567KB</p>
                    </div>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 29 29"
                        fill="none"
                    >
                        <path
                            d="M14.5 19.3335L8.45833 13.2918L10.15 11.5397L13.2917 14.6814V4.8335H15.7083V14.6814L18.85 11.5397L20.5417 13.2918L14.5 19.3335ZM7.25 24.1668C6.58541 24.1668 6.01629 23.93 5.54262 23.4563C5.06896 22.9827 4.83252 22.4139 4.83333 21.7502V18.1252H7.25V21.7502H21.75V18.1252H24.1667V21.7502C24.1667 22.4147 23.9298 22.9839 23.4562 23.4575C22.9825 23.9312 22.4138 24.1676 21.75 24.1668H7.25Z"
                            fill="#2EC875"
                        />
                    </svg>
                </ReportCard>

                <ReplyButton>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10.03 6.46983C10.1705 6.61045 10.2494 6.80108 10.2494 6.99983C10.2494 7.19858 10.1705 7.3892 10.03 7.52983L6.31001 11.2498H14.5C15.453 11.2498 16.867 11.5298 18.063 12.3908C19.298 13.2808 20.25 14.7558 20.25 16.9998C20.25 17.1987 20.171 17.3895 20.0303 17.5302C19.8897 17.6708 19.6989 17.7498 19.5 17.7498C19.3011 17.7498 19.1103 17.6708 18.9697 17.5302C18.829 17.3895 18.75 17.1987 18.75 16.9998C18.75 15.2438 18.035 14.2198 17.187 13.6088C16.3 12.9698 15.213 12.7498 14.5 12.7498H6.31001L10.03 16.4698C10.1037 16.5385 10.1628 16.6213 10.2038 16.7133C10.2448 16.8053 10.2668 16.9046 10.2686 17.0053C10.2704 17.106 10.2519 17.206 10.2141 17.2994C10.1764 17.3928 10.1203 17.4776 10.049 17.5489C9.97783 17.6201 9.893 17.6762 9.79961 17.714C9.70622 17.7517 9.60619 17.7702 9.50549 17.7684C9.40479 17.7666 9.30547 17.7446 9.21347 17.7036C9.12147 17.6626 9.03867 17.6035 8.97001 17.5298L3.97001 12.5298C3.82956 12.3892 3.75067 12.1986 3.75067 11.9998C3.75067 11.8011 3.82956 11.6105 3.97001 11.4698L8.97001 6.46983C9.11064 6.32938 9.30126 6.25049 9.50001 6.25049C9.69876 6.25049 9.88939 6.32938 10.03 6.46983Z"
                            fill="#222222"
                            fillOpacity="0.7"
                        />
                    </svg>

                    <span>Reply</span>
                </ReplyButton>
            </MaxContainer>
        </Wrapper>
    );
};

export default Request;
