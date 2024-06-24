import { FunctionComponent } from "react";
import SwiperItem from "./SwiperItem";
import {appleUrl, playStoreUrl} from "../../utils/cn";

const Banner: FunctionComponent = () => {
  return (
      <div className="banner bg-darkslategray-500 pt-[100px] pb-[50px] text-left text-sm text-gray-1100 font-aeonik">

          <div className="w-[80%]  md:w-[80%] mx-auto block  md:flex justify-between">
              <div
                  className="flex flex-col items-start justify-start gap-[20px] lg:text-41xl md:text-38xl text-23xl text-white">
                  <b className="max-w-[634px]  relative leading-[48px] md:leading-[68px] inline-block">
                      {`Bank faster, better & smarter with BellBank.`}
                  </b>
                  <div
                      className="max-w-[634px] relative text-lg leading-[26px] font-medium text-gray-1100 inline-block ">
                      Experience Banking at Its Best, manage your finances with ease. From
                      quick transactions to personalized solutions, analytics, support and
                      more.
                  </div>
              </div>

              <div className=" flex flex-col mt-6 md:mt-0 items-start justify-center gap-[30px]">
                  <div className=" relative  flex gap-4">
                      <div
                          className="box-border hidden md:block w-px  border-r-[1px] border-solid border-whitesmoke-200"/>
                      <div className=" flex flex-col items-start justify-start gap-[7px]">
                          <img className="w-20 relative " alt="d" src="/assets/images/svg/star.svg"/>
                          <div className="relative font-medium">
                              Rated 4.5 by 100K+ Customers
                          </div>
                      </div>

                  </div>
                  <div className="img_wrapper flex gap-[24px] my-[35px] justify-center">
                      <div className="cursor-pointer" onClick={() => window.location.href = playStoreUrl}>
                          <img src="/assets/images/playstore_white.png" alt={''}/>
                      </div>
                      <div className="cursor-pointer" onClick={() => window.location.href = appleUrl}>
                          <img src="/assets/images/apple_white.png" alt={''}/>
                      </div>
                  </div>
                  {/*<img*/}
                  {/*    className="w-[263.7px] relative h-[40.1px]"*/}
                  {/*    alt=""*/}
                  {/*    src="/assets/images/svg/group-427322510.svg"*/}
                  {/*/>*/}
              </div>

          </div>
          <div className={'mb-8'}></div>
          <SwiperItem/>
          <div className={'mb-8'}></div>
      </div>
  );
};

export default Banner;
