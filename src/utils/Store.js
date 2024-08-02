import {configureStore} from '@reduxjs/toolkit'
import SearchSlice from './SearchSlice'
import Blogslice from './Blogslice'

const store = configureStore({

    reducer :{
        searchcache : SearchSlice,
        Bloglist : Blogslice
    }

})

export default store