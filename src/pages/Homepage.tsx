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
                    vector="/assets/images/svg/vector.svg"
                    sVG="/assets/images/svg/svg.svg"
                />

                <Banner/>

                <div className="block md:flex flex-row w-[85%] lg:w-[80%] mx-auto items-center justify-center my-4 gap-[50px] text-center text-lg text-dimgray-100">
                    <div className="mb-4 md:mb-0 relative font-medium">License and supported by:</div>
                    <div className="flex  flex-row sm:w-[80%] sm:flex-wrap md:flex-nowrap mx-auto items-center justify-center lg:justify-evenly gap-4 md:gap-[50px]">
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
                        <div className="">
                            <img
                                className="relative h-[49px] object-cover"
                                alt=""
                                src="/image-770@2x.png"
                            />
                        </div>

                    </div>
                </div>


                <Feature/>

                <Experience/>
                <Protecting/>

                <Api/>
                <Faq/>
                <Testimonial
                    image="/659fa9238d96a7bdeceaf7ee-jesse20hiss2020fresh20sendsjpeg@2x.png"/>
                <Footer/>

            </div>
        </div>
    );
};

export default Homepage;
