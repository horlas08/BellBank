import { FunctionComponent } from "react";
import SwiperItem from "./SwiperItem";

const Banner: FunctionComponent = () => {
  return (
      <div className="bg-darkslategray-500 pt-[100px] pb-[50px] text-left text-sm text-gray-1100 font-aeonik">

          <div className="w-[80%] mx-auto flex justify-between">
              <div
                  className="  flex flex-col items-start justify-start gap-[20px] text-41xl text-white">
                  <b className="w-[634px] relative leading-[68px] inline-block h-[140px] shrink-0">{`Bank faster, better & smarter with BellBank.`}</b>
                  <div
                      className="w-[634px] relative text-lg leading-[26px] font-medium text-gray-1100 inline-block h-[51px] shrink-0">
                      Experience Banking at Its Best, manage your finances with ease. From
                      quick transactions to personalized solutions, analytics, support and
                      more.
                  </div>
              </div>

              <div className=" flex flex-col items-start justify-center gap-[30px]">
                  <div className=" relative h-10 flex gap-4">
                      <div
                          className="box-border w-px h-[41px] border-r-[1px] border-solid border-whitesmoke-200"/>
                      <div className=" flex flex-col items-start justify-start gap-[7px]">
                          <img className="w-20 relative h-4" alt="" src="/star.svg"/>
                          <div className="relative font-medium">
                              Rated 4.5 by 100K+ Customers
                          </div>
                      </div>

                  </div>
                  <img
                      className="w-[263.7px] relative h-[40.1px]"
                      alt=""
                      src="/group-427322510.svg"
                  />
              </div>

          </div>
          <div className={'mb-8'}></div>
          <SwiperItem
          />
          <div className={'mb-8'}></div>
      </div>
  );
};

export default Banner;
