import { createSlice } from "@reduxjs/toolkit";

const Blogslice = createSlice({
    name : 'blogs',
    initialState : [],
    reducers : {
        addblog : (state , action) => { 
              state.push(action.payload)
        }
    }
})

export default Blogslice.reducer

export const {addblog} = Blogslice.actions