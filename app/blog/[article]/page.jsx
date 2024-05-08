import { fetchDataFromStrapi, fetchBlogArticles } from "@/utils/strapi.utils";
import ArticleIntro from "@/app/_components/Blog/ArticleIntro.jsx";
import ArticleOverview from "@/app/_components/Blog/ArticleOverview.jsx";
import ArticleComponent from "@/app/_components/Blog/ArticleComponent";
ArticleComponent;
import FeaturedItems from "@/app/_components/FeaturedItems/FeaturedItems";

export default async function Page({ params }) {
  const { article: slug } = params;
  const articles = await fetchBlogArticles();
  const article = articles.find((article) => article.slug === slug);
  const articleFeatured = articles.filter((article) => article.slug !== slug);
  return (
    <main>
      <ArticleIntro article={article} />
      <section>
        <ArticleOverview article={article} />
        {article.articleContent.map((component) => (
          <ArticleComponent key={component.id} component={component} />
        ))}
        <FeaturedItems
          items={articleFeatured}
          headline={"Explore more articles"}
        />
      </section>
    </main>
  );
}

export async function generateStaticParams() {
  const articles = await fetchDataFromStrapi("blog-articles");
  return articles.map((article) => {
    article: article.attributes.slug;
  });
}
