import Link from "next/link";
export default function HighlightArticle({ data }) {
  const { headline, excerpt, slug, featuredImage } = data;
  return (
    <article className="highlight-article">
      <div className="highlight-article__info">
        <h3>{headline}</h3>
        <p className="copy">{excerpt}</p>
        <Link
          rel="stylesheet"
          href={`/blog/${slug} `}
          className="btn btn--turqouise btn--medium"
        >
          REad more
        </Link>
      </div>
      <img
        className="article-text-image__containet"
        src={featuredImage}
        alt=""
      />
    </article>
  );
}
