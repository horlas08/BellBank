import React from "react";

type CardPill = {
    color: string,
    text: string,
    svg: React.ImgHTMLAttributes<string>['src'],
}
export default function CardPill({color, text, svg}: CardPill) {
    return (
            <div className={` text-sm ${color == 'bg-white' ? 'text-black': 'text-white'}`}>
                <div className={`max-w-[100%] w-[95%] px-2 rounded-81xl ${color} h-[52px] overflow-hidden flex justify-between items-center text-mini`}>
                    <div className="  flex flex-row items-center justify-start gap-[6px]">
                        <div className={`w-2 relative shadow-[0px_8px_24px_rgba(146,_143,_255,_0.4)] rounded-[50%] ${color == 'bg-white' || 'mediumseagreen' ? 'bg-mediumseagreen': 'bg-white'}  h-2`}/>
                        <div className="relative font-medium">{text}</div>
                    </div>
                    <img className=" w-[29.6px] h-[29.5px] object-contain"
                        alt=""
                        src={svg}
                    />
                </div>

            </div>

    )
}