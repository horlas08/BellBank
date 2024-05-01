import {FunctionComponent, useMemo, type CSSProperties} from "react";
import {Link} from "react-router-dom";
import AppBtn from "./AppBtn";

export type DivcPJLVType = {
    vector?: string;
    sVG: string;

    /** Style props */
    propBackgroundColor?: CSSProperties["backgroundColor"];
    propBorderBottom?: CSSProperties["borderBottom"];
    propColor?: CSSProperties["color"];

};

const Header: FunctionComponent<DivcPJLVType> = ({
                                                     vector,
                                                     sVG,
                                                     propBackgroundColor,
                                                     propBorderBottom,
                                                     propColor
                                                 }) => {
    const divcPJLVStyle: CSSProperties = useMemo(() => {
        return {
            backgroundColor: propBackgroundColor,
            borderBottom: propBorderBottom,
        };
    }, [propBackgroundColor, propBorderBottom]);

    const productsStyle: CSSProperties = useMemo(() => {
        return {
            color: propColor,
        };
    }, [propColor]);

    return (
        <div
            className=" bg-darkslategray-500 box-border h-[70px] text-left text-base text-gray-1100 font-aeonik border-b-[1px] border-solid border-gray-800"
            style={divcPJLVStyle}
        >
            <div className="flex w-full justify-around align-middle items-center h-full">
                <img
                    className=" top-[11px] left-[0px] w-[119px] h-[26px]"
                    alt=""
                    src={vector}
                />
                <div
                    className=" flex flex-row items-start justify-start gap-[24px]">
                    <div className="w-[92px] cursor-pointer relative h-[22px]">
                        <div
                            className="absolute top-[0px] left-[0px] leading-[22px] font-medium flex items-center w-[69px] h-[22px]"
                            style={productsStyle}
                        >
                            Products
                        </div>
                        <img
                            className="absolute top-[calc(50%_-_11px)] left-[calc(50%_+_24px)] w-[22px] h-[22px] overflow-hidden"
                            alt=""
                            src={sVG}
                        />
                    </div>
                    <div className="w-[95px] cursor-pointer relative h-[22px]">
                        <div
                            className="absolute top-[0px] left-[0px] leading-[22px] font-medium flex items-center w-[71px] h-[22px]"
                            style={productsStyle}
                        >
                            Solutions
                        </div>
                        <img
                            className="absolute top-[calc(50%_-_11px)] left-[calc(50%_+_26.5px)] w-[22px] h-[22px] overflow-hidden"
                            alt=""
                            src={sVG}
                        />
                    </div>
                    <div
                        className="relative cursor-pointer leading-[22px] font-medium"
                        style={productsStyle}
                        onClick={()=> {}}
                    >
                        Company
                    </div>
                    <div className="w-[104px] cursor-pointer relative h-[22px]">
                        <div
                            className="absolute top-[0px] left-[0px] leading-[22px] font-medium flex items-center w-20 h-[22px]"
                            style={productsStyle}
                        >
                            Resources
                        </div>
                        <img
                            className="absolute top-[calc(50%_-_11px)] left-[calc(50%_+_30px)] w-[22px] h-[22px] overflow-hidden"
                            alt=""
                            src={sVG}
                        />
                    </div>
                </div>

                <div
                    className=" flex flex-row items-center justify-start gap-[22px]">
                    <div className="w-[42px] relative h-12">
                        <Link to={'/'} style={productsStyle} className={'text-white hover:text-white'}>
                            <div
                                className="absolute top-[13px] left-[0px] font-medium flex items-center w-[42px] h-[22px]"
                                style={productsStyle}
                            >
                                Login
                            </div>
                        </Link>

                    </div>
                    <AppBtn text={'Create account'}/>
                </div>
            </div>
        </div>
    );
};

export default Header;
