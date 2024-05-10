import {FunctionComponent, useMemo, type CSSProperties} from "react";
import {Link} from "react-router-dom";
import AppBtn from "./AppBtn";

export type FrameComponentType = {
    /** Style props */
    propTop?: CSSProperties["top"];
};

const Footer: FunctionComponent<FrameComponentType> = ({propTop}) => {
    const frameDiv2Style: CSSProperties = useMemo(() => {
        return {
            top: propTop,
        };
    }, [propTop]);

    return (

        <footer className="w-full mt-[200px]">
            <div className="w-[70%] flex flex-col justify-center pl-[50px] bg-[url('/image-761@2x.png')] bg-no-repeat bg-cover mx-auto relative rounded-3xl bg-cadetblue h-[440px] overflow-hidden text-38xl">

                <div
                    className=" flex flex-col items-start justify-start gap-[30px]">
                    <div className="flex flex-col items-start justify-start gap-[15px]">
                        <b className="max-w-[420px] text-white relative text-xl sm:text-16xl md:text-23xl leading-[60px] ">
                            Get an account that suits you.
                        </b>
                        <div
                            className="max-w-[420px] relative text-sm lg:text-lg leading-[24px] font-medium text-gray-1100 inline-block h-[72px] shrink-0">
                            Lorem ipsum dolor sit amet consectetur. Sit sagittis
                            pellentesque mauris venenatis diam. Nibh diam ipsum massa sed
                            arcu. Sit sed egestas sempe.
                        </div>
                    </div>
                    <div
                        className="w-[166px] rounded-lg cursor-pointer  bg-mediumseagreen h-[45px] flex flex-row items-center justify-center py-[11px] px-5 box-border text-center text-mini text-floralwhite">
                        <div className="relative font-medium">Get started today</div>
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
                        <a className="link link-hover">About Us</a>
                        <a className="link link-hover">Security</a>
                        <a className="link link-hover">Help center</a>
                        <a className="link link-hover">API documentation</a>
                    </nav>
                    <nav className="flex flex-col my-[25px] sm:my-0">
                        <h6 className="mt-0 footer-title text-xl sm:text-inherit">Resources</h6>
                        <a className="link link-hover">Blog</a>
                        <a className="link link-hover">FAQs</a>
                        <a className="link link-hover">Terms and condition</a>
                        <a className="link link-hover">Privacy Policy</a>
                    </nav>
                    <nav className="flex flex-col my-[25px] sm:my-0">
                        <h6 className="mt-0 footer-title text-xl sm:text-inherit">Get in touch</h6>
                        <a className="link link-hover">LinkedIn</a>
                        <a className="link link-hover">Instagram</a>
                        <a className="link link-hover">Twitter</a>
                        <a className="link link-hover">Facebook</a>
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
                <div className="relative text-gray-100 text-center">
                    © 2024 BellBank MFB Limited. All rights reserved.
                </div>
            </div>
        </footer>

    );
};
{/*
      <div className="relative top-[83px]  w-[90%] mx-auto  text-center text-xs text-dimgray-200 font-aeonik !overflow-hidden"
        style={frameDiv2Style}
      >

        <div className=" flex flex-col items-center justify-start gap-[50px] text-left text-sm text-white">
          <div className="w-[100%] mx-auto relative rounded-3xl bg-cadetblue h-[440px] overflow-hidden text-38xl">
            <img className=" w-full h-[440px] object-cover"
                 alt=""
                 src="/image-761@2x.png"
            />

            <div
                className=" flex flex-col items-start justify-start gap-[30px]">
              <div className="flex flex-col items-start justify-start gap-[15px]">
                <b className="max-w-[420px] relative leading-[60px] inline-block  shrink-0">
                  Get an account that suits you.
                </b>
                <div
                    className="w-[420px] relative text-lg leading-[24px] font-medium text-gray-1100 inline-block h-[72px] shrink-0">
                  Lorem ipsum dolor sit amet consectetur. Sit sagittis
                  pellentesque mauris venenatis diam. Nibh diam ipsum massa sed
                  arcu. Sit sed egestas sempe.
                </div>
              </div>
              <div
                  className="w-[166px] rounded-lg bg-mediumseagreen h-[45px] flex flex-row items-center justify-center py-[11px] px-5 box-border text-center text-mini text-floralwhite">
                <div className="relative font-medium">Get started today</div>
              </div>
            </div>
          </div>

          <div className="w-[1201px] relative box-border h-px border-t-[1px] border-solid border-whitesmoke-500"/>
          <div className="w-full flex flex-row items-start justify-start text-gray-500">
            <img
                className="flex-1 relative max-w-full overflow-hidden h-[207px]"
              alt=""
              src="/assets/images/svg/BellBankGreen.svg"
          />
          <div className="flex-1 relative h-[207px]">
            <div className="absolute top-[0px] left-[29.9px] leading-[21px]">
              Company
            </div>
            <div
                className="absolute w-[calc(100%_-_59.4px)] top-[33px] right-[29.5px] left-[29.9px] flex flex-col items-start justify-center pt-[3.8px] pb-[4.8px] pr-[112.6px] pl-0 box-border gap-[8.6px] text-gray-100">
              <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[0.6px]">
                <div className="relative leading-[19.6px]">About Us</div>
              </div>
              <div className="flex flex-row items-start justify-start pt-0 pb-[0.6px] pr-0.5 pl-0">
                <div className="relative leading-[19.6px]">Security</div>
              </div>
              <div className="flex flex-row items-start justify-start pt-0 pb-[0.6px] pr-0.5 pl-0">
                <div className="relative leading-[19.6px]">Help center</div>
              </div>
              <div className="flex flex-row items-start justify-start pt-0 pb-[0.6px] pr-[2.7px] pl-0">
                <div className="relative leading-[19.6px]">
                  API documentation
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 relative h-[207px]">
            <div className="absolute top-[0px] left-[29.9px] leading-[21px]">
              Resources
            </div>
            <div
                className="absolute w-[calc(100%_-_59.4px)] top-[33px] right-[29.5px] left-[29.9px] flex flex-col items-start justify-center pt-[3.8px] pb-[4.8px] pr-[40.2px] pl-0 box-border gap-[8.6px] text-gray-100">
              <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[0.6px]">
                <div className="relative leading-[19.6px]">Blog</div>
              </div>
              <div className="flex flex-row items-start justify-start pt-0 pb-[0.6px] pr-[3px] pl-0">
                <div className="relative leading-[19.6px]">FAQs</div>
              </div>
              <div className="flex flex-row items-start justify-start pt-0 pb-[0.6px] pr-[6.4px] pl-0">
                <div className="relative leading-[19.6px]">
                  Terms and condition
                </div>
              </div>
              <div className="flex flex-row items-start justify-start pt-0 pb-[0.6px] pr-[3.3px] pl-0">
                <div className="relative leading-[19.6px]">Privacy Policy</div>
              </div>
            </div>
          </div>
          <div
              className="flex-1 h-[207px] flex flex-col items-start justify-start pt-0 px-[29.9px] pb-[131.3px] box-border gap-[12px]">
            <div className="relative leading-[21px]">Get in touch</div>
            <div
                className="w-[179.6px] flex flex-col items-start justify-center pt-[3.8px] pb-[4.8px] pr-[92.5px] pl-0 box-border gap-[8.6px] text-gray-100">
              <div className="flex flex-row items-start justify-start pt-0 pb-[0.6px] pr-[2.8px] pl-0 text-smi">
                <div className="relative leading-[19.6px]">LinkedIn</div>
              </div>
              <div className="flex flex-row items-start justify-start pt-0 pb-[0.6px] pr-[2.8px] pl-0">
                <div className="relative leading-[19.6px]">Instagram</div>
              </div>
              <div className="flex flex-row items-start justify-start pt-0 pb-[0.6px] pr-[5.1px] pl-0">
                <div className="relative leading-[19.6px]">Twitter</div>
              </div>
              <div className="flex flex-row items-start justify-start pt-0 pb-[0.6px] pr-[2.7px] pl-0">
                <div className="relative leading-[19.6px]">Facebook</div>
              </div>
              <div className="w-[72px] h-[20.6px]"/>
            </div>
          </div>
          <div
              className="flex-1 h-[207px] flex flex-col items-start justify-start py-0 px-[29.9px] box-border gap-[12px]">
            <div className="relative leading-[21px]">
              Join over 2k+ using BellBank
            </div>
            <div className="w-[179.6px] flex flex-col items-start justify-start gap-[12px] text-xs text-gray-100">
              <div
                  className="w-[179.6px] h-8 bg-white box-border flex flex-row items-start justify-start  border-[0px] border-solid border-whitesmoke-600">
                <input
                    className="w-full border-1 input h-full overflow-hidden shrink-0 flex flex-row items-start justify-start  box-border"/>

              </div>
              <div
                  className="rounded-md bg-mediumseagreen flex flex-row items-center justify-center  box-border z-[0] text-center text-white">
                <Link to={'/'}
                      className="cursor-pointer w-full text-white no-underline relative leading-[22.4px] py-[10.4px] px-[28.7px] font-medium">
                  Create account
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[80%] mx-auto text-center relative leading-[22px] text-gray-100 flex items-center">
          © 2024. Bellbank is a bank powered by BellBank MFB Limited and duly
          licensed by the Central Bank of Nigeria. Unauthorized reproduction or
          redistribution of copyrighted materials on this website and our
          digital media pages is strictly prohibited. BellBank Microfinance Bank
          Limited (RC: 1088210), Our registered address is at Old People Bank,
          Along Katsina Road, Tsanyawa L.G.A, Kano State, Nigeria. All deposits
          are insured by Nigeria Deposit Insurance Corporation(NDIC). Additional
          disclosures can be found in the resources section of our website.
        </div>

        <div className="relative w-full h-10 text-gray-100">

          <div className="relative text-gray-100 text-center">
            © 2024 BellBank MFB Limited. All rights reserved.
          </div>
          <div
                className="absolute top-[-0.5px] left-[calc(50%_-_600.5px)] box-border w-[1201px] h-px border-t-[1px] border-solid border-whitesmoke-500"/>
        </div>
      </div>
    </div>*/
}
export default Footer;
