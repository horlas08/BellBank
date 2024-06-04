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
                    BellBank is a financial partner empowering businesses to thrive. Our mission is to help Individuals, Business owners and organizations in Africa achieve remarkable growth, admiration, and customer loyalty by providing innovative payment solutions, expert support, and tailored financial services.
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
                        {`Constantly coming up with new creative ideas & working on improving the existing methods in digital banking.`}</b>
                </div>

                <div className="relative lg:max-w-[425px] text-lg text-dimgray-100">
                    <div className="leading-[26px] font-medium   ">
                        <p className="m-0">
                            At BellBank, we're passionate about pushing the boundaries of digital banking. Our team of
                            innovators and experts is constantly brainstorming new creative ideas to enhance your
                            banking experience. We're dedicated to improving existing methods and developing
                            cutting-edge solutions to make your financial life easier, faster, and more secure.
                        </p>
                        <p className="m-0">&nbsp;</p>
                        <b className="mb-7">Our approach:</b>
                    </div>

                    <div className=" leading-[26px] font-medium ">
                        <p className="my-2 ml-2">
                           - Creative problem-solving: We identify areas for improvement and develop innovative solutions to address them.
                        </p>
                        <p className="my-2 ml-2">
                           - Collaborative mindset: Our team works together to share ideas and expertise, ensuring a holistic approach to innovation.
                        </p>
                        <p className="my-2 ml-2">
                           - Customer-centric: We design solutions with your needs in mind, to make banking more intuitive and user-friendly
                        </p>
                        <p className="my-2 ml-2">
                           - Continuous improvement: We refine and optimize our services to ensure they meet the highest standards.
                        </p>
                        <b className="mt-4">
                           Our goal is to provide you with a seamless, personalized, and secure digital banking experience. Join us on this exciting journey and discover the future of banking today!
                        </b>

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
