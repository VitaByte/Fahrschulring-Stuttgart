import React from "react";

function Hero() {
  const imageUrl = "/other/test1.png"; // Path to your image

  return (
    <div className="relative bg-blue-100 px-6 py-14 lg:px-8">
      {/* Flex Container */}
      <div className="flex items-center text-center lg:text-left">
        {/* Text and Button Container */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Ausbildung in allen Klassen
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Ihr Erfolg ist unser Ziel!
          </p>
          <div className="mt-10 flex items-center justify-center lg:justify-start gap-x-6">
            <a
              href="#"
              className="rounded-md bg-[#99CB66] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Kontakt
            </a>
            <a
              href="#learn-more"
              className="text-sm transition-all duration-500 font-semibold leading-6 text-gray-900"
            >
              Lern mehr <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {/* Image Container */}
        <div className="flex-1">
          <img src={imageUrl} alt="Driving School" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
}

export default Hero;