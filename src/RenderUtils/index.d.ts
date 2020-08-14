import moment from 'moment';

declare namespace RenderUtils {
  const renderTime: (text: moment.MomentInput, format?: string, empty?: string) => string;
  const renderDate: (text: moment.MomentInput, empty?: string) => string;
  const renderDateTime: (text: moment.MomentInput, empty?: string) => string;
}

export default RenderUtils;
