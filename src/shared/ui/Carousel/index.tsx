import { FC, ReactNode } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/free-mode';
import './styles.scss';

export interface CarouselProps {
  children: ReactNode | ReactNode[];
}

const Carousel: FC<CarouselProps> = ({ children }) => {
  return Array.isArray(children) ? (
    <Swiper freeMode modules={[FreeMode]} spaceBetween={10} className="carousel-swiper">
      {children.map((child, index) => (
        <SwiperSlide key={index}>{child}</SwiperSlide>
      ))}
    </Swiper>
  ) : (
    children
  );
};

export default Carousel;
