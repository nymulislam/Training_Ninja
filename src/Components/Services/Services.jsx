import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://training-ninja-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);

  return (
    <div className="my-20 grid grid-cols-1 max-w-sm md:grid-cols-2 md:max-w-5xl mx-auto gap-10">
      {services.map((service) => (
        <div key={service?.id} className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src={service.image}
              alt="Service"
              className="h-80"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {service.name}
              <div className="badge badge-primary text-white pt-1 pb-px text-base">
                ${service.price}
              </div>
            </h2>
            <p>{service.description.length > 100 ? `${service.description.substring(0, 150)}...` : `${service.description}`}</p>
            <div className="card-actions items-center justify-end">
              <div className="badge badge-outline">{service.category}</div>
              <div className="badge badge-outline">{service.date}</div>
              <Link to={`/serviceDetails/${service._id}`}>
                <button className="btn btn-primary btn-sm text-white">
                  Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
