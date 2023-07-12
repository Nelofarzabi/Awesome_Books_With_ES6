import { DateTime } from './luxon.js';

const getDateAndTime = () => {
  const now = DateTime.local();
  const date = now.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  return date;
};
export default getDateAndTime;
