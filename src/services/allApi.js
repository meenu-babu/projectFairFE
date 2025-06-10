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

//update project
export const updateProjectApi=async(projectId,reqBody,reqHeader)=>{
    return await commonApi('PUT',`${base_url}/project/edit/${projectId}`,reqBody,reqHeader)
}


//delete project
export const deleteProjectApi=async(project_id,reqHeader)=>{
    return await commonApi('DELETE',`${base_url}/project/delete/${project_id}`,{},reqHeader)
}