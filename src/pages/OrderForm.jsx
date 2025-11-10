import React, { use, useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import { useNavigate, useParams } from "react-router";
import { AuthContext, ThemeContext } from "../Contexts/Contexts";
import useAxios from "../hooks/useAxios";

const OrderForm = () => {
  const { theme } = use(ThemeContext);
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  const [orderForm, setOrderForm] = useState({});
  const axiosInstance = useAxios();
  const { user } = use(AuthContext);

  useEffect(() => {
    axiosInstance
      .get(`/pets-and-supplies/${id}`)
      .then((data) => setOrderForm(data.data))
      .catch((err) => console.log(err));
  }, [axiosInstance, id]);

  return (
    <section className="flex justify-center">
      <div
        className={`w-full max-w-4xl rounded-xl ${
          theme == "light" ? "glass-blur" : "glass-blur-dark"
        }`}
      >
        <div className="relative p-6 sm:p-8">
          <button
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white transition-colors"
            type="button"
          >
            <CgClose
              onClick={() => navigate(-1)}
              className="text-xl cursor-pointer"
            />
          </button>
          <div className="mb-6">
            <p className="dark:text-white text-secondary text-2xl sm:text-[32px] font-bold">
              Confirm Your Order
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12">
            <div className="flex flex-col">
              <div className="mb-6">
                <img
                  alt="Golden Retriever Puppy"
                  className="w-full h-auto object-cover rounded-lg aspect-4/3"
                  src={orderForm.image}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col sm:col-span-2">
                  <label className="block text-sm font-semibold mb-2 dark:text-white text-secondary">
                    Product Name
                  </label>
                  <input
                    className="w-full h-12 p-4 rounded-lg border-2 border-primary/50 bg-base-100/50 focus:outline-none"
                    placeholder="name of the pet or supplies"
                    type="text"
                    readOnly
                    defaultValue={orderForm.name}
                  />
                </div>
                <div className="flex flex-col">
                  <label className="block text-sm font-semibold mb-2 dark:text-white text-secondary">
                    Product ID
                  </label>
                  <input
                    className="w-full h-12 p-4 rounded-lg border-2 border-primary/50 bg-base-100/50 focus:outline-none"
                    type="text"
                    readOnly
                    defaultValue={orderForm._id}
                  />
                </div>
                <div className="flex flex-col">
                  <label className="block text-sm font-semibold mb-2 dark:text-white text-secondary">
                    Price
                  </label>
                  <input
                    className="w-full h-12 p-4 rounded-lg border-2 border-primary/50 bg-base-100/50 focus:outline-none"
                    type="text"
                    readOnly
                    defaultValue={orderForm.price}
                  />
                </div>
                <div className="flex flex-col sm:col-span-2">
                  <label className="block text-sm font-semibold mb-2 dark:text-white text-secondary">
                    Quantity
                  </label>
                  <input
                    className="w-full h-12 p-4 rounded-lg border-2 border-primary/50 bg-base-100/50 focus:outline-none"
                    readOnly={orderForm.category === "Pets"}
                    type="number"
                    defaultValue={1}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-6 md:mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="flex flex-col">
                  <label className="block text-sm font-semibold mb-2 dark:text-white text-secondary">
                    Buyer Name
                  </label>
                  <input
                    className="w-full h-12 p-4 rounded-lg border-2 border-primary/50 bg-base-100/50 focus:outline-none"
                    type="text"
                    readOnly
                    defaultValue={user?.displayName}
                  />
                </div>
                <div className="flex flex-col">
                  <label className="block text-sm font-semibold mb-2 dark:text-white text-secondary">
                    Email
                  </label>
                  <input
                    className="w-full h-12 p-4 rounded-lg border-2 border-primary/50 bg-base-100/50 focus:outline-none"
                    type="email"
                    readOnly
                    defaultValue={user?.email}
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex flex-col">
                  <label className="block text-sm font-semibold mb-2 dark:text-white text-secondary">
                    Shipping Address
                  </label>
                  <input
                    className="w-full h-12 p-4 rounded-lg border-2 border-primary/50 bg-base-100/50 focus:outline-none"
                    placeholder="Enter your full address"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="block text-sm font-semibold mb-2 dark:text-white text-secondary">
                    Phone Number
                  </label>
                  <input
                    className="w-full h-12 p-4 rounded-lg border-2 border-primary/50 bg-base-100/50 focus:outline-none"
                    placeholder="(123) 456-7890"
                    type="tel"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 dark:text-white text-secondary">
                    Date (Pick Up)
                  </label>
                  <input
                    className="w-full h-12 p-4 rounded-lg border-2 border-primary/50  bg-base-100/50 focus:outline-none"
                    type="date"
                    name="date"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="block text-sm font-semibold mb-2 dark:text-white text-secondary">
                    Additional Notes
                  </label>
                  <textarea
                    className="w-full h-12 p-4 rounded-lg border-2 border-primary/50  bg-base-100/50 focus:outline-none min-h-[100px]"
                    placeholder="Any special instructions or questions?"
                    rows="3"
                  ></textarea>
                </div>
              </div>
              <div className="mt-auto pt-6">
                <button className="w-full btn-primary shadow-glow hover:scale-101 transition-transform duration-300 text-white py-3 px-4 rounded-lg font-bold cursor-pointer ">
                  Submit Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderForm;
