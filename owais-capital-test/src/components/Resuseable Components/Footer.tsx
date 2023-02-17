import React from "react";
import Logo from "../../assets/Logos/Logo.png";
import Social1 from "../../assets/Social/Social1.png";
import Social2 from "../../assets/Social/Social2.png";
import Social3 from "../../assets/Social/Social3.png";
import Social4 from "../../assets/Social/Social4.png";

const Footer = () => {
  return (
    <div className="h-[655px] w-full bg-[#03989E] flex justify-between items-center border-b-[16px] border-b-[#616161]">
      <div className="w-[45%] flex flex-col justify-center items-start">
        <img className="w-[400px] h-[200px]" src={Logo} alt="" />
        <h2 className="text-white text-[39px] ml-[150px] -mt-[30px]">
          تعطيك فرصة
        </h2>
        <div className="flex ml-[50px] mt-[40px]">
          <div className="bg-[#616161] w-[88px] h-[84px] rounded-[16px] mr-[20px] flex items-center justify-center">
            <img src={Social1} alt="" />
          </div>
          <div className="bg-[#616161] w-[88px] h-[84px] rounded-[16px] mr-[20px] flex items-center justify-center">
            <img src={Social2} alt="" />
          </div>
          <div className="bg-[#616161] w-[88px] h-[84px] rounded-[16px] mr-[20px] flex items-center justify-center">
            <img src={Social3} alt="" />
          </div>
          <div className="bg-[#616161] w-[88px] h-[84px] rounded-[16px] mr-[20px] flex items-center justify-center">
            <img src={Social4} alt="" />
          </div>
        </div>
        <p className="mt-[180px] text-white text-[24px] ml-[130px]">
          All rights reserved , 2023
        </p>
      </div>
      <div className="w-[55%] flex items-start justify-between mr-[100px]">
        <div className="flex flex-col items-end">
          <h2 className="text-white text-[30px] mb-[15px]">المستثمرين</h2>
          <p className="text-white text-[25px] mb-[15px]">البدء</p>
        </div>
        <div className="flex flex-col items-end">
          <h2 className="text-white text-[35px] leading-[36px] mb-[15px]">
            اصدار الصكوك
          </h2>
          <p className="text-white text-[24px] leading-[30px] mb-[15px]">
            رسوم اصدار الصكوك
          </p>
          <p className="text-white text-[24px] leading-[30px] mb-[15px]">
            رسوم الوكالة
          </p>
          <p className="text-white text-[24px] leading-[30px] mb-[15px]">
            إرشادات اصدار ادوات الدين
          </p>
          <h2 className="text-white text-[35px] leading-[36px] mb-[15px] mt-[160px]">
            الشروط والأحكام
          </h2>
          <p className="text-white text-[24px] leading-[30px] mb-[15px]">
            شروط اصدر الصكوك
          </p>
          <p className="text-white text-[24px] leading-[30px] mb-[15px]">
            شروط رسوم الوكالة
          </p>
        </div>
        <div className="flex flex-col items-end">
          <h2 className="text-white text-[35px] leading-[36px] mb-[15px]">
            آويس المالية تعطيك فرصة
          </h2>
          <p className="text-white text-[24px] leading-[30px] mb-[15px]">
            حول آويس المالية
          </p>
          <p className="text-white text-[24px] leading-[30px] mb-[15px]">
            الوظائف
          </p>
          <p className="text-white text-[24px] leading-[30px] mb-[15px]">
            شركاؤنا
          </p>
          <p className="text-white text-[24px] leading-[30px] mb-[15px]">
            صحافة
          </p>
          <p className="text-white text-[24px] leading-[30px] mb-[15px]">
            تواصل معنا
          </p>
          <h2 className="text-white text-[35px] leading-[36px] mb-[15px] mt-[70px]">
            المزيد من المعلومات
          </h2>
          <p className="text-white text-[24px] leading-[30px] mb-[15px]">
            استثمارات ممولة بنجاح
          </p>
          <p className="text-white text-[24px] leading-[30px] mb-[15px]">
            أسئلة رواد الأعمال الشائعة
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
