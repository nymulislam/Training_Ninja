import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Parallax, Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";

const ExpertAdvice = () => {
  const [advices, setAdvice] = useState([]);


  useEffect(() => {
    fetch("advices.json")
      .then((res) => res.json())
      .then((data) => {
        setAdvice(data);
      });
  }, []);


  return (
    <div>
      <div className="max-w-2xl mx-auto mt-28">
            <h2 className="text-4xl divider font-semibold">
                Expert Advice
            </h2>
        </div>
      <Swiper
         style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
            backgroundImage: "url(https://i.postimg.cc/VLhN6PXY/education4.jpg)",
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
              "url(https://i.postimg.cc/VLhN6PXY/education4.jpg)",
          }}
          data-swiper-parallax="-23%"
        ></div>
{
    advices.map((advice) => (
        <SwiperSlide key={advice.id}>
        <div className="text text-2xl text-white px-24 text-center pt-28 pb-10" data-swiper-parallax="-100">
          <p>
            {advice.advice}
          </p>
        </div>
        <div className="title text-white text-3xl text-center" data-swiper-parallax="-300">
          {advice.name}
        </div>
        <div className="subtitle text-2xl mt-3  mb-32 text-white text-center" data-swiper-parallax="-200">
          {advice.designation}
        </div>
      </SwiperSlide>
    ))
}
      </Swiper>
    </div>
  );
};

export default ExpertAdvice;
