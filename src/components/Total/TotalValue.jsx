function TotalValue(props) {
  return (
    <>
      <div className="bg-[#F4DBD4] absolute top-[207px] left-[207px] w-[269px] h-[163px] bg-no-repeat bg-origin-padding-box rounded-2xl opacity-100"></div>
      <div className="absolute top-[236px] left-[242px] w-[123px] h-[53px] text-left text-[40px] leading-[53px] font-normal text-#3D5161 opacity-100">
        {props.num}
      </div>
      <span className="absolute top-[248px] left-[371px] w-[61px] h-[29px] text-left text-[22px] leading-[29px] font-normal text-#3D5161 opacity-100">
        {props.unit}
      </span>
      <span className="absolute top-[287px] left-[242px] w-[123px] h-[20px] text-left text-[17px] leading-[20px] font-bold text-#3D5161 opacity-100">
        {props.name}
      </span>
      <i className="arrow down absolute top-[326px] left-[242px] w-[15px] h-[9px] transform -rotate-x-180 bg-#FF7F5C bg-no-repeat bg-origin-padding-box opacity-100"></i>
      <span className="absolute top-[319px] left-[266px] w-[35px] h-[21px] text-left text-[16px] leading-[21px] font-normal text-[#FF7F5C] opacity-100">
        {props.precent}
      </span>
    </>
  );
}

export default TotalValue;
