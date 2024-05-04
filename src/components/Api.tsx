import CardLeft from "./CardLeft";
import {Link} from "react-router-dom";
import ExperienceItem from "./ExperienceItem";
import React from "react";

export default function  Api() {
    return (
        <div className={'relative w-full'}>
            <div className=" bg-darkslategray-500 w-full">
                <div className="flex justify-between p-[4rem] md:py-[10rem] flex-col lg:flex-row overflow-hidden mx-auto gap-10">
                    <div className="relative w-full lg:w-[50%] flex flex-col items-stretch justify-start gap-[35px] text-left text-xs text-mediumseagreen font-inter">
                        <div className="flex flex-col items-start justify-start gap-[25px]">
                            <div className="flex flex-col items-start justify-start gap-[12px]">
                                <div className="relative leading-[16px] uppercase font-medium">
                                    Designed for developers
                                </div>

                                <b className=" relative text-23xl inline-block font-aeonik text-white">
                                    Build quickly with our powerful and easy-to-use
                                    documented APIs
                                </b>
                            </div>
                            <div className=" relative text-lg leading-[24px] font-aeonik text-lightgray flex items-center">
                                Save engineering time with unified payments
                                functionality. We obsess over the maze of gateways,
                                payments rails, and financial institutions that make
                                up the global economic landscape so that your teams
                                can build what you need on one platform.
                            </div>
                        </div>
                        <div className="flex flex-col items-start justify-start gap-[14px] text-base text-lightgray font-aeonik">
                            <div className="flex flex-row items-start justify-start gap-[12px]">
                                <img
                                    className="w-5 relative h-5"
                                    alt=""
                                    src="/assets/images/svg/checkmarkcircle01.svg"
                                />
                                <div className="w-[360px] relative leading-[24px] flex items-center shrink-0">
                                    Collect one-time and recurring payments from your
                                    app or website
                                </div>
                            </div>
                            <div className="flex flex-row items-start justify-start gap-[12px]">
                                <img
                                    className="w-5 relative h-5"
                                    alt=""
                                    src="/assets/images/svg/checkmarkcircle01.svg"
                                />
                                <div className="w-[360px] relative leading-[20px] flex items-center shrink-0">
                                    Make instant transfers
                                </div>
                            </div>
                            <div className="flex flex-row items-start justify-start gap-[12px]">
                                <img
                                    className="w-5 relative h-5"
                                    alt=""
                                    src="/assets/images/svg/checkmarkcircle01.svg"
                                />
                                <div className="w-[360px] relative leading-[20px] flex items-center shrink-0">
                                    Retrieve all your transaction and customer data
                                </div>
                            </div>
                            <div className="flex flex-row items-start justify-start gap-[12px]">
                                <img
                                    className="w-5 relative h-5"
                                    alt=""
                                    src="/assets/images/svg/checkmarkcircle01.svg"
                                />
                                <div className="w-[360px] relative leading-[20px] flex items-center shrink-0">
                                    Verify the identity of customers
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="relative codeBlock flex-1 rounded-xl box-border overflow-hidden border-[1px] border-solid border-darkslategray-100">
                        <div className="relative bg-darkslategray-400 h-[262px]">
                            <div className="relative flex flex-row w-full items-center h-full ml-5 overflow-hidden">
                                <div className="relative number leading-[20px] flex items-center w-[16.8px] h-[200px]">
                                    <span className="[line-break:anywhere] ">
                                      <p className="m-0">1</p>
                                      <p className="m-0">2</p>
                                      <p className="m-0">3</p>
                                      <p className="m-0">4</p>
                                      <p className="m-0">5</p>
                                      <p className="m-0">6</p>
                                      <p className="m-0">7</p>
                                      <p className="m-0">8</p>
                                      <p className="m-0">9</p>
                                      <p className="m-0">10</p>
                                    </span>
                                </div>
                                <div className=" code leading-[20px] text-left flex items-center w-[389px] h-[200px] text-white">
                                    <span className="w-full">
                                      <p className="m-0">
                                        <span className="text-deepskyblue">await</span>
                                        <span className="whitespace-pre-wrap">{` increase.achTransfers.create({`}</span>
                                      </p>
                                      <p className="m-0">
                                        <span className="whitespace-pre-wrap">{`  account_id: `}</span>
                                        <span className="text-aquamarine">
                                          'account_in71c4amph0vgo2qllky'
                                        </span>
                                        <span className="text-white whitespace-pre-wrap">
                                          ,
                                        </span>
                                      </p>
                                      <p className="m-0">
                                        <span className="text-white whitespace-pre-wrap">{`  amount: `}</span>
                                        <span className="text-yellow">1000</span>
                                        <span className="whitespace-pre-wrap">,</span>
                                      </p>
                                      <p className="m-0">
                                        <span className="whitespace-pre-wrap">{`  currency: `}</span>
                                        <span className="text-aquamarine">'USD'</span>
                                        <span className="whitespace-pre-wrap">,</span>
                                      </p>
                                      <p className="m-0">
                                        <span className="whitespace-pre-wrap">{`  individual_name: `}</span>
                                        <span className="text-aquamarine">
                                          'Ian Crease'
                                        </span>
                                        <span className="whitespace-pre-wrap">,</span>
                                      </p>
                                      <p className="m-0">
                                        <span className="whitespace-pre-wrap">{`  account_number: `}</span>
                                        <span className="text-aquamarine">
                                          '987654321'
                                        </span>
                                        <span className="text-white whitespace-pre-wrap">
                                          ,
                                        </span>
                                      </p>
                                      <p className="m-0">
                                        <span className="text-white whitespace-pre-wrap">{`  routing_number: `}</span>
                                        <span className="text-aquamarine">
                                          '101050001'
                                        </span>
                                        <span className="whitespace-pre-wrap">,</span>
                                      </p>
                                      <p className="m-0">
                                        <span className="whitespace-pre-wrap">{`  company_entry_description: `}</span>
                                        <span className="text-aquamarine">
                                          'July Consulting'
                                        </span>
                                        <span className="whitespace-pre-wrap">,</span>
                                      </p>
                                      <p className="m-0">
                                        <span className="whitespace-pre-wrap">{`  company_discretionary_data: `}</span>
                                        <span className="text-aquamarine">
                                          'ACME Corp'
                                        </span>
                                        <span className="text-white">,</span>
                                      </p>
                                      <p className="m-0">{`});`}</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="relative bg-darkslategray-600 box-border h-[191px] text-left text-sm-9 text-lightgray border-t-[1px] border-solid border-darkslategray-300">
                            <div
                                className="absolute top-[24.5px] left-[20px] leading-[20px] flex items-center w-[318.8px] h-5">
                                Programmatically create ACH debits and credits.
                            </div>
                            <img
                                className="absolute top-[calc(50%_-_44.5px)] left-[20px] w-4 h-4 overflow-hidden object-cover"
                                alt=""
                                src="/svg1@2x.png"
                            />
                            <div
                                className="absolute top-[49px] left-[44px] text-sm-7 leading-[20px] flex items-center w-[331.9px] h-5">
                                We default to same-day ACH and hit every window.
                            </div>
                            <img
                                className="absolute top-[calc(50%_-_20.5px)] left-[20px] w-4 h-4 overflow-hidden object-cover"
                                alt=""
                                src="/svg1@2x.png"
                            />
                            <div
                                className="absolute top-[73px] left-[44px] leading-[20px] flex items-center w-[241.5px] h-5">
                                Returns are correlated automatically.
                            </div>
                            <img
                                className="absolute top-[calc(50%_+_3.5px)] left-[20px] w-4 h-4 overflow-hidden object-cover"
                                alt=""
                                src="/svg1@2x.png"
                            />
                            <div
                                className="absolute top-[97px] left-[44px] text-sm-7 leading-[20px] flex items-center w-[386.1px] h-5">
                                Webhooks keep you up-to-date on each transfer's
                                lifecycle.
                            </div>
                            <div
                                className="absolute h-[calc(100%_-_161px)] top-[141px] bottom-[20px] left-[20px] rounded-lg bg-mediumseagreen w-[206.3px] text-sm text-darkslategray-500">
                                <Link to={'/'} className="text-white no-underline  absolute top-[calc(50%_-_10px)] left-[10px] leading-[20px] font-medium">
                                    Read our documentation
                                </Link>
                                <img
                                    className="absolute top-[calc(50%_-_8px)] left-[calc(50%_+_82.15px)] w-4 h-4 overflow-hidden"
                                    alt=""
                                    src="/assets/images/svg/svg2.svg"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}