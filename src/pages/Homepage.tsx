import {FunctionComponent} from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Feature from "../components/Feature";
import CardLeft from "../components/CardLeft";
import FaqItem from "../components/FaqItem";
import Footer from "../components/Footer";
import DivwNode4231f234A31c from "../components/DivwNode4231f234A31c";
import Experience from "../components/Experience";
import Protecting from "../components/Protecting";
import Api from "../components/Api";

const Homepage: FunctionComponent = () => {
    return (
        <div className="w-full relative bg-white h-full text-left text-xs text-white font-aeonik">
            <div className="w-full">
                <Header
                    vector="/vector.svg"
                    sVG="/svg.svg"
                />

                <Banner/>

                <div
                    className="flex flex-row items-center justify-center my-4 gap-[50px] text-center text-lg text-dimgray-100">
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


                <Feature/>

                <Experience/>
                <Protecting/>

                {/*      <div className="absolute top-[429px] left-[0px] w-[1442px] h-[3572px] text-right text-smi text-slategray">*/}

                <Api/>
                <div className="h-[232px] flex flex-col items-start justify-start gap-[16px]">
                                  <div className="flex flex-col items-start justify-start gap-[16px]">
                                    <div className="w-[196px] relative rounded-[1000px] bg-gray-1000 h-7 hidden">
                                      <div className="absolute top-[6px] left-[12px] leading-[16px] uppercase font-medium">
                                        FREQUENTLY ASK QUESTIONS
                                      </div>
                                    </div>
                                    <b className="w-[406px] relative text-23xl flex text-gray-400 items-center">
                                      <span className="w-full">
                                        <p className="m-0">Let's put your</p>
                                        <p className="m-0">mind at ease.</p>
                                      </span>
                                    </b>
                                  </div>
                                  <div className="w-[361px] relative text-lg leading-[25px] font-medium flex items-center text-dimgray-100">
                                    <span className="w-full">
                                      <span>{`Can’t find the answer you’re looking for? Reach out to our `}</span>
                                      <span className="text-mediumseagreen">
                                        customer support
                                      </span>
                                      <span> team.</span>
                                    </span>
                                  </div>
                                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[18px]">
                                  <FaqItem
                                    doINeedToPayForAnythingEl="Do I need to pay for anything else besides Numeral to file my sales tax?"
                                    plusCircle="/pluscircle.svg"
                                    showThereAreAContainer
                                  />
                                  <FaqItem
                                    doINeedToPayForAnythingEl="Lorem ipsum dolor sit amet consectetur. Lorem risus vestibulum consectetur mi."
                                    plusCircle="/pluscircle1.svg"
                                    showThereAreAContainer={false}
                                    propWidth="463px"
                                    propWidth1="463px"
                                    propColor="#505553"
                                  />
                                  <FaqItem
                                    doINeedToPayForAnythingEl="Do I need to pay for anything else besides Numeral to file my sales tax?"
                                    plusCircle="/pluscircle1.svg"
                                    showThereAreAContainer={false}
                                    propWidth="unset"
                                    propWidth1="421px"
                                    propColor="#505553"
                                  />
                                  <FaqItem
                                    doINeedToPayForAnythingEl="Lorem ipsum dolor sit amet consectetur. Eget elit id purus."
                                    plusCircle="/pluscircle1.svg"
                                    showThereAreAContainer={false}
                                    propWidth="unset"
                                    propWidth1="382px"
                                    propColor="#505553"
                                  />
                                  <FaqItem
                                    doINeedToPayForAnythingEl="Lorem ipsum dolor sit amet consectetur. Arcu aliquam donec."
                                    plusCircle="/pluscircle1.svg"
                                    showThereAreAContainer={false}
                                    propWidth="unset"
                                    propWidth1="421px"
                                    propColor="#505553"
                                  />
                                </div>


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
                <Footer />
            </div>
        </div>
    );
};

export default Homepage;
