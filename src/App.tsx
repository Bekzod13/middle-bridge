import { Route, Routes } from "react-router"
import Main from "./pages/Main"
import Content from "./pages/Content"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:page" element={<Content />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
