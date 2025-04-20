import { useParams } from "react-router";
import MainForm from "../components/MainForm";
import { talim } from "../data";
import { FiCheckCircle } from "react-icons/fi";
import { LuLightbulb } from "react-icons/lu";
import { GrSearch, GrVisa } from "react-icons/gr";
import { MdWorkOutline } from "react-icons/md";

const Content = () => {
    let {page} = useParams();
    page = page ? page : "bakalavr"
    // @ts-ignore 
    const data = talim[page];

    return <>
        <div className="c-container flex flex-col justify-center items-center ">
            <h1 className="uppercase text-[#2E42A5]  font-[600] text-[50px] tracking-tight mt-[50px]">{data.title}</h1>
            <p className="w-[70%] text-center">{data.description} </p>
        </div>
        <div className="c-container">
            {
                data.required_lang ? <>
                    <h1 className="text-center text-[24px] font-bold mt-[20px]">{data.required_lang.title}</h1>
                    <div className="flex gap-[20px] mt-[20px]">
                        {
                            data.required_lang.data.length ?  data.required_lang.data.map((item: any) => (
                                <div key={item.id} className="flex items-center shadow-2xl  w-[50%] p-[20px] rounded-[10px]">
                                    <div className="mr-[20px] px-[20px] text-[24px] text-[#2563EB]">
                                        {
                                            item.id % 2 === 0 ?  <LuLightbulb /> : <FiCheckCircle />
                                        }
                                    </div>
                                    <div>
                                    <h1 className="font-bold text-[18px]">{item.title}</h1>
                                        {
                                            item.list.length ? item.list.map((i:string) => (
                                                <p key={i}>{i}</p>
                                            )):<></>
                                        }
                                    </div>
                                </div>
                            )): <></>
                        }
                    </div>
                </>:<></>
            }
        </div>
        <div className="c-container">
            {
                data.required ? <>
                    <h1 className="text-center text-[24px] font-bold mt-[20px]">{data.required.title}</h1>
                    <div className="flex gap-[20px] mt-[20px] justify-center w-[100%]">
                        {
                            data.required.data.length ?  data.required.data.map((item: any) => (
                                <div key={item.id} className="flex flex-col shadow-2xl p-[20px] rounded-[10px] w-[50%] max-w-[30%]">
                                    <div className="w-[74px] h-[74px] rounded-full bg-blue-50 border border-[#2563EB] text-[#2563EB] text-[40px] flex justify-center items-center mb-[30px]">
                                        {item.id == 1 ? <GrVisa /> : ""}
                                        {item.id == 2 ? <MdWorkOutline /> : ""}
                                        {item.id == 3 ? <GrSearch /> : ""}
                                    </div>
                                    <h1 className="font-bold text-[18px] mb-[15px]">{item.title}</h1>
                                    <p>{item.description}</p>
                                </div>
                            )): <></>
                        }
                    </div>
                </>:<></>
            }
        </div>
        <MainForm  title={"Bepul konsultatsiya va ariza"}/>
    </> 
}

export  default Content;