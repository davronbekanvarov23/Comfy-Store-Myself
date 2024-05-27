import React from "react";

function FormInput({ label, type, defaoultValue, name }) {
  return (
    <div className=" form-control">
      <label className=" label">
        <span className=" label-text capitalize">{label}</span>
      </label>
      <input
        type={type}
        defaultValue={defaoultValue}
        name={name}
        className="input input-bordered"
      />
    </div>
  );
}

export default FormInput;
