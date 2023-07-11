import React from "react";
import searchImg from "../../images/Search.png";

export default function Search() {
    return (
        <div className="flex justify-between bg-white rounded-xl">
            <input className="p-2 ml-2 bg-transparent focus:outline-none w-full" placeholder="What are you looking for?"></input>
            <button className="p-3 m-2 rounded-xl bg-[#C1DCDC]"><img src={searchImg} alt="search icon"></img></button>
        </div>
    );
}