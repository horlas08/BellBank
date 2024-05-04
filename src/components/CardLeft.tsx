import { FunctionComponent, useMemo, type CSSProperties } from "react";
import {Link} from "react-router-dom";

export type CardLeftType = {
  debitCards?: string;
  instantDebitCardsThatAlwa?: string;
  desc: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propHeight1?: CSSProperties["height"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propBackground?: CSSProperties["background"];
};

const CardLeft: FunctionComponent<CardLeftType> = ({
  debitCards,
  instantDebitCardsThatAlwa,
   desc,
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
      className=" flex flex-col items-start justify-start gap-[24px] text-left text-sm text-mediumseagreen font-aeonik"
      style={frameDivStyle}
    >
      <div className=" w-full self-center relative rounded-11xl bg-white  mix-blend-normal"
        style={automaticScreenshotsStyle}
      >
        <div className=" flex flex-col items-center  lg:items-start justify-start gap-[25px]">
          <div className="flex w-full lg:w-auto flex-col  items-center  lg:items-start justify-start gap-[10px]">
            {debitCards && (
                <div className="relative leading-[20px] uppercase font-medium">
                  {debitCards}
                </div>
            )}
            <div className="flex flex-col items-start justify-start gap-[20px] text-16xl text-gray-500">
            <div className="lg:w-[352px] w-full flex flex-col items-center lg:items-start lg:justify-start pt-[0.3px] px-0 pb-0 box-border mix-blend-normal">
                <b className=" text-3xl lg:text-16xl relative flex items-center">
                  {instantDebitCardsThatAlwa}
                </b>
              </div>
              <div className="lg:w-[370px] w-full sm:text-center md:text-left relative text-lg leading-[25px] font-medium text-dimgray-100 flex items-center">
                  {desc}
              </div>
            </div>
          </div>
          <Link to={'/'} className=" cursor-pointer my-5 lg:my-auto hover:text-white no-underline w-[150px] rounded-lg bg-mediumseagreen h-[45px] flex flex-row items-center justify-center py-[11px] px-5 box-border text-center text-base text-floralwhite">
            <div className="relative font-medium">Get started</div>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default CardLeft;
