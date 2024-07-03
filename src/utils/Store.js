import {configureStore} from '@reduxjs/toolkit'
import SearchSlice from './SearchSlice'

const store = configureStore({

    reducer :{
        searchcache : SearchSlice    
    }

})

export default store