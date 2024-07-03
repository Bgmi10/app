import { createSlice } from "@reduxjs/toolkit";

const saerchslice = createSlice({
    name : 'search_results_cache',
    initialState : {},
    reducers : {
        cache_results : (state , action) =>{
            const a  = Object.assign(state , action.payload)
            return a 
        }
    }
})

export default saerchslice.reducer

export const {cache_results} = saerchslice.actions