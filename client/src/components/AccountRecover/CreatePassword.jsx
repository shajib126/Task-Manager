import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { recoverResetPassRequest } from "../../APIrequest/APIrequest";
import { ErrorToast, isEmpty } from "../../helper/FormHelper";
import { getEmail, getOTP } from "../../helper/SessionHelper";

const CreatePassword = () => {
  let passwordRef,
    confirmPasswordRef = useRef();
  const navigate = useNavigate();

  const resetPass = () => {
    let Password = passwordRef.value;
    let ConfirmPassword = confirmPasswordRef.value;
    if (isEmpty(Password)) {
      ErrorToast("Password Required");
    } else if (isEmpty(ConfirmPassword)) {
      ErrorToast("Confirm Password Required");
    } else if (Password !== ConfirmPassword) {
      ErrorToast("Password & Confirm Password Should be Same");
    } else {
      recoverResetPassRequest(getEmail(), getOTP(), Password).then((result) => {
        if (result === true) {
          navigate("/Login");
        }
      });
    }
  };
  return (
    <div>
      <div className="card-body">
        <h4>SET NEW PASSWORD</h4>
        <br />
        <label>Your email address</label>
        <input
          readOnly={true}
          value={getEmail()}
          placeholder="User Email"
          className="form-control animated fadeInUp"
          type="email"
        />
        <br />
        <label>New Password</label>
        <input
          ref={(input) => (passwordRef = input)}
          placeholder="New Password"
          className="form-control animated fadeInUp"
          type="password"
        />
        <br />
        <label>Confirm Password</label>
        <input
          ref={(input) => (confirmPasswordRef = input)}
          placeholder="Confirm Password"
          className="form-control animated fadeInUp"
          type="password"
        />
        <br />
        <button
          onClick={resetPass}
          className="btn w-100 animated fadeInUp float-end btn-primary"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CreatePassword;
