import React, {FunctionComponent, useEffect} from "react";
// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import {Simulate} from "react-dom/test-utils";
import play = Simulate.play;
import {IoStar} from "react-icons/io5";


type TestimonialItemType = {
    image: string,
    imageTop: string,
    username: string,
    title: string,
    children: React.ReactNode
}

const TestimonialItem: FunctionComponent<TestimonialItemType> = ({image, username, title, imageTop, children}) => {


    return (
        // <div className="flex flex-col items-start justify-start gap-[24px]">
        //     <div className="mx-au">
        //
        //         <div className="flex flex-col items-start justify-center gap-[20px]">
        //             <div className="w-auto h-auto overflow-hidden flex flex-col items-center justify-center">
        //                 {/*<img className="max-w-[110px] relative max-h-[100px] " alt=""*/}
        //                 {/*     src={imageTop}/>*/}
        //             </div>
        //             <div className="md:max-w-[325px] md:my-auto my-3 relative leading-[26px] font-medium flex items-center">
        //                 {children}
        //             </div>
        //
        //         </div>
        //
        //         <div className="below mt-[15px] flex flex-row items-center justify-start text-base text-gray-400">
        //             <div className="flex flex-row items-center justify-start gap-[12px]">
        //
        //                 <div
        //                     className="w-16 rounded-[4.07px] h-16 overflow-hidden shrink-0 flex flex-col items-start justify-center">
        //
        //                     <img
        //                         className="w-full flex-1 relative rounded-81xl max-w-[64px] overflow-hidden max-h-full object-cover"
        //                         alt="" src={image}/>
        //
        //                 </div>
        //                 <div className="h-[51px] flex flex-col items-start justify-start">
        //                     <b className="relative leading-[22px]">
        //                         {username}
        //                     </b>
        //                     <div
        //                         className="self-stretch flex flex-col items-start justify-start pt-[5px] px-0 pb-0 opacity-[0.7] text-sm">
        //                         <div className="relative leading-[17px]">
        //                             {title}
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //
        //     </div>
        // </div>

        <li className={'testimonial'}>


        <div className="testimonial-wrapper border border-mediumseagreen border-solid bg-mediumseagreenlight">
            <h6 className="name text-mediumseagreen text-sm">{username}</h6>
            <p className="description text-black">
                {children}
            </p>
            <div className="flex items-center gap-2">
                <img
                    className="w-full mt-2 flex-1 relative rounded-81xl max-w-[64px] overflow-hidden max-h-full object-cover"
                    alt="" src={image}/>
                <div className="">
                    <span className="ratings">
                <span><IoStar fill={'#00bc74'} size={15}/></span>
                <span><IoStar fill={'#00bc74'} size={15}/></span>
                <span><IoStar fill={'#00bc74'} size={15}/></span>
                <span><IoStar fill={'#00bc74'} size={15}/></span>
                <span><IoStar fill={'#00bc74'} size={15}/></span>
            </span>
                    <p className={'text-black m-0'}>{title}</p>
                </div>

            </div>

        </div>
        </li>
    );
};

export default TestimonialItem;
