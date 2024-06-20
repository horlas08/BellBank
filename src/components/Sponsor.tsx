import {Splide, SplideSlide} from "@splidejs/react-splide";
import {AutoScroll} from "@splidejs/splide-extension-auto-scroll";

export default function Sponsor() {
    return (
        <section className="sponsors-section wrapper md:max-w-[90%] mx-auto overflow-hidden">
            <h3 className="sponsors-section-title text-black">Our Partners</h3>
            <ul className="sponsors">
                <Splide className={'flex'} extensions={ { AutoScroll } } options={{
                    autoScroll: {
                        // autoStart: true,
                        speed: 1,


                    },
                    speed: 1,
                    breakpoints: {
                        1080: {
                            perPage: 3,
                        },
                        880: {
                            perPage: 8
                        },
                        400: {
                            perPage: 3,


                        },
                    },
                    mediaQuery: 'min',
                    perPage: 4,
                    pauseOnHover: true,
                    focus: 'center',
                    pagination: false,
                    arrows: false,
                    type: 'loop',
                    drag: 'free'
                }}>
                    <SplideSlide>
                        <li className="sponser1">

                            <img src="/assets/images/partner-1.svg" className={''} alt="Quickteller"></img>
                        </li>
                    </SplideSlide>
                    <SplideSlide>
                        <li className="sponser1"><img src="/assets/images/partner-2.svg" alt="Zenith"></img></li>

                    </SplideSlide>
                    <SplideSlide>
                        <li className="sponser1"><img src="/assets/images/partner-3.svg" alt="VTpass"></img></li>
                    </SplideSlide>
                    <SplideSlide>
                        <li className="sponser1">

                            <img src="/assets/images/partner-4.svg" alt="VFD Microfinance Bank"></img>
                        </li>
                    </SplideSlide>
                    <SplideSlide>
                        <li className="sponser1"><img src="/assets/images/partner-5.svg" alt="fincra"></img></li>
                    </SplideSlide>
                    <SplideSlide>
                        <li className="sponser1"><img src="/assets/images/partner-6.svg" alt="spendo"></img></li>
                    </SplideSlide>
                </Splide>

            </ul>
        </section>
    )
}