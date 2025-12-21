import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Login from './App.jsx'
import Home from './home.jsx'
import Signup from './Signup.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Login /> */}
    {/* <Home/> */}
    <Signup/>
  </StrictMode>,
)
