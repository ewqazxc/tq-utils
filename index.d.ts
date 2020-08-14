// declare module 'tq-utils';
// export { default as tqUtils } from './src/index.d';
export { default as RenderUtils } from './src/RenderUtils/index.d';


// import { RenderUtils } from './src/RenderUtils';
// export default tqUtils;
// declare namespace tqUtils {
//   const RenderUtils: RenderUtils;
// }

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