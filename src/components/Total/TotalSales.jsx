function TotalSales(props) {
  return (
    <>
      <div
        className={`absolute top-[202px] left-[518px] w-[269px] h-[168px] bg-white bg-no-repeat bg-origin-padding-box rounded-2xl opacity-100`}
      ></div>
      <div className="absolute top-[232px] left-[553px] w-[127px] h-[53px] text-left text-[40px] leading-53 font-normal text-#3D5161 opacity-100">
        {props.num}
      </div>
      <span className="absolute top-[250px] left-[680px] w-[19px] h-[29px] text-left text-[22px] leading-29 font-normal text-#3D5161 opacity-100">
        {props.unit}
      </span>
      <span className="absolute top-[285px] left-[553px] w-[201px] h-[20px] text-left text-[17px] font-bold leading-20 font-montserrat text-#3D5161 opacity-100">
        {props.name}
      </span>
      <i className="arrow up absolute top-[317px] left-[553px] w-[15px] h-[9px] bg-no-repeat bg-origin-padding-box opacity-100"></i>
      <span className="absolute top-[321px] left-[577px] w-[115px] h-[21px] text-left text-[16px] leading-[21px] font-normal text-#00CBC0 opacity-100">
        {props.precent}
      </span>
    </>
  );
}

export default TotalSales;
