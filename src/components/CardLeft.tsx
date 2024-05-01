import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type CardLeftType = {
  debitCards?: string;
  instantDebitCardsThatAlwa?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propHeight1?: CSSProperties["height"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propBackground?: CSSProperties["background"];
};

const CardLeft: FunctionComponent<CardLeftType> = ({
  debitCards,
  instantDebitCardsThatAlwa,
  propHeight,
  propHeight1,
  propBackgroundColor,
  propBackground,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const automaticScreenshotsStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight1,
    };
  }, [propHeight1]);

  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      background: propBackground,
    };
  }, [propBackgroundColor, propBackground]);

  return (
    <div
      className="absolute top-[0px] left-[0px] flex flex-col items-start justify-start gap-[24px] text-left text-sm text-mediumseagreen font-aeonik"
      style={frameDivStyle}
    >
      <div
        className="w-[466px] relative rounded-11xl bg-white h-[317px] mix-blend-normal"
        style={automaticScreenshotsStyle}
      >
        <div className="absolute top-[40px] left-[40px] flex flex-col items-start justify-start gap-[25px]">
          <div className="flex flex-col items-start justify-start gap-[10px]">
            <div className="relative leading-[20px] uppercase font-medium">
              {debitCards}
            </div>
            <div className="flex flex-col items-start justify-start gap-[20px] text-16xl text-gray-500">
              <div className="w-[352px] h-[77px] flex flex-col items-start justify-start pt-[0.3px] px-0 pb-0 box-border mix-blend-normal">
                <b className="w-[352px] relative flex items-center">
                  {instantDebitCardsThatAlwa}
                </b>
              </div>
              <div className="w-[370px] relative text-lg leading-[25px] font-medium text-dimgray-100 flex items-center">
                If transfers aren’t your jam, we get it. Request a debit card
                and have it delivered to you within 48 hours. Activate it in
                minutes, and start using it right away.
              </div>
            </div>
          </div>
          <div className="w-[150px] rounded-lg bg-mediumseagreen h-[45px] flex flex-row items-center justify-center py-[11px] px-5 box-border text-center text-base text-floralwhite">
            <div className="relative font-medium">Get started</div>
          </div>
        </div>
      </div>
      <div
        className="w-[466px] relative rounded-13xl bg-mediumseagreen box-border h-[92px] hidden mix-blend-normal text-base text-gray-200 font-inter border-[2px] border-solid border-whitesmoke-200"
        style={buttonStyle}
      >
        <div className="absolute top-[24px] left-[calc(50%_-_105px)] shadow-[0px_4px_6px_-2px_rgba(16,_24,_40,_0.03),_0px_12px_16px_-4px_rgba(16,_24,_40,_0.08)] rounded-lg bg-white w-52 h-11 overflow-hidden mix-blend-normal">
          <img
            className="absolute top-[14px] left-[164.5px] w-4 h-4 overflow-hidden mix-blend-normal"
            alt=""
            src="/icon.svg"
          />
          <div className="absolute top-[12px] left-[60px] tracking-[0.4px] leading-[20px] font-semibold">
            Get started
          </div>
          <img
            className="absolute top-[12px] left-[28px] w-5 h-5 overflow-hidden object-cover mix-blend-normal"
            alt=""
            src="/image@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default CardLeft;
