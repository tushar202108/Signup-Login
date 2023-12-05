import React from 'react'
import './App.css'
import Navbar from './component/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Footer from './component/footer'
import Signup from './component/Signup'
import Home from './component/home'
import Privatecomponent from './component/Privatecomponent'
import Login from './component/Login'
import About from './component/About'
// import Team from  './component/Team'
import Details from './component/Details'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route element={<Privatecomponent/>}>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/About" element={<About/>}/>
        {/* <Route exact path="/team" element={<Team/>}/> */}
        <Route exact path="/X-Rays" element={<Details/>}/>
        </Route>
        <Route exact path="/signup" element={<h1><Signup/></h1>}/>
        <Route exact path="/login" element={<h1><Login/></h1>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}

export default App