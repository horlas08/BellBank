import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type DivwNode4231f234A31cType = {
  fa9238d96a7bdeceaf7eeJess?: string;

  /** Style props */
  propBorderRadius?: CSSProperties["borderRadius"];
};

const DivwNode4231f234A31c: FunctionComponent<DivwNode4231f234A31cType> = ({
  fa9238d96a7bdeceaf7eeJess,
  propBorderRadius,
}) => {
  const fa9238d96a7bdeceaf7eeJesse20IconStyle: CSSProperties = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
    };
  }, [propBorderRadius]);

  return (
    <div className="absolute top-[0px] left-[407px] rounded-3xl bg-white box-border w-[385px] flex flex-col items-start justify-start p-8 text-left text-lg text-dimgray-100 font-aeonik border-[1px] border-solid border-whitesmoke-500">
      <div className="flex flex-col items-start justify-start gap-[24px]">
        <div className="flex flex-col items-start justify-start gap-[20px]">
          <img
            className="w-[76px] relative h-[76px] object-cover"
            alt=""
            src="/vector1@2x.png"
          />
          <div className="w-[325px] relative leading-[26px] font-medium flex items-center">
            <span className="w-full">
              <p className="m-0">I I was spending way too many hours</p>
              <p className="m-0">every month on sales tax. And if you</p>
              <p className="m-0">wanted someone on customer</p>
              <p className="m-0">support from my tax service, there</p>
              <p className="m-0">
                was no one. Numeral has made it to identify and know the tax
              </p>
              <p className="m-0 whitespace-pre-wrap">
                laws And then on your behalf, registering, managing everything,
                is kind of taking the worry off my plate.
              </p>
            </span>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start text-base text-gray-400">
          <div className="flex flex-row items-center justify-start gap-[12px]">
            <div className="w-16 rounded-[4.07px] h-16 overflow-hidden shrink-0 flex flex-col items-start justify-center">
              <img
                className="w-full flex-1 relative max-w-[64px] overflow-hidden max-h-full object-cover"
                alt=""
                src={fa9238d96a7bdeceaf7eeJess}
                style={fa9238d96a7bdeceaf7eeJesse20IconStyle}
              />
            </div>
            <div className="h-[51px] flex flex-col items-start justify-start">
              <b className="relative leading-[22px]">Kevin Chanthasiriphan</b>
              <div className="self-stretch flex flex-col items-start justify-start pt-[5px] px-0 pb-0 opacity-[0.7] text-sm">
                <div className="relative leading-[17px]">
                  Founder, Fresh Sends
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DivwNode4231f234A31c;
