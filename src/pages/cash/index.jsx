import { useState } from "react";
import "./index.scss";
import CustomButton from "../../components/customButton";
import EtisalatSolo from "../../assets/svg/etisalatSolo";
import ArrowDown from "../../assets/svg/arrowDown";

const AirtimeToCash = () => {
  const [tab, setTab] = useState("info");
  return (
    <div className="airtime_to_cash">
      <div className="airtime_to_cash_inner">
        <div className="airtime_to_cash_inner_head">
          <div className={`tab ${tab === "info" ? "active" : ""}`}>
            <p>Fill Info</p>
            <div className="line"></div>
          </div>
          <div className="tab">
            <p>Make Payment</p>
            <div className="line"></div>
          </div>
          <div className="tab">
            <p>View Receipt</p>
            <div className="line"></div>
          </div>
        </div>
        <form
          action=""
          className="airtime_to_cash_form"
          onSubmit={(e) => e.preventDefault()}
        >
          <h1>Airtime to Cash</h1>

          <div className="two">
            <label htmlFor="">
              <p>Select Network</p>
              <div className="dropdown">
                <EtisalatSolo /> <span>Etisalat</span>{" "}
                <span className="down">
                  <ArrowDown />
                </span>
              </div>
            </label>
            <label htmlFor="">
              <p>Phone Number</p>
              <input type="tel" placeholder="08094562627" />
            </label>
          </div>
          <label htmlFor="">
            <p>Amount</p>
            <input type="tel" placeholder="₦5,000" />
          </label>
          <label htmlFor="">
            <p>Airtime Share Pin</p>
            <input type="tel" placeholder="3546576433" />
          </label>
          <CustomButton text="Proceed" style={{ marginTop: 50 }} />
        </form>
      </div>
    </div>
  );
};
export default AirtimeToCash;
