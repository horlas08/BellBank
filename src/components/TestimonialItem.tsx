import React, {FunctionComponent} from "react";

type TestimonialItemType ={
    image: string,
    username: string,
    title: string,
    children: React.ReactNode
}

const TestimonialItem: FunctionComponent<TestimonialItemType> = ({image,username,title, children}) => {
    return (
        <div className="flex flex-col items-start justify-start gap-[24px]">
            <div className="mx-au">

                <div className="flex flex-col items-start justify-center gap-[20px]">
                    <div className="w-[136px] h-[76px] overflow-hidden flex flex-col items-center justify-center">
                        <img className="w-[136px] relative h-[76px] overflow-hidden shrink-0 object-cover" alt=""
                             src="/assets/images/64da4217614b0b7b23201f7e-freshsendssvg@2x.png"/>
                    </div>
                    <div className="md:max-w-[325px] md:my-auto my-5 relative leading-[26px] font-medium flex items-center">
                        {children}
                    </div>

                </div>

                <div className="below flex flex-row items-center justify-start text-base text-gray-400">
                    <div className="flex flex-row items-center justify-start gap-[12px]">

                        <div
                            className="w-16 rounded-[4.07px] h-16 overflow-hidden shrink-0 flex flex-col items-start justify-center">

                            <img
                                className="w-full flex-1 relative rounded-81xl max-w-[64px] overflow-hidden max-h-full object-cover"
                                alt="" src={image}/>

                        </div>
                        <div className="h-[51px] flex flex-col items-start justify-start">
                            <b className="relative leading-[22px]">
                                {username}
                            </b>
                            <div
                                className="self-stretch flex flex-col items-start justify-start pt-[5px] px-0 pb-0 opacity-[0.7] text-sm">
                                <div className="relative leading-[17px]">
                                    {title}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TestimonialItem;
