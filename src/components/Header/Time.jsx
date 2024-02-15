import { useState } from "react";

function Time() {
  const [selectedButton, setSelectedButton] = useState("TODAY");

  const handleClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <div className="absolute top-[36px] left-[724px] w-[472px] h-[44px] bg-[#f9f5f3] rounded-3xl opacity-100 font-normal text-base leading-5 tracking-wider font-montserrat">
      <button
        className={`absolute w-[133px] h-[42px] top-[1px] opacity-100 rounded-full ${
          selectedButton === "TODAY"
            ? "bg-[#ff7f5c] text-white"
            : "hover:bg-[#f7cbb5]"
        }`}
        onClick={() => handleClick("TODAY")}
      >
        TODAY
      </button>
      <button
        className={`absolute w-[133px] h-[42px] left-[170px] t-[50px] opacity-100 rounded-full  ${
          selectedButton === "YESTERDAY"
            ? "bg-[#ff7f5c] text-white"
            : "hover:bg-[#f7cbb5]"
        }`}
        onClick={() => handleClick("YESTERDAY")}
      >
        YESTERDAY
      </button>
      <button
        className={`absolute w-[133px] h-[42px] left-[340px] t-[50px] opacity-100 rounded-full  active:bg-[#ff7f5c] active:text-white ${
          selectedButton === "LAST WEEK"
            ? "bg-[#ff7f5c] text-white"
            : "hover:bg-[#f7cbb5]"
        }`}
        onClick={() => handleClick("LAST WEEK")}
      >
        LAST WEEK
      </button>
    </div>
  );
}

export default Time;
