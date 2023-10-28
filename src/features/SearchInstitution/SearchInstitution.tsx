'use client';
import { FC, useCallback } from 'react';
import { useRouter } from 'next/navigation';

import { Grid, Typography, Button, Container } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { InstitutionToCustomerCard, SearchListItems } from '@/shared/ui';

const SearchInstitution: FC = () => {
  const router = useRouter();

  const handleRoute = useCallback(() => router.push('/institutions/1'), []);

  return (
    <Grid container rowGap={4}>
      <Grid item xs>
        <SearchListItems
          title={
            <Typography variant="h4" fontWeight={590}>
              Заведения Гродно
            </Typography>
          }
        >
          <InstitutionToCustomerCard type="standard" onClick={handleRoute} />
          <InstitutionToCustomerCard type="standard" onClick={handleRoute} />
          <InstitutionToCustomerCard type="standard" onClick={handleRoute} />
          <InstitutionToCustomerCard type="standard" onClick={handleRoute} />
        </SearchListItems>
      </Grid>
      <Grid container>
        <Button
          endIcon={<ArrowForwardIosIcon fontSize="small" />}
          color="primary"
          variant="contained"
          fullWidth
          sx={{ p: '20px 10px' }}
        >
          <Typography variant="body2" fontWeight={590}>
            Все заведения
          </Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

export default SearchInstitution;
