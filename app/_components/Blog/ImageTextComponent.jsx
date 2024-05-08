import { extractImageUrl } from "@/utils/strapi.utils";
import ReactMarkDown from "react-markdown";

export default function ImageTextComponent({ component }) {
  const { paragraph, imageCaption, image, isLandscape, imageShowsRight } =
    component;
  return (
    <div
      className={`article-text-image
      ${isLandscape ? "" : " article-text-image--portrait"}${
        imageShowsRight ? "" : " article-text-image--reversed"
      }
      `}
    >
      <ReactMarkDown className="copy article-text-image__text article-paragraph">
        {paragraph}
      </ReactMarkDown>
      <div className="article-text-image__containet">
        <div className="article-text-image__image">
          <img src={extractImageUrl(image)}></img>
        </div>
        {imageCaption && (
          <p className="article-text-image__caption copy-small">
            {component.image.caption}
          </p>
        )}
      </div>
    </div>
  );
}
