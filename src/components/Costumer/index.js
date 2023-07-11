import React from "react";
import star from "../../images/StarFill.png";

export default function Costumer({review, image, name, profession, rate}) {
    return ( 
        <div className="bg-[#C1DCDC] rounded-xl flex flex-col">
            <p className="pt-12 pr-12 pl-12 text-[#1e1e1ebf]">{review}</p>
            <div className="flex items-center justify-between pr-12 pl-3">
                <div className="flex items-center">
                    <img className="h-48" src={image} alt="costumer's photo"/>
                    <div className="">
                        <h4>{name}</h4>
                        <p>{profession}</p>
                    </div>
                </div>
                <div className="flex items-center"><img className="pr-3" src={star} alt="star image"/>{rate}</div>
            </div>
        </div>
    );
}