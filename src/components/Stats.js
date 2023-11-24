import React, { useState, useEffect, useRef } from 'react';

const useAnimatedCounter = (end, duration, startAnimation) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    let start = 0;
    const totalFrames = Math.round(duration / 1000 * 60);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      setCount(start + (end - start) * progress);

      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, 1000 / 60);

    return () => clearInterval(counter);
  }, [end, duration, startAnimation]);

  return Math.round(count);
};

function Stats() {
  const [startAnimation, setStartAnimation] = useState(false);
  const statsRef = useRef(null);

  const rating = 4.9;
  const students = useAnimatedCounter(15, 2000, startAnimation);
  const assets = useAnimatedCounter(119, 2000, startAnimation);

  const fullStars = useAnimatedCounter(Math.ceil(rating), 2000, startAnimation);

  const renderStars = () => {
    const stars = [];
    const maxStars = 5;

    for (let i = 1; i <= maxStars; i++) {
      stars.push(
        <span key={i} className={i <= fullStars ? "text-yellow-400" : "text-gray-300"}>
          &#9733;
        </span>
      );
    }

    return stars;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
        } else {
          setStartAnimation(false); // Reset animation when the section leaves the view
        }
      },
      { threshold: 0.5 }
    );
  
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
  
    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [statsRef]);

  return (
    <div ref={statsRef} className="bg-blue-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3 items-center">
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-base leading-7 text-gray-600">
                Eingeschriebene Studierende pro Monat
            </dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              {students}
            </dd>
          </div>
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-base leading-7 text-gray-600">
              Assets under holding
            </dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              ${assets} trillion
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