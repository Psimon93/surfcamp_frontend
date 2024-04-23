import Link from "next/link";
export default function Footer() {
  const navItems = [
    { display: "the camp.", slug: "/" },
    { display: "the experience.", slug: "/experience" },
    { display: "the blog.", slug: "/blog" },
    { display: "the events.", slug: "/events" },
  ];
  const policies = [
    {
      display: "Imprint",
      slug: "/imprint",
    },
    {
      display: "Terms and conditions",
      slug: "/toc",
    },
    {
      display: "Data protection",
      slug: "/data-protecion",
    },
  ];

  return (
    <footer className="footer">
      <nav className="footer__nav">
        <img src="/assets/logo.svg" alt="" className="footer__logo" />
        {navItems.map((item) => (
          <ul className="footer__links">
            <li key={item.slug}>
              <Link href={item.slug}>
                <h5>{item.display}</h5>
              </Link>
            </li>
          </ul>
        ))}
      </nav>
      <div className="footer__policies">
        <ul className="footer__policies-nav">
          {policies.map((item) => (
            <li key={item.slug}>{item.display}</li>
          ))}
        </ul>
        <p className="copy">Simons surf camp - all rights resrved</p>
      </div>
    </footer>
  );
}
