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
  const frameStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const titleStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const AnswerStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className="self-stretch overflow-hidden w-auto md:min-w-[400px] rounded-3xl bg-whitesmoke-100 items-start justify-between p-8 relative gap-[10px] text-left text-sm md:text-xl text-gray-500 font-aeonik">
      <div
          className=" items-start lg:justify-start gap-[16px] z-[0]"
          style={frameStyle}
      >
        <div className=" flex w-full justify-between">
          <b onClick={() => {
            handleFold(index)
          }}
              className={`max-w-[421px] font-outfit hover:text-mediumseagreen ${show? 'text-mediumseagreen': ''} cursor-pointer mb-3 relative leading-[29px] flex items-center`}
              style={titleStyle}
          >
            {title}
          </b>
          <img
              onClick={() => {
                handleFold(index)
              }}
              className="w-10 h-10 cursor-pointer overflow-hidden shrink-0 z-[1]"
              alt=""

              src={show ? '/assets/images/svg/pluscircle.svg' : '/assets/images/svg/pluscircle1.svg'}
          />
        </div>

        <div
            className="md:w-[503px] w-full relative text-sm md:text-lg leading-[25px] font-medium text-dimgray-100 flex items-center"
            style={AnswerStyle}
        >
            <span className="">
             {show &&
             <p className="m-0">
                {answer}
              </p>
              }
            </span>
        </div>
      </div>

    </div>
  );
};

export default FaqItem;
