import React, { useState } from 'react';
import './Testimonials.css';

const testimonialsData = [
  {
    id: 1,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    author: 'John Doe',
  },
  {
    id: 2,
    text: 'Pellentesque pretium id nisl ac consequat.',
    author: 'Jane Smith',
  },
  {
    id: 3,
    text: 'Pellentesque pretium id nisl ac consequat.',
    author: 'Alice Tailor',
  },
  // Add more testimonials from Google Reviews API
];

function Testimonials() {
  const [startIndex, setStartIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handlePrev = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setStartIndex((prevIndex) => {
          const newIndex = prevIndex - 4;
          return newIndex < 0 ? testimonialsData.length - 4 : newIndex;
        });
        setIsTransitioning(false);
      }, 500); // Adjust the delay time as needed (500 milliseconds in this example)
    }
  };

  const handleNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setStartIndex((prevIndex) => {
          const newIndex = prevIndex + 4;
          return newIndex >= testimonialsData.length ? 0 : newIndex;
        });
        setIsTransitioning(false);
      },); // Adjust the delay time as needed (500 milliseconds in this example)
    }
  };

  const visibleTestimonials = testimonialsData.slice(startIndex, startIndex + 4);

  return (
    <div className="bg-gray-100 py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-8 text-gray-900">
            Was unsere Schüler sagen
          </h2>
          <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {visibleTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="p-6 bg-white rounded-lg shadow-md"
              >
                <p className="text-gray-700">{testimonial.text}</p>
                <p className="text-gray-900 font-semibold mt-4">
                  - {testimonial.author}
                </p>
              </div>
            ))}
            <button
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
              onClick={handlePrev}
            >
              &lt;
            </button>
            <button
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
              onClick={handleNext}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
