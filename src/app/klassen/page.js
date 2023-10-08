import React from "react";
import LicenseCategoryCard from "../../components/LicenseCategoryCard"; // Adjust the path as needed


const Klassen = () => {
  const items = [
    {
      vehicleClass: 'A',
      description: 'Description for class A.',
      ageRequirement: '21 Jahre',
      includedClasses: 'A2, A1 und AM',
      imageUrl: 'path_to_image_A', // Replace with actual image URL for class A
    },
    {
      vehicleClass: 'B',
      description: 'Description for class B.',
      ageRequirement: '18 Jahre',
      includedClasses: 'AM und L',
      imageUrl: 'path_to_image_B', // Replace with actual image URL for class B
    },
    // Add more license categories as needed
  ];
  

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div className="px-4 sm:px-0">
        <h1 className="text-base font-semibold leading-7 text-gray-900">
          Ausbildung in allen Klassen
        </h1>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          {items.map((item, key) => (
            <div
              key={key}
              className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"
            >
              <LicenseCategoryCard
                category={item.vehicleClass}
                description={item.description}
                image={item.imageUrl} // Update with your image data
              />
              <dt className="text-base font-medium leading-6 text-gray-900">
                Mindestalter:
              </dt>
              <dd className="mt-1 text-base leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {item.ageRequirement}
              </dd>
              <dt className="text-base font-medium leading-6 text-gray-900"></dt>
              {item.includedClasses && (
                <dd className="mt-1 text-base leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  <b>Eingeschlossene Klassen:</b> {item.includedClasses}
                </dd>
              )}
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default Klassen;
