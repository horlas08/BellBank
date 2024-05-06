import {FunctionComponent, useMemo, type CSSProperties, useEffect, useRef} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,EffectFade } from 'swiper/modules';

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
            <Swiper autoplay={true} pagination={true}  effect="fade" modules={[Pagination, EffectFade]} className="mySwiper">
                <SwiperSlide >
                    <img
                        className=" w-[80%] mx-auto rounded-xl mt-5"
                        alt=""
                        src="/rectangle-34624197@2x.png"
                    />
                </SwiperSlide>
                <SwiperSlide >
                    <img
                        className=" w-[80%] mx-auto rounded-xl mt-5"
                        alt=""
                        src="/rectangle-34624197@2x.png"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className=" w-[80%] mx-auto rounded-xl mt-5"
                        alt=""
                        src="/rectangle-34624197@2x.png"
                    />
                </SwiperSlide>

            </Swiper>

        </div>
    );
};

export default SwiperItem;
