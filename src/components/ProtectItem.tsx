
interface ProtectItem {
    number: string,
    title:string,
    desc:string,
}
export default function ProtectItem({number, title, desc}:ProtectItem) {
    return (
        <div className={''}>
            <div className="grid place-content-center shadow-[0px_0px_0px_4px_rgba(0,_188,_116,_0.2)] rounded-9980xl bg-mediumseagreen box-border w-7 h-7 overflow-hidden text-white border-[1px] border-solid border-white">
                <div className="leading-[16px] font-medium flex items-center w-[5.1px] h-4">
                    {number}
                </div>


            </div>
            <div className="flex mt-[24px] flex-col items-start justify-start gap-[15px] text-mediumseagreen">
                <b className="relative text-xl tracking-[-0.33px] leading-[24.2px]">
                    {title}
                </b>
                <div
                    className="w-[315px] relative text-lg leading-[24px] font-medium text-dimgray-100 flex items-center">
                    {desc}
                </div>
            </div>
        </div>

    )
}