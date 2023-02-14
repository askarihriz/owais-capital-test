import React from "react";
import Bookmark from "../assets/Bookmark.png";

const InvestmentCards = (props: any) => {
  return (
    <div className="card rounded-[42px] w-[550px] h-[933px] border-none">
      <img src={props.imageSrc} className="card-img-top h-[365px]" alt="..." />
      <div className="flex flex-col">
        <div
          className={`flex bg-[${props.logoBg}] -mt-[60px] w-[112px] h-[107px] rounded-[20px] items-center self-center justify-center`}
        >
          <img src={props.logoSrc} alt="" />
        </div>
        <div className="w-full flex justify-between -mt-[35px] px-[24px]">
          <img className="h-[50px] w-[38px]" src={Bookmark} alt="" />
          <button
            className="btn btn-outline-success ml-[30px] border-[#04989E] text-white border-[2px] px-[25px] py-[7px] text-[22px] bg-[#04989E] rounded-[11px] text-center"
            type="submit"
          >
            نشط
          </button>
        </div>
        <h2 className="card-title mt-[22px] text-[#77838F] text-[25px] text-end mr-4 px-[24px]">
          صندوق الرمز
        </h2>
        <div className="w-[380px] h-auto self-end text-end mt-[15px] text-[#9CA6AF] px-[24px]">
          نعمل في رؤية ريزدنس على الإبداع والابتكار في تصاميمنا للوحدات السكنية
          ، فبين الجمال واستثمار المساحات تكمن تصاميم الماجدية ....
        </div>
        <div className="mt-[26px] border-t border-slate-200"></div>
        <div className="flex items-center justify-between mx-[24px] mt-[24px]">
          <button
            className="btn btn-outline-success border-[#04989E] text-white border-[2px] px-[25px] h-[40px] py-[7px] text-[20px] bg-[#04989E] rounded-[11px] text-center"
            type="submit"
          >
            ريال50,500,000
          </button>
          <h2 className="text-[20px] text-[#77838F] mr-10">
            إجمالي قيمة الطرح
          </h2>
        </div>
        <div className="mt-[24px] h-[40px] w-[500px] bg-[#979797] mx-[48px] self-center rounded-[22px]">
          <div
            className={`h-[40px] bg-[#03989E] self-start w-[${
              (props.percentage / 100) * 500
            }px] rounded-[22px] text-white flex items-center text-[25px] py-auto justify-center text-center
            `}
          ></div>
        </div>
        <h3 className="text-white text-[25px] text-center self-center -mt-[30px]">
          {props.percentage}%
        </h3>
        <div className="mt-[36px] flex flex-col px-[50px]">
          <div className="flex justify-between">
            <h5 className="text-[#04989E]"> 25,200,000 ريال </h5>
            <h5 className="text-[#77838F]">المبلغ الذي تم جمعه</h5>
          </div>
          <div className="flex justify-between mt-[20px]">
            <h5 className="text-[#04989E]">17.3%</h5>
            <h5 className="text-[#77838F]">العائد المتوقع</h5>
          </div>
          <div className="flex justify-between mt-[20px]">
            <h5 className="text-[#04989E]"> 1,000 ريال</h5>
            <h5 className="text-[#77838F]">سعر الوحدة</h5>
          </div>
          <div className="flex justify-between mt-[20px]">
            <h5 className="text-[#04989E]"> 22 شهر</h5>
            <h5 className="text-[#77838F]">مدة الصندوق</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentCards;
