import { Link, useNavigate } from "react-router";
import  logo from '../assets/logo.png';
import { FaTelegram } from "react-icons/fa";
import instagram from '../assets/instagram.png';
import location from '../assets/location.png';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const  Navbar = () => {
    const navigate = useNavigate();
    const options = [
        { value: '/magistratura', label: 'MAGISTRATURA' },
        { value: '/bakalavr', label: 'BAKALAVR' },
        { value: '/kasbiy-talim', label: "KASBIY TA'LIM" },
        { value: '/til-kursi', label: 'TIL KURSI' }
      ];

      const handleSelect = (selectedOption: any) => {
        navigate(selectedOption.value)
      };
     
    return <>
        <header className="border-b-2 bg-white border-[#DDB38E] fixed top-0 left-0 right-0 h-[80px] z-[100]">
            <nav className="c-container  flex items-center justify-between  h-full">
                <Link to={'/'}>
                    <img src={logo} alt="logo" className="h-[40px] object-contain" />
                </Link>
                <div className="font-[400] text-[14px] flex items-center justify-center gap-[14px]">
                    {/* <Dropdown options={options} 
                    // onChange={this._onSelect}
                     value={defaultOption} placeholder="Select an option" /> */}
                     <div>
                    <Dropdown 
                        className="w-[200px]"
                        options={options} 
                        onChange={handleSelect}
                        placeholder={"Koreyada Ta’lim"}
                    />
                    </div>
                    <Link to={'/services'}>Xizmatlar</Link>
                    <Link to={'/korean'}>Koreys-Tili</Link>
                    <Link to={'/feedback'}>Mijozlar-Fikri</Link>
                    <Link to={'/news'}>Yangiliklar</Link>
                </div>
                <a href="tel+998787775777"  className="bg-[#3A72EC] flex items-center justify-center text-white  w-[200px] h-[48px] rounded-[10px] text-[18px]">
                    +998 78 777 57 77
                </a>
                <div className="flex items-center">
                    <a href="https://t.me"  className="text-blue-500 text-[40px]">
                        <FaTelegram/>
                    </a>
                    <a href="https://t.me"  >
                    <img src={instagram} alt="instagram" className="w-[60px]" />
                    </a>
                    <a href="https://t.me"  >
                        <img src={location} alt="location" className="w-[40px]" />
                    </a>
                </div>
                <Link to={"/contact"}  className="bg-[#3A72EC] flex items-center justify-center text-white text-[14px] w-[120px] h-[48px] rounded-[40px]">
                    Bog'lanish
                </Link>
            </nav>
        </header>
        <div className="w-full h-[80px]"></div>
    </>
}

export default  Navbar;