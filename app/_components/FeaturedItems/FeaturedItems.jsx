"use client";
import { useState } from "react";
import FeaturedArticle from "./FeaturedArticle";

export default function FeaturedItems({ headline, items }) {
  const [itemNumber, setItemNumber] = useState(3);
  const onShowMore = () => {
    if (itemNumber + 3 > items.length) {
      return setItemNumber(items.length);
    }
    setItemNumber(itemNumber + 3);
  };
  return (
    <section className="fetured-items__Headline">
      <h3 className="featured-items_Headline">
        {headline || "Our featured articles"}
      </h3>
      <div className="featured-items__container">
        {items.slice(0, itemNumber).map((item) => (
          <FeaturedArticle key={item.slug} article={item} />
        ))}
      </div>
      {itemNumber < items.length && (
        <button className="btn btn--medium btn--turquoise" onClick={onShowMore}>
          Show more
        </button>
      )}
    </section>
  );
}
