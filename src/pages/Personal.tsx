import {FunctionComponent, useCallback, useEffect, useRef, useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Swiper, SwiperRef, SwiperSlide} from 'swiper/react';
import {Pagination, EffectFade, Navigation} from 'swiper/modules';
import ApproveBy from "../components/ApproveBy";
import Notification from "../components/Notification";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa6";


const Personal: FunctionComponent = () => {

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
            {/*<Notification/>*/}
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
                    <h3 className="w-full text-16xl md:text-23xl text-center mb-0">Send Money Faster, Better & Instantly
                        with BellBank
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
                    <div className="flex justify-center  mx-auto">
                        <img className={'!max-w-[70%]'} src="/assets/images/phone.png" alt={''}/>
                    </div>
                </div>
            </div>
            <ApproveBy/>

            <div className="w-full my-[50px]">
                <div className="content w-[80%] mx-auto">
                    <div className="relative text-mediumseagreen uppercase font-medium">Built for growth</div>
                    <h3 className="text-16xl md:text-23xl text-black mt-0 max-w-[500px] text-left mb-0">
                        Grow your wealth with annual savings</h3>
                    <p className={'text-left max-w-[550px] font-aeonik text-gray-100'}>
                        With BellBank's savings accounts, you can watch your money flourish worldwide. Earn competitive interest rates, enjoy easy access to your funds, and reach your financial goals faster.
                        Start saving today and let your money grow globally, annually!
                    </p>
                </div>
            </div>
            <div className="w-full">

                <div className="flex justify-between flex-col md:flex-row-reverse gap-[25px] my-[30px] w-[80%] mx-auto">
                    <div className="bg-dimgray-light p-16 w-auto md:w-[65%]  flex flex-col items-center">
                        <div className="img ">
                            <img className={'max-w-[96%] mx-auto'} src="/assets/images/Roolout.png" alt={''}/>
                        </div>
                        <div className="">
                            <div className="title">

                                <h4 className={'text-center text-xl font-aeonik text-black'}>Instant Debit Cards</h4>
                            </div>
                            <div className="sub-title">
                                <p className={'text-center font-bold max-w-[350px]  font-aeonik text-gray-100'}>
                                    Get instant access to your money with BellBank's Instant Debit Cards!
                                </p>
                                <p className={'text-center font-bold max-w-[350px]  font-aeonik text-gray-100'}>No more waiting, no more hassle. Get your Instant Debit Card today and enjoy the convenience of having your money at your fingertips!</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-dimgray-light p-16 flex flex-col items-center">
                        <div className="img ">
                            <img className={'max-w-[96%] mx-auto'} src="/assets/images/Transact.png" alt={''}/>
                        </div>
                        <div className="mt-5">
                            <div className="title">

                                <h4 className={'text-center text-xl font-aeonik text-black'}>Airtime & Data
                                    Subrciption</h4>
                            </div>
                            <div className="sub-title">
                                <p className={'text-center max-w-[380px]  font-bold font-aeonik text-gray-100'}>
                                    Stay connected with our airtime and data payment solutions, recharge instantly and
                                    enjoy.
                                </p>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="flex justify-between  flex-col md:flex-row-reverse gap-[25px] my-[30px] w-[80%] mx-auto">
                    <div className="bg-dimgray-light p-16 flex flex-col items-center">
                        <div className="img ">
                            <img className={'max-w-[96%] mx-auto'} src="/assets/images/network_provider.png" alt={''}/>
                        </div>
                        <div className="mt-5">
                            <div className="title">

                                <h4 className={'text-center text-xl font-aeonik text-black'}>Airtime & Data
                                    Subrciption</h4>
                            </div>
                            <div className="sub-title">
                                <p className={'text-center max-w-[380px]  font-bold font-aeonik text-gray-100'}>
                                    Stay connected with our airtime and data payment solutions, recharge instantly and
                                    enjoy.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-dimgray-light p-16 w-auto md:w-[65%] flex flex-col items-center">
                        <div className="img ">
                            <img className={'max-w-[96%] mx-auto'} src="/assets/images/rotate_card.png" alt={''}/>
                        </div>
                        <div className="">
                            <div className="title">

                                <h4 className={'text-center text-xl font-aeonik text-black'}>Instant Debit Cards</h4>
                            </div>
                            <div className="sub-title">
                                <p className={'text-center font-bold max-w-[350px]  font-aeonik text-gray-100'}>
                                    Our platform simplifies config files and their mounting. Don’t spend time changing
                                    low-level K8s resources.
                                </p>
                            </div>
                        </div>
                    </div>


                </div>
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
            <div className=" mx-auto pt-[100px] pb-[2px]">
                <div className="w-[90%] mx-auto ">
                    <div className="flex md:flex-row flex-col justify-center md:justify-between  gap-[70px]">
                        <div className="left flex flex-col justify-between">
                            <div className="top">
                                <div className="relative text-mediumseagreen uppercase font-medium">
                                    Getting started
                                </div>
                                <h3 className="text-16xl md:text-23xl text-black mt-0 max-w-[500px] text-left mb-0">
                                    Opening an account is simple as ABC...
                                </h3>
                                <p className={'text-left max-w-[550px] font-aeonik text-gray-100'}>
                                    Join the BellBank family today and enjoy easy access to your money, anywhere, anytime!
                                </p>
                            </div>
                            <Swiper allowTouchMove={false} noSwiping={false} slidesPerView={1}
                                    modules={[Navigation, EffectFade]} ref={sliderRef} className="mySwiper ">

                                <SwiperSlide className={''}>
                                    <div
                                        className=" overflow-hidden bottom border-l-2 border-l-mediumseagreen border-solid pl-2 !w-full">
                                        <h4 className="text-black text-[25px]">1. Download the app</h4>
                                        <p className="text-gray-100 ">
                                            Download the BellBank app on Google Playstore or Apple store to get started
                                        </p>
                                    </div>

                                </SwiperSlide>

                                <SwiperSlide className={''}>
                                    <div
                                        className="!flex-nowrap overflow-hidden bottom border-l-2 border-l-mediumseagreen border-solid pl-2">
                                        <h4 className="text-black text-[25px]">2. Fill in your details</h4>
                                        <p className="text-gray-100 ">
                                            Provide your email and phone number and verify your phone number with an OTP.
                                        </p>
                                    </div>

                                </SwiperSlide>

                                <SwiperSlide className={''}>
                                    <div
                                        className="!flex-nowrap overflow-hidden bottom border-l-2 border-l-mediumseagreen border-solid pl-2">
                                        <h4 className="text-black text-[25px]">3. Get verified</h4>
                                        <p className="text-gray-100 ">
                                            Select username & password. Provide your BVN and KYC details and start face & ID verification. You can then set up a PIN for managing your account.
                                        </p>
                                    </div>

                                </SwiperSlide>
                                <SwiperSlide className={''}>
                                    <div
                                        className="!flex-nowrap overflow-hidden bottom border-l-2 border-l-mediumseagreen border-solid pl-2">
                                        <h4 className="text-black text-[25px]">4. You're done!</h4>
                                        <p className="text-gray-100">
                                            Click on "add money" to find your account details,
                                            and top up to start making transfers seamlessly.
                                        </p>
                                    </div>

                                </SwiperSlide>

                            </Swiper>


                            <div className="swiper-btn relative flex gap-[20px]">
                                <div onClick={()=>{
                                    handlePrev()
                                    handlePrev2()
                                }}
                                     className={`mr-6 rounded-badge relative ${start && 'opacity-[0.6]'} flex justify-center border-2 border-mediumseagreen border-solid cursor-pointer w-[100px] items-center h-[50px]`}>
                                    <FaArrowLeft size={25} color={'black'}/>
                                </div>

                                <div onClick={()=>{
                                    handleNext()
                                    handleNext2()
                                }}
                                     className={`rounded-badge ${end && 'opacity-[0.6]'} relative flex justify-center border-2 border-mediumseagreen border-solid cursor-pointer w-[100px] items-center h-[50px]`}>
                                    <FaArrowRight size={25} color={'black'}/>
                                </div>
                            </div>
                        </div>

                        <Swiper ref={sliderRef2} noSwiping={true} allowTouchMove={false}
                            className={'right flex-1 md:bg-dimgray-light select-none grid place-content-center items-center !h-[80%]'}>
                            <SwiperSlide className={'overflow-hidden !w-full'}>
                                <img draggable={false} src="/assets/images/group_phone.png" className={'md:mt-[100px] md:flex justify-center max-w-[90%] mx-auto'}
                                     style={{}} alt={'d'}/>
                            </SwiperSlide>
                            <SwiperSlide className={' overflow-hidden !w-full '}>
                                <img draggable={false} src="/assets/images/group_phone.png" className={'md:mt-[100px] md:flex justify-center max-w-[90%] mx-auto'}
                                     style={{}} alt={'d'}/>
                            </SwiperSlide>
                            <SwiperSlide className={' overflow-hidden !w-full'}>
                                <img draggable={false} src="/assets/images/group_phone.png" className={'md:mt-[100px] md:flex justify-center max-w-[90%] mx-auto'}
                                     style={{}} alt={'d'}/>
                            </SwiperSlide>
                            <SwiperSlide className={' overflow-hidden !w-full'}>
                                <img draggable={false} src="/assets/images/group_phone.png" className={'md:mt-[100px] md:flex justify-center max-w-[90%] mx-auto'}
                                     style={{}} alt={'d'}/>
                            </SwiperSlide>

                        </Swiper>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Personal;
