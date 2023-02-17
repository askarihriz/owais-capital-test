import React from "react";
import EdgyCard from "../Resuseable Components/EdgyCard";

const PagesSection = () => {
  return (
    <div className="flex bg-[#03989E]">
      <EdgyCard
        title={"اضف فرصتك الاستثمارية"}
        content={
          "تحتاج استثمار يكبر وينمي مشروعك بشكل جدا سريع ؟ تقدم الان عبر بوابة سكوبير "
        }
        buttonText={"تقدم الان"}
      />
      <EdgyCard
        title={"استثمر"}
        content={
          "يمكنك استعراض الفرص الاستثمارية التي تناسب طموحك الاستثماري والاستثمار بكل سهولة ويسر"
        }
        buttonText={"إظهار الاستثمارات"}
      />
    </div>
  );
};

export default PagesSection;
