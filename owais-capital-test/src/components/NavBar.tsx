import React from "react";
import Logo from "../assets/Logo.png";

const NavBar = () => {
  return (
    <nav className="flex h-[116px] bg-[rgba(100,106,109,0.7)] w-full z-20">
      <div className="flex items-center">
        <div className="flex items-center">
          <div className="dropdown border-[2px] rounded-full ml-8 z-20">
            <button
              className="btn btn-secondary dropdown-toggle outline-none rounded-full w-[30px] h-[30px] px-2 z-20"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            ></button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="/">
                  English
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  العربية
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Espanol
                </a>
              </li>
            </ul>
          </div>
          <div className="mx-[15px] w-[72px] text-[25px] text-white">
            العربية
          </div>
        </div>
        <button
          type="button"
          className="btn btn-primary h-[54px] px-[24px] mx-[15px] border-none bg-[#04989E] w-[177px] text-[25px] rounded-[20px] z-20 text-center py-auto"
        >
          التسجيل
        </button>
        <button
          type="button"
          className="btn btn-outline-light h-[54px] px-[24px] mx-[15px] w-[202px] text-[25px] rounded-[20px] z-20 text-center py-auto"
        >
          تسجيل الدخول
        </button>
      </div>
      <div className="flex items-center justify-end w-full">
        <div className="flex items-center">
          <div className="text-white border-b-white border-b-[2px] mx-[30px] text-[25px] cursor-pointer z-20">
            أخبار صناديقنا
          </div>
          <div className="text-white border-b-white border-b-[2px] mx-[30px] text-[25px] cursor-pointer z-20">
            مركز المساعدة
          </div>
          <div className="text-white border-b-white border-b-[2px] mx-[30px] text-[25px] cursor-pointer z-20">
            الفرص الاستثمارية
          </div>
          <div className="text-white border-b-white border-b-[2px] mx-[30px] text-[25px] cursor-pointer z-20">
            اضف فرصتك
          </div>
          <div className="text-white border-b-white border-b-[2px] mx-[30px] text-[25px] cursor-pointer z-20">
            استثمر
          </div>
        </div>
        <div className="flex items-center cursor-pointer z-20">
          <img className="w-[230px] mt-4" src={Logo} alt="Logo" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
