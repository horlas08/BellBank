import {FunctionComponent, useCallback, useEffect, useRef, useState} from "react";

import {Swiper, SwiperRef, SwiperSlide} from 'swiper/react';

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ApproveBy from "../../components/ApproveBy";
import {FaCommentDollar, FaCube, FaIdCard} from "react-icons/fa";
import Faq from "../../components/Faq";
import Faq2 from "../../components/Faq2";


export default function Business(){

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
                        Power your business with a Digital Payment Solution
                    </h3>
                    <p className={'text-center  mx-auto max-w-[350px] font-outfit text-gray-100'}>
                        Get a POS terminal and enjoy high commission on all your transaction
                    </p>
                    <div className="img_wrapper flex gap-[24px] my-[35px] justify-center">
                        <div className="cursor-pointer">
                            <img src="/assets/images/playstore_dark.png" alt={''}/>
                        </div>
                        <div className="cursor-pointer">
                            <img src="/assets/images/apple_black.png" alt={''}/>
                        </div>
                    </div>
                    <div className="flex justify-center  mx-auto">
                        <img className={'!max-w-[70%]'} src="/assets/images/business-hero.png" alt={''}/>
                    </div>
                </div>
            </div>
            <ApproveBy/>
            <div className="w-full my-[50px]">
                <div className="content w-[80%] mx-auto">
                    <h3 className="text-16xl text-center md:text-23xl text-black mt-0  mb-0">
                        Open a business account in 3 steps
                    </h3>
                    <p className={'font-aeonik text-center text-gray-100'}>
                        Secure your Point of Sale with ease and embark on a journey of enhanced efficiency and customer
                        satisfaction
                    </p>
                </div>
                <div className="flex md:flex-row flex-col justify-evenly gap-x-[20] gap-y-[50] mt-[4rem]">
                    <div className="">
                        <div className="flex justify-center w-full mx-auto">

                            <FaIdCard size={30} className={''}/>
                        </div>
                        <div className="title">

                            <h4 className={'text-center text-xl font-aeonik text-black'}>Create Account</h4>
                        </div>
                        <div className="sub-title">
                            <p className={' max-w-[350px] mx-auto text-center font-outfit text-gray-100'}>
                                Creating an account is quick and easy, Simply click the
                                "Create Account" button fill in a few details, and complete your KYC.
                            </p>

                        </div>
                    </div>
                    <div className="">
                        <div className="flex justify-center w-full mx-auto">

                            <FaCommentDollar size={30} className={''}/>
                        </div>
                        <div className="title">

                            <h4 className={'text-center text-xl font-aeonik text-black'}>Request POS</h4>
                        </div>
                        <div className="sub-title">
                            <p className={' max-w-[350px] mx-auto text-center font-outfit text-gray-100'}>
                                After competing your account creation, you can request for our POS terminal directly
                                from anywhere and anytime.
                            </p>

                        </div>
                    </div>
                    <div className="">
                        <div className="flex justify-center w-full mx-auto">

                            <FaCube size={30} className={''}/>
                        </div>
                        <div className="title">

                            <h4 className={'text-center text-xl font-aeonik text-black'}>POS delivery</h4>
                        </div>
                        <div className="sub-title">
                            <p className={' max-w-[350px] mx-auto text-center font-outfit text-gray-100'}>
                                We’ll deliver your POS to you in your specified location, terms and conditions apply
                            </p>

                        </div>
                    </div>
                </div>
            </div>
            <section className="section-container wrapper">
                <div className="point-of-sale-cover">
                    <div className="point-of-sale-cover-image">
                        <img src="/assets/images/business-small.png" className={"mx-auto block md:hidden"} alt=""/>
                        <img src="/assets/images/business-large.png" className={"mx-auto md:block hidden"} alt=""/>
                    </div>
                </div>
            </section>
            <div className="section-container bg-mediumseagreenlight ">
                <h1 className="section-title text-center">Enhance your business with our POS Machine</h1>
                <p className="section-description text-center text-black">
                    Empower Your Business Decisions with our Point of Sale (POS) Machine
                </p>
                <ul className="pos-benefits">
                    <li className="pos-benefit">
                        <div className="pos-benefit-icon">
                            <span><i className="fas fa-bolt"></i></span>
                        </div>
                        <div className="pos-benefit-content">
                            <h1>150+</h1>
                            <h4>Merchant</h4>
                        </div>
                    </li>
                    <li className="pos-benefit">
                        <div className="pos-benefit-icon">
                            <span><i className="fas fa-chart-line"></i></span>
                        </div>
                        <div className="pos-benefit-content">
                            <h1>₦500M</h1>
                            <h4>Processed</h4>
                        </div>
                    </li>
                    <li className="pos-benefit">
                        <div className="pos-benefit-icon">
                            <span><i className="fas fa-cloud-download-alt"></i></span>
                        </div>
                        <div className="pos-benefit-content">
                            <h1>200+</h1>
                            <h4>POS request</h4>
                        </div>
                    </li>
                    <li className="pos-benefit">
                        <div className="pos-benefit-icon">
                            <span><i className="fas fa-bahai"></i></span>
                        </div>
                        <div className="pos-benefit-content">
                            <h1>99.9%</h1>
                            <h4>Up-time</h4>
                        </div>
                    </li>
                </ul>
            </div>


            <div className="w-full bg-darkslategray-500 py-[100px]">
                <div className="w-[80%] mx-auto">
                    <div className="top  w-full text-center">
                        <p>Designed for developers</p>
                        <h2 className={'text-16xl md:text-23xl text-white max-w-[700px] mx-auto my-2'}>Build quickly
                            with our
                            powerful and easy-to-use documented APIs</h2>
                        <p className={'text-gray-1100 font-bold max-w-[500px] mx-auto '}>
                            Bellbank offers a hassle-free, protected and efficient way to instantly send, receive, pay
                            bills and more.
                        </p>
                    </div>
                    <div className="bottom my-[30px]">
                        <div
                            className="flex flex-col md:flex-row justify-center mt-[100px] gap-[35px] md:gap-5 flex-card">
                            <div
                                className="body md:border-l-[1px] border-opacity-[50%] pl-2 border-solid border-l-mediumseagreen">
                                <img src='/assets/images/p1.png' alt={''}/>
                                <h5 className={'text-white text-xl my-3'}>Protection and peace of mind</h5>
                                <p className={'mt-1 text-gray-1100 font-inter w-[79%]'}>
                                    Elevate your brand with expertly designed themes, fonts, colors, and high-quality
                                    components for a professional look and feel.
                                </p>
                            </div>
                            <div
                                className="body md:border-l-[1px] border-opacity-[50%] pl-2 border-solid border-l-mediumseagreen">
                                <img src='/assets/images/p2.png' alt={''}/>
                                <h5 className={'text-white text-xl my-3'}>Protection and peace of mind</h5>
                                <p className={'mt-1 text-gray-1100 font-inter w-[79%]'}>
                                    Glide apps adapt to look great on mobile, desktop, and tablet for a consistent,
                                    unified user experience across your app.
                                </p>
                            </div>
                            <div
                                className="body md:border-l-[1px] border-opacity-[50%] pl-2 border-solid border-l-mediumseagreen">
                                <img src='/assets/images/p3.png' alt={''}/>
                                <h5 className={'text-white text-xl my-3'}>Protection and peace of mind</h5>
                                <p className={'mt-1 text-gray-1100 font-inter w-[85%]'}>
                                    Glide apps update their design automatically with current trends so your apps will
                                    always remain modern and fresh.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Faq2/>
            <Footer/>
        </div>
    );
};

