import Socials from "@/components/Socials"
import "./Footer.scss"

const Footer = () => {
  const menuItems = [
    {
      title: "Home",
      links: [
        { text: "Categories", url: "/categories" },
        { text: "Devices", url: "/devices" },
        { text: "Pricing", url: "/pricing" },
        { text: "FAQ", url: "/faq" },
      ],
    },
    {
      title: "Movies",
      links: [
        { text: "Genres", url: "/movies/genres" },
        { text: "Trending", url: "/movies/trending" },
        { text: "New Release", url: "/movies/new" },
        { text: "Popular", url: "/movies/popular" },
      ],
    },
    {
      title: "Shows",
      links: [
        { text: "Genres", url: "/shows/genres" },
        { text: "Trending", url: "/shows/trending" },
        { text: "New Release", url: "/shows/new" },
        { text: "Popular", url: "/shows/popular" },
      ],
    },
    {
      title: "Support",
      links: [{ text: "Contact Us", url: "/contact" }],
    },
    {
      title: "Subscription",
      links: [
        { text: "Plans", url: "/subscription/plans" },
        { text: "Features", url: "/subscription/features" },
      ],
    },
    {
      title: "Connect With Us",
      socialLinks: [
        {
          label: "Facebook",
          iconName: "facebook",
          url: "https://facebook.com",
        },
        {
          label: "Twitter",
          iconName: "twitter",
          url: "https://twitter.com",
        },
        {
          label: "LinkedIn",
          iconName: "linked-in",
          url: "https://linkedin.com",
        },
      ],
    },
  ]

  const extraLinks = [
    { text: "Terms of Use", url: "/terms-of-use" },
    { text: "Privacy Policy", url: "/privacy-policy" },
    { text: "Cookie Policy", url: "/cookie-policy" },
  ]

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <nav className="footer__menu">
          {menuItems.map(({ title, links, socialLinks }, index) => (
            <div className="footer__menu-column" key={index}>
              {title === "Connect With Us" ? (
                <span className="footer__menu-title h6">{title}</span>
              ) : (
                <a
                  className="footer__menu-title h6"
                  href={`/${title.toLowerCase()}`}
                >
                  {title}
                </a>
              )}
              {links?.length > 0 && (
                <ul className="footer__menu-list">
                  {links.map((link, linkIndex) => (
                    <li className="footer__menu-item" key={linkIndex}>
                      <a className="footer__menu-link" href={link.url}>
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              )}

              {socialLinks?.length > 0 && (
                <Socials className="footer__soc1als" links={socialLinks} />
              )}
            </div>
          ))}
        </nav>
        <div className="footer__extra">
          <p className="footer__copyright">
            @<time dateTime="2025">2025</time> streamvib, All Rights Reserved
          </p>
          <div className="footer__extra-links">
            {extraLinks?.length > 0 &&
              extraLinks.map(({ text, url }, index) => (
                <a className="footer__extra-link" href={url} key={index}>
                  {text}
                </a>
              ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
