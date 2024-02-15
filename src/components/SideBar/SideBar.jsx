import pms from "../../../public/assets/PMS.png";
import controlroom from "../../../public/assets/control-room.png";
import dashboard from "../../../public/assets/dashboard.png";
import notifications from "../../../public/assets/notifications.png";
import elements from "../../../public/assets/elements.png";
import settings from "../../../public/assets/settings.png";
import logout from "../../../public/assets/logout.png";

function SideBar() {
  return (
    <div>
      <div className="absolute top-0 left-0 w-[115px] h-screen bg-[#FF7F5C] bg-no-repeat bg-origin-padding-box rounded-r-[30px] opacity-100"></div>
      <button className="absolute top-[46px] left-[26px] w-[64px] h-[64px] opacity-100 hover:brightness-125">
        <img src={pms} alt="" />
      </button>
      <div>
        <button className="absolute top-[302px] left-[36px] w-[40px] h-[40px] opacity-100 bg-control-room hover:brightness-125">
          <img src={controlroom} alt="" />
        </button>
        <button className="absolute top-[383px] left-[43px] w-[27px] h-[27px] opacity-100 bg-dashboard hover:brightness-125">
          <img src={dashboard} alt="" />
        </button>
        <button className="absolute top-[452px] left-[40px] w-[33px] h-[33px] opacity-100 bg-elements hover:brightness-125">
          <img src={elements} alt="" />
        </button>
        <button className="absolute top-[525px] left-[34px] w-[44px] h-[44px] opacity-100 bg-settings hover:brightness-125">
          <img src={settings} alt="" />
        </button>
        <button className="absolute top-[610px] left-[34px] w-[44px] h-[44px] opacity-100 bg-notifications hover:brightness-125">
          <img src={notifications} alt="" />
        </button>
      </div>
      <button className="absolute top-[850px] left-[35px] w-[44px] h-[44px] opacity-100 bg-logout hover:brightness-125">
        <img src={logout} alt="" />
      </button>
    </div>
  );
}

export default SideBar;
