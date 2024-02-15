import { useState } from "react";

import StationDetails from "./StationDetails";
import StationDetailsBlackAndWhite from "./StationDetailsBlackAndWhite";

import {
  Bar,
  BarChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function GraphAndList() {
  const [selectedButton, setSelectedButton] = useState("graph");

  function handleButton(buttonName) {
    setSelectedButton(buttonName);
  }

  const data = [
    { name: "Station 1", value: 250 },
    { name: "Station 2", value: 160 },
    { name: "Station 3", value: 200 },
    { name: "Station 4", value: 230 },
    { name: "Station 5", value: 140 },
  ];

  return (
    <>
      <div className="absolute top-[421px] left-[1099px] flex bg-white bg-no-repeat bg-origin-padding-box rounded-3xl opacity-100">
        <button
          onClick={() => handleButton("graph")}
          className={`${
            selectedButton === "graph" ? "bg-[#FF7F5C] text-white" : ""
          } flex items-center t-[424px] left-[1102px] w-[147px] h-[40px] opacity-100 bg-no-repeat bg-origin-padding-box rounded-3xl`}
        >
          <i className="fa-sharp fa-solid fa-chart-simple mr-3 ml-8"></i>
          <span className="tracking-widest">GRAPH</span>
        </button>
        <button
          onClick={() => handleButton("list")}
          className={`${
            selectedButton === "list" ? "bg-[#FF7F5C] text-white" : ""
          } top-[424px] left-[1260px] w-[145px] h-[39px] bg-no-repeat bg-origin-padding-box rounded-3xl opacity-100`}
        >
          <i className="fa-solid fa-list mr-4"></i>
          <span className="tracking-widest">LIST</span>
        </button>
      </div>
      {selectedButton === "graph" && (
        <>
          <div className="absolute top-[543px] left-[207px] w-[1200px] h-[380px] bg-white opacity-100 rounded-xl"></div>
          <div className="absolute top-[668px] left-[264px] w-[1082px] h-[233px] opacity-100">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart width={5} height={3} data={data}>
                <XAxis dataKey="name" />
                <YAxis
                  unit=""
                  domain={[50, 300]}
                  ticks={[100, 150, 200, 250, 300]}
                />
                <Tooltip />
                <ReferenceLine y={100} stroke="#B2BEC39B" strokeLinecap="3" />
                <ReferenceLine y={150} stroke="#B2BEC39B" strokeLinecap="3" />
                <ReferenceLine y={200} stroke="#B2BEC39B" strokeLinecap="3" />
                <ReferenceLine y={250} stroke="#B2BEC39B" strokeLinecap="3" />
                <ReferenceLine y={300} stroke="#B2BEC39B" strokeLinecap="3" />
                <Bar dataKey="value" barSize={20} fill="#FF7F5C" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="absolute top-[580px] left-[236px] w-[282px] h-[15px] text-left font-bold text-xs leading-[15px] tracking-wider text-[#3D5161] uppercase opacity-100">
            STATIONS ACTIVATES OVERVIEW
          </p>
          <div className="absolute top-[576px] left-[917px] w-[61px] h-[34px] opacity-100"></div>
          <p className="absolute top-[576px] left-[924px] w-[47px] h-[18px] text-left font-bold text-base leading-[18px] text-[#FF7F5C] uppercase opacity-100">
            Sales
          </p>
          <p className="absolute top-[576px] left-[1017px] w-[105px] h-[36px] text-left font-bold text-base leading-[18px] text-[#3D5161] uppercase opacity-100">
            TRANSACTION
          </p>
          <p className="absolute top-[576px] left-[1162px] w-[49px] h-[36px] text-left font-bold text-base leading-[18px] text-[#3D5161] uppercase opacity-100">
            VALUE
          </p>
          <p className="absolute top-[577px] left-[1251px] w-[111px] h-[18px] text-left font-bold text-base leading-[18px] text-[#3D5161] uppercase opacity-100">
            COMPRESSION
          </p>
          <span className="absolute top-[610px] left-[236px] w-[1153px] h-0 border border-solid border-[#E0E7F1] opacity-100"></span>
        </>
      )}
      {selectedButton === "list" && (
        <>
          <div className="absolute top-[516px] left-[209px] w-[1200px] h-[420px] scroll overflow-y-auto overflow-x-hidden opacity-100">
            <StationDetails />
            <StationDetails />
            <StationDetails />
            <StationDetailsBlackAndWhite />
            <StationDetailsBlackAndWhite />
            <StationDetailsBlackAndWhite />
          </div>
        </>
      )}
    </>
  );
}

export default GraphAndList;
