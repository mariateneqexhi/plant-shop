import React from "react";
import arrow from "../../images/ArrowRight.png";

export default function CategoryItem({image, title, description, cta}) {
    return ( 
        <div>
            <img src={image} alt="plant image"></img>
            <h4 className="my-3">{title}</h4>
            <p className="mb-6">{description ? description : null}</p>
            {cta ? <button className="bg-[#FFFFFF] m-auto">{cta}<img className="ml-2" src={arrow} alt="plant image"/></button> : null}
        </div>
    );
}