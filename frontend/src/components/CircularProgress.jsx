import  { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CircularProgress = ({ progress,size = 66, stroke = 8 }) => {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const circleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (circleRef.current && textRef.current) {
      const progressValue = { val: 0 };

      gsap.to(progressValue, {
        val: progress,
        duration: 1.5,
        ease: "power3.out",
        onUpdate: () => {
          const offset =
            circumference - (progressValue.val / 100) * circumference;
          circleRef.current.style.strokeDashoffset = offset;
          textRef.current.textContent = `${Math.round(progressValue.val)}%`;
        },
      });
    }
  }, [progress, circumference]);

  return (
    <div className="relative flex items-center justify-center mt-4">
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="rgba(255,255,255,0.2)"
          strokeWidth={stroke}
          fill="none"
        />
        <circle
          ref={circleRef}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="url(#gradient)"
          strokeWidth={stroke}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9333ea" />
            <stop offset="100%" stopColor="#c026d3" />
          </linearGradient>
        </defs>
      </svg>

      <div className="absolute flex items-center justify-center">
        <h2 ref={textRef} className="text-sm font-semibold text-white">
          0%
        </h2>
      </div>
    </div>
  );
};

export default CircularProgress;
