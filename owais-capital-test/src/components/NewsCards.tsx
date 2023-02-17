import React from "react";

const NewsCards = (props: any) => {
  return (
    <div
      className={`card w-[514px] h-[667px] rounded-[75px] mb-[200px] border-none mx-[18px] flex justify-between items-center ${
        props.title === "فوربس الشرق الأوسط" ? "w-[681px] h-[884px]" : ""
      }`}
    >
      <div
        className={`card-body flex flex-col items-center justify-start m-0 w-full ${
          props.title === "فوربس الشرق الأوسط" ? "p-[70px]" : "p-[50px]"
        }`}
      >
        <img className="" src={props.imageSrc} alt="" />
        <h2
          className={`text-[30px] text-[#77838F] mt-[50px] px-[60px] ${
            props.title === "فوربس الشرق الأوسط "
              ? "text-[35px]"
              : "text-[30px]"
          }`}
        >
          {props.title}
        </h2>
        <div className="flex justify-end items-center text-end w-full">
          <p
            className={`card-text text-[20px] text-end text-[#9CA6AF] w-[420px] mt-[40px] leading-[50px] self-end ${
              props.title === "فوربس الشرق الأوسط "
                ? "text-[30px]"
                : "text-[25px]"
            }`}
          >
            {props.content}
          </p>
        </div>
      </div>
      <div className="h-[4px] w-[171px] bg-[#212121] rounded-[4px]"></div>
    </div>
  );
};

export default NewsCards;
