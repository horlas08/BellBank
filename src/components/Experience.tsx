import CardLeft from "./CardLeft";
import {Link} from "react-router-dom";
import ExperienceItem from "./ExperienceItem";
import React from "react";

export default function Experience() {
    return (
        <div className=" flex flex-col items-center justify-start py-20 px-[136px] gap-[100px]">
            <div className="flex flex-col items-center justify-start gap-[20px]">
                <div className="flex flex-col items-center justify-start gap-[10px]">
                    <div className="relative uppercase font-medium">FEATURES</div>
                    <b className="w-[629px] relative text-23xl inline-block text-gray-500 text-center h-[50px] shrink-0">
                        Experience new banking
                    </b>
                </div>
                <div
                    className="w-[533px] relative text-lg leading-[24px] font-medium text-dimgray-100 text-center inline-block">
                    Providing financial solutions that empowering both business
                    and individuals to thrive and achieve remarkable growth
                    milestones.
                </div>
            </div>
            <div className="w-full mx-auto flex flex-col items-center justify-start gap-[80px]">
                <ExperienceItem title={'Debit cards'} subtitle={'Instant Debit cards that always work'}>
                    <div className="rounded-11xl bg-seagreen box-border w-[100%] lg:w-[55%] h-[437px] overflow-hidden mix-blend-normal border-[8px] border-solid border-whitesmoke-100">
                        <div className="flex justify-center items-center w-full gap-4 h-full">
                            <div className="relative max-w-[198px] h-[274.2px] ">

                                <div className="absolute bottom-0 rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(0,_0,_0,_0.6),_rgba(0,_0,_0,_0))] w-[169.4px] h-[5.7px]"/>

                                <img
                                    className=" w-[193.8px] h-[270.3px] object-contain"
                                    alt=""
                                    src="/card-5-1@2x.png"
                                />
                            </div>
                            <div className=" relative w-[201.1px]  h-[274px]">
                                <div
                                    className="absolute bottom-0 rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(0,_0,_0,_0.6),_rgba(0,_0,_0,_0))] w-[178.1px] h-1.5"/>
                                <img
                                    className=" w-[195.8px] h-[267.7px] object-contain"
                                    alt=""
                                    src="/card-8-2@2x.png"
                                />
                            </div>
                        </div>
                    </div>
                </ExperienceItem>
               <ExperienceItem title={'PERSONAL ACCOUNT'} subtitle={'One app for all your banking needs'}>
                    <div
                        className="rounded-11xl bg-darkslategray-500 box-border w-[100%] lg:w-[55%] h-[437px] overflow-hidden mix-blend-normal border-[8px] border-solid border-whitesmoke-100">
                        <div className="flex relative justify-center items-center w-full  gap-4 h-full">


                            <img
                                className="absolute top-[78px] left-[calc(50%_-_151.5px)] w-[303px] h-[559px] object-cover"
                                alt=""
                                src="/image-773@2x.png"
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