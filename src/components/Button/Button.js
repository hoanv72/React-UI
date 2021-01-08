import React, { useRef, useEffect } from "react";
import "./button.scss";

const Button = (props) => {
  const { disable, innerRef, clickEvent, shape, type } = props;
  const colorType = ["primary", "success", "warning", "danger", "info"];
  const colorTypeToHex = [
    "#409eff",
    "#67c23a",
    "#e6a23c",
    "#f56c6c",
    "#909399",
  ];
  const Ref = useRef(innerRef);
  const transferTypeToColor = () => {
    let findColorTypeIndex = colorType.indexOf(type);
    let btnType;
    if (type && findColorTypeIndex > -1) {
      btnType = colorTypeToHex[findColorTypeIndex];
    } else if (type && findColorTypeIndex === -1) {
      btnType = type;
    } else {
      btnType = "#fff";
    }
    return btnType;
  };
  const TextColor = () => {
    let textColor;
    if (type) {
      textColor = "#fff";
    } else {
      textColor = "#606266";
    }
    return textColor;
  };

  const renderTypeColorByShape = () => {
    let backgroundColor;
    if (shape === "plain") {
      backgroundColor = "#fff";
    } else {
      backgroundColor = transferTypeToColor();
    }
    return backgroundColor;
  };
  const renderTextColorByShape = () => {
    let textColor;
    if (shape === "plain") {
      textColor = "#606266";
    } else {
      textColor = TextColor();
    }
    return textColor;
  };
  const onClick = (e) => {
    if (disable && disable === true) {
      e.preventDefault();
      return;
    }
    if (clickEvent) {
      return onClick(e);
    }
  };
  const handleClick = () => {
    onClick();
  };
  useEffect(() => {
    console.log(renderTypeColorByShape());
    console.log(shape);
  });

  return (
    <button
      style={{
        background: `${renderTypeColorByShape()}`,
        color: ` ${renderTextColorByShape()}`,
        ...props.style,
      }}
      className={`button ${shape || ""}`}
      onClick={onClick}
      ref={Ref}
    >
      {props.children}
    </button>
  );
};

export default Button;

//props background color,  content, hover background, size,
//icon
//shape -> border, color
