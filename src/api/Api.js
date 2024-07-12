import axios from "axios";

const Api= axios.create({
    baseURL: "http://localhost:5500",
    // withCredentials: true,
    headers:{
        "Content-Type":"application/json"
    }
})

//making our first api post/users / register

export const registerApi= (data)=> Api.post("/users", data)

//logini API
// ? - query parameter
export const loginApi =(email) => Api.get(`/users?email=${email}`)

//fetch user api
export const fettchUsers = () => Api.get('/users')

//update user api

export const updateUser = (id,data) => Api.put(`/users/${id}`,data)

//delete user api
export const deleteUser =(id)=> Api.delete(`/users/${id}`)



//complete URL : bhttp://localhost:5500/users

