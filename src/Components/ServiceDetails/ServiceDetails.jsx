import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const service = useLoaderData();

  if (!service) {
    return <p>Loading...</p>;
  }

  return (
    <div className="max-w-5xl mx-auto h-screen mt-24">
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={service.image}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{service.name}</h1>
            <p className="py-6">{service.description}</p>
            <div className="flex items-center justify-evenly text-md">
            <div className="flex items-center gap-3">
                <p className="font-semibold">Category:</p>
              <span className="badge badge-primary text-md">{service.category}</span>{" "}
            </div>
            <div className="flex items-center gap-3">
                <p className="font-semibold">Price:</p>
              <span className="badge badge-primary text-lg">${service.price}</span>{" "}
            </div>
            <div className="flex items-center gap-3">
                <p className="font-semibold">Date:</p>
              <span className="badge badge-primary text-md">{service.date}</span>{" "}
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
