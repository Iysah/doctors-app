"use client";

import store from "../redux/store";
import "../styles/globals.css";

import StyledComponentsRegistry from "./lib/registry";
import { Provider } from "react-redux";

export default function RootLayout({ children }) {
    return (
        <Provider store={store}>
            <html lang="en">
                <body>
                    <StyledComponentsRegistry>
                        {children}
                    </StyledComponentsRegistry>
                </body>
            </html>
        </Provider>
    );
}
