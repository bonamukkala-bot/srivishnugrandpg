import { useState } from "react";

interface BlurImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
}

export function BlurImage({ src, alt, className = "", loading = "lazy", ...props }: BlurImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative w-full h-full overflow-hidden bg-[#0a1a3a]">
      {/* Shimmer/gradient placeholder shown before image loads */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#050e23] via-[#0a1a3a] to-[#050e23] animate-pulse blur-md" />
      )}
      <img
        src={src}
        alt={alt}
        loading={loading}
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-700 ease-out ${
          isLoaded 
            ? "opacity-100 scale-100 blur-0" 
            : "opacity-0 scale-105 blur-lg"
        } ${className}`}
        {...props}
      />
    </div>
  );
}

export default BlurImage;
