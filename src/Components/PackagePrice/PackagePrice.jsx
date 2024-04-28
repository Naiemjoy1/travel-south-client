import { IoMdCheckmark } from "react-icons/io";

const PackagePrice = () => {
  return (
    <div>
      <section className="py-20 dark:bg-gray-100 dark:text-gray-800">
        <div className="container px-4 mx-auto">
          <div className=" w-3/5 mx-auto mb-16 text-center">
            <h2 className=" font-reenie text-[#5c98f2] font-bold text-3xl mb-4">
              Clear Price
            </h2>
            <h2 className=" font-poppins font-bold text-5xl mb-4">
              Affordable Travel Packages
            </h2>
            <h2 className=" mb-4 text-gray-500">
              We believe that everyone deserves to experience their dream
              vacation without breaking the bank. That's why we offer a price
              section on our website that features a range of affordable travel
            </h2>
          </div>
          <div className="flex flex-wrap items-stretch -mx-4">
            <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
              <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 dark:bg-gray-50">
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold">Half Board</h4>
                  <span className="text-6xl font-bold">
                    $50
                    <span className="text-sm tracking-wide">/Day</span>
                  </span>
                </div>

                <ul className="flex-1 mb-6 dark:text-gray-600">
                  <li className=" flex items-center gap-4">
                    <span>
                      <IoMdCheckmark />
                    </span>
                    Transfers from Airport
                  </li>
                  <li className=" flex items-center gap-4 ">
                    <span>
                      <IoMdCheckmark />
                    </span>
                    Minimum 3 Star Hotel
                  </li>
                  <li className=" flex items-center gap-4 ">
                    <span>
                      <IoMdCheckmark />
                    </span>
                    Alcoholic beverages
                  </li>
                  <li className=" flex items-center gap-4 ">
                    <span>
                      <IoMdCheckmark />
                    </span>
                    Incl. Museum Tickets
                  </li>
                  <li className=" flex items-center gap-4 ">
                    <span>
                      <IoMdCheckmark />
                    </span>
                    Meals in Restaurants
                  </li>
                </ul>
                <button className=" btn bg-[#5c98f2] text-white">
                  VIEW TRIPS
                </button>
              </div>
            </div>
            <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
              <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 dark:bg-violet-600 dark:text-gray-50">
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold">All Inclusive</h4>
                  <span className="text-6xl font-bold">
                    $32
                    <span className="text-sm tracking-wide">/Day</span>
                  </span>
                </div>

                <ul className="flex-1 space-y-2">
                  <li className=" flex items-center gap-4">
                    <span>
                      <IoMdCheckmark />
                    </span>
                    Transfers from Airport
                  </li>
                  <li className=" flex items-center gap-4">
                    <span>
                      <IoMdCheckmark />
                    </span>
                    Transfers from Airport
                  </li>
                  <li className=" flex items-center gap-4">
                    <span>
                      <IoMdCheckmark />
                    </span>
                    Transfers from Airport
                  </li>
                  <li className=" flex items-center gap-4">
                    <span>
                      <IoMdCheckmark />
                    </span>
                    Transfers from Airport
                  </li>
                  <li className=" flex items-center gap-4">
                    <span>
                      <IoMdCheckmark />
                    </span>
                    Transfers from Airport
                  </li>
                </ul>
                <button className=" btn bg-[#5c98f2] text-white">
                  VIEW TRIPS
                </button>
              </div>
            </div>
            <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
              <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 dark:bg-gray-50">
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold">Excursions Included</h4>
                  <span className="text-6xl font-bold">
                    $68
                    <span className="text-sm tracking-wide">/Day</span>
                  </span>
                </div>

                <ul className="flex-1 space-y-2">
                  <li className=" flex items-center gap-4">
                    <span>
                      <IoMdCheckmark />
                    </span>
                    Transfers from Airport
                  </li>
                  <li className=" flex items-center gap-4">
                    <span>
                      <IoMdCheckmark />
                    </span>
                    Transfers from Airport
                  </li>
                  <li className=" flex items-center gap-4">
                    <span>
                      <IoMdCheckmark />
                    </span>
                    Transfers from Airport
                  </li>
                  <li className=" flex items-center gap-4">
                    <span>
                      <IoMdCheckmark />
                    </span>
                    Transfers from Airport
                  </li>
                  <li className=" flex items-center gap-4">
                    <span>
                      <IoMdCheckmark />
                    </span>
                    Transfers from Airport
                  </li>
                </ul>
                <button className=" btn bg-[#5c98f2] text-white">
                  VIEW TRIPS
                </button>
              </div>
            </div>
          </div>
        </div>
        <p className=" text-center mt-5">
          * All trips include medical insurance
        </p>
      </section>
    </div>
  );
};

export default PackagePrice;
