import {   createSlice } from "@reduxjs/toolkit"


//Initial value   what data should be loaded at first

const initialState = {
    users : [] // list of user  //single user vako vyaa [ ] ma null hunttyo

}

//creating slice in store
export const userSlice = createSlice({
name : "users",
initialState,

//reducer : list of actions (add data to list,remove,change)
reducers:{

    //inserting/adding data into that empty array

    //state ; abouve state (users-Empty Array)
    //action : we can Trigger it from anywhere(Homepage)

    addUser : (state,action) => {

        // state ma user ko data fill garne
        state.users = action.payload;

    }
}


})
//exporting the reducer

export const {addUser}= userSlice.actions;
export default userSlice.reducer;

