import moment from 'moment';

export interface RenderUtils {
  renderTime: (text: moment.MomentInput, format?: string, empty?: string) => string
  renderDate: (text: moment.MomentInput, empty?: string) => string
  renderDateTime: (text: moment.MomentInput, empty?: string) => string;
}

export const renderTime = (text: moment.MomentInput, format = 'YYY-MM-DD', empty = '-') => {
  let time = text ? moment(text).format(format) : empty;
  if (time === 'Invalid date') {
    time = empty;
  }
  return time;
};

export const renderDate = (text: moment.MomentInput, empty = '-') => {
  return renderTime(text, 'YYYY-MM-DD', empty);
};

export const renderDateTime = (text: moment.MomentInput, empty = '-') => {
  return renderTime(text, 'YYYY-MM-DD HH:mm:ss', empty);
};
