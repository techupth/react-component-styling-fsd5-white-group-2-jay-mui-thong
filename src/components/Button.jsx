/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

// color = {"#074EE8","#07A4E8"}

function Button(props) {
  if (props.type === "primary") {
    return (
      <button
        css={css`
          padding: 0px, 16px, 0px, 16px;
          background-color: #074ee8;
          font-size: 16px;
          border-radius: 4px;
          color: white;
          font-weight: bold;
          width: 171.19px;
          height: 50px;
          margin-bottom: 10px;
        `}
      >
        {props.text}
      </button>
    );
  } else if (props.type === "secondary") {
    return (
      <button
        css={css`
          padding: 0px, 16px, 0px, 16px;
          background-color: #07a4e8;
          font-size: 16px;
          border-radius: 4px;
          color: white;
          font-weight: bold;
          width: 171.19px;
          height: 50px;
          margin-bottom: 10px;
        `}
      >
        {props.text}
      </button>
    );
  }
}

export default Button;
