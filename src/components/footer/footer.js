import React from "react";
import logo from "../../images/GREENMIND.svg";
import facebookIcon from "../../images/fb.svg";
import instagramIcon from "../../images/instagram.png";
import twitterIcon from "../../images/twitter.png";

import "./footer.module.scss";

const social = [
  {
    link: "https://www.facebook.com/",
    icon: facebookIcon,
    alt: "Facebook Icon",
  },
  {
    link: "https://www.instagram.com/",
    icon: instagramIcon,
    alt: "Instagram Icon",
  },
  {
    link: "https://twitter.com/?lang=en",
    icon: twitterIcon,
    alt: "twitter Icon",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#C1DCDC] text-[18px] leading-[27px]">
      <div className="max-w-[1240px] m-auto">
        <div className="flex justify-between py-12">
          <div className="flex flex-col content-start max-w-[190px]">
            <img className="pb-6 w-[108px]" src={logo} alt="Logo" />
            <p className="pb-6">We help you find your dream plant</p>
            <div className="social flex justify-between">
              {social.map(({ icon, link, alt }) => {
                return (
                  <a href={link}>
                    <img className="" src={icon} alt={alt} />
                  </a>
                );
              })}
            </div>
          </div>
          <div className={`footer_right flex`}>
            <div className="pr-6">
              <h4 className="pb-3">Information</h4>
              <p className="pb-3">About</p>
              <p className="pb-3">Product</p>
              <p>Blog</p>
            </div>
            <div className="px-6">
              <h4 className="pb-3">Company</h4>
              <p className="pb-3">Community</p>
              <p className="pb-3">Career</p>
              <p>Our story</p>
            </div>
            <div className="pl-6">
              <h4 className="pb-3">Contact</h4>
              <p className="pb-3">Getting Started</p>
              <p className="pb-3">Pricing</p>
              <p>Resources</p>
            </div>
          </div>
        </div>
        <div className={`copyright pb-12`}>
          2023 all Right Reserved Term of use GREENMIND
        </div>
      </div>
    </footer>
  );
}
