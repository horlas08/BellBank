import {FunctionComponent} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Testimonial from "../components/Testimonial";
import AppBtn from "../components/AppBtn";
import ApproveBy from "../components/ApproveBy";
import Notification from "../components/Notification";

const Personal: FunctionComponent = () => {
    return (
        <div className="w-full relative bg-white overflow-hidden text-left text-sm text-mediumseagreen font-aeonik">
            <Notification/>
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
                    <h3 className="w-full text-16xl md:text-23xl text-center mb-0">Send Money Faster, Better & Instantly with BellBank</h3>
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
                        Grow globally with annual savings of $40k+</h3>
                    <p className={'text-left max-w-[550px] font-aeonik text-gray-100'}>
                        Paystack is a technology company solving payments problems for ambitious businesses. Our mission
                        is to help businesses.
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
                                    Our platform simplifies config files and their mounting. Don’t spend time changing
                                    low-level K8s resources.
                                </p>
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
                            <img className={'max-w-[96%] mx-auto'}  src="/assets/images/rotate_card.png" alt={''}/>
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
                        <h2 className={'text-16xl md:text-23xl text-white max-w-[700px] mx-auto my-2'}>Build quickly with our
                            powerful and easy-to-use documented APIs</h2>
                        <p className={'text-gray-1100 font-bold max-w-[500px] mx-auto '}>
                            Bellbank offers a hassle-free, protected and efficient way to instantly send, receive, pay
                            bills and more.
                        </p>
                    </div>
                    <div className="bottom my-[30px]">
                        <div className="flex flex-col md:flex-row justify-center mt-[100px] gap-[35px] md:gap-5 flex-card">
                            <div className="body md:border-l-[1px] border-opacity-[50%] pl-2 border-solid border-l-mediumseagreen">
                                <img src='/assets/images/p1.png' alt={''}/>
                                <h5 className={'text-white text-xl my-3'}>Protection and peace of mind</h5>
                                <p className={'mt-1 text-gray-1100 font-inter w-[79%]'}>
                                    Elevate your brand with expertly designed themes, fonts, colors, and high-quality
                                    components for a professional look and feel.
                                </p>
                            </div>
                            <div className="body md:border-l-[1px] border-opacity-[50%] pl-2 border-solid border-l-mediumseagreen">
                                <img src='/assets/images/p2.png' alt={''}/>
                                <h5 className={'text-white text-xl my-3'}>Protection and peace of mind</h5>
                                <p className={'mt-1 text-gray-1100 font-inter w-[79%]'}>
                                    Glide apps adapt to look great on mobile, desktop, and tablet for a consistent, unified user experience across your app.
                                </p>
                            </div>
                            <div className="body md:border-l-[1px] border-opacity-[50%] pl-2 border-solid border-l-mediumseagreen">
                                <img src='/assets/images/p3.png' alt={''}/>
                                <h5 className={'text-white text-xl my-3'}>Protection and peace of mind</h5>
                                <p className={'mt-1 text-gray-1100 font-inter w-[85%]'}>
                                    Glide apps update their design automatically with current trends so your apps will always remain modern and fresh.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto pt-[100px] pb-[200px]">
                <div className="w-[90%] mx-auto ">
                    <div className="flex md:flex-row flex-col justify-between gap-[70px]">
                        <div className="left flex flex-col justify-between">
                            <div className="top">
                                <div className="relative text-mediumseagreen uppercase font-medium">Built for growth
                                </div>
                                <h3 className="text-16xl md:text-23xl text-black mt-0 max-w-[500px] text-left mb-0">
                                    Grow globally with annual savings of $40k+</h3>
                                <p className={'text-left max-w-[550px] font-aeonik text-gray-100'}>
                                    Lorem ipsum dolor sit amet consectetur. Varius mattis quam risus eget proin posuere
                                    eu
                                    bibendum tristique dolor tortor.
                                </p>
                            </div>
                            <div className="bottom">
                                <h4 className="text-black text-[25px]">1. Download the app</h4>
                                <p className="text-gray-100 w-[60%]">Download the BellBank app on Google Play store or Apple store to get started</p>
                            </div>
                        </div>
                        <div className="right">
                            <div className="md:bg-dimgray-light grid place-content-center p-[40px]">
                                <img src="/assets/images/group_phone.png" alt={'d'}/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Personal;
