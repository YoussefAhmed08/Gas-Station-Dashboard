import { useState } from "react";

import coloredGasStation from "../../../public/assets/colored-gas-station-svgrepo-com.png";

function StationDetails() {
  const [isVisible, setIsVisible] = useState(false);

  function toggleVisibility() {
    setIsVisible(!isVisible);
    console.log("clicked");
  }

  return (
    <div className="relative z-[1] mb-[20px] w-[1200px] rounded-[16px] h-[193px] bg-white opacity-100">
      <i className="absolute top-[50px] left-[20px] w-[12px] h-[12px] bg-[#FF7F5C] opacity-100 rounded-full"></i>
      <img
        src={coloredGasStation}
        alt="colored-gas-station"
        className="absolute top-[29px] left-[40px] w-[39px] h-[32px] bg-transparent bg-cover bg-no-repeat"
      />
      <span className="absolute top-[40px] left-[100px] w-[256px] h-[44px] text-left font-bold text-base leading-[22px] font-montserrat tracking-wider text-[#3D5161] uppercase opacity-100">
        STATION NAME
      </span>
      <span className="absolute top-[50px] left-[25px] h-[20px] w-[1153px] border-b-2 border-solid border-[#B2BEC39B] opacity-100"></span>
      <button
        className="absolute w-[24px] h-[24px] left-[1142px] text-5xl"
        onClick={toggleVisibility}
      >
        ...
      </button>
      {isVisible && (
        <div className="absolute inset-0 z-999 top-[50px] left-[695px] w-[480px] h-[128px] bg-white shadow-md opacity-100">
          <span className="absolute top-[12px] left-[20px] w-[110px] h-[15px] text-center font-semibold text-sm leading-4 text-black opacity-100">
            View Properties:
          </span>
          <span className="absolute top-[16px] left-[13px] h-[20px] w-[460px] border-b-2 border-solid border-[#B2BEC39B] opacity-100"></span>
          <div className="absolute top-[40px] left-[20px] w-[110px] h-[15px] text-center font-semibold text-xs leading-4 font-nunito tracking-tight text-black opacity-100">
            <label class="checkbox-container">
              <input type="checkbox" id="myCheckbox" />
              <span class="checkmark"></span>
              Total sales
            </label>
          </div>
          <div className="absolute top-[70px] left-[20px] w-[150px] h-[15px] text-center font-semibold text-xs leading-4 font-nunito tracking-tight text-black opacity-100">
            <label class="checkbox-container">
              <input type="checkbox" id="myCheckbox" />
              <span class="checkmark"></span>
              Total trasaction
            </label>
          </div>
          <div className="absolute top-[100px] left-[20px] w-[150px] h-[15px] text-center font-semibold text-xs leading-4 font-nunito tracking-tight text-black opacity-100">
            <label class="checkbox-container">
              <input type="checkbox" id="myCheckbox" />
              <span class="checkmark"></span>
              Total value
            </label>
          </div>
          <div className="absolute top-[40px] left-[200px] w-[280px] h-[15px] text-center font-semibold text-xs leading-3 font-nunito tracking-tight text-black opacity-100">
            <label class="checkbox-container">
              <input type="checkbox" id="myCheckbox" />
              <span class="checkmark"></span>
              Max transaction count per hour
            </label>
          </div>
          <div className="absolute top-[70px] left-[200px] w-[280px] h-[15px] text-center font-semibold text-xs leading-3 font-nunito tracking-tight text-black opacity-100">
            <label class="checkbox-container">
              <input type="checkbox" id="myCheckbox" />
              <span class="checkmark"></span>
              Max transaction count date-time
            </label>
          </div>
          <div className="absolute top-[100px] left-[200px] w-[280px] h-[15px] text-center font-semibold text-xs leading-3 font-nunito tracking-tight text-black opacity-100">
            <label class="checkbox-container">
              <input type="checkbox" id="myCheckbox" />
              <span class="checkmark"></span>
              Compressor status
            </label>
          </div>
        </div>
      )}
      <div className="absolute w-[256px] h-[21px] flex">
        <span className="absolute top-[100px] left-[50px] w-[66px] h-[15px] text-center font-bold text-xs leading-[15px] font-montserrat tracking-tight text-[#3D5161] opacity-100">
          Total Sales
        </span>
        <div className="absolute w-[72px] h-[21px]">
          <span className="absolute top-[96px] left-[200px] w-[42px] h-[18px] text-center font-medium text-base leading-[18px] font-montserrat tracking-normal text-[#3D5161] opacity-100">
            62,721
          </span>
          <span className="absolute top-[98px] left-[260px] w-[12px] h-[14px] text-center font-medium text-base leading-[14px] font-montserrat tracking-normal text-[#3D5161] opacity-100">
            m³
          </span>
        </div>
        <div className="w-[283px] h-[18px] opacity-100 absolute flex">
          <span className="absolute top-[98px] left-[400px] w-[118px] h-[15xp] text-center font-bold text-xs leading-[15px] font-montserrat tracking-normal text-[#3D5161] opacity-100">
            Compression State
          </span>
          <span className="absolute top-[96px] left-[600px] w-[94px] h-[18px] text-center font-medium text-base leading-[18px] font-montserrat tracking-normal text-[#3D5161] opacity-100">
            Compression
          </span>
        </div>
        <div
          className={`w-[283px] h-[18px] ${
            isVisible === true ? "opacity-0" : "opacity-100"
          } z-999 absolute  flex`}
        >
          <span className="absolute top-[98px] left-[800px] w-[144px] h-[15px] text-center font-bold text-xs leading-[15px] font-montserrat tracking-normal text-[#3D5161] opacity-100 z-0">
            Max Transaction / hour
          </span>
          <span className="absolute top-[96px] left-[1000px] w-[18px] h-[18px] text-center font-medium text-base leading-[18px] font-montserrat tracking-normal text-[#3D5161] opacity-100">
            20
          </span>
        </div>
        <div className="flex absolute w-[247px] h-[18px] opacity-100">
          <span className="absolute top-[146px] left-[50px] w-[66px] h-[15px] text-center font-bold text-xs leading-[15px] font-montserrat tracking-tight text-[#3D5161] opacity-100">
            Total Value
          </span>
          <span className="absolute top-[143px] left-[200px] w-[26px] h-[18px] text-center font-medium text-base leading-[18px] font-montserrat tracking-normal text-[#3D5161] opacity-100">
            550
          </span>
          <span className="absolute top-[146px] left-[250px] w-[24px] h-[14px] text-center font-medium text-xs leading-[14px] font-montserrat tracking-normal text-[#3D5161] opacity-100">
            EGP
          </span>
        </div>
        <div className="flex absolute w-[247px] h-[18px] opacity-100">
          <span className="absolute top-[146px] left-[390px] w-[146px] h-[30px] text-center font-bold text-base leading-4 text-#3D5161 opacity-100">
            Total Transaction Count
          </span>
          <span className="absolute top-[146px] left-[600px] w-[28px] h-[18px] text-center font-medium text-base leading-5 text-#3D5161 opacity-100">
            5161
          </span>
        </div>
        <div
          className={`flex w-[318px] h-[18px] ${
            isVisible === true ? "opacity-0" : "opacity-100"
          }`}
        >
          <span className="absolute top-[146px] left-[788px] w-[207px] h-[15px] text-center font-medium text-sm leading-5 text-#3D5161 opacity-100">
            Max Transaction Date-Time
          </span>
          <span className="absolute top-[146px] left-[990px] w-[150px] h-[18px] text-center font-medium text-base leading-5 text-#3D5161 opacity-100">
            8-1-2021 | 10:16 PM
          </span>
        </div>
      </div>
    </div>
  );
}

export default StationDetails;
