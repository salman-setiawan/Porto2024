import React, { useState } from 'react';

const ImageSkeleton = ({src, alt}) => {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };

  return (
    <div className="relative">
      {!loaded && (
        <div className="absolute inset-0 bg-gray-700 animate-pulse"></div>
      )}
      <img
        src={src}
        alt={alt}
        onLoad={handleLoad}
        className={`w-full h-full object-cover ${loaded ? 'block' : 'hidden'}`}
      />
    </div>
  )
}

export default ImageSkeleton