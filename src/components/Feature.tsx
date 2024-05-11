import React, { FunctionComponent } from "react";
import FeatureCard from "./FeatureCard";
import CardPill from "./CardPill";
import { motion } from "framer-motion"
const Feature: FunctionComponent = () => {
  return (
      <div
          className="mt-[100px] text-left text-sm text-white font-aeonik">

        <div
            className="flex flex-col items-center justify-start gap-[20px] mt-[60px] text-mediumseagreen">
          <div className="flex flex-col sm:w-[80%] md:w-[90%] items-center justify-start gap-[10px]">
            <div className="relative uppercase font-medium">Built for growth</div>
            <b className="max-w-[629px] relative text-[30px] md:text-23xl w-[80%] leading-[34px] md:leading-[50px] inline-block text-gray-500 text-center">
              Banking designed for personal and business growth
            </b>
          </div>
          <div
              className="max-w-[533px] w-[95%] md:w-[90%] mx-auto relative text-lg leading-[24px] font-medium text-dimgray-100 text-center mb-[44px] inline-block">
            Providing financial solutions that empowering both business and
            individuals to thrive and achieve remarkable growth milestones.
          </div>
        </div>
          <div className={' my-2 md:my-0 flex md:flex-row flex-wrap md:flex-nowrap flex-col w-[80%] justify-between gap-5 mx-auto mt-[50px]'}>

              <FeatureCard title={'Personal Account'}
                           subtitle={'Lorem ipsum dolor sit amet consectetur. Tortor nisl ullamcorperleo eget.'}>
                  <div className=" relative h-[188px] text-mini text-dimgray-100">
                      <img className={' w-full mx-auto'} src={'/assets/gif/PersonalAccount.gif'} height={188} alt={''}/>

                  </div>
              </FeatureCard>


              <FeatureCard title={'Business account'}
                           subtitle={'Lorem ipsum dolor sit amet consectetur. Tortor nisl ullamcorperleo eget.'}>

                  <div className=" relative h-[188px] text-mini text-dimgray-100">
                      <img className={' w-full mx-auto'} src={'/assets/gif/Loans.gif'} height={188} alt={''}/>

                  </div>
              </FeatureCard>
              <FeatureCard title={'Loans'} subtitle={'Lorem ipsum dolor sit amet consectetur. Tortor nisl ullamcorperleo eget.'}>
                  <div className="mt-5 rounded-mini bg-white w-full h-[168px] mb-6 text-xl text-black">
                      <img className={' w-full mx-auto'} src={'/assets/gif/BusinessAccount.gif'} height={188} alt={''}/>

                  </div>
              </FeatureCard>

          </div>

          {/*<div className=" w-full flex">*/}
          {/*  <div*/}
          {/*      className=" rounded-3xl bg-gray-900 overflow-hidden">*/}
          {/*    <img*/}
          {/*        className=" overflow-hidden object-cover hidden"*/}
          {/*        alt=""*/}
          {/*        src="/image@2x.png"*/}
          {/*    />*/}
          {/*    <div className="  flex-col items-start justify-start gap-[12px]">*/}
          {/*      <div*/}
          {/*          className="w-[283px] relative rounded-81xl bg-darkslategray-200 h-[52px] overflow-hidden shrink-0 text-mini">*/}
          {/*        <div className=" flex flex-row items-center justify-start gap-[6px]">*/}
          {/*          <div*/}
          {/*              className="w-2 relative shadow-[0px_8px_24px_rgba(146,_143,_255,_0.4)] rounded-[50%] bg-mediumseagreen h-2"/>*/}
          {/*          <div className="relative font-medium">Bill payments</div>*/}
          {/*        </div>*/}
          {/*        <img*/}
          {/*          className=" object-contain"*/}
          {/*          alt=""*/}
          {/*          src="/group-195@2x.png"*/}
          {/*      />*/}
          {/*    </div>*/}
          {/*    <div className="w-[283px] relative rounded-81xl bg-mediumseagreen h-[51px] overflow-hidden shrink-0">*/}
          {/*      <div className="absolute top-[17px] left-[17px] flex flex-row items-center justify-start gap-[6px]">*/}
          {/*        <div*/}
          {/*            className="w-2 relative shadow-[0px_8px_24px_rgba(146,_143,_255,_0.4)] rounded-[50%] bg-white h-2"/>*/}
          {/*        <div className="relative font-medium">Personal Savings</div>*/}
          {/*      </div>*/}
          {/*      <img*/}
          {/*          className="absolute top-[calc(50%_-_14.6px)] left-[calc(50%_+_88.5px)] w-[30.7px] h-[30.7px] hidden"*/}
          {/*          alt=""*/}
          {/*          src="/ellipse-26.svg"*/}
          {/*      />*/}
          {/*      <div*/}
          {/*          className="absolute top-[calc(50%_-_19.1px)] left-[225.5px] rounded-[50%] box-border w-[39.7px] h-[39.7px] hidden border-[9px] border-solid border-whitesmoke-300"/>*/}
          {/*      <img*/}
          {/*          className="absolute top-[12.5px] left-[262.9px] w-[25.4px] h-[25.5px] object-contain"*/}
          {/*          alt=""*/}
          {/*          src="/group-195@2x.png"*/}
          {/*      />*/}
          {/*    </div>*/}
          {/*    <div className="w-[283px] relative rounded-81xl bg-white h-[51px] overflow-hidden shrink-0 text-gray-500">*/}
          {/*      <div className="absolute top-[17px] left-[17px] flex flex-row items-center justify-start gap-[6px]">*/}
          {/*        <div*/}
          {/*            className="w-2 relative shadow-[0px_8px_24px_rgba(146,_143,_255,_0.4)] rounded-[50%] bg-mediumseagreen h-2"/>*/}
          {/*        <div className="relative font-medium">Credit cards</div>*/}
          {/*      </div>*/}
          {/*      <img*/}
          {/*          className="absolute top-[40px] left-[260.2px] w-[29.6px] h-[29.5px] object-contain"*/}
          {/*          alt=""*/}
          {/*          src="/group-195@2x.png"*/}
          {/*      />*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*  <img*/}
          {/*      className="absolute top-[159px] left-[calc(50%_-_141px)] w-[282.7px] h-[178px] object-cover hidden"*/}
          {/*      alt=""*/}
          {/*      src="/frame1618872633-1-1@2x.png"*/}
          {/*  />*/}
          {/*  <img*/}
          {/*      className="absolute top-[162px] left-[calc(50%_-_133px)] w-[266px] h-[167px] object-cover hidden"*/}
          {/*      alt=""*/}
          {/*      src="/frame1618872633-2-1@2x.png"*/}
          {/*  />*/}
          {/*  <img*/}
          {/*      className="absolute top-[122px] left-[56px] w-[273px] h-[171.9px] object-cover hidden"*/}
          {/*      alt=""*/}
          {/*      src="/frame1618872633-3-1@2x.png"*/}
          {/*  />*/}
          {/*  <img*/}
          {/*      className="absolute top-[159px] left-[43px] w-[286px] h-[178px] object-cover hidden"*/}
          {/*      alt=""*/}
          {/*      src="/newfile-1@2x.png"*/}
          {/*  />*/}
          {/* */}
          {/*</div>*/}

          {/*<div*/}
          {/*    className="absolute h-full w-[calc(100%_-_816px)] top-[0px] right-[408px] bottom-[0px] left-[408px] rounded-3xl bg-gray-900 overflow-hidden text-mini text-dimgray-100">*/}
          {/*  <div className="absolute top-[150px] left-[30px] w-[324px] h-[188px] hidden">*/}
          {/*    <div className="absolute top-[0px] left-[0px] rounded-mini bg-white w-[324px] h-[115px]">*/}
          {/*      <div className="absolute top-[30px] left-[22px] w-[107px] h-[54px]">*/}
          {/*        <div className="absolute top-[0px] left-[22px] font-medium">*/}
          {/*          Total Expenses*/}
          {/*        </div>*/}
          {/*        <b className="absolute top-[30px] left-[0px] text-xl text-black">*/}
          {/*          ₦32,000.40*/}
          {/*        </b>*/}
          {/*      </div>*/}
          {/*      <div className="absolute top-[22px] left-[231px] w-[71px] h-[71px] text-center text-black">*/}
          {/*        <div*/}
          {/*            className="absolute top-[0px] left-[0px] rounded-[50%] box-border w-[71px] h-[71px] border-[8px] border-solid border-whitesmoke-400"/>*/}
          {/*        <div*/}
          {/*            className="absolute top-[0px] left-[0px] rounded-[50%] box-border w-[71px] h-[71px] border-[6px] border-solid border-mediumseagreen"/>*/}
          {/*        <div*/}
          {/*            className="absolute top-[calc(50%_-_10.5px)] left-[calc(50%_+_214.5px)] leading-[20px] font-medium">*/}
          {/*          85%*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*    <div className="absolute top-[127px] left-[0px] rounded-mini bg-white w-[324px] h-[61px] text-gray-500">*/}
          {/*      <div className="absolute top-[21px] left-[calc(50%_-_140px)] w-[280px] h-[18px]">*/}
          {/*        <div className="absolute top-[0px] left-[0px] flex flex-row items-start justify-start gap-[6px]">*/}
          {/*          <img*/}
          {/*              className="w-[18px] relative h-[18px] overflow-hidden shrink-0"*/}
          {/*              alt=""*/}
          {/*              src="/file01.svg"*/}
          {/*          />*/}
          {/*          <div className="relative font-medium">Invoices</div>*/}
          {/*        </div>*/}
          {/*        <div className="absolute top-[4px] left-[156px] rounded-81xl bg-whitesmoke-400 w-[124px] h-2.5"/>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*  <div*/}
          {/*      className="absolute top-[calc(50%_-_153px)] left-[calc(50%_-_161.5px)] flex flex-col items-center justify-start gap-[32px] text-3xl text-gray-500">*/}
          {/*    <div className="flex flex-col items-start justify-start gap-[12px]">*/}
          {/*      <b className="relative">Business account</b>*/}
          {/*      <div*/}
          {/*          className="w-[295px] relative text-base leading-[24px] font-medium text-dimgray-100 inline-block h-12 shrink-0">*/}
          {/*        Lorem ipsum dolor sit amet consectetur. Tortor nisl ullamcorper*/}
          {/*        leo eget.*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*    <img*/}
          {/*        className="w-[285.9px] relative h-[178px] object-cover hidden"*/}
          {/*        alt=""*/}
          {/*        src="/newfile-1-1@2x.png"*/}
          {/*    />*/}
          {/*    <div className="w-[324px] relative h-[188px] text-mini text-dimgray-100">*/}
          {/*      <div className="absolute top-[0px] left-[0px] rounded-mini bg-white w-[324px] h-[115px]">*/}
          {/*        <div className="absolute top-[30px] left-[22px] w-[107px] h-[54px]">*/}
          {/*          <div className="absolute top-[0px] left-[22px] font-medium">*/}
          {/*            Total Expenses*/}
          {/*          </div>*/}
          {/*          <b className="absolute top-[30px] left-[0px] text-xl text-black">*/}
          {/*            ₦32,000.40*/}
          {/*          </b>*/}
          {/*        </div>*/}
          {/*        <div className="absolute top-[22px] left-[231px] w-[71px] h-[71px] text-center text-black">*/}
          {/*          <div*/}
          {/*              className="absolute top-[0px] left-[0px] rounded-[50%] box-border w-[71px] h-[71px] border-[8px] border-solid border-whitesmoke-400"/>*/}
          {/*          <div*/}
          {/*              className="absolute top-[0px] left-[0px] rounded-[50%] box-border w-[71px] h-[71px] border-[6px] border-solid border-mediumseagreen"/>*/}
          {/*          <div*/}
          {/*              className="absolute top-[calc(50%_-_10.5px)] left-[calc(50%_+_214.5px)] leading-[20px] font-medium">*/}
          {/*            85%*/}
          {/*          </div>*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*      <div className="absolute top-[127px] left-[0px] rounded-mini bg-white w-[324px] h-[61px] text-gray-500">*/}
          {/*        <div className="absolute top-[21px] left-[calc(50%_-_140px)] w-[280px] h-[18px]">*/}
          {/*          <div className="absolute top-[0px] left-[0px] flex flex-row items-start justify-start gap-[6px]">*/}
          {/*            <img*/}
          {/*                className="w-[18px] relative h-[18px] overflow-hidden shrink-0"*/}
          {/*                alt=""*/}
          {/*                src="/file01.svg"*/}
          {/*            />*/}
          {/*            <div className="relative font-medium">Invoices</div>*/}
          {/*          </div>*/}
          {/*          <div className="absolute top-[4px] left-[156px] rounded-81xl bg-whitesmoke-400 w-[124px] h-2.5"/>*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
          {/*<div*/}
          {/*    className="absolute h-full w-[calc(100%_-_816px)] top-[0px] right-[0px] bottom-[0px] left-[816px] rounded-3xl bg-gray-900 overflow-hidden text-3xl text-gray-500">*/}
          {/*  <img*/}
          {/*      className="absolute top-[150px] left-[36px] w-[285.9px] h-[178px] object-cover hidden"*/}
          {/*      alt=""*/}
          {/*      src="/newfile-2-1@2x.png"*/}
          {/*  />*/}
          {/*  <div className="absolute top-[32px] left-[36px] w-[311px] h-[306px]">*/}
          {/*    <div className="absolute top-[0px] left-[36px] flex flex-col items-start justify-start gap-[12px]">*/}
          {/*      <b className="relative">Loans</b>*/}
          {/*      <div*/}
          {/*          className="w-[310px] relative text-base leading-[24px] font-medium text-dimgray-100 inline-block h-12 shrink-0">*/}
          {/*        Lorem ipsum dolor sit amet consectetur. Tortor nisl ullamcorper*/}
          {/*        leo eget.*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*    <div*/}
          {/*        className="absolute top-[118px] left-[1px] rounded-mini bg-white w-[310px] h-[188px] text-xl text-black">*/}
          {/*      <div className="absolute top-[39px] left-[60px] w-[190px] h-[110px]">*/}
          {/*        <b className="absolute top-[38px] left-[calc(50%_-_68px)]">*/}
          {/*          ₦2,000,000.00*/}
          {/*        </b>*/}
          {/*        <div className="absolute top-[0px] left-[29px] text-mini font-medium text-dimgray-100">*/}
          {/*          Select loan amount*/}
          {/*        </div>*/}
          {/*        <div className="absolute top-[94px] left-[0px] w-[190px] h-4">*/}
          {/*          <div*/}
          {/*              className="absolute top-[3px] left-[calc(50%_-_95px)] rounded-81xl bg-whitesmoke-400 w-[190px] h-2.5"/>*/}
          {/*          <div*/}
          {/*              className="absolute top-[3px] left-[calc(50%_-_95px)] rounded-81xl bg-mediumseagreen w-[156px] h-2.5"/>*/}
          {/*          <div className="absolute top-[0px] left-[140px] rounded-[50%] bg-mediumseagreen w-4 h-4"/>*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*  <div className="absolute bottom-[32px] left-[32px] w-80 h-[188px] overflow-hidden hidden">*/}
          {/*    <div className="absolute w-full top-[0px] right-[0px] left-[0px] h-[188px] overflow-hidden">*/}
          {/*      <div className="absolute top-[0px] left-[0px] w-80 h-[188px] overflow-hidden">*/}
          {/*        <img*/}
          {/*            className="absolute top-[calc(50%_-_94px)] left-[calc(50%_-_160px)] w-80 h-[188px] overflow-hidden object-cover"*/}
          {/*            alt=""*/}
          {/*            src="/image@2x.png"*/}
          {/*        />*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
        {/*</div>*/}
      </div>
  );
};

export default Feature;
