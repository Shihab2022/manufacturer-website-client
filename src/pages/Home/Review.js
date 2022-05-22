import React, { useEffect, useState } from "react";
import parralex from "../../assets/img/parralex.jpg";
import {  FaStar } from "react-icons/fa";
import {  RiDoubleQuotesL ,RiDoubleQuotesR} from "react-icons/ri";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div
      style={{ backgroundImage: `url(${parralex})` }}
      className=" flex justify-center flex-col items-center w-screen"
    >
        <h1 className="lg:text-4xl text-2xl font-bold  text-amber-500 mt-14">OUR CUSTOMER REVIEWS</h1>
      <div class="carousel w-full  lg:py-10">
        {reviews.map((review, index) => (
          <div id={`slide${index}`} class="carousel-item relative w-full">
            <div className="w-full flex text-white flex-col justify-center items-center">
              <div class="avatar">
                <div class="w-24 rounded-full">
                  {review?.img ? <img src={review?.img} alt="" /> : <p className="text-6xl font-bold text-white bg-amber-300 shadow-2xl w-full h-full flex items-center justify-center">{review?.name.slice(0,1)}</p>}
                </div>
              </div>
              <p className="lg:w-1/2 w-3/4 mt-3 font-semibold"><span className="text-2xl text-amber-500 "><RiDoubleQuotesL /></span> {review.about}
              <span className="text-2xl text-amber-500 "><RiDoubleQuotesR /></span></p>
              <h4 className="text-2xl font-bold mt-8 text-white ">{review?.name}</h4>
              <div className="flex text-yellow-500 mt-1">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
              <div class="absolute px-1 text-xl lg:px-24 flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#slide${index - 1}`} class="text-white">
                  ❮
                </a>
                <a href={`#slide${index + 2}`} class="text-white">
                  ❯
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
