import React from "react";
import bannerImg from "../../images/heroBanner.png";
import Search from "../search";

export default function Hero() {
    return (
        <div className={`max-w-[1240px] m-auto my-10 aspect-[1248/512] bg-[#C1DCDC] rounded-3xl`}>
            <div className="grid grid-cols-10 content-start bg-no-repeat h-full bg-right bg-contain" style={{ 'background-image': `url(${bannerImg})` }}>
                <div className="grid grid-cols-6 col-span-5 items-start m-12 gap-12">
                    <div className="grid gap-6 col-span-5">
                        <h1 className="text-6xl col-span-6 leading-[4rem] font-extrabold">Buy your dream plants</h1>
                        <div className="grid col-span-5 grid-cols-2 gap-8">
                            <div className="border-r-[1px] leading-7 text-lg border-current pr-8">
                                <p className="leading-[3rem] text-3xl text-[#1E1E1E]">50+</p>Plant Species
                            </div>
                            <div className="leading-7 text-lg border-current pr-8">
                                <p className="leading-[3rem] text-3xl text-[#1E1E1E]">100+</p>Costumers
                            </div>
                        </div>
                    </div>
                    <div className="col-start-1 col-end-6"><Search /></div>
                </div>
            </div>
        </div>
    );
}