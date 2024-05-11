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

const Notification: FunctionComponent = () => {
    return (

        <div className="relative  bg-gray-500 h-[45px] text-xs text-white">
            <div className="relative h-full justify-center items-center  flex flex-row  gap-[10px]">
                <div className="rounded-81xl bg-gray-800 flex flex-row items-center justify-center py-1 px-[15px]">
                    <div className="relative">New</div>
                </div>
                <div className="w-[485px] relative h-4 text-smi">
                    <div className="absolute top-[0px] left-[0px]">
                        Lorem ipsum dolor sit amet consectetur. Odio libero nulla aliquet
                        tortor. Turpis...
                    </div>
                    <img
                        className="absolute cursor-pointer top-[0px] left-[469px] w-4 h-4 overflow-hidden"
                        alt=""
                        src="/assets/images/svg/link--svg.svg"
                    />
                </div>
            </div>
        </div>
    );
};

export default Notification;
