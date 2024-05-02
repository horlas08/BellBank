import React from "react";

type FeatureCardType = {
    title: string,
    subtitle: string,
    children: React.ReactNode
}
export default function FeatureCard({title, subtitle, children}: FeatureCardType) {
    return (
        <div
            className=" rounded-3xl bg-gray-900 overflow-hidden p-7 text-3xl text-gray-500">

            <div className="  h-[306px]">
                <div className="  flex flex-col items-start justify-start gap-[12px]">
                    <b className="relative">{title}</b>
                    <div
                        className=" relative text-base leading-[24px] font-medium text-dimgray-100 inline-block h-12 overflow-hidden shrink-0">
                        {subtitle}
                    </div>

                    <div className={'mt-4 w-[100%] mx-auto gap-3 flex flex-col'}>
                        {children}
                    </div>
                </div>

            </div>

        </div>
    )
}