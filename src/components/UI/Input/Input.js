import React from "react";

import css from "./Input.module.css";

const Input = (props) => {
  return (
    <div
      className={`${css.control} ${props.className} ${
        props.isValid === false ? css.invalid : ""
      }`}
    >
      <label htmlFor={props.type}>{props.label}</label>
      <input
        type={props.type}
        id={props.type}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
};

export default Input;
