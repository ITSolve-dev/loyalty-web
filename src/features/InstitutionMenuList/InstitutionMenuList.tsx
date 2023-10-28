'use client';
import { FC } from 'react';

import { Grid } from '@mui/material';

import { InstitutionMenuItem } from '@/entities';
import type { MenuItem } from '@/entities/InstitutionMenuItem';
import { CurrencyType } from '@/entities/InstitutionMenuItem';

const config1: MenuItem[] = [
  {
    title: 'Item name',
    price: 1,
    currency: CurrencyType.BYN,
    description: '140г',
  },
  {
    title: 'Item name',
    price: 1,
    currency: CurrencyType.BYN,
    description: '140г',
  },
  {
    title: 'Item name',
    price: 1,
    currency: CurrencyType.BYN,
    description: '140г',
  },
  {
    title: 'Item name',
    price: 1,
    currency: CurrencyType.BYN,
    description: '140г',
  },
  {
    title: 'Item name',
    price: 1,
    currency: CurrencyType.BYN,
    description: '140г',
  },
  {
    title: 'Item name',
    price: 1,
    currency: CurrencyType.BYN,
    description: '140г',
  },
];

const InstitutionMenuList: FC = () => {
  return (
    <Grid container gap={8}>
      {config1.map((item, index) => (
        <Grid key={index} item xs="auto" container>
          <InstitutionMenuItem item={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default InstitutionMenuList;
