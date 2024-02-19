import { createSlice } from "@reduxjs/toolkit";

export const UserProfileSlice = createSlice({
    name:'userProfile',
    initialState: {
        user : null,
        token : null
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload

        },
        setToken: (state, action) => {
            state.token = action.payload
        } 
    }
})

export const {setUser} = UserProfileSlice.actions;
export const {setToken} = UserProfileSlice.actions
export default UserProfileSlice.reducer