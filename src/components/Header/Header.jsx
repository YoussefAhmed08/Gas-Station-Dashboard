import ContainerDate from "./ContainerDate";
import ContainerGasAndLast from "./ContainerGasAndLast";
import ContainerTime from "./ContainerTime";

function Header() {
  return (
    <div className="bg-white h-[124px] w-full">
      <ContainerGasAndLast />
      <ContainerTime />
      <ContainerDate />
    </div>
  );
}

export default Header;
