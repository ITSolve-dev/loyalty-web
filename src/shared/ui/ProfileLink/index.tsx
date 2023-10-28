'use client';
import { FC, useCallback } from 'react';

import { useRouter } from 'next/navigation';

import Avatar from '../Avatar';
import LinkedButton from '../LinkedButton';

type ProfileLinkProps = {
  /**
   * Route to profile page
   */
  href: string;

  /** On click event handler. Default is empty function - () => {} */
  onClick?: () => void;
};

/**
 * Profile Label Link
 * @param href {string} route ro profile page
 * @param onClick {function} - on click event callback
 * @returns FC<ProfileLinkProps>
 */
const ProfileLink: FC<ProfileLinkProps> = ({ href, onClick = () => {} }) => {
  const router = useRouter();

  const handleRoute = useCallback(() => router.push(href), [href, router]);

  const handleClick = useCallback(() => {
    handleRoute();
    onClick();
  }, [handleRoute, onClick]);

  return (
    <LinkedButton onClick={handleClick} startAddon={<Avatar size="small">H</Avatar>}>
      Hello
    </LinkedButton>
  );
};

export default ProfileLink;
