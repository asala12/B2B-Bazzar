import React from "react";
import CustomInput from "../components/CustomInput";



const Providerforgotpassword = () => {
  return (
    <div className="py-5" style={{ background: "rgb(240,248,255)", minHeight: "100vh" }}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
        <h3 className="text-center title">Forgot Password</h3>
        <p className="text-center"> Please Enter your Email to Reset your Password</p>
      
        <form action="">
          <CustomInput
            type="text"
            label="Email Address"
            id="email"
            
          />

        
          
         
          <button
            className="border-0 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none fs-5"
            style={{ background: "rgb(50, 105, 139)" }}
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Providerforgotpassword;