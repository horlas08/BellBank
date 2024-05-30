import ProtectItem from "./ProtectItem";

export default function Protecting() {
    return (
        <div className={'w-full '}>
            <div className=" flex flex-col items-center justify-between gap-[28px]">

                <div className=" w-[80%] mx-auto flex flex-col md:flex-row items-center justify-between ">
                    <b className=" text-left max-w-full md:max-w-[500px] text-black relative inline-block  text-16xl">
                        Protecting and powering growth for businesses
                    </b>
                    <div className=" w-full md:w-[50%] text-left md:my-0 my-5 relative text-lg leading-[24px] font-medium text-dimgray-100 flex items-center ">
                        We provide secure and efficient financial solutions, helping you grow with confidence. Our tailored business accounts streamline your finances, empower your team, and fuel your success.
                    </div>
                </div>
            </div>
            <div className="w-[80%] relative  mx-auto text-xs text-gray-300">
                <div className="flex flex-col md:flex-row gap-x-5 gap-y-9  z-[-9] my-[50px]  justify-center w-full  mx-auto">

                    <ProtectItem number={'1'} title={'Bank-level security'} desc={'Fully Licensed by CBN and Insured by NDIC, Be rest assured with our robust and reliable security measures, protecting your business and finances.'}/>
                    <ProtectItem number={'2'} title={'Regulatory Compliance'} desc={'Trust that we\'re always up-to-date with the latest regulations, ensuring your business is too.'}/>
                    <ProtectItem number={'3'} title={'White-glove support'}
                                 desc={'Enjoy personalized, premium support from our expert team, dedicated to your success.'}/>



                </div>

            </div>

        </div>

    )
}