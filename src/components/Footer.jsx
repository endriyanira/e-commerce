import React from "react";
import { Link } from "react-router-dom";

const title = "About ShopCart";
const desc =
  "ShopCart is an Indonesian technology company with a mission to achieve digital economic equality.";
const cateTitle = "Categories";
const quickTitle = "Quick Links";
const tweetTitle = "Recent Tweets";

const addressList = [
  {
    iconName: "icofont-google-map",
    text: "New York, USA.",
  },
  {
    iconName: "icofont-phone",
    text: "+880 123 456 789",
  },
  {
    iconName: "icofont-envelope",
    text: "info@shopcart.com",
  },
];

const socialList = [
  {
    iconName: "icofont-facebook",
    siteLink: "https://www.facebook.com/",
    className: "facebook",
  },
  {
    iconName: "icofont-twitter",
    siteLink: "https://x.com/",
    className: "twitter",
  },
  {
    iconName: "icofont-linkedin",
    siteLink: "https://www.linkedin.com/",
    className: "linkedin",
  },
  {
    iconName: "icofont-instagram",
    siteLink: "https://www.instagram.com/",
    className: "instagram",
  },
  {
    iconName: "icofont-pinterest",
    siteLink: "https://id.pinterest.com/",
    className: "pinterest",
  },
];

const cateList = [
  {
    text: "All Products",
    link: "/shop",
  },
  {
    text: "Shop",
    link: "/shop",
  },
  {
    text: "Blog",
    link: "/blog",
  },
  {
    text: "About",
    link: "/about",
  },
  {
    text: "Policy",
    link: "#",
  },
  {
    text: "FAQs",
    link: "/about",
  },
];

const quickList = [
  {
    text: "Summer Sessions",
    link: "/",
  },
  {
    text: "Events",
    link: "/",
  },
  {
    text: "Gallery",
    link: "/",
  },
  {
    text: "Forums",
    link: "/",
  },
  {
    text: "Privacy Policy",
    link: "/",
  },
  {
    text: "Terms of Use",
    link: "/",
  },
];

const tweetList = [
  {
    iconName: "icofont-twitter",
    desc: (
      <p>
        Endriyani <a href="#">@ShopCart Greetings! </a> Grab your item, 50% Big
        Sale Offer !!
      </p>
    ),
  },
  {
    iconName: "icofont-twitter",
    desc: (
      <p>
        Ayundri <a href="#">@ShopCart Hey! </a> Grab your item, 50% Big Sale
        Offer !!
      </p>
    ),
  },
];

const Footer = () => {
  return (
    <footer className="style-2">
      <div className="footer-top dark-view padding-tb">
        <div className="container">
          <div className="row g-4 row-cols-xl-4 row-cols-sm-2 row-cols-1 justify-content-center">
            <div className="col">
              <div className="footer-item our-address">
                <div className="footer-inner">
                  <div className="footer-content">
                    <div className="title">
                      <h4>{title}</h4>
                    </div>
                    <div className="content">
                      <p>{desc}</p>
                      <ul className="lab-ul office-address">
                        {addressList.map((address) => (
                          <li key={`addressKey-${address.text}`}>
                            <i className={address.iconName}>
                              &nbsp;{address.text}
                            </i>
                          </li>
                        ))}
                      </ul>
                      <ul className="lab-ul social-icons">
                        {socialList.map((social) => (
                          <li key={`socialKey-${social.siteLink}`}>
                            <a
                              href={social.siteLink}
                              className={social.className}
                            >
                              <i className={social.iconName}></i>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="footer-item our-address">
                <div className="footer-inner">
                  <div className="footer-content">
                    <div className="title">
                      <h4>{cateTitle}</h4>
                    </div>
                    <div className="content">
                      <ul className="lab-ul office-address">
                        {cateList.map((data) => (
                          <li key={`category-${data.text}`}>
                            <a href={data.link}>{data.text}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="footer-item our-address">
                <div className="footer-inner">
                  <div className="footer-content">
                    <div className="title">
                      <h4>{quickTitle}</h4>
                    </div>
                    <div className="content">
                      <ul className="lab-ul office-address">
                        {quickList.map((data) => (
                          <li key={`quick-${data.text}`}>
                            <a href={data.link}>{data.text}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="footer-item our-address">
                <div className="footer-inner">
                  <div className="footer-content">
                    <div className="title">
                      <h4>{tweetTitle}</h4>
                    </div>
                    <div className="content">
                      <ul className="lab-ul office-address">
                        {tweetList.map((data, i) => (
                          <li key={`tweetKey=${i.toString()}}`}>
                            <i className={data.iconName}></i>
                            {data.desc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
