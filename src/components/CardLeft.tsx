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
      <div className="w-[466px] relative rounded-11xl bg-white h-[317px] mix-blend-normal"
        style={automaticScreenshotsStyle}
      >
        <div className=" flex flex-col items-start justify-start gap-[25px]">
          <div className="flex flex-col items-start justify-start gap-[10px]">
            {debitCards && (
                <div className="relative leading-[20px] uppercase font-medium">
                  {debitCards}
                </div>
            )}
            <div className="flex flex-col items-start justify-start gap-[20px] text-16xl text-gray-500">
            <div className="w-[352px] flex flex-col items-start justify-start pt-[0.3px] px-0 pb-0 box-border mix-blend-normal">
                <b className=" relative flex items-center">
                  {instantDebitCardsThatAlwa}
                </b>
              </div>
              <div className="w-[370px] relative text-lg leading-[25px] font-medium text-dimgray-100 flex items-center">
                  {desc}
              </div>
            </div>
          </div>
          <Link to={'/'} className=" cursor-pointer  hover:text-white no-underline w-[150px] rounded-lg bg-mediumseagreen h-[45px] flex flex-row items-center justify-center py-[11px] px-5 box-border text-center text-base text-floralwhite">
            <div className="relative font-medium">Get started</div>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default CardLeft;
