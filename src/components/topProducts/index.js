import React from "react";
import Card from "../Card";
import plant1 from "../../images/TopSelling1.png";
import plant2 from "../../images/TopSelling2.png";
import plant3 from "../../images/TopSelling3.png";
import arrow from "../../images/ArrowRight.png";

const plant = [
  {
    image: plant1,
    title: "Natural Plants",
    price: "₱ 1,400.00",
  },
  {
    image: plant2,
    title: "Artificial Plants",
    price: "₱ 900.00",
  },
  {
    image: plant3,
    title: "Artificial Plants",
    price: "₱ 3,500.00",
  },
];

export default function TopProducts() {
  return (
    <div className="max-w-[1240px] m-auto grid grid-cols-4 gap-12 py-10">
      <div>
        <h2 className="mb-3">Best Selling Plants</h2>
        <p className="mb-6">Easiest way to healthy life by buying your favorite plants</p>
        <button className="bg-[#C1DCDC]">See more<img className="ml-2" src={arrow} alt="arrow icon"/></button>
      </div>
    {plant.map(({image, title, price}) => {
        return (
            <Card image={image} title={title} price={price}/>
        );
    })}  
    </div>
  );
}
