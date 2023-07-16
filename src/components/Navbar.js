"use client";

import React, { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="bg-white">
      <header className=" bg-white ">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-16 w-auto"
                src="https://www.fahrschulring.de/templates/fr_start/img/logo.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <a
              href="/"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Startseite
            </a>
            <a
              href="/team"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Team
            </a>
            <a
              href="/fahrzeuge"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Fahrzeuge
            </a>
            <a
              href="/klassen"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Klassen
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Anfahrt
            </a>
            <a
              href="/kontakt"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Kontakt
            </a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="/impressum"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Impressum{" "}
            </a>
            <a
              href="/data_protection"
              className="ml-3 text-sm font-semibold leading-6 text-gray-900"
            >
              Datenschutz{" "}
            </a>
          </div>
        </nav>
        {isMenuOpen && (
          <div className="lg:hidden" role="dialog" aria-modal="true">
            <div className="fixed inset-0 z-50"></div>
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt=""
                  />
                </a>
                <button
                  type="button"
                  className="-mr-2 w-10 h-10 flex items-center justify-center rounded-md text-gray-700"
                  onClick={toggleMenu}
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="mt-6">
                <a
                  href="/"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Startseite
                </a>
                <a
                  href="/team"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Team
                </a>
                <a
                  href="/fahrzeuge"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Fahrzeuge
                </a>
                <a
                  href="/klassen"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Klassen
                </a>
                <a
                  href="#"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Anfahrt
                </a>
                <a
                  href="/kontakt"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Kontakt
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default Navbar;
