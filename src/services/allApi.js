import { base_url } from "./base_url"
import { commonApi } from "./commonApi"

//register user
export const registerApi=async(userData)=>{
    return await commonApi("POST",`${base_url}/user/register`,userData,"")
}

//login user
export const loginApi=async(data)=>{
    return await commonApi("POST",`${base_url}/user/login`,data,"")
}

//add project
export const addProjectApi=async(data,reqHeader)=>{
    return await commonApi("POST",`${base_url}/project/add`,data,reqHeader)
}

//get home project
export const getHomeProjectApi=async()=>{
    return await commonApi('GET',`${base_url}/project/homeproject`,"","")
}

//get all projects
export const getAllProjectApi=async(searchKey,reqheader)=>{
    return await commonApi('GET',`${base_url}/project/allproject?search=${searchKey}`,"",reqheader)
}

//get Userproject
export const getUserProjectApi=async(reqheader)=>{
    return await commonApi('GET',`${base_url}/project/userproject`,"",reqheader)
}