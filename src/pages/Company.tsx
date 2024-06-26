import {FunctionComponent} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Testimonial from "../components/Testimonial";
import AppBtn from "../components/AppBtn";
import ApproveBy from "../components/ApproveBy";
import Notification from "../components/Notification";
import Faq2 from "../components/Faq2";
import {appleUrl, playStoreUrl} from "../../utils/cn";

const Company: FunctionComponent = () => {
    return (
        <div className="w-full relative bg-white overflow-hidden text-left text-sm text-mediumseagreen font-aeonik">
            {/*<Notification/>*/}
            <Header
                vector="/assets/images/svg/vector.svg"
                sVG="/assets/images/svg/svg3.svg"
                propBackgroundColor="bg-mediumseagreen"
                propBorderBottom="border-gray-1005"
                propColor="white"
                chevronColor="black"
                buttonBgColor={'bg-black'}
            />
            <div className="text-black flex flex-col items-center bg-mediumseagreen">
                <div className="max-w-[550px] mx-auto mt-[20px]">
                    <h3 className="text-16xl md:text-23xl text-center mb-0">Send Money Faster, Better & Instantly with BellBank</h3>
                    <p className={'text-center  mx-auto max-w-[350px] font-aeonik text-white'}>
                        BellBank offers a hassle-free, protected and efficient way to instantly send, receive, pay bills
                        and more.
                    </p>
                    <div className="img_wrapper flex gap-[24px] my-[35px] justify-center">
                        <div className="cursor-pointer" onClick={()=> window.location.href = playStoreUrl}>
                            <img src="/assets/images/playstore_dark.png" alt={''}/>
                        </div>
                        <div className="cursor-pointer"  onClick={()=> window.location.href = appleUrl}>
                            <img src="/assets/images/apple_black.png" alt={''}/>
                        </div>
                    </div>

                </div>
                <div className="flex justify-center mx-auto">
                    <img className={'max-w-[70%] lg:max-w-full'} src="/assets/images/dash.png" alt={''}/>
                </div>
            </div>
            <ApproveBy/>


            <div className="container mx-auto pt-[100px] pb-[200px]">
                <div className="w-[90%] mx-auto ">
                    <div className="top text-center mb-[5rem]">
                        <div className="relative text-mediumseagreen uppercase font-medium">Built for growth
                        </div>
                        <h3 className="text-[25px] md:text-23xl text-black mt-0 mx-auto text-center md:w-[50%] text-center mb-0">
                            All the tools you need to run your business with ease</h3>
                        <p className={'text-center max-w-[550px] mx-auto font-aeonik text-gray-100'}>
                            BellBank's got all the tools you need to succeed. With
                            Easy account management, Seamless payments and transfers, Invoicing and expense tracking, Insights and analytics

                            Streamline your operations, save time, and focus on growth. BellBank's got your back!

                        </p>
                    </div>
                    <div className="flex md:flex-row flex-col justify-evenly gap-[70px]">
                        <div className="left md:w-[35%] flex flex-col justify-center">

                            <div className="_">
                                <h4 className="text-black text-[25px] md:text-[35px]">A free bank account to power your business</h4>
                                <p className="text-gray-100">
                                    Open a free bank account in your business name, in minutes. Access round the clock support, with no hidden fees and complete control over your account.
                                </p>
                                <AppBtn text={'Get Started'} onclick={()=> window.location.href = 'https://app.bellmfb.com/account/register/'} className={'w-max mt-[3rem] md:mt-0'}/>
                            </div>
                        </div>
                        <div className="right">
                            <div className="grid place-content-center p-[40px]">
                                <img src="/assets/images/w_ads.png" className={'w-[94%] aspect-square'} alt={'d'}/>
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

export default Company;
