import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FrameComponentType = {
  /** Style props */
  propTop?: CSSProperties["top"];
};

const Footer: FunctionComponent<FrameComponentType> = ({ propTop }) => {
  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div className="relative top-[83px]  w-[90%] mx-auto h-[904px] text-center text-xs text-dimgray-200 font-aeonik"
      style={frameDiv2Style}
    >

      <div className="absolute top-[0px] left-[0px] flex flex-col items-center justify-start gap-[50px] text-left text-sm text-white">
        <div className="w-[1199px] relative rounded-3xl bg-cadetblue h-[440px] overflow-hidden shrink-0 text-38xl">
          <img
              className="absolute top-[0px] left-[0px] w-[1326px] h-[440px] object-cover"
              alt=""
              src="/image-761@2x.png"
          />
          <img
              className="absolute top-[-185px] left-[184px] w-[1397.5px] h-[880.5px] object-cover"
              alt=""
              src="/image-763@2x.png"
          />
          <div
              className="absolute top-[calc(50%_-_147px)] left-[66px] flex flex-col items-start justify-start gap-[30px]">
            <div className="flex flex-col items-start justify-start gap-[15px]">
              <b className="w-[420px] relative leading-[60px] inline-block h-[132px] shrink-0">
                Get an account that suits you.
              </b>
              <div className="w-[420px] relative text-lg leading-[24px] font-medium text-gray-1100 inline-block h-[72px] shrink-0">
                Lorem ipsum dolor sit amet consectetur. Sit sagittis
                pellentesque mauris venenatis diam. Nibh diam ipsum massa sed
                arcu. Sit sed egestas sempe.
              </div>
            </div>
            <div className="w-[166px] rounded-lg bg-mediumseagreen h-[45px] flex flex-row items-center justify-center py-[11px] px-5 box-border text-center text-mini text-floralwhite">
              <div className="relative font-medium">Get started today</div>
            </div>
          </div>
        </div>

        <div className="w-[1201px] relative box-border h-px border-t-[1px] border-solid border-whitesmoke-500"/>
        <div className="w-[1200px] flex flex-row items-start justify-start text-gray-500">
          <img
              className="flex-1 relative max-w-full overflow-hidden h-[207px]"
              alt=""
              src="/divcolumn.svg"
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
              Join over 2k+ using Bellank
            </div>
            <div className="w-[179.6px] flex flex-col items-start justify-start gap-[12px] text-xs text-gray-100">
              <div
                  className="w-[179.6px] rounded-md bg-white box-border flex flex-row items-start justify-start pt-[11px] px-[15px] pb-2.5 z-[1] border-[1px] border-solid border-whitesmoke-600">
                <div
                    className="w-[149.6px] overflow-hidden shrink-0 flex flex-row items-start justify-start py-0 pr-[93.6px] pl-0 box-border">
                  <div className="relative">Your email</div>
                </div>
              </div>
              <div
                  className="w-[179.6px] rounded-md bg-mediumseagreen flex flex-row items-start justify-center pt-1.5 pb-[7.4px] pr-[68.7px] pl-[69.8px] box-border z-[0] text-center text-white">
                <div className="relative leading-[22.4px] font-medium">
                  Create account
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100%] mx-auto relative leading-[22px] text-gray-100 flex items-center">
          © 2024. Bellbank is a bank powered by BellBank MFB Limited and duly
          licensed by the Central Bank of Nigeria. Unauthorized reproduction or
          redistribution of copyrighted materials on this website and our
          digital media pages is strictly prohibited. BellBank Microfinance Bank
          Limited (RC: 1088210), Our registered address is at Old People Bank,
          Along Katsina Road, Tsanyawa L.G.A, Kano State, Nigeria. All deposits
          are insured by Nigeria Deposit Insurance Corporation(NDIC). Additional
          disclosures can be found in the resources section of our website.
        </div>
        <div className="relative w-full h-10  text-gray-100">
          <div className="relative top-[22px] left-[calc(50%_-_132px)] leading-[18px]">
            © 2024 BellBank MFB Limited. All rights reserved.
          </div>
          <div className="absolute top-[-0.5px] left-[calc(50%_-_600.5px)] box-border w-[1201px] h-px border-t-[1px] border-solid border-whitesmoke-500"/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
