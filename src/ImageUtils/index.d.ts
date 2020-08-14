
declare namespace ImageUtils {
  const compressorImage: (file: File | Blob, quality = 0.6) => File;
  const compressorImageBySize: (file: File | Blob, size = 1024 * 1024) => File;
}

export default ImageUtils;
