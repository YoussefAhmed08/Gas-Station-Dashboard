import coloredGasStation from "../../../public/assets/colored-gas-station-svgrepo-com.png";

function GasStation() {
  return (
    <>
      <div className="absolute top-[69px] left-[193px] w-[10px] h-[10px] bg-[#FF7F5C] opacity-100 rounded-full"></div>

      <img
        src={coloredGasStation}
        alt="colored-gas-station"
        className="absolute top-[46px] left-[215px] w-[39px] h-[32px] bg-transparent bg-cover bg-no-repeat"
      />
      <span className="absolute top-[48px] left-[272px] w-[53px] h-[43px] text-left text-3xl font-normal leading-6 text-roboto opacity-100 text-[#3D5161]">
        2/3
      </span>
      <span className="absolute top-[45px] left-[328px] w-[61px] h-[37px] text-left text-xs font-normal leading-2 text-roboto opacity-100 text-[#3D5161]">
        Monitored Stations
      </span>
    </>
  );
}

export default GasStation;
