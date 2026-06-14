import { useId } from "react";

type SectionDividerProps = {
  /** Flip the wave vertically (useful between sections with different bg colors) */
  flip?: boolean;
  /** Top fill color (section above) */
  from?: string;
  /** Bottom fill color (section below) */
  to?: string;
  className?: string;
};

export function SectionDivider({
  flip = false,
  from = "#050e23",
  to = "#0a1a3a",
  className = "",
}: SectionDividerProps) {
  const gradId = useId();
  return (
    <div
      className={`relative w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""} ${className}`}
      aria-hidden
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="block w-full h-10 md:h-14"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={from} />
            <stop offset="50%" stopColor={to} />
            <stop offset="100%" stopColor={from} />
          </linearGradient>
        </defs>
        <path
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
          fill={`url(#${gradId})`}
        />
        <path
          d="M0,50 C360,10 720,70 1080,30 C1260,15 1380,45 1440,50"
          fill="none"
          stroke="rgba(212,175,55,0.15)"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}

export default SectionDivider;
