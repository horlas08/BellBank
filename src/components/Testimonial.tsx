import {FunctionComponent, useMemo, type CSSProperties} from "react";
import TestimonialItem from "./TestimonialItem";

export type TestimonialType = {
    image?: string;

    /** Style props */
    propBorderRadius?: CSSProperties["borderRadius"];
};

const Testimonial: FunctionComponent<TestimonialType> = ({
                                                             image,
                                                             propBorderRadius,
                                                         }) => {
    const styleMemo: CSSProperties = useMemo(() => {
        return {
            borderRadius: propBorderRadius,
        };
    }, [propBorderRadius]);

    return (

        <div className={'relative  w-full mt-[50px] overflow-hidden'}>
            <div className={'w-full text-black text-center'}>
                <h1 className="md:w-[678px] text-16xl md:text-23xl mx-auto">
                    Loved by people and businesses that care about their
                    finances
                </h1>
                <div
                    className="md:w-[544px] md:text-3xl text-sm px-4 md:px-0  mx-auto">
                    We provide innovative financial solutions that empower both businesses and individuals to flourish and reach remarkable growth milestones. With our expert support and tailored services, we help unlock our full potential and drive success.
                </div>

            </div>
            <div
                className="flex flex-col md:flex-row gap-y-[5rem] md:gap-[30px] max-w-[80%] md:justify-between justify-center mx-auto my-[60px]">
                <TestimonialItem title={'Customer'} username={'Idris Abdulsalam'}
                                 image={'/assets/images/testimonial/testimonial.png'} imageTop={'/assets/images/testimonial/1.png'}>
                    <span className="text-black">
                          <p className="m-0">
                              I've been using BellBank's account for a few months now,
                              and I'm blown away by the swiftness of their transfers and bill payments!
                              I can pay my bills and send money to friends and family in just a few clicks,
                              and the transactions are always processed instantly.
                          </p>
                          <p className="m-0">
                              The mobile app is user-friendly and secure, and I love the real-time updates on my account activity.
                              BellBank has made managing my finances so much easier and faster!
                          </p>
                      </span>
                </TestimonialItem>
                <TestimonialItem title={'Customer'} username={'Mrs Aderonke Joseph'}
                                 imageTop={'/assets/images/testimonial/2.png'}
                                 image={'/assets/images/testimonial/testimonial2.png'}>
                        <span className="text-black">
                          <p className="m-0">
                              As a small business owner, I was struggling to find a reliable payment processing solution until I discovered BellBank.
                              Their services have been a game-changer for my business! I can now accept and process payments quickly and securely, and their customer service team is always available to help with any issues.

                          </p>
                          <p className="m-0">
                              The fees are competitive, and the analytics tools help me track my sales and make data-driven decisions.
                              BellBank has helped me grow my business and improve my bottom line.
                          </p>
                      </span>
                </TestimonialItem>
                <TestimonialItem title={'Customer'} username={'Rachel Tega'}
                                 imageTop={'/assets/images/testimonial/3.png'}
                                 image={'/assets/images/testimonial/testimonial.png'}>
                    <span className="text-black">
                          <p className="m-0">
                              I was impressed by BellBank's quick support and expertise in helping me set up their payment processing services for my e-commerce business.
                              The integration was seamless, and their team was always available to answer my questions and provide guidance.
                          </p>
                          <p className="m-0">
                              The security features are top-notch, and I appreciate the real-time fraud monitoring and detection.
                              With BellBank, I can focus on growing my business without worrying about payment processing issues. Highly recommended!
                          </p>
                      </span>
                </TestimonialItem>

            </div>

            {/*<div
                className="relative rounded-3xl bg-white box-border w-[385px] flex flex-col items-start justify-start p-8 text-left text-lg text-dimgray-100 font-aeonik border-[1px] border-solid border-whitesmoke-500">
                <div className="flex flex-col items-start justify-start gap-[24px]">
                    <div className="flex flex-col items-start justify-start gap-[20px]">
                        <img
                            className="w-[76px] relative h-[76px] object-cover"
                            alt=""
                            src="/vector1@2x.png"/>
                        <div className="w-[325px] relative leading-[26px] font-medium flex items-center">
                          <span className="w-full">
                              <p className="m-0">I I was spending way too many hours</p>
                              <p className="m-0">every month on sales tax. And if you</p>
                              <p className="m-0">wanted someone on customer</p>
                              <p className="m-0">support from my tax service, there</p>
                              <p className="m-0">
                                  was no one. Numeral has made it to identify and know the tax
                              </p>
                              <p className="m-0 whitespace-pre-wrap">
                                  laws And then on your behalf, registering, managing everything,
                                  is kind of taking the worry off my plate.
                              </p>
                          </span>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-start text-base text-gray-400">
                        <div className="flex flex-row items-center justify-start gap-[12px]">
                            <div
                                className="w-16 rounded-[4.07px] h-16 overflow-hidden shrink-0 flex flex-col items-start justify-center">
                                <img
                                    className="w-full flex-1 relative max-w-[64px] overflow-hidden max-h-full object-cover"
                                    alt=""
                                    src={fa9238d96a7bdeceaf7eeJess}
                                    style={styleMemo}/>
                            </div>
                            <div className="h-[51px] flex flex-col items-start justify-start">
                                <b className="relative leading-[22px]">Kevin Chanthasiriphan</b>
                                <div
                                    className="self-stretch flex flex-col items-start justify-start pt-[5px] px-0 pb-0 opacity-[0.7] text-sm">
                                    <div className="relative leading-[17px]">
                                        Founder, Fresh Sends
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="absolute top-[0px] left-[816px] rounded-3xl bg-white box-border w-[383px] flex flex-col items-start justify-start p-8 border-[1px] border-solid border-whitesmoke-500">
                <div className="flex flex-col items-start justify-start gap-[24px]">
                    <div className="flex flex-col items-start justify-start gap-[20px]">
                    <img
                            className="w-[76px] relative h-[76px] overflow-hidden shrink-0 object-cover"
                            alt=""
                            src="/659faed70026375f8e89b9db-explorer20logo20final201jpg@2x.png"
                        />
                        <div className="w-[325px] relative leading-[26px] font-medium flex items-center">
                                      <span className="w-full">
                                        <p className="m-0">
                                          I I was spending way too many hours
                                        </p>
                                        <p className="m-0">
                                          every month on sales tax. And if you
                                        </p>
                                        <p className="m-0">
                                          wanted someone on customer
                                        </p>
                                        <p className="m-0">
                                          support from my tax service, there
                                        </p>
                                        <p className="m-0">
                                          was no one. Numeral has made it to identify
                                          and know the tax
                                        </p>
                                        <p className="m-0 whitespace-pre-wrap">
                                          laws And then on your behalf, registering,
                                          managing everything, is kind of taking the
                                          worry off my plate.
                                        </p>
                                      </span>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-start text-base text-gray-400">
                        <div className="flex flex-row items-center justify-start gap-[12px]">
                            <div
                                className="w-16 rounded-[4.07px] h-16 overflow-hidden shrink-0 flex flex-col items-start justify-center">
                                <img
                                    className="w-[64.5px] relative rounded-81xl h-[64.5px] object-cover"
                                    alt=""
                                    src="/frame-1618872600@2x.png"
                                />
                            </div>
                            <div className="h-[51px] flex flex-col items-start justify-start">
                                <b className="relative leading-[22px]">
                                    Cason Crane
                                </b>
                                <div
                                    className="self-stretch flex flex-col items-start justify-start pt-[5px] px-0 pb-0 opacity-[0.7] text-sm">
                                    <div className="relative leading-[17px]">
                                        Founder, Fresh Sends
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
*/}
        </div>
    );
};

export default Testimonial;
