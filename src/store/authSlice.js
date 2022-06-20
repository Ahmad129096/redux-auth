import { createSlice } from "@reduxjs/toolkit";



const authSlice = createSlice({
    name: 'auth',
    initialState:{isAuthenticated: false},
    reducers:{
        login(state){
            state.isAuthenticated = true
        },
        logout(state){
            state.isAuthenticated = !state.isAuthenticated
        }
    }
})



export const authActions = authSlice.actions;
export default authSlice