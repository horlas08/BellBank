import {FunctionComponent, useCallback, useEffect, useRef, useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Swiper, SwiperRef, SwiperSlide} from 'swiper/react';
import ApproveBy from "../components/ApproveBy";

import {FlipWords} from "../components/ui/FlipWord";
import Faq from "../components/Faq";
import LayoutGrid from "../components/ui/layout-grid";
import {appleUrl, playStoreUrl} from "../../utils/cn";
import Faq2 from "../components/Faq2";


export default function FaqsPage(){

    const sliderRef = useRef<SwiperRef>(null);
    const sliderRef2 = useRef<SwiperRef>(null);
    const [end, setEnd] = useState(false)

    useEffect(() => {

    }, []);

    const word = [
        'Protects You',
        "Protects Your Money"
    ]

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
                        Everything you need to know
                    </h3>
                    <p className={'text-center text-[16px] mx-auto max-w-[350px] font-outfit text-gray-100'}>
                        Need something cleared up? Here are our most frequently asked questions.
                    </p>
                    <div className="img_wrapper flex gap-[24px] my-[35px] justify-center">
                        <div onClick={()=> {
                            window.location.href = playStoreUrl
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

            <Faq2 />
            <Footer defaultType={false}/>
        </div>
    );
};

 // Security;