import React from "react";

type FeatureCardType = {
    title: string,
    subtitle: string,
    children: React.ReactNode
}
export default function FeatureCard({title, subtitle, children}: FeatureCardType) {
    return (
        <div
            className=" rounded-3xl bg-gray-900 overflow-hidden p-10 text-3xl text-gray-500">

            <div className=" w-[311px] h-[306px]">
                <div className="  flex flex-col items-start justify-start gap-[12px]">
                    <b className="relative">{title}</b>
                    <div
                        className="w-[310px] relative text-base leading-[24px] font-medium text-dimgray-100 inline-block h-12 shrink-0">
                        {subtitle}
                    </div>
                    {children}
                </div>

                {/**/}
            </div>

        </div>
    )
}