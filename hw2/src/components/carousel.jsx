import {useState} from 'react';

const Thumbnails = ({ images, current, onChange }) => {
    return (
        <div>
            {images.map((image, index) => (
                <img className='Thumbnails'
                    key={index}
                    src={image}
                    style={{border: index === current ? '3px solid black': ''}}
                    onClick={() => onChange(index)}
                />
            ))}
        </div>
    );
};

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handleThumbnailClick = (index) => {
      setCurrentIndex(index);
    };
  
    const handleArrowClick = (direction) => {
      if (direction === 'prev') {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      } else if (direction === 'next') {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    };

    return (
        <div>
            <div className='Carousel-cont'>
                <div className='Overlay' onClick={() => handleArrowClick('prev')}></div>
                <div className='Butt-cont' onClick={() => handleArrowClick('prev')}>{'<'}</div>
                <img className='My-img' src={images[currentIndex]} alt={`Image ${currentIndex}`} />
                <div className='Butt-cont' onClick={() => handleArrowClick('next')}>{'>'}</div>
            </div>

            <Thumbnails images={images} current={currentIndex} onChange={handleThumbnailClick} />
        </div>
    );
};

export default Carousel;