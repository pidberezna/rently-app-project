import { ImgHTMLAttributes } from 'react';

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
}

export default function Image({ src, ...rest }: ImageProps) {
  src =
    src && src.includes('https://')
      ? src
      : 'http://localhost:3000/uploads/' + src;
  return <img {...rest} src={src} alt={''} />;
}
