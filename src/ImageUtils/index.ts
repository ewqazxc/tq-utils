import ImageCompressor from 'image-compressor.js';

export interface ImageUtils {
  compressorImage: (file: File | Blob, quality?: number) => File;
  compressorImageBySize: (file: File | Blob, size?: number) => File;
}

export const compressorImage = async (file: File | Blob, quality = 0.6, options?: ImageCompressor.Options) => {
  const newFile = await new Promise<File | Blob>(async (resolve, reject) => {
    new ImageCompressor(
      file,
      {
        ...options,
        quality: quality,
        async success(result: File) {
          var form = new FormData();
          form.append('file', result, result.name);
          resolve(result);
        },
        error(e) {
          console.debug(e.message);
          reject();
        },
      });
  });
  return newFile;
}

export const compressorImageBySize = async (file: File | Blob, size = 1024 * 1024, maxWidth = 960) => {
  let quality = .6;
  let newFile = await compressorImage(file, quality, { maxWidth });
  while (newFile.size > size && quality >= 0) {
    quality = Number((quality - 0.1).toFixed(1));
    if (quality >= 0) {
      newFile = await compressorImage(newFile, quality, { maxWidth });
    }
  }
  while (newFile.size > size) {
    quality = Number((quality - 0.1).toFixed(1));
    if (quality >= 0) {
      newFile = await compressorImage(newFile, quality);
    }
  }
  return newFile;
}

export default {
  compressorImage,
  compressorImageBySize
};
