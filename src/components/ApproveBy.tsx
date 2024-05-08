import {FunctionComponent} from "react";
import Banner from "./Banner";
import Header from "./Header";
import Feature from "./Feature";
import CardLeft from "./CardLeft";
import FaqItem from "./FaqItem";
import Footer from "./Footer";
import Testimonial from "./Testimonial";
import Experience from "./Experience";
import Protecting from "./Protecting";
import Api from "./Api";
import Faq from "./Faq";

const ApproveBy: FunctionComponent = () => {
    return (

        <div
            className="block md:flex flex-row w-[85%] lg:w-[60%] mx-auto items-center justify-center my-4 gap-[40px] text-center text-lg text-dimgray-100">
            <div className="mb-4 md:mb-0 relative font-medium">License and supported by:</div>
            <div
                className="flex  flex-row w-[80%] md:w-[60%] justify-self-end flex-wrap md:flex-nowrap mx-auto items-center justify-center  gap-4 md:gap-[50px]">
                <div className="">
                    <img
                        className="relative  h-[51px] object-cover"
                        alt=""
                        src="/image-769@2x.png"
                    />
                </div>
                <div className="">

                    <img
                        className=" relative h-[41px] object-cover"
                        alt=""
                        src="/image-767@2x.png"
                    />
                </div>
                <div className="">
                    <img
                        className=" relative h-[41px] object-cover"
                        alt=""
                        src="/image-768@2x.png"
                    />
                </div>


            </div>
        </div>

    );
};

export default ApproveBy;
