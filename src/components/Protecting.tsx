import ProtectItem from "./ProtectItem";

export default function Protecting() {
    return (
        <div >
            <div className="self-stretch flex flex-col items-center justify-center gap-[28px]">

                <div className="self-stretch w-[80%] mx-auto flex flex-row items-center justify-between text-23xl">
                    <b className="w-[622px] text-black relative inline-block h-[100px] shrink-0">
                        Protecting and powering growth for businesses
                    </b>
                    <div
                        className="w-[420px]  relative text-lg leading-[24px] font-medium text-dimgray-100 flex items-center shrink-0">
                        Providing financial solutions that empowering both
                        business and individuals to thrive and achieve remarkable
                        growth milestones.
                    </div>
                </div>
            </div>
            <div className="w-[80%] relative  mx-auto text-xs text-gray-300">

                {/*<div className="absolute z-[-1] w-full top-[14px] right-[0px] left-[0px] bg-whitesmoke-500 h-px"/>*/}
                <div className="flex z-[-9] my-[50px] justify-between w-full  mx-auto">
                    <ProtectItem number={'1'} title={'Bank-level security'} desc={'Configure price templates and standard plans, including usage-based charges.'}/>
                    <ProtectItem number={'2'} title={'Regulatory Compliance'} desc={'Configure price templates and standard plans, including usage-based charges.'}/>
                    <ProtectItem number={'3'} title={'White-glove support'}
                                 desc={'Configure price templates and standard plans, including usage-based charges.'}/>



                </div>

            </div>

        </div>

    )
}