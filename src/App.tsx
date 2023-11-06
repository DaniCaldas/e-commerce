import { Body } from "./style"
import Home from "./pages/Home/Home"
import Navbar from "./layout/Navbar/Navbar"
import Footer from "./layout/Footer/Footer"

export default function App() {

  return (
    <Body>
        <Navbar/>
        <Home/>
        <Footer/>
    </Body>
  )
}