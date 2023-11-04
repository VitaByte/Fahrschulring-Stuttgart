import React from "react";

function Footer() {
  return (
    <footer className="bg-[#99CB66]">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-black uppercase dark:text-white">
                Fahrschulklassen
              </h2>
              <ul className="text-black dark:text-black-400 font-medium">
                <li className="mb-4">- A, A2, A1 und AM</li>
                <li>- B/ BF17, B96, BE, C1</li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-black uppercase dark:text-white">
                Adresse
              </h2>
              <ul className="text-black dark:text-black-400 font-medium">
                <li>Fahrschulring Stuttgart</li>
                <li>Frank Eibl</li>
                <li>Hegelstraße 48</li>
                <li>70174 Stuttgart</li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-black uppercase dark:text-white">
                Info
              </h2>
              <ul className="text-black dark:text-black-400 font-medium">
                <li>Tel./Fax.: 0711 / 294100</li>
                <li>Email: info@fahrschulring.de</li>
                <li>Bürozeiten: Mo. - Do. ab 15:00 - 18:30 Uhr</li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-black sm:mx-auto dark:border-black-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-black sm:text-center dark:text-black-400">
            © 2023 Fahrschulring Stuttgart. All Rights Reserved.
          </span>

          <div className="flex gap-4">
            <a href="/impressum" className=" text-sm leading-6 text-gray-900">
              Impressum{" "}
            </a>
            <a
              href="/data_protection"
              className=" text-sm leading-6 text-gray-900"
            >
              Datenschutz{" "}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
