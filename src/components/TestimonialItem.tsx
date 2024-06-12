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
