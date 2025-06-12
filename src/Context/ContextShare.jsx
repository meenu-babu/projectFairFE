import React, { createContext, useState } from 'react'

//create context
export const addProjectResponseContext=createContext()
export const editProjectResponseContext=createContext();
export const isAuthTokenContext=createContext();


//children is a pre defined props that is used to share data between props
function ContextShare({children}) {
//create a state ,that state is where we are sharing data between components
const [addProjectResponse, setAddProjectResponse] = useState({})
const [editProjectResponse,setEditProjectResponse]=useState({})
const[isAuthToken,setIsAuthToken]=useState(false)

  return (
   <>
   <addProjectResponseContext.Provider value={{addProjectResponse,setAddProjectResponse}}>
    <editProjectResponseContext.Provider value={{editProjectResponse,setEditProjectResponse}}>
      <isAuthTokenContext.Provider value={{isAuthToken,setIsAuthToken}}>
      {children}
      </isAuthTokenContext.Provider>
    </editProjectResponseContext.Provider>

   </addProjectResponseContext.Provider>
   </>
  )
}

export default ContextShare