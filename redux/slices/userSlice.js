import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name: "user",
    initialState: {
        email: "",
        name: "",
        id: ""
    },
    reducers: {
        setName: ((state, action) => {
            return { ...state, name: action.payload }
        }),
        setEmail: ((state, action) => {
            return { ...state, email: action.payload };
        }),
        setId: ((state, action) => {
            return { ...state, id: action.payload };
        }),
        doLogin: ((state, action) => {
            console.log(action.payload)
            return {
                ...state,
                id: action.payload.id,
                name: action.payload.name,
                email: action.payload.email,
            }
        })
    }
});