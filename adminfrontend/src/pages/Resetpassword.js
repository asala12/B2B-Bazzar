import React from "react";
import CustomInput from "../components/CustomInput";



const ProviderResetpassword = () => {
  return (
    <div className="py-5" style={{ background: "rgb(240,248,255)", minHeight: "100vh" }}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
          <h3 className="text-center title">Reset Password</h3>
        <p className="text-center"> Please Enter your New Password </p>
      
        <form action="">
          <CustomInput
            type="password"
            label="New password"
            id="pass"
            
          />
          <CustomInput
            type="password"
            label="confirm password"
            id="confirmpass"
            
          />

        
          
         
          <button
            className="border-0 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none fs-5"
            style={{ background: "rgb(50, 105, 139)" }}
            type="submit"
          >
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProviderResetpassword;