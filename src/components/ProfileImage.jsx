import React, { useState, useEffect } from 'react';

const ProfileImage = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentImage, images]);

  return (
    <div>
      <img
        src={images[currentImage]}
        alt=""
        className="w-full h-[240px] object-cover rounded-md"
      />
    </div>
  )
}

export default ProfileImage