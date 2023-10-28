'use client';
import { FC, ReactNode, useMemo, MouseEvent } from 'react';

import { OverridableComponent } from '@mui/material/OverridableComponent';
import { Typography, Stack, SvgIconTypeMap } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import PlaceIcon from '@mui/icons-material/Place';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TelegramIcon from '@mui/icons-material/Telegram';

import { ContactType } from '../types';

type ContactProps = {
  type: ContactType;
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
};

const configIcons: Record<ContactType, OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & { muiName: string }> = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  phone: PhoneIcon,
  map: PlaceIcon,
  youtube: YouTubeIcon,
  telegram: TelegramIcon,
};

const Contact: FC<ContactProps> = ({ type, children, onClick }) => {
  const ContactIcon = useMemo(() => configIcons[type], [type]);

  return (
    <Stack direction="row" spacing={4} onClick={onClick}>
      <ContactIcon fontSize="small" />
      <Typography variant="body2">{children}</Typography>
    </Stack>
  );
};

export default Contact;
