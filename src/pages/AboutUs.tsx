import {FunctionComponent} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Testimonial from "../components/Testimonial";
import AppBtn from "../components/AppBtn";
import Notification from "../components/Notification";

const AboutUs: FunctionComponent = () => {
    return (
        <div className="w-full relative bg-white overflow-hidden text-left text-sm text-mediumseagreen font-aeonik">
            <Notification/>
            <Header
                vector="/assets/images/svg/vector2.svg"
                sVG="/assets/images/svg/svg3.svg"
                propBackgroundColor="#fff"
                propBorderBottom="border-gray-1005"
                propColor="dimgray"
                chevronColor="black"

            />

            <div className="relative mt-[80px] mb-[50px] flex flex-col items-center justify-start gap-[20px]">
                <div className="flex flex-col items-center justify-start gap-[10px]">
                    <div className="relative uppercase font-medium">Built for growth</div>
                    <b className="max-w-[629px] mx-6 relative text-23xl leading-[50px] inline-block text-gray-500 text-center  ">
                        Powering a new generation of businesses in Africa
                    </b>
                </div>
                <div
                    className="max-w-[533px] mx-8 relative text-lg leading-[24px] font-medium text-dimgray-100 text-center inline-block">
                    Paystack is a technology company solving payments problems for
                    ambitious businesses. Our mission is to help businesses in Africa
                    become profitable, envied, and loved.
                </div>
            </div>

            <div
                className="relative w-[75%] overflow-hidden my-[70px] mx-auto flex-col lg:flex-row flex gap-6 justify-center">
                <div className="overflow-hidden flex-1 rounded-xl">
                    <img
                        className="!w-auto h-[200px] md:h-[429px] object-cover"
                        alt=""
                        src="/assets/images/rectangle-34624433@2x.png"
                    />
                </div>
                <div className="overflow-hidden rounded-xl">
                    <img
                        className="  !w-full !lg:max-w-[468px] h-[200px] md:h-[429px] object-cover"
                        alt=""
                        src="/assets/images/rectangle-34624349@2x.png"
                    />
                </div>

            </div>

            <div className="relative w-[80%] flex-col lg:flex-row items-start mx-auto flex justify-evenly">
                <div
                    className="relative lg:max-w-[425px] overflow-hidden flex flex-col items-start justify-end pt-0 px-0 pb-[50px] md:pb-[100px] box-border gap-[10px]">
                    <div className="relative uppercase font-medium">Built for growth</div>
                    <b className="w-auto relative text-[20px] md:text-23xl leading-[30px] md:leading-[50px] inline-block text-gray-500 ">
                        {`Constantly coming up with new creative ideas & working on improving the existing methods in consulting.`}</b>
                </div>

                <div className="relative lg:max-w-[425px] text-lg text-dimgray-100">
                    <div className="leading-[26px] font-medium   ">
                        <p className="m-0">
                            Loyz Marine Services is an indigenous oil and gas servicing
                            company birthed out of the need to provide marine support to
                            commercial shipping, maritime assetsand other related activities
                            taking place within the Nigerian maritime domain. We support every
                            stage of offshore explorationand production, provide anchored or
                            dynamic supply vessels, crew boats including conveyance of
                            product, equipment and personnel from shore to offshore locations
                            like drilling rigs, platforms.
                        </p>
                        <p className="m-0">&nbsp;</p>
                        <p className="m-0">
                            We have at our disposal, the technology to deliver prompt and
                            efficient services within our region of operations.
                        </p>
                    </div>
                    <div className=" leading-[26px] font-medium ">
                        <p className="m-0">
                            Our priority is to establish ourselves as a reliable partner to
                            clients as we offer innovative and unparalleled solutions to
                            mitigating the risks associated with carrying out business
                            operations in Nigeria. We take delivery of services to our clients
                            in the highest regard as our client’s success is a measure of our
                            own success.
                        </p>
                        <p className="m-0">&nbsp;</p>
                        <p className="m-0">{`As a result, we place utmost importance in providing reliable support that adds value to our clients by integrating innovative technologies, ensuring we deliver our services continuously in strict adherence to global standards on safety and compliance utilizing a team of highly skilled professionals that possess in depth knowledge of the maritime, security and oil & gas industry.`}</p>
                    </div>
                    <div className=" leading-[26px] font-medium inline-block h-[389px]">
                        <p className="m-0">
                            Our priority is to establish ourselves as a reliable partner to
                            clients as we offer innovative and unparalleled solutions to
                            mitigating the risks associated with carrying out business
                            operations in Nigeria. We take delivery of services to our clients
                            in the highest regard as our client’s success is a measure of our
                            own success.
                        </p>
                        <p className="m-0">&nbsp;</p>
                        <p className="m-0">{`As a result, we place utmost importance in providing reliable support that adds value to our clients by integrating innovative technologies, ensuring we deliver our services continuously in strict adherence to global standards on safety and compliance utilizing a team of highly skilled professionals that possess in depth knowledge of the maritime, security and oil & gas industry.`}</p>
                    </div>
                </div>

            </div>
            <div className="my-[70px] w-full lg:w-[90%] lg:ml-auto overflow-hidden gap-[54px] flex flex-col lg:flex-row ">
                <div className="text-center lg:text-left rounded-lg w-[70%] mx-auto lg:mx-0 lg:max-w-[400px]  box-border text-base text-floralwhite">
                    <div className={''}>
                        <div className="relative text-mediumseagreen uppercase font-medium">
                            Built for growth
                        </div>
                        <b className=" relative text-[26px] md:text-23xl text-gray-600">
                            Come work with us
                        </b>
                    </div>
                    <p className="md:text-lg text-sm leading-[20px] md:leading-[25px] font-medium text-dimgray-100 ">Come do meaningful work with
                        kind, smart
                        colleagues who're invested
                        in your growth, If you’re ready to join us in powering the dreams of
                        millions of people around the world, come claim your spot.</p>
                    <AppBtn text={'See all open positions'}/>
                </div>

                <div className="w-full ">
                    <img className="h-[500px] float-end w-full object-cover" alt="" src="/assets/images/rectangle-34624375@2x.png"/>
                </div>
                
            </div>

            <Testimonial image="/659fa9238d96a7bdeceaf7ee-jesse20hiss2020fresh20sendsjpeg@2x.png"/>

            <Footer/>
        </div>
    );
};

export default AboutUs;
