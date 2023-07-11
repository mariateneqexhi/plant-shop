import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import CostumerReview from "../Costumer";

import "swiper/css";
import "swiper/css/pagination";
import './style.scss';

import costumer1 from "../../images/Costumer1.png";
import costumer2 from "../../images/Costumer2.png";

const reviews = [
    {
      review: "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image: costumer1,
      name: "John Doe",
      profession: "Youtuber",
      rate: "4.5",
    },
    {
        review: "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
        image: costumer2,
        name: "Betty Doe",
        profession: "Youtuber",
        rate: "3",
      },
      {
        review: "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
        image: costumer2,
        name: "Betty Doe",
        profession: "Youtuber",
        rate: "3",
      },
      {
        review: "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
        image: costumer2,
        name: "Betty Doe",
        profession: "Youtuber",
        rate: "3",
      },
  ];

export default function Reviews() {
  return (
  <div className="mb-52 m-auto overflow-hidden">
    <div className="max-w-[1240px] m-auto"><h2 className="text-[#000000] mb-12 w-[457px]">What customers say about GREEMIND?</h2></div>
    <Swiper
        slidesPerView={"auto"}
        pagination={{
          clickable: true,
        }}
        spaceBetween={48}
        modules={[Pagination]}
        className=""
      >
        {reviews.map(({review, image, name, profession, rate}) => {
        return (
            <SwiperSlide><CostumerReview review={review} image={image} name={name} profession={profession} rate={rate}/></SwiperSlide>
        );
    })}
      </Swiper>
  </div>
  );
}
