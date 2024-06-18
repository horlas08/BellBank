import {FunctionComponent, useCallback, useEffect, useRef, useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Swiper, SwiperRef, SwiperSlide} from 'swiper/react';
import ApproveBy from "../components/ApproveBy";

import {FlipWords} from "../components/ui/FlipWord";
import Faq from "../components/Faq";
import LayoutGrid from "../components/ui/layout-grid";
import {appleUrl} from "../../utils/cn";


const SkeletonOne = () => {
    return (
        <div>
            <p className="font-bold text-[30px] text-white">Your Identity Documents</p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                We ask everyone who opens a BellBank account to give us their BVN (Bank Verification Number) and a valid ID issued by the government (driver’s license, voter’s card, national ID card or NIN slip). This helps us prevent identity fraud by confirming that everyone who uses BellBank, including you, is who they say they are.
            </p>
        </div>
    );
};
const SkeletonTwo = () => {
    return (
        <div>
            <p className="font-bold text-[30px] text-white">Your Facial Identity</p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                It’s mandatory for anyone opening a BellBank account to take a photo of their face during the account opening process so that we can confirm they’re opening the account themselves.
                This also helps prevent identity fraud.
            </p>
        </div>
    );
};
const SkeletonThree = () => {
    return (
        <div>
            <p className="font-bold text-[30px] text-white">Your Password</p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                When you’re opening your BellBank account, we ask that you create a password (with any combination of letters, numbers and special characters) to secure your account. We may ask for your password to authorise any changes you make to your account information.
            </p>
        </div>
    );
};
const SkeletonFour = () => {
    return (
        <div>
            <p className="font-bold text-[30px] text-white">Your PINs</p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                Every BellBank account is secured with a unique six-digit PIN that only the account holder should have access to. You can’t use your BellBank account without first setting your sign-in PIN. Your transactions on the app are also secured with a transaction PIN, and your BellBank Card has its own four-digit PIN.
            </p>
        </div>
    );
};

export default function Security(){

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
            title: "Your Identity Documents",
            content: <SkeletonOne />,
            className: "md:col-span-2",
            thumbnail:
                "assets/images/rectangle-34624349@2x.png",
        },
        {
            id: 2,
            title: "Your Facial Identity",
            content: <SkeletonTwo />,
            className: "col-span-1",
            thumbnail:
                "assets/images/rectangle-34624349@2x.png",
        },
        {
            id: 3,
            title: "Your Password",
            content: <SkeletonThree />,
            className: "col-span-1",
            thumbnail:
                "assets/images/rectangle-34624349@2x.png",
        },
        {
            id: 4,
            title: "Your PINs",
            content: <SkeletonFour />,
            className: "md:col-span-2",
            thumbnail:
                "/assets/images/rectangle-34624349@2x.png",
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
            <LayoutGrid cards={cards}/>
            <Faq/>
            <Footer/>
        </div>
    );
};

 // Security;