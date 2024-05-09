import React from "react";

export default function AppBtn({text, onclick, className}:{text:string, onclick?: ()=>void, className?: React.HTMLAttributes<string>['className'] }) {
    return (
        <div onClick={onclick}
            className={`rounded-lg cursor-pointer bg-mediumseagreen flex flex-row items-center justify-center py-[11px] px-5 box-border text-center text-floralwhite ${className}`}>
            <div className="relative ">{text}</div>
        </div>
    )
}