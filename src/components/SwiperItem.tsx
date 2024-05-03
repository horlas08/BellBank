import {FunctionComponent, useMemo, type CSSProperties, useEffect, useRef} from "react";

export type SwiperItemType = {
    /** Style props */
    property1Frame1618872541Position?: CSSProperties["position"];
    property1Frame1618872541Top?: CSSProperties["top"];
    property1Frame1618872541Left?: CSSProperties["left"];
};

const SwiperItem: FunctionComponent<SwiperItemType> = () => {


    // @ts-ignore
    return (
        <div className="w-full flex place-content-center mx-auto ">
            {/*<swiper-container className={'w-80'}>*/}
            {/*    <swiper-slide>*/}
            <img
                className=" w-[80%] mx-auto rounded-xl mt-5"
                alt=""
                src="/rectangle-34624197@2x.png"
            />
            {/*</swiper-slide>*/}
            {/*<swiper-slide>*/}
            {/*    <img*/}
            {/*        className=" w-[80%] mx-auto rounded-xl mt-5"*/}
            {/*        alt=""*/}
            {/*        src="/rectangle-34624197@2x.png"*/}
            {/*    />*/}
            {/*    </swiper-slide>*/}
            {/*</swiper-container>*/}

            {/*<div className=" h-[1.65%]  flex flex-row items-start justify-start gap-[5px]">*/}
            {/*  <div className="w-2 relative rounded-[50%] bg-mediumseagreen h-2" />*/}
            {/*  <div className="w-2 relative rounded-[50%] bg-gray-700 h-2" />*/}
            {/*  <div className="w-2 relative rounded-[50%] bg-gray-700 h-2" />*/}
            {/*</div>*/}

        </div>
    );
};

export default SwiperItem;
