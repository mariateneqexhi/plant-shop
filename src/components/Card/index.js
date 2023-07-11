import React from "react";

export default function Card({image, title, price}) {
    return ( 
        <div>
            <img src={image} alt="plant image"></img>
            <p className="text-[#1E1E1E] mt-3 mb-2">{title}</p>
            <p>{price}</p>
        </div>
    );
}