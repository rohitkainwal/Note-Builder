import React, { useRef, useState } from "react";

const Card = ({ title, description, children }) => {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg)");

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Calculate mouse position relative to the center of the card
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Adjust the "20" to increase or decrease the tilt intensity
    const rotateX = ((y - centerY) / centerY) * -20; 
    const rotateY = ((x - centerX) / centerX) * 20;

    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
  };

  const handleMouseLeave = () => {
    // Reset position when mouse leaves
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg)");
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="
        w-full max-w-[280px] min-h-[400px] mx-auto
        bg-[rgb(var(--color-primary))] rounded-2xl
        flex items-center justify-center
        transition-transform duration-200 ease-out
        cursor-pointer
      "
      style={{
        transform: transform,
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
    >
      <div
        className="
          w-[85%] rounded-xl bg-white dark:bg-neutral-900
          px-6 py-8 text-left shadow-2xl
        "
        style={{
          // This creates the "floating" effect for the inner white box
          transform: "translateZ(60px)", 
        }}
      >
        {/* Top Content Area */}
        {children && <div className="mb-6">{children}</div>}

        {/* Text Content */}
        <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-1">
          {title}
        </h4>
        <p className="text-sm text-gray-500 leading-tight">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;