import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  // Function to determine the appropriate size class based on technology name
  const getSizeClass = (techName) => {
    if (techName === "sqlite") {
      return "w-20 h-20"; // Larger size for SQLite
    } else if (techName === "Three JS") {
      return "w-20 h-20 invert-0"; // Larger size for Three.js with no inversion
    } else {
      return "w-16 h-16"; // Default size for other technologies
    }
  };

  // Function to determine if we should use an SVG component
  const isSvg = (icon) => {
    return typeof icon === 'string' && icon.endsWith('.svg');
  };

  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28 flex items-center justify-center' key={technology.name}>
          {technology.name === "Three JS" ? (
            // Special handling for Three.js SVG
            <div
              className={`${getSizeClass(technology.name)} flex items-center justify-center`}
              title={technology.name}
            >
              <img
                src={technology.icon}
                alt={technology.name}
                className="w-full h-full object-contain hover:scale-125 transition-transform duration-300"
              />
            </div>
          ) : (
            // Regular image handling for other technologies
            <img
              src={technology.icon}
              alt={technology.name}
              className={`${getSizeClass(technology.name)} object-contain hover:scale-125 transition-transform duration-300`}
              title={technology.name}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
