import React from 'react';

export default function Cardsole() {
  return (
    <div>
      <section className="bg-gradient-to-r from-black to-gray-700">
        <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
            
            {/* Card 1 */}
            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to-gray-600 h-auto md:h-full flex flex-col">
              <a
                href="#"
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <img
                  src="pizza5.jpg"
                  alt="pizza 1"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/50"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 py-4 sm:text-xl md:text-xl">
                  Classic Bites
                </h3>
              </a>
            </div>

            {/* Card 2 */}
            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to-gray-600">
              <a
                href="#"
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4"
              >
                <img
                  src="pizza1.jpg"
                  alt="pizza 2"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/50"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 py-4 sm:text-xl md:text-xl">
                  Gourmet Grill
                </h3>
              </a>

              {/* Sub-cards */}
              <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                {/* Sub-card 1 */}
                <a
                  href="#"
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <img
                    src="/pizza4.jpg"
                    alt="pizza 3"
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/50"></div>
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 py-4 sm:text-xl md:text-xl">
                    Spicy Masala
                  </h3>
                </a>

                {/* Sub-card 2 */}
                <a
                  href="#"
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <img
                    src="/pizza3.jpg"
                    alt="pizza 4"
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/50"></div>
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 py-4 sm:text-xl md:text-xl">
                    Veggies
                  </h3>
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-span-2 sm:col-span-2 md:col-span-1 bg-gradient-to-r from-black to-gray-600 h-auto md:h-full flex flex-col">
              <a
                href="#"
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
              >
                <img
                  src="/pizza.jpg"
                  alt="pizza 5"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/50"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 py-4 sm:text-xl md:text-xl">
                  Cheese Delight
                </h3>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
