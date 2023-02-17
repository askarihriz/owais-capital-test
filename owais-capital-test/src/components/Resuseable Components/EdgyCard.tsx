import React from "react";

const EdgyCard = (props: any) => {
  return (
    <div className="card mt-[116px] mb-[153px] rounded-none border-none w-[463px] h-[564px] mx-[230px] drop-shadow-[10px_10px_0px_rgba(97,97,97,1)]">
      <div className="card-body">
        <h5 className="card-title text-[40px] text-[#03989E] my-[74px]">
          {props.title}
        </h5>
        <p className="card-text text-[30px] text-[#9CA6AF] mx-[30px]">
          {props.content}
        </p>
        <button
          className="btn btn-outline-success mb-[165px] ml-[30px] w-[324px] h-[80px] self-center mt-[90px] px-[30px] border-[#04989E] text-white border-[2px] py-[20px] text-[30px] bg-[#04989E] rounded-[11px]"
          type="submit"
        >
          {props.buttonText}
        </button>
      </div>
    </div>
  );
};

export default EdgyCard;
