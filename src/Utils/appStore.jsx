import {configureStore} from "@reduxjs/toolkit"
import userRuducer from "../Utils/userSlice"


const appStore = configureStore({
    reducer :{
        user : userRuducer
    }
})

export default appStore 