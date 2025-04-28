import { Route, Routes } from "react-router"
import Main from "./pages/Main"
import Content from "./pages/Content"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { useRef } from "react"
import { ScrollToTop } from './ScrollToTop';
import Teacher from "./pages/Teacher"

function App() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    // @ts-ignore 
    window.scrollTo({ top: sectionRef.current?.offsetTop - 80, behavior: 'smooth' });
  };
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Main handleScroll={handleScroll} sectionRef={sectionRef} />} />
        <Route path="/korean" element={<Teacher/>}/>
        <Route path="/:page" element={<Content  handleScroll={handleScroll} sectionRef={sectionRef}/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
