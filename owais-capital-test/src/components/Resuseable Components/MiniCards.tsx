import React from "react";

const MiniCards = (props: any) => {
  return (
    <div className="card w-[397px] h-[357px] rounded-[27px] mb-[200px] border-none mx-[68px] flex justify-between items-center">
      <div className="card-body flex flex-col items-center justify-start">
        <div className="w-[165px] h-[170px] bg-[#2B9A9D] rotate-45 rounded-[27px] -mt-[120px] flex justify-center items-center">
          <img className="rotate-[315deg]" src={props.imageSrc} alt="" />
        </div>
        <h2 className="text-[30px] text-[#77838F] mt-[40px] px-[60px]">
          {props.title}
        </h2>
        <p className="card-text text-[20px] text-[#9CA6AF] mt-[20px] px-[60px] leading-[24px]">
          من خلال عرض شركتك عبر التمويل الجماعي ، سيكون بإمكانك الوصول إلى
          الآلاف من المستثمرين المستعدين للاستثمار وتسريع الجولة الاستثمارية
          الخاصة بشركتك الناشئة.
        </p>
      </div>
      <div className="h-[4px] w-[171px] bg-[#04989E] rounded-[4px]"></div>
    </div>
  );
};

export default MiniCards;
