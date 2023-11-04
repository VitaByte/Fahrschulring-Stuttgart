import React, { useEffect } from 'react';

const Reviews = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.dataset.useServiceCore = true;
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      // Clean up the script when the component is unmounted
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="elfsight-app-31e26b29-f047-4771-9b9a-8cbacba9890d py-4" data-elfsight-app-lazy></div>
  );
};

export default Reviews;
