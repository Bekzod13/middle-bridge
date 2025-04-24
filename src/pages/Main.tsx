import About from "../components/About";
import Banner from "../components/Banner";
import CMap from "../components/CMap";
import MainForm from "../components/MainForm";
import Program from "../components/Program";
import Result from "../components/Result";

const Main = (props: {handleScroll: any, sectionRef: any}) => {
    return  <>
        <Banner  handleScroll={props.handleScroll} />
        <About/>
        <Program/>
        <Result/>
        <MainForm sectionRef={props.sectionRef} title={"Bog'lanish"}/>
        <CMap/>
    </>
}

export default Main;