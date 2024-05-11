import {FunctionComponent, useMemo, type CSSProperties, useEffect, useRef} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,EffectFade,Navigation} from 'swiper/modules';

export type SwiperItemType = {
    /** Style props */
    property1Frame1618872541Position?: CSSProperties["position"];
    property1Frame1618872541Top?: CSSProperties["top"];
    property1Frame1618872541Left?: CSSProperties["left"];
};

const SwiperItem: FunctionComponent<SwiperItemType> = () => {


    // @ts-ignore
    return (
        <div className="w-full flex place-content-center mx-auto">
            <Swiper autoplay={true} pagination={{clickable: true}}  effect="fade" slidesPerView={1} modules={[Pagination,Navigation, EffectFade]} className="mySwiper">
                <SwiperSlide className={''} >
                    <img
                        className="max-w-[90%] w-[1500px] mx-auto rounded-xl mt-5"
                        alt=""
                        src="/assets/images/sw.png"
                    />
                </SwiperSlide>
                <SwiperSlide >
                    <img
                        className=" mx-auto rounded-xl mt-5"
                        alt=""
                        src="/assets/images/sw1.png"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="w-[90%] mx-auto rounded-xl mt-5"
                        alt=""
                        src="/assets/images/sw2.png"
                    />
                </SwiperSlide>

            </Swiper>

        </div>
    );
};

export default SwiperItem;
