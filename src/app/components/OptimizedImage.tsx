import Image, { type ImageProps } from "next/image";
import { optimizedImage } from "@/lib/media";

type OptimizedImageProps = Omit<ImageProps, "src"> & {
  src: string;
};

export default function OptimizedImage({
  src,
  alt,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  ...props
}: OptimizedImageProps) {
  return <Image src={optimizedImage(src)} alt={alt} sizes={sizes} {...props} />;
}
