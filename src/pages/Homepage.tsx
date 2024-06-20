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
import Sponsor from "../components/Sponsor";
import Faq2 from "../components/Faq2";

const Homepage: FunctionComponent = () => {
    return (
        <div className="w-full !overflow-hidden relative bg-white h-full text-left text-xs text-white font-aeonik overflow-hidden!">
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
                <Faq2/>
                <Sponsor/>
                <Testimonial
                    image="/assets/images/testimonial.png"/>
                <Footer/>

            </div>
        </div>
    );
};

export default Homepage;
