import React, {FunctionComponent, useMemo, type CSSProperties} from "react";
import TestimonialItem from "./TestimonialItem";
import {AutoScroll} from "@splidejs/splide-extension-auto-scroll";
import { Splide, SplideSlide } from '@splidejs/react-splide';

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
                    className="md:w-[544px] md:text-[18px] text-sm px-4 md:px-0 text-gray-100 mx-auto">
                    We provide innovative financial solutions that empower both businesses and individuals to flourish and reach remarkable growth milestones. With our expert support and tailored services, we help unlock our full potential and drive success.
                </div>

            </div>
            <div  className=" gap-y-[5rem] md:gap-[30px] max-w-[80%]  md:justify-between justify-center mx-auto my-[60px]">
                <Splide onMounted={()=>{

                }} extensions={ { AutoScroll } } options={{
                    autoScroll: {
                        // autoStart: true,
                        speed: 1,

                    },
                    speed: 1,

                    // autoplay: true,
                    perPage: 3,
                    pauseOnHover: true,
                    focus  : 'center',
                    pagination: false,
                    arrows: false,
                    type: 'loop',
                    drag: 'free'
                }}>
                    <SplideSlide>
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
                    </SplideSlide>

                </Splide>

            </div>

            {/*<div*/}
            {/*    className="flex flex-col md:flex-row gap-y-[5rem] md:gap-[30px] max-w-[80%]  md:justify-between justify-center mx-auto my-[60px]">*/}
            {/*    <TestimonialItem title={'Customer'} username={'Idris Abdulsalam'}*/}
            {/*                     image={'/assets/images/testimonial/testimonial.png'} imageTop={'/assets/images/testimonial/1.png'}>*/}
            {/*        <span className="text-black">*/}
            {/*              <p className="m-0">*/}
            {/*                  I've been using BellBank's account for a few months now,*/}
            {/*                  and I'm blown away by the swiftness of their transfers and bill payments!*/}
            {/*                  I can pay my bills and send money to friends and family in just a few clicks,*/}
            {/*                  and the transactions are always processed instantly.*/}
            {/*              </p>*/}
            {/*              <p className="m-0">*/}
            {/*                  The mobile app is user-friendly and secure, and I love the real-time updates on my account activity.*/}
            {/*                  BellBank has made managing my finances so much easier and faster!*/}
            {/*              </p>*/}
            {/*          </span>*/}
            {/*    </TestimonialItem>*/}
            {/*    <TestimonialItem title={'Customer'} username={'Mrs Aderonke Joseph'}*/}
            {/*                     imageTop={'/assets/images/testimonial/2.png'}*/}
            {/*                     image={'/assets/images/testimonial/testimonial2.png'}>*/}
            {/*            <span className="text-black">*/}
            {/*              <p className="m-0">*/}
            {/*                  As a small business owner, I was struggling to find a reliable payment processing solution until I discovered BellBank.*/}
            {/*                  Their services have been a game-changer for my business! I can now accept and process payments quickly and securely, and their customer service team is always available to help with any issues.*/}

            {/*              </p>*/}
            {/*              <p className="m-0">*/}
            {/*                  The fees are competitive, and the analytics tools help me track my sales and make data-driven decisions.*/}
            {/*                  BellBank has helped me grow my business and improve my bottom line.*/}
            {/*              </p>*/}
            {/*          </span>*/}
            {/*    </TestimonialItem>*/}
            {/*    <TestimonialItem title={'Customer'} username={'Rachel Tega'}*/}
            {/*                     imageTop={'/assets/images/testimonial/3.png'}*/}
            {/*                     image={'/assets/images/testimonial/testimonial.png'}>*/}
            {/*        <span className="text-black">*/}
            {/*              <p className="m-0">*/}
            {/*                  I was impressed by BellBank's quick support and expertise in helping me set up their payment processing services for my e-commerce business.*/}
            {/*                  The integration was seamless, and their team was always available to answer my questions and provide guidance.*/}
            {/*              </p>*/}
            {/*              <p className="m-0">*/}
            {/*                  The security features are top-notch, and I appreciate the real-time fraud monitoring and detection.*/}
            {/*                  With BellBank, I can focus on growing my business without worrying about payment processing issues. Highly recommended!*/}
            {/*              </p>*/}
            {/*          </span>*/}
            {/*    </TestimonialItem>*/}

            {/*</div>*/}

        </div>
    );
};

export default Testimonial;
