export default function AppBtn({text, onclick}:{text:string, onclick?: ()=>void}) {
    return (
        <div onClick={onclick}
            className="rounded-lg cursor-pointer bg-mediumseagreen h-[45px] flex flex-row items-center justify-center py-[11px] px-5 box-border text-center text-floralwhite">
            <div className="relative font-medium">{text}</div>
        </div>
    )
}