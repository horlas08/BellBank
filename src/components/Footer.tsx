import {FunctionComponent, useMemo, type CSSProperties} from "react";
import {Link} from "react-router-dom";
import AppBtn from "./AppBtn";

export type FooterPropsType = {
    /** Style props */
    propTop?: CSSProperties["top"];
    defaultType?: boolean;
};

const Footer: FunctionComponent = ({propTop, defaultType = true}: FooterPropsType) => {
    const styleMemo: CSSProperties = useMemo(() => {
        return {
            top: propTop,
        };
    }, [propTop]);

    return (

        <footer className="w-full mt-[200px]">
            {defaultType? (
                <div className="w-[70%] flex flex-col justify-center py-5 md:py-0 px-9  !md:pl-[50px] bg-[url('/assets/images/image-761.png')] bg-no-repeat bg-cover mx-auto relative rounded-3xl bg-cadetblue h-[240px] md:h-[440px] overflow-hidden text-38xl">

                    <div className=" flex flex-col items-start justify-start gap-[30px]">
                        <div className="flex flex-col items-start justify-start gap-[15px]">
                            <b className="max-w-[420px] text-white relative text-xl sm:text-16xl md:text-23xl leading-7 md:leading-[60px] ">
                                Get an account that suits you.
                            </b>
                            <div
                                className="max-w-[420px] relative text-sm lg:text-[15px] leading-[20px] md:leading-[24px] font-medium text-gray-1100 inline-block md:min-h-[152px] ">
                                At BellBank, we understand that every individual and business is unique. That's why we offer a range of accounts tailored to suit your specific needs. Whether you're looking for a personal account, a business account, or something in between, we've got you covered.
                            </div>
                        </div>
                        <div
                            className="rounded-lg cursor-pointer  bg-mediumseagreen md:h-[45px] flex flex-row items-center justify-center py-[8px] md:py-[11px] px-5 box-border text-center text-mini text-floralwhite">
                            <div className="relative cursor-pointer font-outfit capitalize font-bold" onClick={()=> window.location.href = 'https://app.bellmfb.com/account/register/'}>Get started</div>
                        </div>
                    </div>
                </div>

            ): (
                <div className="w-[70%] flex flex-col justify-center py-5 md:py-0 px-9 !md:pl-[50px] mx-auto relative rounded-3xl bg-darkslategray-100 h-[240px] md:h-[340px] overflow-hidden text-38xl">

                    <div className=" flex flex-col items-start justify-start gap-[30px]">
                        <div className="flex flex-col items-start justify-start gap-[15px]">
                            <b className="text-white relative text-xl sm:text-16xl md:text-23xl leading-7 md:leading-[60px] ">
                                Get an account that suits you.
                            </b>
                            <div
                                className="max-w-[420px] relative text-sm lg:text-[15px] leading-[20px] md:leading-[24px] font-medium text-gray-1100 inline-block md:min-h-[152px] ">
                                At BellBank, we understand that every individual and business is unique. That's why we
                                offer a range of accounts tailored to suit your specific needs. Whether you're looking
                                for a personal account, a business account, or something in between, we've got you
                                covered.
                            </div>
                        </div>
                        <div
                            className="rounded-lg cursor-pointer  bg-mediumseagreen md:h-[45px] flex flex-row items-center justify-center py-[8px] md:py-[11px] px-5 box-border text-center text-mini text-floralwhite">
                            <div className="relative cursor-pointer font-outfit capitalize font-bold"
                                 onClick={() => window.location.href = 'https://app.bellmfb.com/account/register/'}>Get
                                started
                            </div>
                        </div>
                    </div>
                </div>

            )}


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
                        <Link to={'/about-us'} className="text-black cursor-pointer  link link-hover">About Us</Link>
                        <Link to={'/security'} className="link cursor-pointer  text-black link-hover">Security</Link>
                        <a href={''} target={'_blank'} className="link  text-black link-hover">Help center</a>
                        <a href={''} target={'_blank'} className="link  text-black link-hover">API documentation</a>
                    </nav>
                    <nav className="flex flex-col my-[25px] sm:my-0">
                        <h6 className="mt-0 footer-title text-xl sm:text-inherit">Resources</h6>
                        <a href={'https://medium.com/@GetBellBank'} target={'_blank'}
                           className="link text-black link-hover">Blog</a>
                        <Link to={'/faq'} className="link text-black link-hover">FAQs</Link>
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
