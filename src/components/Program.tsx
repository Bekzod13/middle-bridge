import { IoBookmarkSharp } from "react-icons/io5";
import { programs } from "../data";
import { Link } from "react-router";

const Program = () => {
    return <div className="c-container">
        <h1 className="uppercase text-[100px] font-bold text-center text-[#393939]" >bizning dasturlar</h1>

        <div className="flex flex-col gap-[50px] mt-[40px]">
            {
                programs.map(program => (
                    <div className="bg-[#1E1E1E] rounded-[30px] h-[400px] px-[50px] flex flex-col justify-center relative" key={program.id}>
                        <div className={program.id % 2 === 0 ? "absolute left-[60%]" : ""}>
                            <h1 className="text-[#2563EB] text-[40px] font-bold">{program.title}</h1>
                            <p className="text-white w-[360px] text-[14px] pl-6 mt-[40px]  font-[300]" style={{letterSpacing: "1px"}}>{program.subtitle}</p>
                            <div className="text-white w-[360px] text-[14px] pl-6 font-[300]" >
                                {
                                    program.list.map(item => (
                                        <div key={item} className="pl-[25px] relative"> 
                                            <span className="absolute w-[5px] h-[5px] bg-white rounded-full top-[48%] left-3"></span>
                                            {item}
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                   
                        <img src={program.img} alt={program.img} className={ `absolute top-0 ${program.id % 2 === 0 ? "left-0" : "right-0"}  bottom-0 h-[100%]`} />
                        <div className={`absolute top-[-30px] ${program.id % 2 === 0 ? "left-[60%]" : ""}`}>
                            <div className="absolute right-3 border border-[#1E1E1E] h-[70px] w-[46px]"></div>
                            <IoBookmarkSharp  className="text-[70px] text-white  "/>
                            <span className="absolute top-[15%] left-[33%] text-[20px] font-bold">0{program.id}</span>
                        </div>
                        <Link to={"/" + program.link + "#header"} className={`text-[14px] w-[157px] h-[48px] rounded-[30px] bg-[#2563EB] text-white flex justify-center items-center gap-2  absolute  bottom-[20px] ${program.id % 2 === 0 ? "left-[20px]" : "right-[20px]"}`}>
                            <span>Batafsil</span>
                        </Link>
                    </div>
                ))
            }
       
        
        </div>
    </div>
}

export default Program;