import CardLeft from "./CardLeft";
import {Link} from "react-router-dom";
import ExperienceItem from "./ExperienceItem";
import React from "react";

export default function Experience() {
    return (
        <div className=" flex flex-col items-center justify-start py-20 px-[36px] lg:px-[136px] gap-[100px]">
            <div className="flex flex-col items-center justify-start gap-[20px]">
                <div className="flex flex-col items-center justify-start gap-[10px]">
                    <div className="relative uppercase font-medium">FEATURES</div>
                    <b className="max-w-[629px] relative text-[20px] md:text-23xl inline-block text-gray-500 text-center h-[50px] shrink-0">
                        Experience new banking
                    </b>
                </div>
                <div
                    className="md:max-w-[533px] max-w-[233px] relative text-sm md:text-lg leading-[24px] font-medium text-dimgray-100 text-center inline-block">
                    Providing financial solutions that empowering both business
                    and individuals to thrive and achieve remarkable growth
                    milestones.
                </div>
            </div>
            <div className="w-full mx-auto flex flex-col items-center justify-start gap-[80px]">

                <ExperienceItem title={'Debit cards'} subtitle={'Instant Debit cards that always work'}>
                    <div className="rounded-11xl bg-seagreen box-border w-[100%] py-7 md:py-0 lg:w-[55%] md:h-[437px] overflow-hidden mix-blend-normal border-[8px] border-solid border-whitesmoke-100">
                        <div className="flex justify-center items-center w-full gap-4 h-full">
                            <img
                                className="w-[90%] mx-auto object-contain"
                                alt=""
                                src="/assets/images/cardGroup.png"
                            />
                            {/*<div className="relative max-w-[198px] max-h-[274.2px] ">*/}


                            {/*    <img className="w-[193.8px] h-[170.3px] md:h-[270.3px] object-contain"*/}
                            {/*        alt=""*/}
                            {/*        src="/assets/images/card-5-1@2x.png"*/}
                            {/*    />*/}
                            {/*    <div className="relative bottom-0 rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(0,_0,_0,_0.6),_rgba(0,_0,_0,_0))] w-[169.4px] h-[5.7px]"/>*/}

                            {/*</div>*/}
                            {/*<div className=" relative max-w-[201.1px]  max-h-[274px]">*/}
                            {/*    <img*/}
                            {/*        className=" md:w-[195.8px] h-[167.7px] md: object-contain"*/}
                            {/*        alt=""*/}
                            {/*        src="/assets/images/card-8-2@2x.png"*/}
                            {/*    />*/}
                            {/*    <div*/}
                            {/*        className="relative bottom-0 rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(0,_0,_0,_0.6),_rgba(0,_0,_0,_0))] w-[178.1px] h-1.5"/>*/}

                            {/*</div>*/}
                        </div>
                    </div>
                </ExperienceItem>
                <ExperienceItem title={'PERSONAL ACCOUNT'} subtitle={'One app for all your banking needs'}>
                    <div
                        className="rounded-11xl bg-darkslategray-500 box-border mx-auto w-[90%] lg:w-[55%] h-[230px] md:h-[437px] shrink-0 overflow-hidden mix-blend-normal border-[8px] border-solid border-whitesmoke-100">
                        <div className="flex relative justify-center items-center w-full  gap-4 h-full">


                            <img
                                className="relative top-[89px] md:top-[120px]  md:w-[303px] h-[259px] md:h-[559px] object-cover"
                                alt=""
                                src="/assets/images/image-773@2x.png"
                            />

                        </div>
                    </div>
               </ExperienceItem>

                <ExperienceItem subtitle={'A fully integrated suite of financial and payments products'}>

                    <div
                        className="rounded-11xl bg-whitesmoke-100 box-border w-[100%] lg:w-[55%] flex-1 h-[437px] overflow-hidden mix-blend-normal border-[8px] border-solid border-whitesmoke-100">
                        <div className="flex justify-center items-center w-full  gap-4 h-full">

                            <div className=" relative w-full flex justify-center  h-[274px]">

                                <img
                                    className=" mx-auto object-contain"
                                    alt=""
                                    src="/assets/images/svg/ClipGroup.svg"
                                />
                            </div>
                        </div>
                    </div>
                </ExperienceItem>

            </div>
        </div>
    )
}