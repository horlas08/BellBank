import {FunctionComponent} from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Feature from "../components/Feature";
import CardLeft from "../components/CardLeft";
import FaqItem from "../components/FaqItem";
import Footer from "../components/Footer";
import Testimonial from "../components/Testimonial";
import Experience from "../components/Experience";
import Protecting from "../components/Protecting";
import Api from "../components/Api";
import Faq from "../components/Faq";

const Homepage: FunctionComponent = () => {
    return (
        <div className="w-full relative bg-white h-full text-left text-xs text-white font-aeonik overflow-hidden!">
            <div className="w-full">
                <Header
                    vector="/vector.svg"
                    sVG="/svg.svg"
                />

                <Banner/>

                <div
                    className="flex flex-row items-center justify-center my-4 gap-[50px] text-center text-lg text-dimgray-100">
                    <div className="relative font-medium">License and supported by:</div>
                    <div className="flex flex-row items-center justify-start gap-[50px]">
                        <img
                            className="w-[38px] relative h-[51px] object-cover"
                            alt=""
                            src="/image-769@2x.png"
                        />
                        <img
                            className="w-[81px] relative h-[41px] object-cover"
                            alt=""
                            src="/image-767@2x.png"
                        />
                        <img
                            className="w-[109px] relative h-[41px] object-cover"
                            alt=""
                            src="/image-768@2x.png"
                        />
                        <img
                            className="w-[185px] relative h-[49px] object-cover"
                            alt=""
                            src="/image-770@2x.png"
                        />
                    </div>
                </div>


                <Feature/>

                <Experience/>
                <Protecting/>

                <Api/>
                <Testimonial fa9238d96a7bdeceaf7eeJess="/659fa9238d96a7bdeceaf7ee-jesse20hiss2020fresh20sendsjpeg@2x.png"/>
                <Footer/>
            </div>
        </div>
    );
};

export default Homepage;
