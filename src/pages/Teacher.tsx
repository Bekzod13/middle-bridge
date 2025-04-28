import { teachers } from "../data";

const Teacher = () => {
    return <>
        <div className="c-container flex flex-col justify-center items-center ">
            <h1 className="uppercase text-[#2E42A5]  font-[600] text-[50px] tracking-tight mt-[50px]">BIZNING KOREYS TILI USTOZLARIMIZ</h1>
            <p className="w-[70%] text-center">TANISHIB CHIQING! </p>
        </div>
        <div className="c-container flex flex-wrap justify-center items-center ">
            {
                teachers.map(teacher => (
                    <div key={teacher.id}  className="shadow rounded-2xl py-5 px-12 min-w-[33%] max-w-[300px] flex justify-center flex-col items-center min-h-[360px] mb-[20px]">
                        <div  className="w-[100px] h-[100px] rounded-full overflow-hidden   ">
                            <img src={teacher.image} alt={teacher.name} className="w-[100%] h-[100%]  object-contain  scale-150" />
                        </div>
                        <h1 className="text-[20px] font-[700] text-[#1F2937]">{teacher.name}</h1>
                        <p className="text-[#4B5563] text-center">{teacher.description}</p>
                    </div>
                ))
            }
        </div>
    </>
}

export default Teacher;
