import React from "react";

function Hero() {
  return (
    <div className="relative bg-blue-100 px-6 py-14 lg:px-8">
      <div className="mx-auto max-w-2xl pt-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Ausbildung in allen Klassen
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Ihr Erfolg ist unser Ziel!
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-green-300 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Kontakt
            </a>
            <a
              href="#learn-more"
              className="text-sm transition-all duration-500  font-semibold leading-6 text-gray-900"
            >
              Lern mehr <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
