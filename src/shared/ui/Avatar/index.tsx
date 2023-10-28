'use client';
import { FC, ReactNode } from 'react';

import { useTheme } from '@mui/material';
import { Avatar as MUIAvatar, AvatarOwnProps } from '@mui/material';

type AvatarProps = {
  size?: 'small' | 'medium' | 'large';
  children: ReactNode;
};

const Avatar: FC<AvatarProps & AvatarOwnProps> = ({ size = 'medium', children, ...rest }) => {
  const { avatar } = useTheme();
  return (
    <MUIAvatar sx={{ width: avatar[size], height: avatar[size] }} {...rest}>
      {children}
    </MUIAvatar>
  );
};

export default Avatar;
