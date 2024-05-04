import CardLeft from "./CardLeft";
import {Link} from "react-router-dom";
import React from "react";

type ExperienceItem ={
    title?: string,
    subtitle: string,
    children: React.ReactNode
}
export default function ExperienceItem({title, subtitle, children}:ExperienceItem) {
    return (

            <div className="w-[100%] justify-between flex lg:gap-x-[25px] lg:flex-row flex-col relative ">
                <CardLeft
                    debitCards={title}
                    desc={'If transfers aren’t your jam, we get it. Request a debit card and have it delivered to you within 48 hours. Activate it in minutes, and start using it right away.'}
                    instantDebitCardsThatAlwa={subtitle}
                />
                {children}
            </div>


    )
}