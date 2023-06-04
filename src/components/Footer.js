import React from "react";

function Footer() {
  return (
    <footer className="bg-green-300 dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <span className="self-center mr-2 text-2xl font-semibold whitespace-nowrap text-gray dark:text-white">
              Fahrschulring
            </span>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Fahrschulklassen
              </h2>
              <ul className="text-gray-600 dark:text-gray-400 font-medium">
                <li className="mb-4">- A, A2, A1 und AM</li>
                <li>- B/ BF17, B96, BE, C1</li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Adresse
              </h2>
              <ul className="text-gray-600 dark:text-gray-400 font-medium">
                <li>Fahrschulring Stuttgart</li>
                <li>Frank Eibl</li>
                <li>Hegelstraße 48</li>
                <li>70174 Stuttgart</li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Info
              </h2>
              <ul className="text-gray-600 dark:text-gray-400 font-medium">
                <li>Tel./Fax.: 0711 / 294100</li>
                <li>Email: info@fahrschulring.de</li>
                <li>Bürozeiten: Mo. - Do. ab 15:00 - 18:30 Uhr</li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023 Fahrschulring Stuttgart. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <svg
              className="w-5 h-5 text-gray-500 hover:text-gray-900 dark:hover:text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.462h-1.26c-1.243 0-1.631.774-1.631 1.566V12h2.775l-.443 2.878h-2.332V22C18.343 21.129 22 16.991 22 12z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              className="w-5 h-5 text-gray-500 hover:text-gray-900 dark:hover:text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.486 2 2 6.486 2 12c0 5.514 4.486 10 10 10s10-4.486 10-10c0-5.514-4.486-10-10-10zm3.984 7.983h-1.969c-.422 0-.797.219-1.016.563l-.984 1.688-.984-1.688c-.219-.344-.594-.563-1.016-.563h-1.969v6h1.969c.422 0 .797-.219 1.016-.563l.984-1.687.984 1.687c.219.344.594.563 1.016.563h1.969v-6zm-3.984 4.032c-.981 0-1.781-.797-1.781-1.781 0-.981.797-1.781 1.781-1.781s1.781.797 1.781 1.781c0 .984-.797 1.781-1.781 1.781zm3 0c-.982 0-1.781-.797-1.781-1.781 0-.981.797-1.781 1.781-1.781s1.781.797 1.781 1.781c0 .984-.797 1.781-1.781 1.781zm3 0c-.982 0-1.781-.797-1.781-1.781 0-.981.797-1.781 1.781-1.781s1.781.797 1.781 1.781c0 .984-.797 1.781-1.781 1.781z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              className="w-5 h-5 text-gray-500 hover:text-gray-900 dark:hover:text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.486 2 2 6.486 2 12c0 5.514 4.486 10 10 10s10-4.486 10-10c0-5.514-4.486-10-10-10zm6.367 9.617v.672c0 1.215-.266 2.519-.788 3.668-.481 1.035-1.246 1.971-2.178 2.849-.499.436-1.186.934-2.207.934-.125 0-.246-.011-.365-.032-1.06-.231-1.788-.95-1.788-1.869v-.765c0-.503.217-.979.565-1.3.318-.296.693-.523 1.145-.622.825-.188 1.508-.231 2.307-.231.798 0 1.525.043 2.35.231.451.099.826.326 1.144.622.348.322.565.798.565 1.3zm-2.367 2.383v-.937c0-1.02-.447-1.926-1.157-2.534-.775-.647-1.836-1.094-2.96-1.094s-2.185.447-2.961 1.094c-.71.608-1.157 1.514-1.157 2.534v.937c0 .878.071 1.14.413 1.54.258.334.709.606 1.269.606.5 0 .971-.194 1.293-.621.116-.14.24-.378.282-.72h1.124c.042.342.165.58.28.72.322.427.793.621 1.293.621.56 0 1.01-.272 1.269-.606.342-.4.413-.662.413-1.54zm-6-5.917v-1h4v1h-4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
