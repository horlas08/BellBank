import { FunctionComponent } from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Feature from "../components/Feature";
import CardLeft from "../components/CardLeft";
import FaqItem from "../components/FaqItem";
import FrameComponent from "../components/FrameComponent";
import DivwNode4231f234A31c from "../components/DivwNode4231f234A31c";

const Homepage: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-white h-full text-left text-xs text-white font-aeonik">
      <div className="w-full">
        <Header
            vector="/vector.svg"
            sVG="/svg.svg"
        />

        <Banner />
        {/*<div className=" bg-gray-500 w-full h-[45px]">*/}
        {/*  <div className="  flex flex-row items-center justify-start gap-[10px]">*/}
        {/*    <div className="rounded-81xl bg-gray-800 flex flex-row items-center justify-center py-1 px-[15px]">*/}
        {/*      <div className="relative">New</div>*/}
        {/*    </div>*/}
        {/*    <div className=" relative h-4 text-smi">*/}
        {/*      <div className="">*/}
        {/*        Lorem ipsum dolor sit amet consectetur. Odio libero nulla*/}
        {/*        aliquet tortor. Turpis...*/}
        {/*      </div>*/}
        {/*      <img*/}
        {/*        className="absolute top-[0px] left-[469px] w-4 h-4 overflow-hidden"*/}
        {/*        alt=""*/}
        {/*        src="/link--svg.svg"*/}
        {/*      />*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}
        <div className="flex flex-row items-center justify-center my-4 gap-[50px] text-center text-lg text-dimgray-100">
          <div className="relative font-medium">License and supported by:</div>
          <div className="flex flex-row items-center justify-start gap-[50px]">
            <img
              className="w-[38px] relative h-[51px] object-cover"
              alt=""
              src="/image-769@2x.png"
            />
            <img
              className="w-[81px] relative h-[41px] object-cover"
              alt=""
              src="/image-767@2x.png"
            />
            <img
              className="w-[109px] relative h-[41px] object-cover"
              alt=""
              src="/image-768@2x.png"
            />
            <img
              className="w-[185px] relative h-[49px] object-cover"
              alt=""
              src="/image-770@2x.png"
            />
          </div>
        </div>
        
        {/*<div className="absolute top-[1224px] left-[0px] w-[1442px] h-[6595px] text-sm text-mediumseagreen">*/}
          <Feature />
        {/*  <div className="absolute top-[678px] left-[0px] w-[1442px] h-[5917px]">*/}
            <div className=" flex flex-col items-center justify-start py-20 px-[136px] gap-[100px]">
              <div className="flex flex-col items-center justify-start gap-[20px]">
                <div className="flex flex-col items-center justify-start gap-[10px]">
                  <div className="relative uppercase font-medium">FEATURES</div>
                  <b className="w-[629px] relative text-23xl inline-block text-gray-500 text-center h-[50px] shrink-0">
                    Experience new banking
                  </b>
                </div>
                <div className="w-[533px] relative text-lg leading-[24px] font-medium text-dimgray-100 text-center inline-block">
                  Providing financial solutions that empowering both business
                  and individuals to thrive and achieve remarkable growth
                  milestones.
                </div>
              </div>
              <div className="flex flex-col items-center justify-start gap-[80px]">
                <div className="w-[1167px] relative h-[437px]">
                  <CardLeft
                    debitCards="Debit cards"
                    instantDebitCardsThatAlwa="Instant Debit cards that always work"
                  />
                  <div className="absolute top-[0px] left-[490px] rounded-11xl bg-seagreen box-border w-[677px] h-[437px] overflow-hidden mix-blend-normal border-[8px] border-solid border-whitesmoke-100">
                    <div className="absolute top-[81px] left-[131px] w-[415.1px] h-[274.2px]">
                      <div className="absolute top-[0px] left-[0px] w-[198px] h-[274.2px]">
                        <div className="absolute top-[268.5px] left-[28.6px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(0,_0,_0,_0.6),_rgba(0,_0,_0,_0))] w-[169.4px] h-[5.7px]" />
                        <img
                          className="absolute top-[0px] left-[0px] w-[193.8px] h-[270.3px] object-contain hidden"
                          alt=""
                          src="/card-7-1@2x.png"
                        />
                        <img
                          className="absolute top-[0px] left-[0px] w-[193.8px] h-[270.3px] object-contain"
                          alt=""
                          src="/card-5-1@2x.png"
                        />
                      </div>
                      <div className="absolute top-[0px] left-[214px] w-[201.1px] h-[274px]">
                        <div className="absolute top-[268px] left-[0px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(0,_0,_0,_0.6),_rgba(0,_0,_0,_0))] w-[178.1px] h-1.5" />
                        <img
                          className="absolute top-[0px] left-[calc(50%_-_95.25px)] w-[195.8px] h-[267.7px] object-contain"
                          alt=""
                          src="/card-8-2@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[1167px] relative h-[437px]">
                  <CardLeft
                    debitCards="Personal account"
                    instantDebitCardsThatAlwa="One app for all your banking needs"
                    propHeight="337px"
                    propHeight1="337px"
                    propBackgroundColor="unset"
                    propBackground="linear-gradient(135deg, #ffdddd, #ffbfbf)"
                  />
                  <div className="absolute top-[0px] left-[490px] rounded-11xl bg-darkslategray-500 box-border w-[677px] h-[437px] overflow-hidden mix-blend-normal border-[8px] border-solid border-whitesmoke-100">
                    <img
                      className="absolute h-[104.58%] top-[20.59%] bottom-[-25.17%] left-[calc(50%_-_155.5px)] max-h-full w-[312px] overflow-hidden object-cover hidden"
                      alt=""
                      src="/65af3460de982dbc40497c73-frame20187869p500png@2x.png"
                    />
                    <img
                      className="absolute top-[81px] left-[calc(50%_-_153.5px)] w-[308px] h-[622px] object-cover hidden"
                      alt=""
                      src="/frame-427323508-1@2x.png"
                    />
                    <img
                      className="absolute top-[78px] left-[calc(50%_-_151.5px)] w-[303px] h-[559px] object-cover"
                      alt=""
                      src="/image-773@2x.png"
                    />
                  </div>
                </div>
                <div className="w-[1167px] relative h-[437px]">
                  <div className="absolute top-[0px] left-[0px] h-[346px] flex flex-col items-start justify-start gap-[24px]">
                    <div className="rounded-11xl bg-white flex flex-col items-start justify-start p-10 mix-blend-normal">
                      <div className="flex flex-col items-start justify-start gap-[25px]">
                        <div className="flex flex-col items-start justify-start gap-[10px]">
                          <div className="relative leading-[20px] uppercase font-medium">
                            Modular solutions
                          </div>
                          <div className="flex flex-col items-start justify-start gap-[20px] text-16xl text-gray-500">
                            <b className="w-[352px] relative flex items-center">
                              A fully integrated suite of financial and payments
                              products
                            </b>
                            <div className="w-[370px] relative text-lg leading-[25px] font-medium text-dimgray-100 flex items-center">
                              If transfers aren’t your jam, we get it. Request a
                              debit card and have it delivered to you within 48
                              hours. Activate it in minutes, and start using it
                              right away.
                            </div>
                          </div>
                        </div>
                        <div className="w-[150px] rounded-lg bg-mediumseagreen h-[45px] flex flex-row items-center justify-center py-[11px] px-5 box-border text-center text-base text-floralwhite">
                          <div className="relative font-medium">
                            Get started
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[466px] relative rounded-13xl [background:linear-gradient(135deg,_#ffdddd,_#ffbfbf)] box-border h-[92px] hidden mix-blend-normal text-base text-gray-200 font-inter border-[2px] border-solid border-whitesmoke-200">
                      <div className="absolute top-[24px] left-[calc(50%_-_105px)] shadow-[0px_4px_6px_-2px_rgba(16,_24,_40,_0.03),_0px_12px_16px_-4px_rgba(16,_24,_40,_0.08)] rounded-lg bg-white w-52 h-11 overflow-hidden mix-blend-normal">
                        <img
                          className="absolute top-[14px] left-[164.5px] w-4 h-4 overflow-hidden mix-blend-normal"
                          alt=""
                          src="/icon.svg"
                        />
                        <div className="absolute top-[12px] left-[60px] tracking-[0.4px] leading-[20px] font-semibold">
                          Get started
                        </div>
                        <img
                          className="absolute top-[12px] left-[28px] w-5 h-5 overflow-hidden object-cover mix-blend-normal"
                          alt=""
                          src="/image@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                  <img
                    className="absolute top-[0px] left-[490px] rounded-11xl w-[677px] h-[437px] overflow-hidden object-cover mix-blend-normal"
                    alt=""
                    src="/image@2x.png"
                  />
                  <div className="absolute top-[calc(50%_-_218.5px)] right-[0px] shadow-[0px_0px_0px_0.5px_#e4e5e9,_0px_0px_0px_1px_rgba(228,_229,_233,_0.6),_0px_0px_0px_3.5px_#f9f9fb,_0px_0px_0px_4px_#f3f4f7] rounded-xl bg-white w-[677px] h-[437px] overflow-hidden hidden" />
                </div>
              </div>
            </div>

          {/*    <div className="absolute top-[1916px] left-[0px] w-[1442px] h-[4001px] text-gray-500">*/}
        {/*      <div className="absolute top-[0px] left-[calc(50%_-_600px)] w-[1200px] flex flex-col items-start justify-start gap-[65px]">*/}
        {/*        <div className="self-stretch flex flex-col items-center justify-center gap-[28px]">*/}
        {/*          <div className="w-[134px] relative rounded-9980xl bg-gray-1000 h-7 hidden">*/}
        {/*            <div className="absolute top-[4px] left-[12px] leading-[20px] uppercase font-medium">*/}
        {/*              Other Benefits*/}
        {/*            </div>*/}
        {/*          </div>*/}
        {/*          <div className="self-stretch flex flex-row items-center justify-between text-23xl">*/}
        {/*            <b className="w-[622px] relative inline-block h-[100px] shrink-0">*/}
        {/*              Protecting and powering growth for businesses*/}
        {/*            </b>*/}
        {/*            <div className="w-[420px] relative text-lg leading-[24px] font-medium text-dimgray-100 flex items-center shrink-0">*/}
        {/*              Providing financial solutions that empowering both*/}
        {/*              business and individuals to thrive and achieve remarkable*/}
        {/*              growth milestones.*/}
        {/*            </div>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*        <div className="w-[1184px] flex flex-row flex-wrap items-end justify-between text-3xl">*/}
        {/*          <div className="w-[1184px] relative h-7 text-xs text-gray-300">*/}
        {/*            <div className="absolute w-full top-[14px] right-[0px] left-[0px] bg-whitesmoke-500 h-px" />*/}
        {/*            <div className="absolute top-[0px] left-[0px] shadow-[0px_0px_0px_4px_rgba(0,_188,_116,_0.2)] rounded-9980xl bg-mediumseagreen box-border w-7 h-7 overflow-hidden text-white border-[1px] border-solid border-white">*/}
        {/*              <div className="absolute top-[6px] left-[11.5px] leading-[16px] font-medium flex items-center w-[5.1px] h-4">*/}
        {/*                1*/}
        {/*              </div>*/}
        {/*            </div>*/}
        {/*            <div className="absolute top-[0px] left-[434px] rounded-9980xl bg-white box-border w-7 h-7 border-[1px] border-solid border-whitesmoke-500">*/}
        {/*              <div className="absolute top-[6px] left-[10.5px] leading-[16px] font-medium flex items-center w-[7.2px] h-4">*/}
        {/*                2*/}
        {/*              </div>*/}
        {/*            </div>*/}
        {/*            <div className="absolute top-[0px] left-[869px] rounded-9980xl bg-white box-border w-7 h-7 border-[1px] border-solid border-whitesmoke-500">*/}
        {/*              <div className="absolute top-[6px] left-[10.4px] leading-[16px] font-medium flex items-center w-[7.4px] h-4">*/}
        {/*                3*/}
        {/*              </div>*/}
        {/*            </div>*/}
        {/*          </div>*/}
        {/*          <div className="flex flex-col items-start justify-start gap-[15px] text-mediumseagreen">*/}
        {/*            <b className="relative tracking-[-0.33px] leading-[24.2px]">*/}
        {/*              Bank-level security*/}
        {/*            </b>*/}
        {/*            <div className="w-[315px] relative text-lg leading-[24px] font-medium text-dimgray-100 flex items-center">*/}
        {/*              Configure price templates and standard plans, including*/}
        {/*              usage-based charges.*/}
        {/*            </div>*/}
        {/*          </div>*/}
        {/*          <div className="flex flex-col items-start justify-start gap-[15px]">*/}
        {/*            <b className="relative leading-[24px]">*/}
        {/*              Regulatory Compliance*/}
        {/*            </b>*/}
        {/*            <div className="w-[315px] relative text-lg leading-[24px] font-medium text-dimgray-100 flex items-center">*/}
        {/*              Configure price templates and standard plans, including*/}
        {/*              usage-based charges.*/}
        {/*            </div>*/}
        {/*          </div>*/}
        {/*          <div className="flex flex-col items-start justify-start gap-[15px]">*/}
        {/*            <b className="relative tracking-[-0.33px] leading-[24.2px]">*/}
        {/*              White-glove support*/}
        {/*            </b>*/}
        {/*            <div className="w-[315px] relative text-lg leading-[24px] font-medium text-dimgray-100 flex items-center">*/}
        {/*              Configure price templates and standard plans, including*/}
        {/*              usage-based charges.*/}
        {/*            </div>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*      <div className="absolute top-[429px] left-[0px] w-[1442px] h-[3572px] text-right text-smi text-slategray">*/}
        {/*        <div className="absolute top-[0px] left-[calc(50%_-_721px)] bg-darkslategray-500 w-[1442px] h-[784px]">*/}
        {/*          <div className="absolute top-[calc(50%_-_242px)] left-[calc(50%_-_600px)] w-[1200px] h-[484px]">*/}
        {/*            <div className="absolute h-[calc(100%_-_29px)] w-[calc(100%_-_660px)] top-[14px] right-[0px] bottom-[15px] left-[660px] rounded-xl box-border overflow-hidden border-[1px] border-solid border-darkslategray-100">*/}
        {/*              <div className="absolute w-[calc(100%_-_2px)] top-[1px] right-[1px] left-[1px] bg-darkslategray-400 h-[262px]">*/}
        {/*                <div className="absolute w-full top-[0px] right-[0px] left-[0px] h-60 overflow-hidden">*/}
        {/*                  <div className="absolute top-[20px] right-[501.8px] leading-[20px] flex items-center w-[16.8px] h-[200px]">*/}
        {/*                    <span className="[line-break:anywhere] w-full">*/}
        {/*                      <p className="m-0">1</p>*/}
        {/*                      <p className="m-0">2</p>*/}
        {/*                      <p className="m-0">3</p>*/}
        {/*                      <p className="m-0">4</p>*/}
        {/*                      <p className="m-0">5</p>*/}
        {/*                      <p className="m-0">6</p>*/}
        {/*                      <p className="m-0">7</p>*/}
        {/*                      <p className="m-0">8</p>*/}
        {/*                      <p className="m-0">9</p>*/}
        {/*                      <p className="m-0">10</p>*/}
        {/*                    </span>*/}
        {/*                  </div>*/}
        {/*                  <div className="absolute top-[20px] left-[52px] leading-[20px] text-left flex items-center w-[389px] h-[200px] text-white">*/}
        {/*                    <span className="w-full">*/}
        {/*                      <p className="m-0">*/}
        {/*                        <span className="text-deepskyblue">await</span>*/}
        {/*                        <span className="whitespace-pre-wrap">{` increase.achTransfers.create({`}</span>*/}
        {/*                      </p>*/}
        {/*                      <p className="m-0">*/}
        {/*                        <span className="whitespace-pre-wrap">{`  account_id: `}</span>*/}
        {/*                        <span className="text-aquamarine">*/}
        {/*                          'account_in71c4amph0vgo2qllky'*/}
        {/*                        </span>*/}
        {/*                        <span className="text-white whitespace-pre-wrap">*/}
        {/*                          ,*/}
        {/*                        </span>*/}
        {/*                      </p>*/}
        {/*                      <p className="m-0">*/}
        {/*                        <span className="text-white whitespace-pre-wrap">{`  amount: `}</span>*/}
        {/*                        <span className="text-yellow">1000</span>*/}
        {/*                        <span className="whitespace-pre-wrap">,</span>*/}
        {/*                      </p>*/}
        {/*                      <p className="m-0">*/}
        {/*                        <span className="whitespace-pre-wrap">{`  currency: `}</span>*/}
        {/*                        <span className="text-aquamarine">'USD'</span>*/}
        {/*                        <span className="whitespace-pre-wrap">,</span>*/}
        {/*                      </p>*/}
        {/*                      <p className="m-0">*/}
        {/*                        <span className="whitespace-pre-wrap">{`  individual_name: `}</span>*/}
        {/*                        <span className="text-aquamarine">*/}
        {/*                          'Ian Crease'*/}
        {/*                        </span>*/}
        {/*                        <span className="whitespace-pre-wrap">,</span>*/}
        {/*                      </p>*/}
        {/*                      <p className="m-0">*/}
        {/*                        <span className="whitespace-pre-wrap">{`  account_number: `}</span>*/}
        {/*                        <span className="text-aquamarine">*/}
        {/*                          '987654321'*/}
        {/*                        </span>*/}
        {/*                        <span className="text-white whitespace-pre-wrap">*/}
        {/*                          ,*/}
        {/*                        </span>*/}
        {/*                      </p>*/}
        {/*                      <p className="m-0">*/}
        {/*                        <span className="text-white whitespace-pre-wrap">{`  routing_number: `}</span>*/}
        {/*                        <span className="text-aquamarine">*/}
        {/*                          '101050001'*/}
        {/*                        </span>*/}
        {/*                        <span className="whitespace-pre-wrap">,</span>*/}
        {/*                      </p>*/}
        {/*                      <p className="m-0">*/}
        {/*                        <span className="whitespace-pre-wrap">{`  company_entry_description: `}</span>*/}
        {/*                        <span className="text-aquamarine">*/}
        {/*                          'July Consulting'*/}
        {/*                        </span>*/}
        {/*                        <span className="whitespace-pre-wrap">,</span>*/}
        {/*                      </p>*/}
        {/*                      <p className="m-0">*/}
        {/*                        <span className="whitespace-pre-wrap">{`  company_discretionary_data: `}</span>*/}
        {/*                        <span className="text-aquamarine">*/}
        {/*                          'ACME Corp'*/}
        {/*                        </span>*/}
        {/*                        <span className="text-white">,</span>*/}
        {/*                      </p>*/}
        {/*                      <p className="m-0">{`});`}</p>*/}
        {/*                    </span>*/}
        {/*                  </div>*/}
        {/*                </div>*/}
        {/*              </div>*/}
        {/*              <div className="absolute w-[calc(100%_-_2px)] top-[263px] right-[1px] left-[1px] bg-darkslategray-600 box-border h-[191px] text-left text-sm-9 text-lightgray border-t-[1px] border-solid border-darkslategray-300">*/}
        {/*                <div className="absolute top-[24.5px] left-[20px] leading-[20px] flex items-center w-[318.8px] h-5">*/}
        {/*                  Programmatically create ACH debits and credits.*/}
        {/*                </div>*/}
        {/*                <img*/}
        {/*                  className="absolute top-[calc(50%_-_44.5px)] left-[20px] w-4 h-4 overflow-hidden object-cover"*/}
        {/*                  alt=""*/}
        {/*                  src="/svg1@2x.png"*/}
        {/*                />*/}
        {/*                <div className="absolute top-[49px] left-[44px] text-sm-7 leading-[20px] flex items-center w-[331.9px] h-5">*/}
        {/*                  We default to same-day ACH and hit every window.*/}
        {/*                </div>*/}
        {/*                <img*/}
        {/*                  className="absolute top-[calc(50%_-_20.5px)] left-[20px] w-4 h-4 overflow-hidden object-cover"*/}
        {/*                  alt=""*/}
        {/*                  src="/svg1@2x.png"*/}
        {/*                />*/}
        {/*                <div className="absolute top-[73px] left-[44px] leading-[20px] flex items-center w-[241.5px] h-5">*/}
        {/*                  Returns are correlated automatically.*/}
        {/*                </div>*/}
        {/*                <img*/}
        {/*                  className="absolute top-[calc(50%_+_3.5px)] left-[20px] w-4 h-4 overflow-hidden object-cover"*/}
        {/*                  alt=""*/}
        {/*                  src="/svg1@2x.png"*/}
        {/*                />*/}
        {/*                <div className="absolute top-[97px] left-[44px] text-sm-7 leading-[20px] flex items-center w-[386.1px] h-5">*/}
        {/*                  Webhooks keep you up-to-date on each transfer's*/}
        {/*                  lifecycle.*/}
        {/*                </div>*/}
        {/*                <div className="absolute h-[calc(100%_-_161px)] top-[141px] bottom-[20px] left-[20px] rounded-lg bg-mediumseagreen w-[206.3px] text-sm text-darkslategray-500">*/}
        {/*                  <div className="absolute top-[calc(50%_-_10px)] left-[10px] leading-[20px] font-medium">*/}
        {/*                    Read our documentation*/}
        {/*                  </div>*/}
        {/*                  <img*/}
        {/*                    className="absolute top-[calc(50%_-_8px)] left-[calc(50%_+_82.15px)] w-4 h-4 overflow-hidden"*/}
        {/*                    alt=""*/}
        {/*                    src="/svg2.svg"*/}
        {/*                  />*/}
        {/*                </div>*/}
        {/*              </div>*/}
        {/*            </div>*/}
        {/*            <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-start gap-[35px] text-left text-xs text-mediumseagreen font-inter">*/}
        {/*              <div className="flex flex-col items-start justify-start gap-[25px]">*/}
        {/*                <div className="flex flex-col items-start justify-start gap-[12px]">*/}
        {/*                  <div className="relative leading-[16px] uppercase font-medium">*/}
        {/*                    Designed for developers*/}
        {/*                  </div>*/}
        {/*                  <b className="w-[520px] relative text-23xl inline-block font-aeonik text-white h-[150px] shrink-0">*/}
        {/*                    Build quickly with our powerful and easy-to-use*/}
        {/*                    documented APIs*/}
        {/*                  </b>*/}
        {/*                </div>*/}
        {/*                <div className="w-[517px] relative text-lg leading-[24px] font-aeonik text-lightgray flex items-center">*/}
        {/*                  Save engineering time with unified payments*/}
        {/*                  functionality. We obsess over the maze of gateways,*/}
        {/*                  payments rails, and financial institutions that make*/}
        {/*                  up the global economic landscape so that your teams*/}
        {/*                  can build what you need on one platform.*/}
        {/*                </div>*/}
        {/*              </div>*/}
        {/*              <div className="flex flex-col items-start justify-start gap-[14px] text-base text-lightgray font-aeonik">*/}
        {/*                <div className="flex flex-row items-start justify-start gap-[12px]">*/}
        {/*                  <img*/}
        {/*                    className="w-5 relative h-5"*/}
        {/*                    alt=""*/}
        {/*                    src="/checkmarkcircle01.svg"*/}
        {/*                  />*/}
        {/*                  <div className="w-[360px] relative leading-[24px] flex items-center shrink-0">*/}
        {/*                    Collect one-time and recurring payments from your*/}
        {/*                    app or website*/}
        {/*                  </div>*/}
        {/*                </div>*/}
        {/*                <div className="flex flex-row items-start justify-start gap-[12px]">*/}
        {/*                  <img*/}
        {/*                    className="w-5 relative h-5"*/}
        {/*                    alt=""*/}
        {/*                    src="/checkmarkcircle01.svg"*/}
        {/*                  />*/}
        {/*                  <div className="w-[360px] relative leading-[20px] flex items-center shrink-0">*/}
        {/*                    Make instant transfers*/}
        {/*                  </div>*/}
        {/*                </div>*/}
        {/*                <div className="flex flex-row items-start justify-start gap-[12px]">*/}
        {/*                  <img*/}
        {/*                    className="w-5 relative h-5"*/}
        {/*                    alt=""*/}
        {/*                    src="/checkmarkcircle01.svg"*/}
        {/*                  />*/}
        {/*                  <div className="w-[360px] relative leading-[20px] flex items-center shrink-0">*/}
        {/*                    Retrieve all your transaction and customer data*/}
        {/*                  </div>*/}
        {/*                </div>*/}
        {/*                <div className="flex flex-row items-start justify-start gap-[12px]">*/}
        {/*                  <img*/}
        {/*                    className="w-5 relative h-5"*/}
        {/*                    alt=""*/}
        {/*                    src="/checkmarkcircle01.svg"*/}
        {/*                  />*/}
        {/*                  <div className="w-[360px] relative leading-[20px] flex items-center shrink-0">*/}
        {/*                    Verify the identity of customers*/}
        {/*                  </div>*/}
        {/*                </div>*/}
        {/*              </div>*/}
        {/*            </div>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*        <div className="absolute top-[904px] left-[1px] w-[1440px] h-[2668px] text-left text-xs text-gray-500">*/}
        {/*          <div className="absolute bottom-[0px] left-[0px] w-[1440px] h-[1907px]">*/}
        {/*            <div className="absolute top-[0px] left-[0px] w-[1440px] h-[973px]">*/}
        {/*              <div className="absolute top-[0px] left-[calc(50%_-_720px)] w-[1440px] h-[973px] overflow-hidden" />*/}
        {/*              <div className="absolute top-[calc(50%_-_386.5px)] left-[calc(50%_-_600px)] w-[1199px] flex flex-row items-start justify-start gap-[133px]">*/}
        {/*                <div className="h-[232px] flex flex-col items-start justify-start gap-[16px]">*/}
        {/*                  <div className="flex flex-col items-start justify-start gap-[16px]">*/}
        {/*                    <div className="w-[196px] relative rounded-[1000px] bg-gray-1000 h-7 hidden">*/}
        {/*                      <div className="absolute top-[6px] left-[12px] leading-[16px] uppercase font-medium">*/}
        {/*                        FREQUENTLY ASK QUESTIONS*/}
        {/*                      </div>*/}
        {/*                    </div>*/}
        {/*                    <b className="w-[406px] relative text-23xl flex text-gray-400 items-center">*/}
        {/*                      <span className="w-full">*/}
        {/*                        <p className="m-0">Let's put your</p>*/}
        {/*                        <p className="m-0">mind at ease.</p>*/}
        {/*                      </span>*/}
        {/*                    </b>*/}
        {/*                  </div>*/}
        {/*                  <div className="w-[361px] relative text-lg leading-[25px] font-medium flex items-center text-dimgray-100">*/}
        {/*                    <span className="w-full">*/}
        {/*                      <span>{`Can’t find the answer you’re looking for? Reach out to our `}</span>*/}
        {/*                      <span className="text-mediumseagreen">*/}
        {/*                        customer support*/}
        {/*                      </span>*/}
        {/*                      <span> team.</span>*/}
        {/*                    </span>*/}
        {/*                  </div>*/}
        {/*                </div>*/}
        {/*                <div className="flex-1 flex flex-col items-start justify-start gap-[18px]">*/}
        {/*                  <FaqItem*/}
        {/*                    doINeedToPayForAnythingEl="Do I need to pay for anything else besides Numeral to file my sales tax?"*/}
        {/*                    plusCircle="/pluscircle.svg"*/}
        {/*                    showThereAreAContainer*/}
        {/*                  />*/}
        {/*                  <FaqItem*/}
        {/*                    doINeedToPayForAnythingEl="Lorem ipsum dolor sit amet consectetur. Lorem risus vestibulum consectetur mi."*/}
        {/*                    plusCircle="/pluscircle1.svg"*/}
        {/*                    showThereAreAContainer={false}*/}
        {/*                    propWidth="463px"*/}
        {/*                    propWidth1="463px"*/}
        {/*                    propColor="#505553"*/}
        {/*                  />*/}
        {/*                  <FaqItem*/}
        {/*                    doINeedToPayForAnythingEl="Do I need to pay for anything else besides Numeral to file my sales tax?"*/}
        {/*                    plusCircle="/pluscircle1.svg"*/}
        {/*                    showThereAreAContainer={false}*/}
        {/*                    propWidth="unset"*/}
        {/*                    propWidth1="421px"*/}
        {/*                    propColor="#505553"*/}
        {/*                  />*/}
        {/*                  <FaqItem*/}
        {/*                    doINeedToPayForAnythingEl="Lorem ipsum dolor sit amet consectetur. Eget elit id purus."*/}
        {/*                    plusCircle="/pluscircle1.svg"*/}
        {/*                    showThereAreAContainer={false}*/}
        {/*                    propWidth="unset"*/}
        {/*                    propWidth1="382px"*/}
        {/*                    propColor="#505553"*/}
        {/*                  />*/}
        {/*                  <FaqItem*/}
        {/*                    doINeedToPayForAnythingEl="Lorem ipsum dolor sit amet consectetur. Arcu aliquam donec."*/}
        {/*                    plusCircle="/pluscircle1.svg"*/}
        {/*                    showThereAreAContainer={false}*/}
        {/*                    propWidth="unset"*/}
        {/*                    propWidth1="421px"*/}
        {/*                    propColor="#505553"*/}
        {/*                  />*/}
        {/*                </div>*/}
        {/*              </div>*/}
        {/*            </div>*/}
        {/*            <FrameComponent />*/}
        {/*          </div>*/}
        {/*          <div className="absolute top-[0px] left-[calc(50%_-_599px)] flex flex-col items-center justify-start gap-[60px] text-center text-23xl">*/}
        {/*            <div className="flex flex-col items-center justify-start gap-[20px]">*/}
        {/*              <b className="w-[678px] relative inline-block h-[100px] shrink-0">*/}
        {/*                Loved by people and businesses that care about their*/}
        {/*                finances*/}
        {/*              </b>*/}
        {/*              <div className="w-[544px] relative text-lg leading-[24px] font-medium text-dimgray-100 flex items-center justify-center">*/}
        {/*                Providing financial solutions that empowering both*/}
        {/*                business and individuals to thrive and achieve*/}
        {/*                remarkable growth milestones.*/}
        {/*              </div>*/}
        {/*            </div>*/}
        {/*            <div className="w-[1199px] relative h-[473px] text-left text-lg text-dimgray-100">*/}
        {/*              <div className="absolute top-[0px] left-[0px] rounded-3xl bg-white box-border w-[383px] flex flex-col items-start justify-start p-8 border-[1px] border-solid border-whitesmoke-500">*/}
        {/*                <div className="flex flex-col items-start justify-start gap-[24px]">*/}
        {/*                  <div className="flex flex-col items-start justify-start gap-[20px]">*/}
        {/*                    <div className="w-[136px] h-[76px] overflow-hidden shrink-0 flex flex-col items-center justify-center">*/}
        {/*                      <img*/}
        {/*                        className="w-[136px] relative h-[76px] overflow-hidden shrink-0 object-cover"*/}
        {/*                        alt=""*/}
        {/*                        src="/64da4217614b0b7b23201f7e-freshsendssvg@2x.png"*/}
        {/*                      />*/}
        {/*                    </div>*/}
        {/*                    <div className="w-[325px] relative leading-[26px] font-medium flex items-center">*/}
        {/*                      <span className="w-full">*/}
        {/*                        <p className="m-0">*/}
        {/*                          Lorem ipsum dolor sit amet consectetur. Lorem*/}
        {/*                          nulla nisl urna a dui habitant. Odio fringilla*/}
        {/*                          habitasse donec consequat. Enim diam urna in*/}
        {/*                          id placerat tempor quam. Aliquam nec eget*/}
        {/*                          ipsum vitae ipsum.*/}
        {/*                        </p>*/}
        {/*                        <p className="m-0">*/}
        {/*                          Pellentesque aliquam faucibus ac faucibus.*/}
        {/*                          Eget neque eget ullamcorper duis. Mauris eu*/}
        {/*                          ultrices ultricies ut.*/}
        {/*                        </p>*/}
        {/*                      </span>*/}
        {/*                    </div>*/}
        {/*                  </div>*/}
        {/*                  <div className="flex flex-row items-center justify-start text-base text-gray-400">*/}
        {/*                    <div className="flex flex-row items-center justify-start gap-[12px]">*/}
        {/*                      <div className="w-16 rounded-[4.07px] h-16 overflow-hidden shrink-0 flex flex-col items-start justify-center">*/}
        {/*                        <img*/}
        {/*                          className="w-full flex-1 relative rounded-81xl max-w-[64px] overflow-hidden max-h-full object-cover"*/}
        {/*                          alt=""*/}
        {/*                          src="/659fa9238d96a7bdeceaf7ee-jesse20hiss2020fresh20sendsjpeg@2x.png"*/}
        {/*                        />*/}
        {/*                      </div>*/}
        {/*                      <div className="h-[51px] flex flex-col items-start justify-start">*/}
        {/*                        <b className="relative leading-[22px]">*/}
        {/*                          Jesse Hiss*/}
        {/*                        </b>*/}
        {/*                        <div className="self-stretch flex flex-col items-start justify-start pt-[5px] px-0 pb-0 opacity-[0.7] text-sm">*/}
        {/*                          <div className="relative leading-[17px]">*/}
        {/*                            Founder, Fresh Sends*/}
        {/*                          </div>*/}
        {/*                        </div>*/}
        {/*                      </div>*/}
        {/*                    </div>*/}
        {/*                  </div>*/}
        {/*                </div>*/}
        {/*              </div>*/}
        {/*              <DivwNode4231f234A31c fa9238d96a7bdeceaf7eeJess="/659fa9238d96a7bdeceaf7ee-jesse20hiss2020fresh20sendsjpeg@2x.png" />*/}
        {/*              <div className="absolute top-[0px] left-[816px] rounded-3xl bg-white box-border w-[383px] flex flex-col items-start justify-start p-8 border-[1px] border-solid border-whitesmoke-500">*/}
        {/*                <div className="flex flex-col items-start justify-start gap-[24px]">*/}
        {/*                  <div className="flex flex-col items-start justify-start gap-[20px]">*/}
        {/*                    <img*/}
        {/*                      className="w-[76px] relative h-[76px] overflow-hidden shrink-0 object-cover"*/}
        {/*                      alt=""*/}
        {/*                      src="/659faed70026375f8e89b9db-explorer20logo20final201jpg@2x.png"*/}
        {/*                    />*/}
        {/*                    <div className="w-[325px] relative leading-[26px] font-medium flex items-center">*/}
        {/*                      <span className="w-full">*/}
        {/*                        <p className="m-0">*/}
        {/*                          I I was spending way too many hours*/}
        {/*                        </p>*/}
        {/*                        <p className="m-0">*/}
        {/*                          every month on sales tax. And if you*/}
        {/*                        </p>*/}
        {/*                        <p className="m-0">*/}
        {/*                          wanted someone on customer*/}
        {/*                        </p>*/}
        {/*                        <p className="m-0">*/}
        {/*                          support from my tax service, there*/}
        {/*                        </p>*/}
        {/*                        <p className="m-0">*/}
        {/*                          was no one. Numeral has made it to identify*/}
        {/*                          and know the tax*/}
        {/*                        </p>*/}
        {/*                        <p className="m-0 whitespace-pre-wrap">*/}
        {/*                          laws And then on your behalf, registering,*/}
        {/*                          managing everything, is kind of taking the*/}
        {/*                          worry off my plate.*/}
        {/*                        </p>*/}
        {/*                      </span>*/}
        {/*                    </div>*/}
        {/*                  </div>*/}
        {/*                  <div className="flex flex-row items-center justify-start text-base text-gray-400">*/}
        {/*                    <div className="flex flex-row items-center justify-start gap-[12px]">*/}
        {/*                      <div className="w-16 rounded-[4.07px] h-16 overflow-hidden shrink-0 flex flex-col items-start justify-center">*/}
        {/*                        <img*/}
        {/*                          className="w-[64.5px] relative rounded-81xl h-[64.5px] object-cover"*/}
        {/*                          alt=""*/}
        {/*                          src="/frame-1618872600@2x.png"*/}
        {/*                        />*/}
        {/*                      </div>*/}
        {/*                      <div className="h-[51px] flex flex-col items-start justify-start">*/}
        {/*                        <b className="relative leading-[22px]">*/}
        {/*                          Cason Crane*/}
        {/*                        </b>*/}
        {/*                        <div className="self-stretch flex flex-col items-start justify-start pt-[5px] px-0 pb-0 opacity-[0.7] text-sm">*/}
        {/*                          <div className="relative leading-[17px]">*/}
        {/*                            Founder, Fresh Sends*/}
        {/*                          </div>*/}
        {/*                        </div>*/}
        {/*                      </div>*/}
        {/*                    </div>*/}
        {/*                  </div>*/}
        {/*                </div>*/}
        {/*              </div>*/}
        {/*            </div>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}
        
      </div>
    </div>
  );
};

export default Homepage;
