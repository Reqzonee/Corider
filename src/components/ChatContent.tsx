import { FunctionComponent } from "react";

export type ChatContentType = {
  className?: string;
};

const ChatContent: FunctionComponent<ChatContentType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start py-0 px-4 box-border max-w-full text-left text-sm text-silver font-mulish ${className}`}
    >
      <div className="flex-1 flex flex-row items-end justify-between max-w-full gap-[20px]">
        <div className="w-[116px] flex flex-col items-start justify-end pt-0 px-0 pb-[13px] box-border">
          <img
            className="self-stretch h-px relative max-w-full overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/vector-14.svg"
          />
        </div>
        <div className="w-[156px] flex flex-row items-start justify-start relative min-w-[156px]">
          <div className="absolute !m-[0] bottom-[5px] left-[-59px] inline-block min-w-[87px]">
            12 JAN, 2023
          </div>
          <div className="flex-1 shadow-[0px_4px_8px_rgba(0,_0,_0,_0.12)] rounded-lg flex flex-col items-start justify-start z-[1] text-gray-200">
            <img
              className="w-[116px] h-px relative hidden"
              alt=""
              src="/vector-14.svg"
            />
            <div className="self-stretch rounded-t-lg rounded-b-none bg-white flex flex-row items-start justify-start p-3 gap-[12px] border-[1px] border-solid border-gainsboro">
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                alt=""
                src="/members.svg"
              />
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <a className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[61px]">
                  Members
                </a>
              </div>
            </div>
            <div className="self-stretch bg-white flex flex-row items-start justify-start pt-3.5 px-3 pb-3 gap-[12px] border-r-[1px] border-solid border-gainsboro border-b-[1px] border-l-[1px]">
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                loading="lazy"
                alt=""
                src="/call.svg"
              />
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <div className="relative font-semibold inline-block min-w-[95px]">
                  Share Number
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-t-none rounded-b-lg bg-white flex flex-row items-start justify-start pt-3.5 px-3 pb-3 gap-[12px] border-r-[1px] border-solid border-gainsboro border-b-[1px] border-l-[1px]">
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                alt=""
                src="/report-message.svg"
              />
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <div className="relative font-semibold inline-block min-w-[45px]">
                  Report
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatContent;
