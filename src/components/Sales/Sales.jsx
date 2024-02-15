import blackGasStation from "../../../public/assets/black-gas-station-svgrepo-com.png";

function Sales() {
  return (
    <>
      <span className="absolute top-[529px] left-[1597px] w-[167px] h-[24px] text-left font-bold text-[20px] leading-24 font-montserrat tracking-normal text-#3D5161 opacity-100">
        Sales by Station
      </span>
      <img
        src={blackGasStation}
        alt="colored-gas-station"
        className="absolute top-[633px] left-[1551px] w-[39px] h-[32px] bg-transparent bg-no-repeat bg-cover"
      />
      <span className="absolute top-[640px] left-[1602px] w-[114px] h-[19px] text-center font-bold text-base leading-5 text-[#3D5161] opacity-100">
        Station Name
      </span>
      <span className="absolute top-[637px] left-[1743px] w-[79px] h-[30px] text-center font-bold letter-spacing-0 text-[#3D5161] opacity-100">
        62,721m³
      </span>
      <input
        disabled
        className="absolute top-[680px] left-[1551px] w-[297px] h-[6px] bg-[#F4DBD4] border-[#F4DBD4] border-6 border-solid rounded-20 opacity-100"
      />
      <span className="absolute top-[680px] left-[1551px] w-[121px] h-[6px] bg-[#FF7F5C] border-[#FF7F5C] rounded-3xl opacity-100 border border-solid"></span>
    </>
  );
}

export default Sales;
