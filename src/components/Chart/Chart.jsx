import React, { PureComponent } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
function Chart() {
  const data = [
    {
      subject: "24:00",
      A: 100,
      B: 70,
      fullMark: 150,
    },
    {
      subject: "02:00",
      A: 145,
      B: 60,
      fullMark: 150,
    },
    {
      subject: "04:00",
      A: 80,
      B: 40,
      fullMark: 150,
    },
    {
      subject: "06:00",
      A: 80,
      B: 50,
      fullMark: 150,
    },
    {
      subject: "08:00",
      A: 85,
      B: 70,
      fullMark: 150,
    },
    {
      subject: "10:00",
      A: 90,
      B: 80,
      fullMark: 150,
    },
    {
      subject: "12:00",
      A: 120,
      B: 85,
      fullMark: 150,
    },
    {
      subject: "14:00",
      A: 80,
      B: 60,
      fullMark: 150,
    },
    {
      subject: "16:00",
      A: 50,
      B: 40,
      fullMark: 150,
    },
    {
      subject: "18:00",
      A: 70,
      B: 90,
      fullMark: 150,
    },
  ];

  return (
    <>
      <span className="absolute top-[150px] left-[1637px] w-[130px] h-[24px] text-left font-bold text-[20px] leading-[24px] text-montserrat tracking-normal text-#3D5161 opacity-100">
        Hourly Sales
      </span>
      <div className="absolute top-[120px] left-[1544px] w-[312px] h-[350px] opacity-100 mt-20">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid ticks={6} />
            <PolarAngleAxis dataKey="subject" />
            <Radar
              dataKey="A"
              stroke="#00CBC0"
              fill="#00CBC033"
              fillOpacity={0.6}
              strokeWidth={2}
              isAnimationActive={true}
              strokeLinecap="round" // Add this for smoother line ends
            />
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <Radar
              dataKey="B"
              stroke="#009ACF"
              fill="#009ACF33"
              fillOpacity={0.6}
              strokeWidth={2}
              isAnimationActive={true}
              strokeLinecap="round" // Add this for smoother line ends
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
export default Chart;
