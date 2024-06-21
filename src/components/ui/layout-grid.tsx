import React, {useState} from "react";
import {motion} from "framer-motion";
import {cn} from "../../../utils/cn";


export type Card = {
    id: number;
    content: JSX.Element | React.ReactNode | string;
    className: string;
    title: string;
    thumbnail: string;
};

export default function LayoutGrid({cards}: { cards: Card[] }) {
    const [selected, setSelected] = useState<Card | null>(null);
    const [lastSelected, setLastSelected] = useState<Card | null>(null);
    const [isBlur, setIsBlur] = useState(false);

    const handleClick = (card: Card) => {

        setLastSelected(selected);
        setSelected(card);
    };

    const handleOutsideClick = () => {
        setLastSelected(selected);
        setSelected(null);
        setIsBlur(false)
    };

    return (
        <div
            className="w-[90%] justify-center mt-[90px] mb-[30px] h-[4c00px] grid grid-cols-1 md:grid-cols-3  max-w-7xl mx-auto gap-4 relative">
            {cards.map((card, i) => (
                <div key={i} className={cn(card.className, "")}>
                    <motion.div
                        onClick={(e) => {
                            setIsBlur(true)
                            handleClick(card)
                        }}
                        className={cn(
                            card.className,
                            !isBlur ?'securityCard': '',
                            "relative overflow-hidden",
                            selected?.id === card.id
                                ? "rounded-lg cursor-pointer absolute inset-0 h-1/2 w-full md:w-1/2 m-auto z-50 flex justify-center items-center flex-wrap flex-col"
                                : lastSelected?.id === card.id
                                    ? "z-40 bg-white rounded-xl h-full w-full"
                                    : "bg-white rounded-xl h-full w-full"
                        )}
                        layout
                    >
                        {selected?.id === card.id && <SelectedCard selected={selected}/>}
                        <div>

                            <BlurImage card={card}/>
                        </div>
                    </motion.div>
                </div>
            ))}
            <motion.div
                onClick={handleOutsideClick}
                className={cn(
                    "absolute h-full w-full left-0 top-0 bg-black opacity-0 z-10",
                    selected?.id ? "pointer-events-auto" : "pointer-events-none"
                )}
                animate={{opacity: selected?.id ? 0.3 : 0}}
            />
        </div>
    );
};

const BlurImage = ({card}: { card: Card }) => {

    const [loaded, setLoaded] = useState(false);

    return (
        <div className={cn(
            `cursor-pointer justify-center items-center flex h-[300px] object-center bg-center bg-cover inset-0 max-h-[300px]`,
            `${card.thumbnail}`
        )}>
            <div className="grid h-full z-[11]">
                <div className="place-content-center place-items-center">
                    <div className="">
                        <h2 className={"text-[30px]  text-center"}>{card.title}</h2>
                        <h6 className={"text-[30px]  text-center m-0"}>Read More...</h6>
                    </div>


                </div>
            </div>
        </div>
        // <img
        //     src={card.thumbnail}
        //     height="300"
        //     width="500"
        //     onLoad={() => {
        //
        //         setLoaded(true)
        //     }}
        //     className={cn(
        //         "object-cover object-top  inset-0 max-h-[300px] h-full w-full transition duration-200",
        //         loaded ? "blur-none" : "blur-md"
        //     )}
        //     alt="thumbnail"
        // />
    );
};

const SelectedCard = ({selected}: { selected: Card | null }) => {
    return (
        <div
            className="bg-mediumseagreen m-10 !mx-auto h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
            <motion.div
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 0.6,
                }}
                className="absolute inset-0 h-full w-full bg-black opacity-60 z-10"
            />
            <motion.div
                initial={{
                    opacity: 0,
                    y: 100,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                }}
                className="relative px-8 pb-4 z-[70]"
            >
                {selected?.content}
            </motion.div>
        </div>
    );
};
