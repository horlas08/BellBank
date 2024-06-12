import {FunctionComponent, useCallback, useEffect, useRef, useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Swiper, SwiperRef, SwiperSlide} from 'swiper/react';
import {Pagination, EffectFade, Navigation} from 'swiper/modules';
import ApproveBy from "../components/ApproveBy";
import Notification from "../components/Notification";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa6";
import {FlipWords} from "../components/ui/FlipWord";
import Faq from "../components/Faq";
import {Card, LayoutGrid} from "../components/ui/layout-grid";


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
    const cards: Card[] = [
        {
            id: 1,
            content: 'hello',
            className: '',
            thumbnail: ''
        }
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
                    <h3 className="w-full text-white text-16xl md:text-[45px] text-center mb-0">
                        How BellBank MFB Limited <FlipWords words={word}/>
                    </h3>
                    <p className={'text-center  mx-auto max-w-[350px] font-aeonik text-gray-100'}>
                        BellBank offers a hassle-free, protected and efficient way to instantly send, receive, pay bills
                        and more.
                    </p>
                    <div className="img_wrapper flex gap-[24px] my-[35px] justify-center">
                        <div className="cursor-pointer">
                            <img src="/assets/images/playstore_dark.png" alt={''}/>
                        </div>
                        <div className="cursor-pointer">
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
