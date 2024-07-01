import { FunctionComponent } from "react";

export type ContentType = {
  className?: string;
};

const Content: FunctionComponent<ContentType> = ({ className = "" }) => {
  return (
    <div
      className={`w-full !m-[0] absolute top-[47px] right-[0px] left-[0px] box-border flex flex-row items-start justify-start pt-5 px-4 pb-3.5 gap-[8px] text-left text-5xl text-gray-200 font-mulish border-b-[1px] border-solid border-gainsboro ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[16px]">
        <div className="self-stretch flex flex-row items-start justify-start gap-[12px]">
          <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
            <img
              className="w-6 h-6 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/back.svg"
            />
          </div>
          <h2 className="m-0 flex-1 relative text-inherit font-bold font-inherit">
            Trip 1
          </h2>
        </div>
        <div className="w-[299px] flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border gap-[16px] text-lg">
          <div className="h-12 w-12 relative rounded-29xl bg-white box-border overflow-hidden shrink-0 border-[1px] border-solid border-white">
            <img
              className="absolute top-[-4px] left-[-2px] w-[26px] h-[26px] object-cover"
              loading="lazy"
              alt=""
              src="/rectangle-12@2x.png"
            />
            <img
              className="absolute top-[22px] left-[-2px] w-[26px] h-[26px] object-cover"
              loading="lazy"
              alt=""
              src="/rectangle-14@2x.png"
            />
            <img
              className="absolute top-[-4px] left-[24px] w-[26px] h-[26px] object-cover"
              loading="lazy"
              alt=""
              src="/rectangle-13@2x.png"
            />
            <img
              className="absolute top-[22px] left-[24px] w-[26px] h-[26px] object-cover"
              loading="lazy"
              alt=""
              src="/rectangle-15@2x.png"
            />
          </div>
          <div className="flex-1 relative">
            <p className="m-0">
              <span className="text-base font-medium font-mulish text-dimgray-100">
                From
              </span>
              <span>
                <span className="font-semibold font-mulish">{` `}</span>
                <b>IGI Airport, T3</b>
              </span>
            </p>
            <p className="m-0">
              <span className="text-base font-medium font-mulish text-dimgray-100">
                To
              </span>
              <span>
                <span className="font-semibold font-mulish whitespace-pre-wrap">{`  `}</span>
                <b>Sector 28</b>
              </span>
            </p>
          </div>
        </div>
      </div>
      <img
        className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
        alt=""
        src="/call.svg"
      />
      <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
        <div className="flex flex-col items-end justify-start gap-[33px]">
          <img
            className="w-5 h-5 relative overflow-hidden shrink-0"
            alt=""
            src="/edit05.svg"
          />
          <img
            className="w-6 h-6 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/dotsvertical.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Content;
