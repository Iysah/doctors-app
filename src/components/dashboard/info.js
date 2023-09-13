"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Wrapper } from "../../styles/request.style";
import { BackButton, Heading1, Heading2 } from "../../styles/dashboard.style";
import { IMaxContainer, InfoItem } from "../../styles/info.style";

const Info = () => {
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

            <IMaxContainer>
                <Heading1>Ibrahim Sani</Heading1>

                <InfoItem>
                    <Heading2>Specific treatments requested</Heading2>
                    <p className="content">
                        Lorem ipsum dolor sit amet consectetur. Lectus ipsum
                        gravida sed arcu eget lectus semper. Eros sagittis felis
                        etiam sem ipsum amet amet volutpat. Aliquet fringilla
                        lectus venenatis malesuada suspendisse urna viverra
                        lorem pellentesque. Tortor ornare tincidunt tempor
                        curabitur. Nec fermentum eget ut pretium feugiat amet
                        mauris id tincidunt.
                    </p>
                </InfoItem>

                <InfoItem>
                    <Heading2>The reason for the authorization</Heading2>
                    <p className="content">
                        Lorem ipsum dolor sit amet consectetur. Lectus ipsum
                        gravida sed arcu eget lectus semper. Eros sagittis felis
                        etiam sem ipsum amet amet volutpat. Aliquet fringilla
                        lectus venenatis malesuada suspendisse urna viverra
                        lorem pellentesque. Tortor ornare tincidunt tempor
                        curabitur. Nec fermentum eget ut pretium feugiat amet
                        mauris id tincidunt.{" "}
                    </p>
                </InfoItem>
            </IMaxContainer>
        </Wrapper>
    );
};

export default Info;
