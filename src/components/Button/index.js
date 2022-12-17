import React from "react";
import { Link } from "react-router-dom";
import "./button.css";
export function SubmitButton(props) {
  const {
    title = "Submit",
    className,
    containerStyle,
    sizeStyle,
    width = "33.5px",
    height = "33.5px",
    ...restProps
  } = props;
  return (
    <button
      style={containerStyle}
      className={"nav_btn"}
      type={"submit"}
      {...restProps}
    >
      {title}
      {/* <a
        className="nav_btn"
        style={{ width: width, height: height }}
        href={to}
        {...restProps}
      >
        {title}
      </a> */}
    </button>
  );
}
export function PrimaryButton(props) {
  const {
    to = "#",
    title = "Primary Button",
    className,
    containerStyle,
    sizeStyle,
    width = "33.5px",
    height = "33.5px",
    ...restProps
  } = props;
  return (
    <div style={containerStyle} className={className}>
      <a
        className="nav_btn"
        style={{ width: width, height: height }}
        href={to}
        {...restProps}
      >
        {title}
      </a>
    </div>
  );
}
export function PressButton(props) {
  const {
    onClick,
    title = "Primary Button",
    className,
    containerStyle,
    ...restProps
  } = props;
  return (
    <div className={`nav_btn ${className}`} onClick={onClick} {...restProps}>
      {title}
    </div>
  );
}
export function ButtonLink(props) {
  const {
    to = "#",
    title = "btn",
    classLink,
    className,
    containerStyle,
    ...restProps
  } = props;
  return (
    <div style={containerStyle} className={className}>
      <Link to={to} className={`nav_btn ${classLink}`} {...restProps}>
        {title}
      </Link>
    </div>
  );
}
