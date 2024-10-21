import house1 from "../../assets/images/house/1.jpg";
import house2 from "../../assets/images/house/2.jpg";
import house3 from "../../assets/images/house/3.jpg";
import house4 from "../../assets/images/house/4.jpg";
import house5 from "../../assets/images/house/5.jpg";

import BathroomSvg from "../svg/BathroomSvg";
import BedroomSvg from "../svg/BedroomSvg";

const propertiesInfo = [
  {
    id: 0,
    img: house1,
    title: "Modern Design villa",
    price: "$1000.00",
    bedrooms: 3,
    bathrooms: 2,
  },
  {
    id: 1,
    img: house2,
    title: "Rose Villa",
    price: "$2000.00",
    bedrooms: 4,
    bathrooms: 3,
  },
  {
    id: 2,
    img: house3,
    title: "The Haven Villa",
    price: "$3000.00",
    bedrooms: 4,
    bathrooms: 4,
  },
  {
    id: 3,
    img: house4,
    title: "Driftwood Villa",
    price: "$4000",
    bedrooms: 2,
    bathrooms: 1,
  },
  {
    id: 4,
    img: house5,
    title: "Eton Villa",
    price: "$5000",
    bedrooms: 5,
    bathrooms: 4,
  },
];

const Available = () => {
  return (
    <section>
      <div className="container">
        <div class="mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]">
          <span class="mb-2 block text-lg font-semibold text-primary">
            Properties
          </span>
          <h2 class="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
            Grab your Dream Property
          </h2>
          <p class="text-base text-body-color dark:text-dark-6">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {propertiesInfo.map((info) => (
            <div
              key={info.id}
              className="p-4 bg-white rounded-lg border border-gray-600/10"
            >
              <img src={info.img} alt="info" />

              <div className="p-6">
                <h4 className="text-2xl font-bold cursor-pointer">
                  {info.title}
                </h4>
                <div className="mt-2">
                  <span className="text-xl font-extrabold text-blue-600">
                    {info.price}
                  </span>{" "}
                  /M
                </div>
              </div>

              <div className="flex justify-between p-4 text-gray-700 border-t border-gray-300">
                <div className="flex items-center">
                  <BedroomSvg />
                  <p>
                    <span className="font-bold text-gray-900">
                      {info.bedrooms}
                    </span>{" "}
                    Bedrooms
                  </p>
                </div>

                <div className="flex items-center">
                  <BathroomSvg />
                  <p>
                    <span className="font-bold text-gray-900">
                      {info.bathrooms}
                    </span>{" "}
                    Bathrooms
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Available;
