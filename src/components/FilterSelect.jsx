import React from "react";

function FilterSelect({ label, name, list, defaoultValue, size }) {
  return (
    <div className="form-control">
      <label htmlFor={name} className="label">
        {label}
      </label>
      <select
        name={name}
        id={name}
        className={`select select-bordered ${size}`}
        defaultValue={defaoultValue}
      >
        {list.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default FilterSelect;
