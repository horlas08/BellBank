import {FunctionComponent, useMemo, type CSSProperties} from "react";
import {Link} from "react-router-dom";
import AppBtn from "./AppBtn";

export type FrameComponentType = {
    /** Style props */
    propTop?: CSSProperties["top"];
};

const Footer: FunctionComponent<FrameComponentType> = ({propTop}) => {
    const styleMemo: CSSProperties = useMemo(() => {
        return {
            top: propTop,
        };
    }, [propTop]);

    return (

        <footer className="w-full mt-[200px]">
            <div className="w-[70%] flex flex-col justify-center py-5 md:py-0 px-9  !md:pl-[50px] bg-[url('/assets/images/image-761@2x.png')] bg-no-repeat bg-cover mx-auto relative rounded-3xl bg-cadetblue h-[240px] md:h-[440px] overflow-hidden text-38xl">

                <div className=" flex flex-col items-start justify-start gap-[30px]">
                    <div className="flex flex-col items-start justify-start gap-[15px]">
                        <b className="max-w-[420px] text-white relative text-xl sm:text-16xl md:text-23xl leading-7 md:leading-[60px] ">
                            Get an account that suits you.
                        </b>
                        <div
                            className="max-w-[420px] relative text-sm lg:text-lg leading-[20px] md:leading-[24px] font-medium text-gray-1100 inline-block md:h-[72px] ">
                            Lorem ipsum dolor sit amet consectetur. Sit sagittis
                            pellentesque mauris venenatis diam. Nibh diam ipsum massa sed
                            arcu. Sit sed egestas sempe.
                        </div>
                    </div>
                    <div
                        className="w-[166px] rounded-lg cursor-pointer  bg-mediumseagreen md:h-[45px] flex flex-row items-center justify-center py-[8px] md:py-[11px] px-5 box-border text-center text-mini text-floralwhite">
                        <div className="relative cursor-pointer font-medium" onClick={()=> window.location.href = 'https://app.bellmfb.com/account/register/'}>Get started today</div>
                    </div>
                </div>
            </div>


            <div
                className="footer  sm:auto-rows-auto w-[80%] my-[25px] mx-auto !flex flex-col md:flex-row p-10 !justify-center text-base-content">
                <aside className="">
                    <img
                        className=""
                        alt=""
                        src="/assets/images/bellbank.png"
                    />
                    <p>ACME Industries Ltd.<br/>Providing reliable tech since 1992</p>
                </aside>
                <div className="flex flex-1 flex-col sm:flex-row  w-full md:auto justify-around items-start">
                    <nav className="flex flex-col my-[25px] sm:my-0">
                        <h6 className="footer-title mt-0 text-xl sm:text-inherit">Company</h6>
                        <Link to={'/about-us'} className="text-black cursor-pointer link link-hover">About Us</Link>
                        <a href={'https://bellmfb.com/security.html'} target={'_blank'} className="link link-hover">Security</a>
                        <a href={''} target={'_blank'} className="link link-hover">Help center</a>
                        <a href={''} target={'_blank'} className="link link-hover">API documentation</a>
                    </nav>
                    <nav className="flex flex-col my-[25px] sm:my-0">
                        <h6 className="mt-0 footer-title text-xl sm:text-inherit">Resources</h6>
                        <a href={'https://medium.com/@GetBellBank'} target={'_blank'} className="link text-black link-hover">Blog</a>
                        <Link to={'/#faq'} className="link text-black link-hover">FAQs</Link>
                        <Link to={'/terms'} className="link text-black  link-hover">Terms and condition</Link>
                        <Link to={'/policy'} className="link link-hover text-black ">Privacy Policy</Link>
                    </nav>
                    <nav className="flex flex-col my-[25px] sm:my-0">
                        <h6 className="mt-0 footer-title text-xl sm:text-inherit">Get in touch</h6>
                        <a href={'https://instagram.com/GetBellBank'} target={'_blank'} className="link text-black link-hover">Instagram</a>
                        <a href={'https://tiktok.com/GetBellBank'} target={'_blank'} className="link text-black link-hover">Tiktok</a>
                        <a href={'https://twitter.com/GetBellBank'} target={'_blank'} className="link text-black link-hover">Twitter</a>
                        <a href={'https://www.facebook.com/GetBellBank'} target={'_blank'} className="link text-black link-hover">Facebook</a>
                    </nav>
                    <nav className="flex flex-col my-[25px] sm:my-0">
                        <h6 className="mt-0 footer-title text-xl sm:text-inherit">
                            Join over 2k+ using BellBank
                        </h6>

                        <div className="relative mt-2 overflow-hidden rounded-md shadow-sm">
                            <input type="text"
                                   className="w-fit focus:border-gray-100 border-gray-100 rounded-md focus:border-[2px]
                                   border-[2px] py-3 my-4 px-5
                                   text-black
                                   placeholder:text-gray-100
                                   sm:text-sm sm:leading-6"
                                   placeholder="Your email"/>
                        </div>


                        <AppBtn text={'Subscribe Now'} className={'w-fit md:w-full '}/>
                    </nav>
                </div>
            </div>
            <div className="w-[80%] mx-auto text-left leading-[22px] text-gray-100">
                <p className={'my-6'}>
                    © 2024. Bellbank is a bank powered by BellBank MFB Limited and duly licensed by the Central Bank of
                    Nigeria. Unauthorized reproduction or redistribution of copyrighted materials on this website and
                    our digital media pages is strictly prohibited. BellBank Microfinance Bank Limited (RC: 1088210),
                    Our registered address is at Old People Bank, Along Katsina Road, Tsanyawa L.G.A, Kano State,
                    Nigeria.
                    All deposits are insured by Nigeria Deposit Insurance Corporation(NDIC). Additional disclosures can
                    be found in the resources section of our website.
                </p>
                <div className="relative mt-[70px] text-gray-100 text-center">
                    © 2024 BellBank MFB Limited. All rights reserved.
                </div>
            </div>
        </footer>

    );
};

export default Footer;
