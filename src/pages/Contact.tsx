import {FunctionComponent, useCallback, useEffect, useRef, useState} from "react";

import {Swiper, SwiperRef, SwiperSlide} from 'swiper/react';
import {Pagination, EffectFade, Navigation} from 'swiper/modules';

import {FaArrowLeft, FaArrowRight} from "react-icons/fa6";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ApproveBy from "../components/ApproveBy";
import {FaCommentDollar, FaCube, FaIdCard} from "react-icons/fa";
import Faq from "../components/Faq";
import Faq2 from "../components/Faq2";
import FormCarry from "../components/ui/FormCarry";
import {appleUrl, playStoreUrl} from "../../utils/cn";


export default function Contact(){

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

    useEffect(() => {

    }, []);
    return (
        <div
            className="w-full personal relative bg-white overflow-hidden text-left text-sm text-mediumseagreen font-aeonik">
            <Header
                vector="/assets/images/svg/vector2.svg"
                sVG="/assets/images/svg/svg3.svg"
                propBackgroundColor="bg-lightgreen"
                propBorderBottom="border-gray-1005"
                propColor="dimgray"
                chevronColor="black"

            />
            <div className="text-black flex flex-col items-center bg-lightgreen">
                <div className="max-w-[550px] mx-auto mt-[20px]">
                    <h3 className="w-full text-16xl md:text-23xl text-center mb-0">
                        Get in touch
                    </h3>
                    <p className={'text-center  mx-auto max-w-[350px] font-outfit text-gray-100'}>
                        We'd love to hear from you, please fill out this form.
                    </p>
                    <div className="img_wrapper flex gap-[24px] my-[35px] justify-center">
                        <div className="cursor-pointer"  onClick={()=> window.location.href = playStoreUrl}>
                            <img src="/assets/images/playstore_dark.png" alt={''}/>
                        </div>
                        <div className="cursor-pointer"  onClick={()=> window.location.href = appleUrl}>
                            <img src="/assets/images/apple_black.png" alt={''}/>
                        </div>
                    </div>
                    {/*<div className="flex justify-center  mx-auto">*/}
                    {/*    <img className={'!max-w-[70%]'} src="/assets/images/business-hero.png" alt={''}/>*/}
                    {/*</div>*/}
                </div>
            </div>
            <ApproveBy/>
            <div className="w-full my-[50px]">
                <div className="content w-[80%] mx-auto">
                    <h3 className="text-16xl text-center md:text-23xl text-black mt-0  mb-0">
                        We’d love to hear from you
                    </h3>
                    <p className={'font-aeonik text-center text-gray-100'}>
                        Chat with our friendly team.
                    </p>
                </div>
                <FormCarry/>
                <div className="flex md:flex-row flex-col justify-evenly gap-x-[20] gap-y-[50] mt-[4rem]">
                    <div className="my-7">
                        <div className="flex justify-center w-full mx-auto">

                            <FaIdCard size={30} className={''}/>
                        </div>
                        <div className="title">

                            <h4 className={'text-center text-xl font-aeonik text-black'}>Chat to sales</h4>
                        </div>
                        <div className="sub-title">
                            <p className={' max-w-[350px] mx-auto text-center font-outfit text-gray-100'}>
                                Speak to our friendly team.
                            </p>

                        </div>
                        <div className="grid justify-center">
                            <a href={'mailto:hello@bellmfb.com'} className={' text-mediumseagreen max-w-[350px] mx-auto !text-center font-outfit'}>
                                hello@bellmfb.com
                            </a>
                        </div>
                    </div>
                    <div className="my-7">
                        <div className="flex justify-center w-full mx-auto">

                            <FaCommentDollar size={30} className={''}/>
                        </div>
                        <div className="title">

                            <h4 className={'text-center text-xl font-aeonik text-black'}>Call us</h4>
                        </div>
                        <div className="sub-title">
                            <p className={' max-w-[350px] mx-auto text-center font-outfit text-gray-100'}>
                                Mon-Fri from 8am to 5pm.
                            </p>

                        </div>
                        <div className="grid justify-center">
                            <a href={'tel:+2348139990000'}
                               className={' text-mediumseagreen max-w-[350px] mx-auto !text-center font-outfit'}>
                                +2348139990000
                            </a>
                        </div>
                    </div>
                    <div className="my-7">
                        <div className="flex justify-center w-full mx-auto">

                            <FaCube size={30} className={''}/>
                        </div>
                        <div className="title">

                            <h4 className={'text-center text-xl font-aeonik text-black'}>Visit us</h4>
                        </div>
                        <div className="sub-title">
                            <p className={' max-w-[350px] mx-auto text-center font-outfit text-gray-100'}>
                                Visit our office HQ.
                            </p>

                        </div>
                        <div className="grid justify-center">
                            <a href={'#'}
                               className={' text-mediumseagreen no-underline max-w-[350px] mx-auto !text-center font-outfit'}>
                                Old People Bank, Along Katsina Road,
                                Tsanyawa L.G.A, Kano State, Nigeria.
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <Faq2/>
            <Footer/>
        </div>
    );
};

