import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FaqItemType = {
  title?: string;
  show: boolean;
  answer?: string;
  index: number;
  handleFold: (index: number)=>void,
  /** Style props */
  propWidth?: CSSProperties["width"];
  propWidth1?: CSSProperties["width"];
  propColor?: CSSProperties["color"];
};

const FaqItem: FunctionComponent<FaqItemType> = ({
  title,
  show,
  answer,
  index,
    handleFold,
  propWidth,
  propWidth1,
  propColor,
}) => {
  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const doINeedStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const thereAreAContainerStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className="self-stretch  min-w-[400px] rounded-3xl bg-whitesmoke-100 flex flex-row items-start justify-between p-8 relative gap-[10px] text-left text-xl text-gray-500 font-aeonik">
      <div
          className="flex flex-col items-start  lg:justify-start gap-[16px] z-[0]"
          style={frameDiv1Style}
      >
        <b
            className="w-[421px] relative leading-[29px] flex items-center"
            style={doINeedStyle}
        >
          {title}
        </b>
        <div
            className="w-[503px] relative text-lg leading-[25px] font-medium text-dimgray-100 flex items-center"
            style={thereAreAContainerStyle}
        >
            <span className="w-full">
             {show &&
             <p className="m-0">
                {answer}
              </p>
              }
            </span>
        </div>
      </div>
      <img
          onClick={() => {
            handleFold(index)
            console.log(show)
          }}
          className="w-10 h-10 cursor-pointer overflow-hidden shrink-0 z-[1]"
          alt=""

          src={show? '/assets/images/svg/pluscircle.svg': '/assets/images/svg/pluscircle1.svg'}
      />
    </div>
  );
};

export default FaqItem;
