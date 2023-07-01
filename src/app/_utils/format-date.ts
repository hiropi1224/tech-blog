import { format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';

export const formatDate = (date: string): string => {
  const utcDate = new Date(date);
  const jst = utcToZonedTime(utcDate, 'Asia/Tokyo');

  return format(jst, 'yyyy/M/d HH:mm');
};
