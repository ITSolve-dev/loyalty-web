export interface Activity {
  /**
   * Amount of type of activity
   */
  amount: number;

  /**
   * 'scan' - General amount of scans
   * 'income' - Amount of incoming points
   * 'outgoing' - Amount of written of points
   */
  type: ActivityCardType;
}
