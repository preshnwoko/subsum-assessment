import "./index.scss";
import dashboardImg from "../../assets/png/dash.png";
import CustomButton from "../../components/customButton";
import CopyIcon from "../../assets/svg/copyIcon";
import EditIcon from "../../assets/svg/editIcon";
import ShareIcon from "../../assets/svg/shareIcon";
import WalletIcon from "../../assets/svg/walletIcon";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const naviagte = useNavigate();
  return (
    <div className="dashboard">
      <div className="dashboard_left">
        <div className="wallet">
          <div className="balance">
            <p>Wallet Balance</p>
            <p className="amt">₦3000</p>
          </div>
          <CustomButton text="Fund wallet" style={{ width: 194 }} />
        </div>
        <div className="referral">
          <p>Referral</p>
          <p>
            Referral Code: <strong>18/52ha089</strong>
          </p>
          <div className="actions">
            <button>
              <CopyIcon />
              <span>Copy</span>
            </button>
            <button onClick={() => naviagte("/dashboard/_/edit")}>
              <EditIcon />
              <span>Edit</span>
            </button>
            <button>
              <ShareIcon />
              <span>Share</span>
            </button>
          </div>
        </div>
        <div className="referral_count">
          <div className="referral_count_top">
            <div className="referral_count_top_left">
              <p>Total referrals made</p>
              <p className="amt">0</p>
            </div>
            <div className="referral_count_top_right">
              <p>Current wallet Bonus</p>
              <p className="amt">₦0.00</p>
            </div>
          </div>
          <div className="actions">
            <button>
              <WalletIcon />
              <span>Cashout</span>
            </button>
          </div>
        </div>
      </div>
      <div className="dashboard_right">
        <img src={dashboardImg} alt="" />
      </div>
    </div>
  );
};
export default Dashboard;
