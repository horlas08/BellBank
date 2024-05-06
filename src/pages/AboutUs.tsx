import {FunctionComponent} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Testimonial from "../components/Testimonial";
import AppBtn from "../components/AppBtn";

const AboutUs: FunctionComponent = () => {
    return (
        <div className="w-full relative bg-white overflow-hidden text-left text-sm text-mediumseagreen font-aeonik">

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
                            className="absolute top-[0px] left-[469px] w-4 h-4 overflow-hidden"
                            alt=""
                            src="/assets/images/svg/link--svg.svg"
                        />
                    </div>
                </div>
            </div>
            <Header
                vector="/assets/images/svg/vector2.svg"
                sVG="/assets/images/svg/svg3.svg"
                propBackgroundColor="#fff"
                propBorderBottom="dimgray"
                propColor="dimgray"

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
                        className="!w-auto h-[429px] object-cover"
                        alt=""
                        src="/rectangle-34624433@2x.png"
                    />
                </div>
                <div className="overflow-hidden rounded-xl">
                    <img
                        className="  !w-full !lg:max-w-[468px] h-[429px] object-cover"
                        alt=""
                        src="/rectangle-34624349@2x.png"
                    />
                </div>

            </div>

            <div className="relative w-[85%] flex-col lg:flex-row items-start mx-auto flex justify-between">
                <div
                    className="relative lg:max-w-[425px] overflow-hidden flex flex-col items-start justify-end pt-0 px-0 pb-[100px] box-border gap-[10px]">
                    <div className="relative uppercase font-medium">Built for growth</div>
                    <b className="w-auto relative text-23xl leading-[50px] inline-block text-gray-500 ">
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
            <div className="my-[70px] w-[90%] ml-auto overflow-hidden gap-[54px] flex ">
                <div className="text-left rounded-lg max-w-[400px]  box-border text-base text-floralwhite">
                    <div className={''}>
                        <div className="relative text-mediumseagreen uppercase font-medium">
                            Built for growth
                        </div>
                        <b className=" relative text-23xl text-gray-600">
                            Come work with us
                        </b>
                    </div>
                    <p className="text-lg leading-[25px] font-medium text-dimgray-100 ">Come do meaningful work with
                        kind, smart
                        colleagues who're invested
                        in your growth, If you’re ready to join us in powering the dreams of
                        millions of people around the world, come claim your spot.</p>
                    <AppBtn text={'See all open positions'}/>
                </div>

                <div className=" w-full ">
                    <img className="h-[500px] float-end w-full object-cover" alt="" src="/rectangle-34624375@2x.png"/>
                </div>


            </div>

            <Testimonial image="/659fa9238d96a7bdeceaf7ee-jesse20hiss2020fresh20sendsjpeg@2x.png"/>

            <Footer/>
        </div>
    );
};

export default AboutUs;
