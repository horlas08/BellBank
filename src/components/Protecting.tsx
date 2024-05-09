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
                        Providing financial solutions that empowering both
                        business and individuals to thrive and achieve remarkable
                        growth milestones.
                    </div>
                </div>
            </div>
            <div className="w-[80%] relative  mx-auto text-xs text-gray-300">

                {/*<div className="absolute z-[-1] w-full top-[14px] right-[0px] left-[0px] bg-whitesmoke-500 h-px"/>*/}
                <div className="flex flex-col md:flex-row gap-x-5 gap-y-9  z-[-9] my-[50px]  justify-center w-full  mx-auto">
                    <ProtectItem number={'1'} title={'Bank-level security'} desc={'Configure price templates and standard plans, including usage-based charges.'}/>
                    <ProtectItem number={'2'} title={'Regulatory Compliance'} desc={'Configure price templates and standard plans, including usage-based charges.'}/>
                    <ProtectItem number={'3'} title={'White-glove support'}
                                 desc={'Configure price templates and standard plans, including usage-based charges.'}/>



                </div>

            </div>

        </div>

    )
}