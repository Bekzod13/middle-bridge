import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";
import banner from '../assets/banner.png';

const Banner = (props: {handleScroll: any}) => {
    return <>
        <div className="c-container relative overflow-x-hidden" style={{fontFamily: "'Montserrat', sans-serif"}}>
            <h1 className="uppercase text-[#2E42A5]  font-[600] text-[50px] tracking-tight">MIDDLE BRIDGE </h1>
            <h1 className="uppercase font-[600] text-[50px] tracking-tight">Orzularingiz va Koreya </h1>
            <h1 className="uppercase font-[600] text-[50px] tracking-tight" >o'rtasidagi <span className="text-[#D3A16E]">oltin</span> ko'prik.</h1>
            <p className="w-[70%] text-[14px]">Middle Bridge Consulting — bu talabalarni Koreya davlatidagi nufuzli universitetlarda o‘qishga tayyorlaydigan ishonchli yo‘lboshchi. Biz Bakalavr, Magistratura, Til kurslari va Kasbiy ta’lim yo‘nalishlari bo‘yicha hujjat topshirishdan tortib, viza olishgacha bo‘lgan barcha bosqichlarda sizga yordam beramiz.</p>
            <div className="flex gap-[30px]">
                <div onClick={props.handleScroll}  className="cursor-pointer text-[14px] w-[157px] h-[48px] rounded-[30px] bg-[#2563EB] text-white flex justify-center items-center gap-2 mt-[50px]">
                    <span>Bog'lanish</span>
                    <FaArrowRight />
                </div>
                <Link to={"/"} className="text-[14px] w-[157px] h-[48px] rounded-[30px] border-2 border-[#E2E8F0] flex justify-center items-center gap-2 mt-[50px]">
                    <span>Batafsil Ma'lumot</span>
                </Link>
            </div>
            <img src={banner} alt="banner" className="absolute top-0 right-[-100px] h-[100%] z-[-1]" />
        </div>
    </>
}

export default Banner;