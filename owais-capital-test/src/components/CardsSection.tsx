import React from "react";
import InvestmentCards from "./InvestmentCards";
import { data } from "../data/cardData";

const CardsSection = () => {
  return (
    <div className="w-full h-auto flex justify-start flex-col bg-[#F5F7F9] px-[50px]">
      <button
        type="button"
        className="btn btn-primary mt-[33px] h-[113px] px-[24px] mx-[15px] border-none bg-[#EBEDEF] text-[#04989E] w-[433px] text-[45px] rounded-[37px] z-20 text-center py-auto self-center"
      >
        الفرص الإستثمارية
      </button>
      <p className="max-w-[1287px] h-auto text-[29px] text-[#9CA6AF] self-center mt-[30px]">
        من خلال منصة أويس المالية ، يمكن للمستثمرين استعراض الفرص الاستثمارية ،
        الاستثمار ، وانهاء الاجراءات القانونية عبر المنصة فوراً. استثمر الآن
        ابتداءً من 1000 ريال سعودي فقط . الشركات المدرجة على المنصة هي شركات تمت
        مراجعة معلوماتها والتأكد من صحتها
      </p>
      <div className="flex mt-[84px] self-end flex-col">
        <input
          className="form-control w-[1022px] h-[92px] rounded-[20px] outline-[#04989E] border-[2px] border-[#04989E] text-end text-[20px]"
          type="search"
          placeholder="الماجدية"
          aria-label="Search"
        />
        <div className="flex justify-end mt-[26px]">
          <button
            className="btn btn-outline-success ml-[30px] border-[#04989E] text-[#04989E] border-[2px] px-[38px] py-[20px] text-[20px] rounded-[11px] hover:bg-[#04989E] "
            type="submit"
          >
            الفرص المكتملة
          </button>
          <button
            className="btn btn-outline-success ml-[30px] border-[#04989E] text-[#04989E] border-[2px] px-[38px] py-[20px] text-[20px] hover:bg-[#04989E] rounded-[11px]"
            type="submit"
          >
            الفرص القادمة
          </button>
          <button
            className="btn btn-outline-success ml-[30px] border-[#04989E] text-[#04989E] border-[2px] px-[38px] py-[20px] text-[20px] hover:bg-[#04989E] rounded-[11px]"
            type="submit"
          >
            الفرص النشطة
          </button>
          <button
            className="btn btn-outline-success ml-[30px] border-[#04989E] text-white border-[2px] px-[38px] py-[20px] text-[20px] bg-[#04989E] rounded-[11px]"
            type="submit"
          >
            جميع الفرص الاستثمارية
          </button>
        </div>
      </div>
      <div className="flex w-full gap-[60px] h-auto mt-[66px] flex-wrap justify-center items-center">
        {data.map((val) => (
          <InvestmentCards
            imageSrc={val.imageSrc}
            logoSrc={val.logoSrc}
            logoBg={val.logoBg}
            percentage={val.percentage}
          />
        ))}
      </div>
      <button
        className="btn btn-outline-success mb-[165px] ml-[30px] w-[287px] self-center mt-[107px] px-[90px] border-[#04989E] text-white border-[2px] py-[20px] text-[20px] bg-[#04989E] rounded-[11px]"
        type="submit"
      >
        عرض المزيد
      </button>
    </div>
  );
};

export default CardsSection;
