declare type FilterType = 'WEEK' | 'MONTH' | 'YEAR' | 'DAY';

declare type FilterConfig = {
  title: string;
  value: FilterType;
};
