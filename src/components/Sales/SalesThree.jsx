import blackGasStation from "../../../public/assets/black-gas-station-svgrepo-com.png";

function SalesThree() {
  return (
    <>
      <img
        src={blackGasStation}
        alt="colored-gas-station"
        className="absolute top-[837px] left-[1551px] w-[39px] h-[32px] bg-transparent bg-no-repeat bg-cover"
      />
      <span className="absolute top-[844px] left-[1602px] w-[114px] h-[19px] text-center font-bold text-base leading-5 text-[#3D5161] opacity-100">
        Station Name
      </span>
      <span className="absolute top-[841px] left-[1743px] w-[79px] h-[30px] text-center font-bold letter-spacing-0 text-[#B9CDE2] opacity-100">
        NM
      </span>
      <input
        disabled
        className="absolute top-[884px] left-[1551px] w-[297px] h-[6px] bg-[#B9CDE2] border-[#B9CDE2] border-6 border-solid rounded-20 opacity-100"
      />
    </>
  );
}

export default SalesThree;
