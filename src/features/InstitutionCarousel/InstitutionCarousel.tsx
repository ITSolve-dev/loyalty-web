'use client';
import { FC, useCallback } from 'react';
import { useRouter } from 'next/navigation';

import { Typography, Grid, Box } from '@mui/material';

import { InstitutionToCustomerCard, Carousel } from '@/shared/ui';

type InstitutionCarouselProps = {};

const InstitutionCarousel: FC<InstitutionCarouselProps> = (props) => {
  const router = useRouter();

  const handleRoute = useCallback(() => router.push('/institutions/1'), [router]);

  return (
    <Grid container rowGap={8}>
      <Grid item>
        <Typography variant="h4" fontWeight={700}>
          Ваши баллы
        </Typography>
      </Grid>
      <Grid item width="100%">
        <Carousel>
          <InstitutionToCustomerCard type="preview" onClick={handleRoute} />
          <InstitutionToCustomerCard type="preview" onClick={handleRoute} />
          <InstitutionToCustomerCard type="preview" onClick={handleRoute} />
          <InstitutionToCustomerCard type="preview" onClick={handleRoute} />
          <InstitutionToCustomerCard type="preview" onClick={handleRoute} />
          <InstitutionToCustomerCard type="preview" onClick={handleRoute} />
          <InstitutionToCustomerCard type="preview" onClick={handleRoute} />
        </Carousel>
      </Grid>
    </Grid>
  );
};

export default InstitutionCarousel;
