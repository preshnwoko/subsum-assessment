import "./index.scss";
import img from "../../assets/png/img.png";
import CameraIcon from "../../assets/svg/cameraIcon";
import CopyIcon from "../../assets/svg/copyIcon";
import { useState } from "react";
import CustomButton from "../../components/customButton";

const Edit = () => {
  const userData = {
    Name: "Lawal Wahab Babatunde",
    Email: "wabdotmail@gmail.com",
    "Phone Number": "0906 856 2949",
    "Account Status": "Active",
    "Referral link": "www.subsum.com/tre/wd...",
  };

  const [tab, setTab] = useState("password");
  return (
    <div className="edit">
      <div className="edit_inner">
        <div className="edit_left">
          <div className="edit_left_top">
            <img src={img} alt="" />
            <button className="img_action">
              <CameraIcon />
              <span>Upload Image</span>
            </button>
          </div>
          <div className="edit_left_bottom">
            {Object.keys(userData)?.map((data, idx) => (
              <div key={idx} className="user_item">
                <p>{data}</p>
                <p
                  style={{
                    color:
                      userData[data] === "Active" && "rgba(45, 174, 50, 1)",
                  }}
                >
                  <strong>{userData[data]}</strong>
                </p>
              </div>
            ))}
            <button className="copy" style={{ marginBottom: 10 }}>
              <CopyIcon />
              <span>Copy</span>
            </button>
            <button className="copy" style={{ marginLeft: "0" }}>
              <span>Edi details</span>
            </button>
          </div>
        </div>
        <div className="edit_right">
          <div className="edit_right_header">
            <div
              className={`tab ${tab === "password" ? "active" : ""}`}
              onClick={() => setTab("password")}
            >
              <span>Change Password</span>
            </div>
            <div
              className={`tab ${tab !== "password" ? "active" : ""}`}
              onClick={() => setTab("")}
            >
              <span>Change PIN</span>
            </div>
          </div>
          {tab === "password" ? (
            <form
              className="password_form"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="">
                <p>Current Password</p>
                <input type="password" placeholder="Enter Current Password" />
              </label>
              <label htmlFor="">
                <p>New Password</p>
                <input type="password" placeholder="Enter New Password" />
              </label>
              <label htmlFor="">
                <p>Confirm New Password</p>
                <input type="password" placeholder="Enter New Password" />
              </label>
              <CustomButton
                text="Submit"
                style={{ background: "rgba(65, 105, 225, .5)" }}
              />
            </form>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};
export default Edit;
