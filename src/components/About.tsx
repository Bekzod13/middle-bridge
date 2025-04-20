import { Link } from "react-router";

const About = () => {
    return <div className="c-container flex flex-col justify-center items-center ">
            <h1 className="uppercase text-[#2E42A5]  font-[600] text-[50px] tracking-tight mt-[50px]">biz haqimizda</h1>
            <p className="w-[70%] text-center">Biz Koreyada o‘qishni orzu qilgan yoshlar uchun talabalarni Koreya davlatidagi nufuzli universitetlarga o‘qishga tayyorlaydigan ishonchli ta’lim agentligi. Biz Bakalavr, Magistratura, Til kurslari va Kasbiy ta’lim yo‘nalishlarida hujjat topshirish,grantlar, viza va yashash bo‘yicha to‘liq ko‘mak beramiz. Asoschisi: Khamidov Dilshod 8 yillik tajriba 200+ talaba Koreyada tahsil olmoqda.Middle Bridge — orzu va imkoniyatlar o‘rtasidagi ko‘prik! </p>
            <Link to={"/"} className="text-[14px] w-[157px] h-[48px] rounded-[30px] bg-[#2563EB] text-white flex justify-center items-center gap-2 my-[50px]">
                <span>Batafsil</span>
            </Link>
    </div>
}

export default About;