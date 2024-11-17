import { Routes, Route } from "react-router-dom"

import HomePage from "./pages/HomePage"
import MenuPages from "./pages/MenuPages"
import AboutUsPage from "./pages/AboutUsPage"

import NavbarComponent from "./components/NavbarComponent"
import FooterComponent from "./components/FooterComponent"

function App() {

return(
  <div>
    <NavbarComponent/>
      <Routes>
        <Route path="/" element={ <HomePage/> }/>
        <Route path="/menu" element={ <MenuPages/> }/>
        <Route path="/about" element={ <AboutUsPage/> }/>
      </Routes>
    <FooterComponent/>  
  </div>
)
}

export default App
