import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './bootstrap.min.css'
import ContextShare from './Context/ContextShare.jsx'

createRoot(document.getElementById('root')).render(

  //to implement contextapi ,we have to enclose App component inside Contextshare

  <ContextShare>
  <BrowserRouter>
   <App />
  </BrowserRouter>
  </ContextShare>

 
  
)
