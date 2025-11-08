import React from "react";

type Orientation = "vertical" | "horizontal";
type Side = "left" | "right" | "top" | "bottom";

interface GreenGlowLineProps {
  orientation: Orientation;
  position?: string; // optional for flexibility
  side?: Side;
  className?: string;
}

const GreenGlowLine: React.FC<GreenGlowLineProps> = ({
  orientation,
  position = "0",
  side,
  className = "",
}) => {
  const isVertical = orientation === "vertical";
  const containerClasses = isVertical
    ? "absolute w-px h-full 2xl:block xl:block lg:block md:block hidden"
    : "absolute w-full h-px";

  const positionStyle: React.CSSProperties = isVertical
    ? side === "right"
      ? { right: position }
      : { left: position }
    : side === "bottom"
      ? { bottom: position }
      : { top: position };

  const gradientDirection = isVertical
    ? "bg-gradient-to-b"
    : "bg-gradient-to-r";

  const customColor = "#4F0273"; // your desired purple color

  const glowLayers = [
    {
      size: isVertical ? "w-1 -ml-0.5" : "h-1 -mt-0.5",
      blur: "blur-sm",
      opacity: "opacity-100",
      color: customColor,
    },
    {
      size: isVertical ? "w-2 -ml-1" : "h-2 -mt-1",
      blur: "blur-md",
      opacity: "opacity-80",
      color: customColor,
    },
    {
      size: isVertical ? "w-4 -ml-2" : "h-4 -mt-2",
      blur: "blur-lg",
      opacity: "opacity-60",
      color: customColor,
    },
  ];

  return (
    <div className={`${containerClasses} ${className}`} style={positionStyle}>
      {/* Core line */}
      <div
        className={`absolute inset-0 ${gradientDirection}`}
        style={{
          background: isVertical
            ? `linear-gradient(to bottom, transparent, ${customColor}, transparent)`
            : `linear-gradient(to right, transparent, ${customColor}, transparent)`,
        }}
      />

      {/* Subtle white highlight */}
      <div
        className={`absolute inset-0 ${
          isVertical ? "w-0.5 -ml-px" : "h-0.5 -mt-px"
        } ${gradientDirection} opacity-50`}
        style={{
          background: isVertical
            ? "linear-gradient(to bottom, transparent, white, transparent)"
            : "linear-gradient(to right, transparent, white, transparent)",
        }}
      />

      {/* Glow layers */}
      {glowLayers.map((layer, index) => (
        <div
          key={index}
          className={`absolute inset-0 ${layer.size} ${layer.blur} ${layer.opacity}`}
          style={{
            background: isVertical
              ? `linear-gradient(to bottom, transparent, ${layer.color}, transparent)`
              : `linear-gradient(to right, transparent, ${layer.color}, transparent)`,
          }}
        />
      ))}
    </div>
  );
};

export default GreenGlowLine;
