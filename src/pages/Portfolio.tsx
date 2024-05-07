import {FunctionComponent} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Testimonial from "../components/Testimonial";
import AppBtn from "../components/AppBtn";
import ApproveBy from "./ApproveBy";

const AboutUs: FunctionComponent = () => {
    return (
        <div className="w-full relative bg-white overflow-hidden text-left text-sm text-mediumseagreen font-aeonik">

            <Header
                vector="/assets/images/svg/vector2.svg"
                sVG="/assets/images/svg/svg3.svg"
                propBackgroundColor="bg-lightgreen"
                propBorderBottom="dimgray"
                propColor="dimgray"
            />
            <div className="text-black flex flex-col items-center bg-lightgreen">
                <div className="max-w-[550px] mx-auto mt-[20px]">
                    <h3 className="text-23xl text-center mb-0">Send Money Faster, Better & Instantly with BellBank</h3>
                    <p className={'text-center  mx-auto max-w-[350px] font-aeonik text-gray-100'}>
                        BellBank offers a hassle-free, protected and efficient way to instantly send, receive, pay bills
                        and more.
                    </p>
                    <div className="img_wrapper flex gap-[24px] my-[35px] justify-center">
                        <div className="cursor-pointer">
                            <img src="/public/assets/images/playstore_dark.png" alt={''}/>
                        </div>
                        <div className="cursor-pointer">
                            <img src="/public/assets/images/apple_black.png" alt={''}/>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <img src="/public/assets/images/phone.png" alt={''}/>
                    </div>
                </div>
            </div>
            <ApproveBy/>

            <div className="w-full my-[50px]">
                <div className="content w-[80%] mx-auto">
                    <div className="relative text-mediumseagreen uppercase font-medium">Built for growth</div>
                    <h3 className="text-23xl text-black mt-0 max-w-[500px] text-left mb-0">
                        Grow globally with annual savings of $40k+</h3>
                    <p className={'text-left max-w-[550px] font-aeonik text-gray-100'}>
                        Paystack is a technology company solving payments problems for ambitious businesses. Our mission
                        is to help businesses.
                    </p>
                </div>
            </div>
            <div className="w-full">
                <div className="flex justify-between gap-[25px] my-[30px] w-[80%] mx-auto">
                    <div className="bg-dimgray-light p-16 w-[65%] flex flex-col items-center">
                        <div className="img ">
                            <img src="/public/assets/images/Transact.png" alt={''}/>
                        </div>
                        <div className="">
                            <div className="title">

                                <h4 className={'text-center text-xl font-aeonik text-black'}>Send and Receive Money</h4>
                            </div>
                            <div className="sub-title">
                                <p className={'text-center font-bold max-w-[350px]  font-aeonik text-gray-100'}>
                                    Embark on a hassle-free journey of sending and receiving money with BellBank.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-dimgray-light p-16 flex flex-col items-center">
                        <div className="img ">
                            <img src="/public/assets/images/Roolout.png" alt={''}/>
                        </div>
                        <div className="">
                            <div className="title">

                                <h4 className={'text-center text-xl font-aeonik text-black'}>Bill Payments</h4>
                            </div>
                            <div className="sub-title">
                                <p className={'text-center max-w-[380px]  font-bold font-aeonik text-gray-100'}>
                                    Manage Private and Public Network Interfaces and let Rig automatically handle the
                                    rest.
                                </p>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="flex justify-between flex-row-reverse gap-[25px] my-[30px] w-[80%] mx-auto">
                    <div className="bg-dimgray-light p-16 w-[65%] flex flex-col items-center">
                        <div className="img ">
                            <img src="/public/assets/images/rotate_card.png" alt={''}/>
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
                            <img src="/public/assets/images/network_provider.png" alt={''}/>
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
            </div>
            <div className="w-full bg-darkslategray-500 py-[100px]">
                <div className="w-[80%] mx-auto">
                    <div className="top  w-full text-center">
                        <p>Designed for developers</p>
                        <h2 className={'text-23xl text-white max-w-[700px] mx-auto my-2'}>Build quickly with our powerful and easy-to-use documented APIs</h2>
                        <p className={'text-gray-1100 font-bold max-w-[500px] mx-auto '}>
                            Bellbank offers a hassle-free, protected and efficient way to instantly send, receive, pay
                            bills and more.
                        </p>
                    </div>
                    <div className="bottom my-[30px]">
                        <div className="flex justify-center mt-[100px] gap-5 flex-card">
                            <div className="body border-l-[1px] border-opacity-[50%] pl-2 border-solid border-l-mediumseagreen">
                                <img src='/public/assets/images/p1.png' alt={''}/>
                                <h5 className={'text-white text-xl my-1'}>Protection and peace of mind</h5>
                                <p className={'mt-1 text-gray-1100 font-inter w-[79%]'}>
                                    Elevate your brand with expertly designed themes, fonts, colors, and high-quality
                                    components for a professional look and feel.
                                </p>
                            </div>
                            <div className="body border-l-[1px] border-opacity-[50%] pl-2 border-solid border-l-mediumseagreen">
                                <img src='/public/assets/images/p2.png' alt={''}/>
                                <h5 className={'text-white text-xl my-1'}>Protection and peace of mind</h5>
                                <p className={'mt-1 text-gray-1100 font-inter w-[79%]'}>
                                    Glide apps adapt to look great on mobile, desktop, and tablet for a consistent, unified user experience across your app.
                                </p>
                            </div>
                            <div className="body border-l-[1px] border-opacity-[50%] pl-2 border-solid border-l-mediumseagreen">
                                <img src='/public/assets/images/p3.png' alt={''}/>
                                <h5 className={'text-white text-xl my-1'}>Protection and peace of mind</h5>
                                <p className={'mt-1 text-gray-1100 font-inter w-[85%]'}>
                                    Glide apps update their design automatically with current trends so your apps will always remain modern and fresh.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default AboutUs;
