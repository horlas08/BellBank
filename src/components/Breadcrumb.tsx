export default function Breadcrumb({title, subtitle}: {title: string, subtitle: string}) {
    return (
        <div className="relative py-[80px]  flex flex-col items-center justify-start gap-[20px] bg-gray-bc">
            <div className="flex flex-col items-center justify-start gap-[10px]">
                <div className="relative font-medium uppercase text-sm md:text-lg">{subtitle}</div>
                <b className="max-w-[629px] mx-6 mt-4 relative text-16xl md:text-38xl leading-[50px] inline-block text-gray-500 text-center  ">
                    {title}
                </b>
            </div>

        </div>
    )
}