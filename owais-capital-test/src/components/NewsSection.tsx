import React from "react";
import { newsData } from "../data/newsData";
import NewsCards from "./NewsCards";
import SmallCards from "./SmallCards";
import { smallNewsData } from "../data/smallNewsData";

const NewsSection = () => {
  return (
    <div className="flex justify-start items-center flex-col bg-[#F5F7F9]">
      <div className="bg-[#E7F1F3] text-[#04989E] text-[45px] h-[113px] px-[146px] items-center py-8 rounded-[37px] text-center justify-center mt-[90px] mb-[170px]">
        قصص نجاح
      </div>
      <div className="flex flex-wrap justify-center items-center">
        {newsData.map((val) => (
          <NewsCards
            imageSrc={val.imageSrc}
            title={val.title}
            content={val.content}
          />
        ))}
      </div>
      <div className="bg-[#E7F1F3] text-[#04989E] text-[45px] h-[113px] px-[70px] items-center py-8 rounded-[37px] text-center justify-center mt-[10px] mb-[100px]">
        العالم يتكلم عن أويس المالية
      </div>
      <div className="flex justify-center items-center">
        {smallNewsData.map((val) => (
          <SmallCards content={val.content} imageSrc={val.imageSrc} />
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
