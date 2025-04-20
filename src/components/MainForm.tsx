import axios from "axios";
import { useState } from "react";
import { FiMail } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoCallOutline } from "react-icons/io5";
import { PiPaperPlaneTiltBold } from "react-icons/pi";

const MainForm = (props: {title: string}) => {

    const {title} = props;
    const CHAT_ID = "-4606499056";
    const BOT_TOKEN = "7599591466:AAF_SqIpp-n4_vrtvzWtbzTybxrlvSCDxms";
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");


    const sendTelegramMessage = async () => {
        if(phone === "" && name === "")
        {
            window.alert("Siz formani to'ldirmadingiz")
        } else{
        const text = `Ism: ${name}
Telefon: ${phone}
Xabar: ${message}
        `;
        try {
            const response = await axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                chat_id: CHAT_ID,
                text: text
            });
            if(response.status === 200)
            {
                setName("");
                setPhone("");
                setMessage("");
                window.alert("Xabar muvaffaqyatli yuborildi!")
            }
            return response.data;
            } catch (error) {
                console.log(error);
            throw error;
            }
        }
 

      }


    return <div className="c-container mt-[50px]">
        <h1 className="text-[#3B82F6] text-[48px] text-center font-bold">{title}</h1>
        <p className="text-[#374151] text-[18px] text-center">Biz bilan bog'lanish uchun quyidagi ma'lumotlarni kiriting.</p>
        <div className="flex gap-[20px] mt-[20px]">
            <div className="w-[60%] shadow rounded-[10px] px-[30px] py-[40px]">
                <h1 className="text-[#020817] text-[24px] font-bold">Xabar yuborish</h1>
                <p className="text-[14px] text-[#374151]">Bizga xabar yuboring va biz tez orada siz bilan bog'lanamiz.</p>
                <div className="flex gap-3 mt-[10px]">
                    <div className="flex flex-col w-[50%]">
                        <label htmlFor="name">Ism</label>
                        <input type="text" name="name" id="name" className="border rounded-md border-[#E2E8F0] p-[10px]" value={name}  placeholder="Ism" onChange={(e: any) => setName(e.target.value)}/>
                    </div>
                    <div className="flex flex-col w-[50%]">
                        <label htmlFor="phone">Telefon raqam</label>
                        <input type="number" name="phone" id="phone"  className="border rounded-md border-[#E2E8F0] p-[10px]" value={phone}  placeholder="+9989" onChange={(e: any) => setPhone(e.target.value)}/>
                    </div>
                </div>
                <div className="flex gap-3 mt-[10px]">
                    <div className="flex flex-col w-[100%]">
                        <label htmlFor="message">Xabar</label>
                        <textarea  name="message" id="message"  className="border rounded-md border-[#E2E8F0] p-[10px] h-[120px]" value={message}  placeholder="Xabar" onChange={(e: any) => setMessage(e.target.value)}/>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div onClick={sendTelegramMessage} className="text-[14px] w-[157px] h-[48px] rounded-[30px] bg-[#2563EB] text-white flex justify-center items-center gap-2 mt-[30px]">
                        <PiPaperPlaneTiltBold />
                        <span>Yuborish</span>
                    </div>
                </div>
            </div>
            <div className="w-[40%] shadow rounded-[10px] px-[30px] py-[40px]">
                <h1 className="text-[#020817] text-[24px] font-bold">Bog'lanish ma'lumotlari</h1>
                <p className="text-[14px] text-[#374151]">Quyidagi ma'lumotlar orqali biz bilanbog'lanishingiz mumkin.</p>
                <div className="flex gap-3 items-center mt-[30px]">
                    <div className="w-[48px] h-[48px] rounded-full bg-blue-50 flex justify-center items-center">
                        <IoCallOutline className="text-[#2563EB]" />
                    </div>
                    <div>
                        <h2 className="text-[18px] font-bold">Telefon</h2>
                        <a href="tel:+998915671669">+998 91 567 16 69</a>
                    </div>
                </div>
                <div className="flex gap-3 items-center mt-[30px]">
                    <div className="w-[48px] h-[48px] rounded-full bg-blue-50 flex justify-center items-center">
                        <FiMail className="text-[#2563EB]" />
                    </div>
                    <div>
                        <h2 className="text-[18px] font-bold">Email</h2>
                        <a href="mailto:mb.markaz2025@gmail.com">mb.markaz2025@gmail.com</a>
                    </div>
                </div>
                <div className="flex gap-3 items-center mt-[30px]">
                    <div className="w-[48px] h-[48px] rounded-full bg-blue-50 flex justify-center items-center">
                        <HiOutlineLocationMarker className="text-[#2563EB]"  />
                    </div>
                    <div>
                        <h2 className="text-[18px] font-bold">Manzil</h2>
                        <p >Jizzax shahar, Sh.Rashidov ko‘chasi
                        Uzbekistan</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default MainForm;