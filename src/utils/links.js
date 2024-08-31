import AirtimeIcon from "../assets/svg/airtime";
import DashboardIcon from "../assets/svg/dashboard";
import DataIcon from "../assets/svg/dataIcon";
import HelpIcon from "../assets/svg/help";
import LightIcon from "../assets/svg/lightIcon";
import PhoneIcon from "../assets/svg/phoneIcon";
import TransactionHistory from "../assets/svg/transaction";
import TvIcon from "../assets/svg/tvIcon";

export const dashboardLinks = [
  {
    title: "Dashboard",
    icon: DashboardIcon,
    link: "/dashboard/_",
  },
  {
    title: "Buy Airtime",
    icon: PhoneIcon,
    link: " ",
  },
  {
    title: "Buy Data",
    icon: DataIcon,
    link: " ",
  },
  {
    title: "TV Subscription",
    icon: TvIcon,
    link: " ",
  },
  {
    title: "Pay Electric Bill",
    icon: LightIcon,
    link: " ",
  },
  {
    title: "Airtime to Cash",
    icon: AirtimeIcon,
    link: "/dashboard/airtime-to-cash",
  },
  {
    title: "Transaction History",
    icon: TransactionHistory,
    link: "/dashboard/history",
  },
  {
    title: "Help & Support",
    icon: HelpIcon,
    link: "/dashboard/help",
  },
];
