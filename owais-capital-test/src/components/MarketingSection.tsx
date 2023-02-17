import React from "react";
import MarketingLogo from "../assets/MarketingLogo.png";

const MarketingSection = () => {
  return (
    <div className="bg-white w-full flex justify-center items-end flex-col p-[120px]">
      <img src={MarketingLogo} alt="" />
      <p className="text-end text-[35px] w-[1345px] h-auto leading-[65px] text-[#9CA6AF] mt-[75px] mb-[300px]">
        بناءً على نظام السوق المالية الصادر بالمرسوم الملكي رقم (م/30) وتاريخ
        ‏‏2/6/1424هـ وتعليمات تصريح تجربة التقنية المالية الصادرة عن المجلس
        بتاريخ 23/4/1439هـ الموافق 10/1/2018م، والتي تهدف إلى توفير إطار تنظيمي
        يدعم ابتكار التقنية المالية (فينتك) في السوق المالية بالمملكة، أصدر مجلس
        الهيئة قراره بالموافقة على طلب تصريح تجربة التقنية المالية
      </p>
    </div>
  );
};

export default MarketingSection;
