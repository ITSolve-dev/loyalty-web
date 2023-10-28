import { FC, MouseEvent } from 'react';

import { InstitutionToCustomerCardSize } from '../types';

import PreviewCard from './Preview';
import StandardCard from './Standard';

export type InstitutionToCustomerCardProps = {
  /**
   * On click event handler
   */
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;

  /**
   * Size type of card
   */
  type?: InstitutionToCustomerCardSize;
};

/**
 * Card to display for current user(customer)
 * which institution (cafe or etc) has amount of scans
 * @param onClick on click handler. Default is empty function
 * @returns
 */
const InstitutionToCustomerCard: FC<InstitutionToCustomerCardProps> = ({ type = 'standard', ...rest }) => {
  return type === 'preview' ? <PreviewCard {...rest} /> : <StandardCard {...rest} />;
};

export default InstitutionToCustomerCard;
