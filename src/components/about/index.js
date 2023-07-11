import React from "react";
import flower from "../../images/flower.png";
import box from "../../images/box.png";
import tel from "../../images/TelephoneOutbound.png";

function Item({ src, title, description }) {
  return (
    <div>
      <div className="bg-[#C1DCDC] m-auto p-7 rounded-full w-24">
        <img src={src} className="m-auto" alt="icons"></img>
      </div>
      <h4 className="mb-3 mt-6">{title}</h4>
      <p>{description}</p>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="max-w-[1240px] m-auto text-center mb-40">
      <h2 className="mb-3">About us</h2>
      <p className="mb-12">Order now and appreciate the beauty of nature</p>
      <div className="grid md:grid-cols-3 gap-6 grid-cols-1">
        <Item
          src={flower}
          title="Large Assortment"
          description="we offer many different types of products with fewer variations in each category."
        />
        <Item
          src={box}
          title="Fast & Free Shipping"
          description="4-day or less delivery time, free shipping and an expedited delivery option."
        />
        <Item
          src={tel}
          title="24/7 Support"
          description="answers to any business related inquiry 24/7 and in real-time."
        />
      </div>
    </div>
  );
}
