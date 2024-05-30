

import React, { useState, useEffect } from 'react';
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from "../firebase";

const ImageLoader = ({ imagePaths }) => {
  const [imageUrls, setImageUrls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const urls = await Promise.all(
           imagePaths.map(async (path) => {
            if (!path) {
              throw new Error("Path to image is required");
            }
            const storageRef = ref(storage, path)
            return await getDownloadURL(storageRef)
        })
        
      );
        setImageUrls(urls);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
        
      }
    };

    
    fetchImages();
  }, [imagePaths]);


  if (loading) {
    return <div className='loading-card'><div className='loader'></div></div>;
  }

  if (error) {
    return <div>Error loading image: {error.message}</div>;
  }

  return (
    <div className='photoGrid'>
      {imageUrls.map((url, index) => (
        <div key={index} className='photoGrid-item' >
          <img src={url} alt={`Firebase ${index}`} />
        </div>
      ))}   
    </div>
  );
};

export default ImageLoader;
