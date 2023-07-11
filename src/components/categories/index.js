import React from "react";
import CategoryItem from "../CategoryItem";
import item1 from "../../images/CategoryItem1.png";
import item2 from "../../images/CategoryItem2.png";
import item3 from "../../images/CategoryItem3.png";

const item = [
    {
      image: item1,
      title: "Natural Plants",
      description: "",
      cta: "",
    },
    {
      image: item2,
      title: "Plant Accessories",
      description: "Horem ipsum dolor sit amet, consectetur adipiscing elit.",
      cta: "Explore",
    },
    {
      image: item3,
      title: "Artificial Plants",
      description: "",
      cta: "",
    },
  ];

export default function Category() {
  return (
  <div className="text-center mb-24">
    <h2 className="mb-3">Categories</h2>
    <p className="mb-24">Find what you are looking for</p>
    <div className="w-full bg-[#C1DCDC;] pt-12 pb-24">
        <div className="grid gap-24 grid-cols-3 mx-24">
        {item.map(({image, title, description, cta}, i) => {
        return (
            <div className={i%2 ? "" : "-translate-y-24"}><CategoryItem image={image} title={title} description={description} cta={cta}/></div>
        );
    })}
        </div>    
    </div>
  </div>
  );
}
