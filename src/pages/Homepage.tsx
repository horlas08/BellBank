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
import ApproveBy from "../components/ApproveBy";
import Notification from "../components/Notification";

const Homepage: FunctionComponent = () => {
    return (
        <div className="w-full relative bg-white h-full text-left text-xs text-white font-aeonik overflow-hidden!">
            <Notification/>
            <div className="w-full">
                <Header
                    vector="/assets/images/svg/vector.svg"
                    sVG="/assets/images/svg/svg.svg"
                    chevronColor={'white'}
                />

                <Banner/>
                <ApproveBy/>

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
