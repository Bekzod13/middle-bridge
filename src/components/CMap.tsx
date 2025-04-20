import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";

const CMap = () => {
    const [lat, long] = [40.127786,  67.827907];
    return <div className="c-container flex gap-[20px] h-[300px]">
        <div className=" flex w-[60%] rounded-[20px] overflow-hidden">

            <YMaps>
                <Map defaultState={{ center: [lat, long], zoom: 17 }} className="w-[100%] h-[100%]" >
                    <Placemark geometry={[lat, long]} />
                </Map>
            </YMaps>

        </div>
        <div className=" flex flex-col w-[40%] ">
            <h1 className="uppercase text-[40px] font-bold">Bizning  Offisimiz</h1>
            <h1 className="text-[#007AFF] font-bold mt-[20px]">ISHLASH VAQTI</h1>
            <p className="text-[18px]">Dushanba-Shanba: 8:00-21:00</p>
            <p className="text-18px mt-[20px]">🏛Manzil: Jizzax shahar, Sh.Rashidov <br /> ko‘chasi 7 (Mo‘ljal: "Imkon" savdo <br /> majmuasi, 5-qavat)</p>
        </div>
    </div>
}

export default CMap;