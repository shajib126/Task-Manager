import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { recoverVerifyEmailRequest } from "../../APIrequest/APIrequest";
import { ErrorToast, isEmail } from "../../helper/FormHelper";

const SendOTP = () => {
  let emailRef = useRef();
  const navigate = useNavigate();
  const verifyEmail = () => {
    let email = emailRef.value;
    if (!isEmail) {
      ErrorToast("valid email Address Required!");
    } else {
      recoverVerifyEmailRequest(email).then((result) => {
        if (result) {
          navigate("/verifyOTP");
        }
      });
    }
  };
  return (
    <>
      <div className="card-body">
        <h4>EMAIL ADDRESS</h4>
        <br />
        <label>Your email address</label>
        <input
          ref={(input) => (emailRef = input)}
          placeholder="User Email"
         
          type="email"
        />
        <br />
        <button
          onClick={verifyEmail}
         
        >
          Next
        </button>
      </div>
    </>
  );
};

export default SendOTP;
