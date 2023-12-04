import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

import { Parallax, Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);


  return (
    <div>
        <div className="max-w-2xl mx-auto mt-40">
            <h2 className="text-4xl divider font-semibold">
                Reviews
            </h2>
        </div>
      <Swiper
         style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
            backgroundImage: "url(https://i.postimg.cc/05cfbRD4/education1.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          speed={600}
          parallax={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Parallax, Pagination, Navigation]}
          className="mySwiper my-20">
        <div
          slot="container-start"
          className="parallax-bg "
          style={{
            "background-image":
              "url(https://i.postimg.cc/05cfbRD4/education1.jpg)",
          }}
          data-swiper-parallax="-23%"
        ></div>
{
    reviews.map((review) => (
        <SwiperSlide key={review.id}>
        <div className="text text-2xl text-white px-24 text-center pt-20 pb-10" data-swiper-parallax="-100">
                <div className="w-full flex items-center justify-center my-10">
                <Rating
                  style={{ maxWidth: 280 }}
                  value={review?.rating}
                  readOnly
                  className=""
                />
                </div>
          <p>
            {review.testimonial}
          </p>
        </div>
        <div className="title font-bold text-3xl text-center" data-swiper-parallax="-300">
          {review.name}
        </div>
        <div className="subtitle text-2xl mt-3  mb-32 text-white text-center" data-swiper-parallax="-200">
          {review.designation}
        </div>
      </SwiperSlide>
    ))
}
      </Swiper>
    </div>
  );
};

export default Reviews;
