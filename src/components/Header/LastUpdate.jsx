import refresh from "../../../public/assets/icons8-refresh-80.png";

function LastUpdate() {
  return (
    <>
      <div className="absolute top-[67px] left-[441px] w-[10px] h-[10px] bg-[#FF7F5C] opacity-100 rounded-full"></div>
      <img
        src={refresh}
        alt="refresh-icon"
        className="absolute top-[46px] left-[452px] w-[43px] h-[43px] bg-transparent bg-cover bg-no-repeat"
      />
      <span className="absolute top-[52px] left-[506px] w-[53px] h-[43px] text-left text-3xl font-normal leading-6 text-roboto opacity-100 text-[#3D5161]">
        20s
      </span>
      <span className="absolute top-[49px] left-[573px] w-[61px] h-[37px] text-left text-xs font-normal leading-2 text-roboto opacity-100 text-[#3D5161]">
        Last Update
      </span>
    </>
  );
}

export default LastUpdate;
