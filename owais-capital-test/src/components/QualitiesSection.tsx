import React from "react";
import MiniCards from "./MiniCards";
import { smallData } from "../data/miniCardData";

const QualitiesSection = () => {
  return (
    <div className="flex justify-start items-center flex-col bg-[#F5F7F9]">
      <div className="bg-[#E7F1F3] text-[#04989E] text-[45px] h-[113px] px-[146px] items-center py-8 rounded-[37px] text-center justify-center mt-[90px] mb-[170px]">
        كيف يساعد اصدار الصكوك الشركات الصغيرة والمتوسطة
      </div>
      <div className="flex flex-wrap justify-center">
        {smallData.map((val, key) => (
          <MiniCards imageSrc={val.imageSrc} title={val.title} />
        ))}
      </div>
    </div>
  );
};

export default QualitiesSection;
