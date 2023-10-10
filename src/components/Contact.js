import React from "react";

function Contact() {
  return (
    <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mx-auto max-w-screen-sm text-center mb-8">
            <h2 className="mb-4 text-2xl tracking-tight font-semibold text-gray-700 dark:text-white">
              Hier könnt ihr uns eine Nachricht hinterlassen. Wir werden uns
              schnellstmöglich zurückmelden.
            </h2>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full py-2 rounded-md border border-gray-300 shadow-lg focus:ring-indigo-600 focus:border-indigo-600 placeholder-gray-400 text-gray-900"
                  placeholder="Vorname"
                  required
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full py-2 rounded-md border border-gray-300 shadow-lg focus:ring-indigo-600 focus:border-indigo-600 placeholder-gray-400 text-gray-900"                  required
                  placeholder="Nachname"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full py-2 rounded-md border border-gray-300 shadow-lg focus:ring-indigo-600 focus:border-indigo-600 placeholder-gray-400 text-gray-900"
                  placeholder="E-Mail"
                  required
                />
              </div>
            </div>
            
            <div className="sm:col-span-3">
              <label
                htmlFor="mobile"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
              </label>
              <div className="mt-2">
                <input
                  type="tel"
                  name="mobile"
                  id="mobile"
                  autoComplete="tel"
                  className="block w-full py-2 rounded-md border border-gray-300 shadow-lg focus:ring-indigo-600 focus:border-indigo-600 placeholder-gray-400 text-gray-900"
                  placeholder="Mobiltelefon"
                  required
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="zip-code"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="zip-code"
                  id="zip-code"
                  autoComplete="postal-code"
                  className="block w-full py-2 rounded-md border border-gray-300 shadow-lg focus:ring-indigo-600 focus:border-indigo-600 placeholder-gray-400 text-gray-900"
                  placeholder="PLZ"
                  required
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="city"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="city"
                  id="city"
                  autoComplete="address-level2"
                  className="block w-full py-2 rounded-md border border-gray-300 shadow-lg focus:ring-indigo-600 focus:border-indigo-600 placeholder-gray-400 text-gray-900"
                  placeholder="Ort"
                  required
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="message"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
              </label>
              <div className="mt-2">
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  className="block w-full py-2 rounded-md border border-gray-300 shadow-lg focus:ring-indigo-600 focus:border-indigo-600 placeholder-gray-400 text-gray-900"
                  placeholder="Ihre Nachricht..."
                  required
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Stornieren
        </button>
        <button
          type="submit"
          className="rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus:ring-green-600 focus:ring-offset-green-600 focus:ring-offset-2 focus:outline-none"
        >
          Absenden
        </button>
      </div>
    </form>
  );
}

export default Contact;
