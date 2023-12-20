/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import alertCircle from "/src/assets/alert-circle.svg";
import alertTriangle from "/src/assets/alert-triangle.svg";
import checkCircle from "/src/assets/check-circle.svg";
import frown from "/src/assets/frown.svg";

function Alert(props) {
  let bgColor;
  let imgSrc;
  if (props.status === "error") {
    bgColor = "#f9c8c8";
    imgSrc = <img src={alertCircle} alt={"alertCircle"} />;
  } else if (props.status === "warning") {
    bgColor = "#F9D9C8";
    imgSrc = <img src={alertTriangle} alt={"alertTriangle"} />;
  } else if (props.status === "info") {
    bgColor = "#F9EBC8";
    imgSrc = <img src={checkCircle} alt={"checkCircle"} />;
  } else if (props.status === "success") {
    bgColor = "#CEF7CD";
    imgSrc = <img src={frown} alt={"frown"} />;
  }
  return (
    <div
      css={css`
        width: 650px;
        height: 76px;
        background-color: ${bgColor};
        border: none;
        border-radius: 10px;
        margin: 10px;
        font-size: 20px;
        font-family: "Kanit", sans-serif;
        font-weight: 700;
        color: #444444;
        display: flex;
        align-items: center;
        justify-content: start;
      `}
    >
      <div
        css={css`
          margin-left: 20px;
          margin-right: 20px;
        `}
      >
        {imgSrc}
      </div>
      {props.statusText}
    </div>
  );
}

export default Alert;
