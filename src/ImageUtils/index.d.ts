
declare namespace ImageUtils {
  const compressorImage: (file: File | Blob, quality?: number) => File;
  const compressorImageBySize: (file: File | Blob, size?: number) => File;
}

export default ImageUtils;
