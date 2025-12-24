"use client"; // Esto es importante si estás usando el App Router de Next.js

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function SkillCircle({ skill, value, img }) {
  return (
    <div className="flex flex-col items-center relative">
      <div style={{ width: 120, height: 120 }} className="relative">
        <CircularProgressbar
          value={value}
          styles={buildStyles({
            textColor: "transparent", // ocultar texto
            pathColor: "#5903A0",
            trailColor: "#DCC5ED",
          })}
        />

        {/* Imagen centrada dentro */}
        <img
          src={img}
          alt={skill}
          className="absolute top-1/2 left-1/2 w-50 h-15 transform -translate-x-1/2 -translate-y-1/2 rounded-full object-contain"
        />
      </div>
      <p className="mt-2 text-white text-sm">{skill}</p>
    </div>
  );
}

