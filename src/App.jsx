import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Auth from "./pages/Auth"
import Dashboard from "./pages/Dashboard"
import Home from "./pages/Home"
import Project from "./pages/Project"
import { ToastContainer } from "react-toastify"

function App() {
  

  return (
    <>
      
      <Header/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Auth/>}/>
      <Route path="/register" element={<Auth registerPage={'registerPage'}/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>     
      <Route path="/project" element={<Project/>}/>
      </Routes>
     
      <Footer/>

      <ToastContainer position="top-center" autoClose={2000} />
    </>
  )
}

export default App
