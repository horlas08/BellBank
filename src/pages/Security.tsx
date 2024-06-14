import {FunctionComponent, useCallback, useEffect, useRef, useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Swiper, SwiperRef, SwiperSlide} from 'swiper/react';
import {Pagination, EffectFade, Navigation} from 'swiper/modules';
import ApproveBy from "../components/ApproveBy";

import {FlipWords} from "../components/ui/FlipWord";
import Faq from "../components/Faq";
import LayoutGrid, {Card} from "../components/ui/layout-grid";
import {appleUrl} from "../../utils/cn";


const SkeletonOne = () => {
    return (
        <div>
            <p className="font-bold text-4xl text-white">House in the woods</p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                A serene and tranquil retreat, this house in the woods offers a peaceful
                escape from the hustle and bustle of city life.
            </p>
        </div>
    );
};

const SkeletonTwo = () => {
    return (
        <div>
            <p className="font-bold text-4xl text-white">House above the clouds</p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                Perched high above the world, this house offers breathtaking views and a
                unique living experience. It&apos;s a place where the sky meets home,
                and tranquility is a way of life.
            </p>
        </div>
    );
};
const SkeletonThree = () => {
    return (
        <div>
            <p className="font-bold text-4xl text-white">Greens all over</p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
                perfect place to relax, unwind, and enjoy life.
            </p>
        </div>
    );
};
const SkeletonFour = () => {
    return (
        <div>
            <p className="font-bold text-4xl text-white">Rivers are serene</p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                A house by the river is a place of peace and tranquility. It&apos;s the
                perfect place to relax, unwind, and enjoy life.
            </p>
        </div>
    );
};

const Security: FunctionComponent = () => {

    const sliderRef = useRef<SwiperRef>(null);
    const sliderRef2 = useRef<SwiperRef>(null);
    const [end, setEnd] = useState(false)
    const [start, setStart] = useState(true)

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();

        if (sliderRef.current.swiper.isBeginning){
            setEnd(false)
            setStart(true)
        }else if (!sliderRef.current.swiper.isEnd && !sliderRef.current.swiper.isBeginning){
            setEnd(false)
            setStart(false)
        }else {
            setEnd(true)
        }
    }, [end]);
    const handlePrev2 = useCallback(() => {
        if (!sliderRef2.current) return;
        sliderRef2.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
        if (sliderRef.current.swiper.isEnd){
            setEnd(true)
        }else if (!sliderRef.current.swiper.isEnd && !sliderRef.current.swiper.isBeginning){
            setEnd(false)
            setStart(false)
        }
        else {
            setEnd(false)
        }
    }, []);
    const handleNext2 = useCallback(() => {
        if (!sliderRef2.current) return;
        sliderRef2.current.swiper.slideNext();
    }, []);
    useEffect(() => {

    }, []);

    const word = [
        'Protects You',
        "Protects Your Money"
    ]
    const cards = [
        {
            id: 1,
            content: <SkeletonOne />,
            className: "md:col-span-2",
            thumbnail:
                "assets/images/rectangle-34624349@2x.png",
        },
        {
            id: 2,
            content: <SkeletonTwo />,
            className: "col-span-1",
            thumbnail:
                "assets/images/rectangle-34624349@2x.png",
        },
        {
            id: 3,
            content: <SkeletonThree />,
            className: "col-span-1",
            thumbnail:
                "assets/images/rectangle-34624349@2x.png",
        },
        {
            id: 4,
            content: <SkeletonFour />,
            className: "md:col-span-2",
            thumbnail:
                "http://localhost:5173/assets/images/rectangle-34624349@2x.png",
        },
    ];

    return (
        <div
            className="w-full personal  relative bg-white overflow-hidden text-left text-sm text-mediumseagreen font-aeonik">

            <Header
                vector="/assets/images/svg/vector2.svg"
                sVG="/assets/images/svg/svg3.svg"
                propBackgroundColor="bg-black"
                propBorderBottom="border-gray-100"
                propColor="white"
                chevronColor="black"

            />
            <div className="text-black flex flex-col items-center bg-black">
                <div className="max-w-[550px]  mx-auto mt-[40px]">
                    <h3 style={{ whiteSpace: "pre-wrap" }} className="w-full text-white text-16xl  md:text-[45px] text-center mb-0">
                        How BellBank MFB Limited <FlipWords  words={word}/>
                    </h3>
                    <p className={'text-center  mx-auto max-w-[350px] font-aeonik text-gray-100'}>
                        BellBank offers a hassle-free, protected and efficient way to instantly send, receive, pay bills
                        and more.
                    </p>
                    <div className="img_wrapper flex gap-[24px] my-[35px] justify-center">
                        <div onClick={()=> {
                            window.location.replace('https://')
                        }} className="cursor-pointer">
                            <img src="/assets/images/playstore_dark.png" alt={''}/>
                        </div>
                        <div onClick={()=> {
                            window.location.replace(`${appleUrl}`)
                        }}  className="cursor-pointer">
                            <img src="/assets/images/apple_black.png" alt={''}/>
                        </div>
                    </div>

                </div>
            </div>
            <ApproveBy/>
            <LayoutGrid cards={cards}/>
            <Faq/>
            <Footer/>
        </div>
    );
};

export default Security;
