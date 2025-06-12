import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Auth from "./pages/Auth"
import Dashboard from "./pages/Dashboard"
import Home from "./pages/Home"
import Project from "./pages/Project"
import { ToastContainer } from "react-toastify"
import { isAuthTokenContext } from "./Context/ContextShare"
import { useContext } from "react"

function App() {
  
const {isAuthToken,setIsAuthToken}=useContext(isAuthTokenContext)

  return (
    <>
      
      <Header/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Auth/>}/>
      <Route path="/register" element={<Auth registerPage={'registerPage'}/>}/>
      <Route path="/dashboard" element={isAuthToken ? <Dashboard/> : <Home/>}/>     
      <Route path="/project" element={<Project/>}/>
      </Routes>
     
      <Footer/>

       <ToastContainer 
        position="top-center" 
        autoClose={1000} 
        closeOnClick 
        pauseOnHover={false} 
      />
    </>
  )
}

export default App
