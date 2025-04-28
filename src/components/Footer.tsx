import { Link } from 'react-router';
import logo from '../assets/logo.png';
import { IoLocationOutline, IoMailOutline } from "react-icons/io5";
import { FiFacebook, FiPhone } from 'react-icons/fi';
import { LuLinkedin } from "react-icons/lu";
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return <footer className='relative'>
        <div className="c-container">
            <div>
                <img src={logo} alt="logo" className='h-[60px]'/>
            </div>
            <div className='flex justify-between w-full '>
                <div className='text-[14px] text-[#64748B] w-[40%]'>
                    <p>Orzusi katta, maqsadi aniq yoshlar uchun Middle Bridge — bu oddiy agentlik emas, bu Koreyadagi ta’lim sari ochilgan eshik. </p>
                    <p>7 yillik tajriba, 200+ talabaning ishonchi va nufuzli universitetlarga olib boradigan yo‘l — barchasi bizda jamlangan.  </p>
                    <p>Middle Bridge – bilim, ishonch va orzular tutashgan manzil!</p>
                </div>
                <div className='text-[14px] text-[#64748B] w-[30%] flex flex-col  gap-4'>
                    <p className='text-[#020817] text-[20px] font-bold'>Xizmatlar </p>
                    <Link to={'/'}>Biz haqimizda </Link>
                    <Link to={'/'}>Bizning dasturlar </Link>
                    <Link to={'/'}>Natijalar</Link>
                    <Link to={'/'}>Hamkorlar </Link>
                    <Link to={'/'}>O’quvchilar fikirlari </Link>
                    
                </div>
                <div className='text-[14px] text-[#64748B] w-[30%] flex flex-col  gap-4'>
                    <p className='text-[#020817] text-[20px] font-bold'>Bog'lanish </p>
                    <p className='flex items-center gap-1' >
                        <IoLocationOutline color='#2563EB'/>
                        <span>Manzil: Jizzax shahar, Sh.Rashidov ko‘chasi, Uzbekistan</span></p>
                    <a className='flex  items-center gap-1' href="https://t.me">
                        <FiPhone />
                        <span>Telefon: +998 91 567 16 69</span>
                    </a>
                    <a className='flex  items-center gap-1 ' href="https://t.me">
                        <IoMailOutline />
                        <span>Email: mb.markaz2025@gmail.com</span>
                    </a>
            
                </div>
            </div>
            <div className='flex  gap-5 mb-[20px]'>
                <a className='w-[44px] h-[44px] rounded-full bg-blue-100 text-blue-600 flex justify-center items-center' href="https://facebook.com">
                    <FiFacebook />
                </a>
                <a className='w-[44px] h-[44px] rounded-full bg-blue-100 text-blue-600 flex justify-center items-center' href="https://LuLinkedin.com">
                    <LuLinkedin />
                </a>
                <a className='w-[44px] h-[44px] rounded-full bg-blue-100 text-blue-600 flex justify-center items-center' href="https://facebook.com">
                 <FaInstagram />
                </a>
            </div>
            <div className='flex justify-center items-center border-t border-t-white py-[33px] text-[#64748B]'>
                © 2025 Middle Bridge. Barcha huquqlar himoyalangan.
            </div>
        </div>
        <div className='z-[-1] absolute top-0 left-0 right-0 w-[100%] h-[100%] bg-gradient-to-r from-gray-50 to-gray-100'></div>
        <div className="blur-[10px] bg-[#2563EB0D] w-[250px] h-[300px] rounded-full absolute bottom-[30px] right-[35%]"></div>
        <div className="blur-[10px] bg-[#2563EB0D] w-[380px] h-[470px] rounded-full absolute bottom-[40px] left-[35%]"></div>
    </footer>
}

export default Footer;