'use client';
import { FC, ReactNode, useMemo } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Grid } from '@mui/material';
import { Search } from '@/shared/ui/Inputs';

// import 'swiper/css';
// import 'swiper/css/free-mode';
import './styles.scss';

type SearchListItemsProps = {
  children: ReactNode | ReactNode[];
  title?: ReactNode | string;
};

const SearchListItems: FC<SearchListItemsProps> = ({ children, title }) => {
  const items = useMemo((): ReactNode[] => (Array.isArray(children) ? children : [children]), []);

  return (
    <Grid container direction="column" alignItems="flex-start" justifyContent="center" rowGap={8}>
      {title && (
        <Grid container item xs={12}>
          {title}
        </Grid>
      )}
      <Grid container item xs={12}>
        <Search />
      </Grid>
      <Grid container item xs={12}>
        <Swiper direction="vertical" slidesPerView={3} spaceBetween={8} className="search-swiper">
          {items.map((item, index) => (
            <SwiperSlide key={index}>{item}</SwiperSlide>
          ))}
        </Swiper>
      </Grid>
    </Grid>
  );
};

export default SearchListItems;
