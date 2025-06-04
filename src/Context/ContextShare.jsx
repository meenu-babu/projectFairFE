import React, { createContext, useState } from 'react'

//create context
export const addProjectResponseContext=createContext()

//children is a pre defined props that is used to share data between props
function ContextShare({children}) {
//create a state ,that state is where we are sharing data between components
const [addProjectResponse, setAddProjectResponse] = useState({})

  return (
   <>
   <addProjectResponseContext.Provider value={{addProjectResponse,setAddProjectResponse}}>
{children}
   </addProjectResponseContext.Provider>
   </>
  )
}

export default ContextShare