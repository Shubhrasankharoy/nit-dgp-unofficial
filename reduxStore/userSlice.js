import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        isLoggedIn: false,
        isLoading: false,
        error: null,
    },
    reducers: {
        setUser(state, action) {
            const { uid, email, displayName, photoURL } = action.payload;
            state.user = {
                uid,
                email,
                displayName,
                photoURL,
            };
            state.isLoggedIn = true;
            state.isLoading = false;
        },
        clearUser(state) {
            state.user = null;
            state.isLoggedIn = false;
            state.isLoading = false;
            state.error = null;
        },
        setLoading(state, action) {
            state.isLoading = action.payload;
        },
        setError(state, action) {
            state.error = action.payload;
        },
    },
})

export const { setUser, clearUser, setLoading, setError } = userSlice.actions;
export default userSlice.reducer;