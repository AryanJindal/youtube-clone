import { createSlice } from "@reduxjs/toolkit";
import { Offset_Live_chat } from "./constants";

const chatSlice = createSlice({
    name:"LiveChat",
    initialState:{
        messages:[]
    },
    reducers:{
        addMessage:(state, action) => {
            state.messages.splice(Offset_Live_chat, 1);
            state.messages.unshift(action.payload)
        }
    }
})
export const {addMessage} = chatSlice.actions; 
export default chatSlice.reducer;