import React, { useState } from 'react';
import { data } from './Data';
import { IoCloseCircleSharp } from 'react-icons/io5';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';

const Gallery = () => {
  const [model, setModel] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModel = (index) => {
    setCurrentIndex(index);
    setModel(true);
  };

  const closeModel = () => {
    setModel(false);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <div className={model ? 'model open' : 'model'}>
        {model && (
          <>
            <img src={data[currentIndex].imgSrc} alt="Current" />
            <div className="controls  w-44 h-44 flex">
              <MdNavigateBefore onClick={handlePrevious} className="control-icon ml-4" />
              <MdNavigateNext onClick={handleNext} className="control-icon mr-4" />
            </div>
            <div className='absolute w-full h-full flex justify-end '>
            <IoCloseCircleSharp onClick={closeModel} className=" close-icon" />
            </div>
          </>
        )}
      </div>
      <div className="gallery">
        {data.map((item, index) => (
          <div
            className="pics"
            key={index}
            onClick={() => openModel(index)}
          >
            <img src={item.imgSrc} alt="Gallery" style={{ width: '100%' }} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
