import React from "react";
import ReactMarkdown from "react-markdown";

export default function InfoBlock({ data }) {
  const { headline, text, showImageRight, imageSrc, button } = data;
  console.log(data);
  return (
    <div className={`info ${showImageRight ? "info--reversed" : ""}`}>
      <img
        src={imageSrc || "/info-blocks/rectangle.png"}
        alt=""
        className="info__image"
      />
      <div className="info__text">
        <h2 className="info__headline">{headline}</h2>
        <ReactMarkdown className="copy">{text}</ReactMarkdown>
        {button}
      </div>
    </div>
  );
}
