import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name: "user",
    initialState: {
        email: "",
        name: "",
        id: "",
        role: ""
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
        setRole: ((state, action) => {
            return { ...state, role: action.payload };
        }),
        doLogin: ((state, action) => {
            console.log(action.payload)
            return {
                ...state,
                id: action.payload.id,
                name: action.payload.name,
                email: action.payload.email,
                role: action.payload.role,
            }
        })
    }
});

export const { setEmail, setId, setName, setRole, doLogin } = userSlice.actions;
export default userSlice.reducer;