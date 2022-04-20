import React, { useRef, useImperativeHandle } from "react";

import css from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  const focus = () => {
    inputRef.current.focus(); //When you reference an element with the useRef hook it creates an object. Inside there is a property called current that contains the whole html element
  };

  useImperativeHandle(ref, () => {
    return {
      activate: focus,
    };
  });

  return (
    <div
      className={`${css.control} ${props.className} ${
        props.isValid === false ? css.invalid : ""
      }`}
    >
      <label htmlFor={props.type}>{props.label}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.type}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});

export default Input;
