import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface CardProps {
  imageSrc: StaticImageData | string;
  buttonText?: string;
  centerText?: string;
  bottomTitle?: string;
  bottomDescription?: string;
  price?: string;
  imageWrapperClassName?: string;
  onButtonClick?: () => void;
  priority?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  imageSrc, 
  buttonText = "View More", 
  centerText,
  bottomTitle,
  bottomDescription,
  price,
  imageWrapperClassName = "w-[320px] h-[500px]",
  onButtonClick, 
  priority = false 
}) => {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Card Image Section */}
      <div className={`${imageWrapperClassName} rounded-2xl overflow-hidden relative group`}>
        <Image
          src={imageSrc}
          alt="product"
          fill
          sizes="(max-width: 768px) 100vw, 320px"
          priority={priority}
          className="object-cover object-[center_0%] transition-transform duration-500 group-hover:scale-105"
        />

        {/* Center Text Overlay */}
        {centerText && (
          <div className="absolute inset-0 flex items-center justify-center p-6 text-center select-none pointer-events-none">
            <h3 className="text-[#FFD700] text-lg lg:text-[19px] font-bold uppercase tracking-[0.1em] leading-snug drop-shadow-lg whitespace-pre-line">
              {centerText}
            </h3>
          </div>
        )}
      </div>

      {/* Optional Bottom Text Section */}
      {(bottomTitle || bottomDescription || price) && (
        <div className="mt-5 flex flex-col items-center text-center space-y-1.5 px-2">
          {bottomTitle && (
            <h4 className="text-[#6E2814] text-[15px] font-bold uppercase tracking-widest leading-snug whitespace-pre-line">
              {bottomTitle}
            </h4>
          )}
          {bottomDescription && (
            <p className="text-[#6E2814] text-[10px] leading-relaxed max-w-[260px] font-medium">
              {bottomDescription}
            </p>
          )}
          {price && (
            <p className="text-[#6E2814] text-[15px] font-bold tracking-widest pt-1">
              {price}
            </p>
          )}
        </div>
      )}

      {/* Button */}
      <button 
        onClick={onButtonClick}
        className="mt-4 bg-[#D08740] hover:bg-[#B37032] text-white px-8 py-2 rounded-full text-[15px] font-medium tracking-wide transition-colors"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Card;