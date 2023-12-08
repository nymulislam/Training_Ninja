import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper/modules";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const HomeServices = () => {
    const [services, setServices] = useState([]);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext)


  useEffect(() => {
    fetch("https://training-ninja-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);

  const handleDetailsClick = (id) => {
    if (!user) {
      toast.error("Please log in to view service details", {
        position: "top-right",
      });

      return navigate("/login");
    } else {
      navigate(`/serviceDetails/${id}`);
    }
  };

  return (
    <div className="my-20 shadow-lg">
      <div className="max-w-sm md:max-w-2xl mx-auto mt-40 mb-20">
        <h2 className="divider text-2xl md:text-3xl font-semibold text-[#354a5f] text-center">
          Explore Our Training
        </h2>
      </div>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          freeMode={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper md:max-w-6xl max-w-sm mx-auto h-[620px] my-12"
        >
          {services.map((service) => (
            <SwiperSlide key={service._id}>
              <div
                className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
              >
                  <div className="relative overflow-hidden bg-cover bg-no-repeat">
                    <img
                      className="rounded-t-lg h-[355px]"
                      src={service?.image}
                      alt="Test Image"
                    />
                    <span className="inline-block absolute top-5 whitespace-nowrap rounded-[0.27rem] bg-[#354a5f] px-[0.55em] pb-[0.30em] pt-[0.45em] text-center align-baseline text-[1.1em] font-bold leading-none text-[#d6f5e3]">
                      ${service?.price}
                    </span>
                    <a href="#!">
                      <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                    </a>
                  </div>
                <div className="p-6">
                  <div className="flex justify-between items-center">
                    <h5 className="mb-2 text-lg font-semibold leading-tight text-[#354a5f] dark:text-neutral-50">
                      {service?.name.length > 17 ? `${service?.name.substring(0, 10)}...` : `${service?.name}`}
                    </h5>
                    <span className="badge text-white text-xs font-medium pt-1 pb-1 bg-[#354a5f]">
                      {service?.category}
                    </span>
                  </div>
                  <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200 mt-3">
                    {service?.description.length > 60
                      ? `${service?.description.substring(0, 60)}...`
                      : service?.description}
                  </p>
                    <button
                      type="button"
                      onClick={() => handleDetailsClick(service._id)}
                      className="inline-block rounded bg-gradient-to-r from-[#141895] to-[#0b4164] px-6 pb-2 pt-2.5 text-sm font-semibold uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    >
                      Details
                    </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeServices;
