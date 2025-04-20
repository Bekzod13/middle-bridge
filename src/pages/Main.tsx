import About from "../components/About";
import Banner from "../components/Banner";
import CMap from "../components/CMap";
import MainForm from "../components/MainForm";
import Program from "../components/Program";
import Result from "../components/Result";

const Main = () => {
    return  <>
        <Banner/>
        <About/>
        <Program/>
        <Result/>
        <MainForm  title={"Bog'lanish"}/>
        <CMap/>
    </>
}

export default Main;