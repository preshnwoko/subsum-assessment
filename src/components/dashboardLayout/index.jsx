import "./index.scss";
import logo from "../../assets/png/logo.png";
import { dashboardLinks } from "../../utils/links";
import { Link, Outlet, useLocation } from "react-router-dom";
import ProfileCircle from "../../assets/svg/profileCircle";
import NotificationCircle from "../../assets/svg/notificationCircle";
import MtnIcon from "../../assets/svg/mtnIcon";
import AirtelIcon from "../../assets/svg/airtelIcon";
import EtisalatIcon from "../../assets/svg/etisalatIcon";
import ArrowRight from "../../assets/svg/arrowRight";

const DashboardLayout = () => {
  const { pathname } = useLocation();
  return (
    <div className="dashboard_layout">
      <div className="dashboard_layout_left">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="dashboard_links">
          {dashboardLinks?.map((linkItem, idx) => (
            <>
              <Link
                key={idx}
                to={!linkItem?.link.includes(" ") && linkItem?.link}
                className={pathname.includes(linkItem?.link) ? "active" : ""}
              >
                <linkItem.icon
                  color={
                    window.location.href.includes(linkItem?.link) ? false : true
                  }
                />
                <span>{linkItem?.title}</span>
              </Link>
              {linkItem?.title.includes("Cash") &&
                pathname.includes("cash") && (
                  <div className="below">
                    <MtnIcon />
                    <AirtelIcon />
                    <EtisalatIcon />
                    <span>
                      More <ArrowRight />
                    </span>
                  </div>
                )}
            </>
          ))}
        </div>
      </div>
      <div className="dashboard_layout_right">
        <div className="dashboard_header">
          <p>
            {((pathname.includes("_") || pathname.includes("edit")) &&
              "Welcome, Lawal Wahab") ||
              (pathname.includes("help") && "Help And Support") ||
              (pathname.includes("airtime") && "Airtime to Cash") ||
              (pathname.includes("history") && "Transaction History")}
          </p>
          <div className="dashboard_header_right">
            <Link>Upgrade To Merchant</Link>
            <NotificationCircle />
            <ProfileCircle />
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};
export default DashboardLayout;
