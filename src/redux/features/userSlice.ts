import { createSlice } from '@reduxjs/toolkit'

interface InitialState {
    user: any | null
}

const initialState: InitialState = {
    user: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action) => {
            state.user = action.payload.user
        }
    }
});

export const { setUserData } = userSlice.actions

export default userSlice.reducer