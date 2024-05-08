"use client";
import { extractImageUrl } from "@/utils/strapi.utils";
export default function LandscapeImage(imageData) {
  console.log(imageData.imageData.image.data[0].attributes.url);
  return (
    <div className="article-image">
      <img src={imageData.imageData.image.data[0].attributes.url} alt="" />
    </div>
  );
}
