import { RenderUtils } from './src/RenderUtils';
import { ImageUtils } from './src/ImageUtils';

export { default as ImageUtils } from './src/ImageUtils/index.d';
export { default as RenderUtils } from './src/RenderUtils/index.d';

declare namespace tqUtils {
  const RenderUtils: RenderUtils;
  const ImageUtils: ImageUtils;
}
export default tqUtils;

// No 1
// export default tqUtils;
// declare namespace tqUtils{
//   const RenderUtils:RenderUtils;
// }
// export interface RenderUtils {
//   renderTime(): string;
//   renderDate(): string;
//   renderDateTime: (text: moment.MomentInput, empty?: string) => string;
// }

// No 2
// import { RenderUtils } from './src/RenderUtils';
// export default tqUtils;
// declare namespace tqUtils {
//   const RenderUtils: RenderUtils;
// }