import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FaqItemType = {
  doINeedToPayForAnythingEl?: string;
  plusCircle?: string;
  showThereAreAContainer?: boolean;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propWidth1?: CSSProperties["width"];
  propColor?: CSSProperties["color"];
};

const FaqItem: FunctionComponent<FaqItemType> = ({
  doINeedToPayForAnythingEl,
  plusCircle,
  showThereAreAContainer,
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
    <div className="self-stretch min-w-[400px] rounded-3xl bg-whitesmoke-100 flex flex-row items-start justify-between p-8 relative gap-[10px] text-left text-xl text-gray-500 font-aeonik">
      <div
        className="flex flex-col items-start justify-start gap-[16px] z-[0]"
        style={frameDiv1Style}
      >
        <b
          className="w-[421px] relative leading-[29px] flex items-center"
          style={doINeedStyle}
        >
          {doINeedToPayForAnythingEl}
        </b>
        {showThereAreAContainer && (
          <div
            className="w-[503px] relative text-lg leading-[25px] font-medium text-dimgray-100 flex items-center"
            style={thereAreAContainerStyle}
          >
            <span className="w-full">
              <p className="m-0">
                There are a few states that require a registration fee;
              </p>
              <p className="m-0">
                however, most states are free. Besides that, the only
              </p>
              <p className="m-0">
                recurring charge are your monthly/quarterly/annual filings.
              </p>
            </span>
          </div>
        )}
      </div>
      <img
        className="w-10 h-10 overflow-hidden shrink-0 z-[1]"
        alt=""
        src={plusCircle}
      />
    </div>
  );
};

export default FaqItem;
