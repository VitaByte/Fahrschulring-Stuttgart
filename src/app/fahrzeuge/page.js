import React from "react";

export default function Fahrzeuge() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mx-auto max-w-screen-sm text-center mb-8">
          <h2 className="mb-4 text-2xl tracking-tight font-semibold text-gray-700 dark:text-white">
            Unsere Fahrzeuge
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          <a href="#" className="group">
            <div className="aspect-h-1 aspect-w-1 w-full h-96 overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <img
                src="https://images.pexels.com/photos/3166786/pexels-photo-3166786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                className="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-sm text-gray-700"> BMW</h3>
          </a>
          <a href="#" className="group">
            <div className="aspect-h-1 aspect-w-1 w-full  h-96 overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <img
                src="https://images.pexels.com/photos/5381501/pexels-photo-5381501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Olive drab green insulated bottle with flared screw lid and flat top."
                className="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-sm text-gray-700"> BMW</h3>
          </a>
          <a href="#" className="group">
            <div className="aspect-h-1 aspect-w-1 w-full  h-96 overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <img
                src="https://images.pexels.com/photos/8642186/pexels-photo-8642186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Person using a pen to cross a task off a productivity paper card."
                className="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-sm text-gray-700"> BMW</h3>
          </a>
          <a href="#" className="group">
            <div className="aspect-h-1 aspect-w-1 w-full  h-96 overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <img
                src="https://images.pexels.com/photos/3923522/pexels-photo-3923522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Hand holding black machined steel mechanical pencil with brass tip and top."
                className="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">BMW</h3>
          </a>
        </div>
      </div>
    </div>
  );
}
