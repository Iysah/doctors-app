import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isMenuOpen: false,
};

const toggleMobileNav = createSlice({
    name: "toggle",
    initialState: initialState,
    reducers: {
        toggle: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
    },
});

export const { toggle } = toggleMobileNav.actions;
export default toggleMobileNav.reducer;
