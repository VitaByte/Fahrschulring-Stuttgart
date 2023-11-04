import React from "react";

function Stats() {
  const rating = 4.9; // Rating value

  const renderStars = () => {
    const stars = [];
    const maxStars = 5;

    for (let i = 1; i <= maxStars; i++) {
      if (i <= rating) {
        // Full star
        stars.push(<span key={i} className="text-yellow-400">&#9733;</span>);
      } else {
        // Empty star
        stars.push(<span key={i} className="text-gray-300">&#9733;</span>);
      }
    }

    return stars;
  };
  return (
    <div className="bg-blue-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3 items-center">
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-base leading-7 text-gray-600">
                Eingeschriebene Studierende pro Monat
            </dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              15
            </dd>
          </div>
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-base leading-7 text-gray-600">
              Assets under holding
            </dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              $119 trillion
            </dd>
          </div>
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-base leading-7 text-gray-600">
              Bewertungen
            </dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              {renderStars()} ({rating})
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

export default Stats;
