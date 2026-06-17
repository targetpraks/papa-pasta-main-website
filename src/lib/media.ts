const rasterImagePattern = /\.(png|jpe?g)$/i;

const keepOriginalImage = (src: string) =>
  !src.startsWith("/images/") ||
  src.includes("/optimized/") ||
  src.includes("/logo-");

export function optimizedImage(src: string) {
  if (keepOriginalImage(src)) return src;
  return src.replace("/images/", "/images/optimized/").replace(rasterImagePattern, ".webp");
}
