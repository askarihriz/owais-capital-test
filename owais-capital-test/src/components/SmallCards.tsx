import React from "react";

const SmallCards = (props: any) => {
  return (
    <div className="card w-[329px] h-[446px] rounded-[37px] mb-[150px] border-none mx-[17px] flex justify-between items-center">
      <div className="card-body flex flex-col items-center justify-start mt-[20px]">
        <div className="h-[98px] flex justify-center items-center">
          <img className="" src={props.imageSrc} alt="" />
        </div>
        <p className="card-text text-[24px] text-[#9CA6AF] mt-[30px] px-[30px] h-[128px] leading-[32px]">
          {props.content}
        </p>
        <button
          className="btn btn-outline-success mb-[10px] w-[192px] h-[51px] self-center mt-[40px] px-[30px] border-[#04989E] text-white border-[2px] text-[24px] bg-[#04989E] rounded-[15px]"
          type="submit"
        >
          عرض
        </button>
      </div>
      <div className="h-[4px] w-[171px] bg-[#04989E] rounded-[4px]"></div>
    </div>
  );
};

export default SmallCards;
