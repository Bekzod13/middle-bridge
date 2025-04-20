import { certs } from "../data";

const Result = () => {
    return <div className="bg-[#1B1B1B] py-[60px]">
        <h1 className="text-center text-white text-[60px] uppercase ">Natijalarimiz !</h1>
        <div className="c-container flex gap-2 flex-wrap">
            {
                certs.map(cert => (
                    <div className="w-[32%]" key={cert.id}>
                        <img src={cert.image} alt={cert.image} className="w-[100%]" />
                    </div>
                ))
            }
        </div>
    </div>
}

export default Result;