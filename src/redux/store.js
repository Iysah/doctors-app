import { configureStore } from "@reduxjs/toolkit";
import toggleMobileNav from "./slices/toggle-mobile-nav";

const store = configureStore({
    reducer: {
        toggle: toggleMobileNav,
    },
});

export default store;
