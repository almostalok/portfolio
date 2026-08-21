import React from "react";

interface SvgProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  yellowStroke?: boolean;
}

export function Bird({ className = "w-6 h-6", yellowStroke = false, ...props }: SvgProps) {
  return (
    <svg
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M2 14C5 8 10 4 15 10C16 11 17 11 18 10C23 4 27 8 30 14"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 10C16 14 17 17 18 20"
        stroke={yellowStroke ? "#F4C400" : "currentColor"}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="16" cy="7" r="1.5" fill="#111318" />
    </svg>
  );
}

export function Tree({ className = "w-8 h-10", ...props }: SvgProps) {
  return (
    <svg
      viewBox="0 0 36 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Crown */}
      <path
        d="M18 4C11 4 7 10 7 16C3 18 2 24 5 28C8 32 12 33 18 33C24 33 28 32 31 28C34 24 33 18 29 16C29 10 25 4 18 4Z"
        fill="#FFFFFF"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* Subtle foliage lines */}
      <path
        d="M12 18C14 15 17 16 19 14M15 25C18 22 22 23 25 21"
        stroke="#F4C400"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {/* Trunk */}
      <path
        d="M16 33V44M20 33V44M14 44H22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Cloud({ className = "w-10 h-6", ...props }: SvgProps) {
  return (
    <svg
      viewBox="0 0 44 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M8 22H36C40 22 42 19 41 15C40 11 36 10 33 11C31 6 25 3 20 5C16 7 14 10 14 13C11 12 6 14 6 18C6 21 8 22 8 22Z"
        fill="#FFFFFF"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 18C16 17 19 17 21 18"
        stroke="#F4C400"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ArrowDoodle({ className = "w-16 h-8", direction = "right", ...props }: SvgProps & { direction?: "right" | "left" | "down" | "curved" }) {
  if (direction === "curved") {
    return (
      <svg
        viewBox="0 0 60 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        {...props}
      >
        <path
          d="M4 18C16 4 38 4 52 14"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeDasharray="3 3"
        />
        <path
          d="M46 9L53 15L45 19"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (direction === "down") {
    return (
      <svg
        viewBox="0 0 24 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        {...props}
      >
        <path
          d="M12 2V30M6 24L12 31L18 24"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 48 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M2 10H42M34 3L43 10L34 17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PaperPlane({ className = "w-8 h-8", ...props }: SvgProps) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M3 18L33 3L18 33L15 21L3 18Z"
        fill="#FFFFFF"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 21L33 3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 21V28L19 24"
        stroke="#F4C400"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CoffeeCup({ className = "w-12 h-14", ...props }: SvgProps) {
  return (
    <svg
      viewBox="0 0 48 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Steam lines */}
      <path
        d="M16 8C15 4 17 2 16 0M24 10C23 5 25 3 24 1M32 9C31 4 33 2 32 1"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Cup body */}
      <path
        d="M10 14H38L34 42C34 45 31 47 28 47H20C17 47 14 45 14 42L10 14Z"
        fill="#FFFFFF"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      {/* Cup handle */}
      <path
        d="M37 20C42 20 44 24 43 29C42 34 38 35 35 35"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Coffee detail band */}
      <path
        d="M13 24H35"
        stroke="#F4C400"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Tiny heart doodle on cup */}
      <path
        d="M22 32C22 30 20 28 18.5 30C17 32 22 36 24 37C26 36 31 32 29.5 30C28 28 26 30 26 32"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function LaptopPerson({ className = "w-28 h-28", ...props }: SvgProps) {
  return (
    <svg
      viewBox="0 0 100 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Desk */}
      <path d="M10 82H90" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      
      {/* Head */}
      <circle cx="48" cy="26" r="12" fill="#FFFFFF" stroke="currentColor" strokeWidth="2.2" />
      {/* Hair */}
      <path
        d="M38 24C38 16 46 14 54 16C58 17 60 21 60 25C57 23 54 22 50 22C46 22 42 24 38 24Z"
        fill="#111318"
      />
      {/* Face features */}
      <circle cx="53" cy="27" r="1.5" fill="#111318" />
      <path d="M52 32C54 33 56 32 57 30" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      
      {/* Body / hoodie */}
      <path
        d="M36 44C36 38 42 37 48 37C54 37 62 38 64 45L68 64H32L36 44Z"
        fill="#FFFFFF"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      {/* Hoodie drawstring yellow */}
      <path d="M46 40V48M52 40V49" stroke="#F4C400" strokeWidth="1.8" strokeLinecap="round" />
      
      {/* Arms & Hands */}
      <path
        d="M34 50L56 56L68 62"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Laptop */}
      <path
        d="M54 52L68 64H86L76 50H60"
        fill="#FFFFFF"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M64 64L88 64" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      {/* Screen glow / lines */}
      <path d="M66 54L74 61" stroke="#F4C400" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function GroupPeople({ className = "w-28 h-28", ...props }: SvgProps) {
  return (
    <svg
      viewBox="0 0 110 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Person 1 (Left) */}
      <circle cx="34" cy="28" r="10" fill="#FFFFFF" stroke="currentColor" strokeWidth="2" />
      <path d="M26 24C28 18 36 17 42 20" fill="#111318" />
      <path
        d="M24 46C24 38 30 38 34 38C38 38 44 38 44 46L46 68H22L24 46Z"
        fill="#FFFFFF"
        stroke="currentColor"
        strokeWidth="2"
      />

      {/* Person 2 (Center - taller) */}
      <circle cx="56" cy="22" r="10" fill="#FFFFFF" stroke="currentColor" strokeWidth="2" />
      <path d="M48 18C52 12 60 12 64 16" fill="#111318" />
      <path
        d="M46 40C46 32 52 32 56 32C60 32 68 32 68 40L70 68H44L46 40Z"
        fill="#FFFFFF"
        stroke="currentColor"
        strokeWidth="2"
      />
      {/* Yellow collar */}
      <path d="M53 34L56 38L59 34" stroke="#F4C400" strokeWidth="1.8" strokeLinecap="round" />

      {/* Person 3 (Right) */}
      <circle cx="78" cy="29" r="10" fill="#FFFFFF" stroke="currentColor" strokeWidth="2" />
      <path d="M72 23C76 18 84 19 86 25" fill="#111318" />
      <path
        d="M68 47C68 39 74 39 78 39C82 39 88 39 88 47L90 68H66L68 47Z"
        fill="#FFFFFF"
        stroke="currentColor"
        strokeWidth="2"
      />

      {/* High-fiving / connecting hands */}
      <path
        d="M38 46L54 28L60 32"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M74 46L60 28"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Sparkles / high five energy */}
      <path
        d="M57 18V12M52 15L48 13M62 15L66 13"
        stroke="#F4C400"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Ground line */}
      <path d="M12 72H98" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function FlaskIllustration({ className = "w-28 h-28", ...props }: SvgProps) {
  return (
    <svg
      viewBox="0 0 90 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Bubbles floating */}
      <circle cx="45" cy="14" r="3" fill="#FFFFFF" stroke="#F4C400" strokeWidth="1.8" />
      <circle cx="54" cy="20" r="2" fill="#FFFFFF" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="36" cy="22" r="2.5" fill="#FFFFFF" stroke="#F4C400" strokeWidth="1.5" />

      {/* Flask Top & Neck */}
      <rect x="38" y="26" width="14" height="4" rx="2" fill="#FFFFFF" stroke="currentColor" strokeWidth="2" />
      <path d="M41 30V44M49 30V44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />

      {/* Flask Body */}
      <path
        d="M41 44L22 72C20 75 22 79 26 79H64C68 79 70 75 68 72L49 44"
        fill="#FFFFFF"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />

      {/* Liquid inside */}
      <path
        d="M26 68C32 65 38 69 45 66C52 63 58 67 64 68L62 76H28L26 68Z"
        fill="#F4C400"
        fillOpacity="0.85"
        stroke="#111318"
        strokeWidth="1.6"
      />

      {/* Measurement ticks */}
      <path d="M37 54H42M35 60H41M33 66H40" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />

      {/* Sparkles around */}
      <path d="M72 40L75 43L78 40L75 37L72 40Z" fill="#F4C400" />
      <path d="M14 48L16 50L18 48L16 46L14 48Z" fill="#F4C400" />
    </svg>
  );
}

export function WalkingPerson({ className = "w-16 h-20", ...props }: SvgProps) {
  return (
    <svg
      viewBox="0 0 60 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Head */}
      <circle cx="28" cy="16" r="9" fill="#FFFFFF" stroke="currentColor" strokeWidth="2" />
      <path d="M22 13C24 9 32 8 36 12" fill="#111318" />
      {/* Backpack */}
      <rect x="15" y="27" width="8" height="16" rx="3" fill="#F4C400" stroke="currentColor" strokeWidth="1.8" />
      
      {/* Body / Torso */}
      <path
        d="M23 25C27 25 34 26 36 30L34 48H22L23 25Z"
        fill="#FFFFFF"
        stroke="currentColor"
        strokeWidth="2"
      />
      {/* Arm swinging forward */}
      <path
        d="M28 30L38 38L42 36"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Legs walking */}
      {/* Front leg */}
      <path
        d="M29 48L37 62L44 72"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Back leg */}
      <path
        d="M25 48L19 60L12 70"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Shoes */}
      <path d="M43 72H49M10 70H16" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

export function DeveloperWithGraph({ className = "w-36 h-36", ...props }: SvgProps) {
  return (
    <svg
      viewBox="0 0 130 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Floating Browser Window with graph */}
      <rect x="18" y="10" width="86" height="54" rx="6" fill="#FFFFFF" stroke="currentColor" strokeWidth="1.8" />
      <path d="M18 22H104" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="26" cy="16" r="2" fill="#111318" />
      <circle cx="32" cy="16" r="2" fill="#111318" />
      <circle cx="38" cy="16" r="2" fill="#F4C400" />
      
      {/* Graph line */}
      <path
        d="M26 48L42 38L58 44L76 28L94 34"
        stroke="#111318"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="76" cy="28" r="3" fill="#F4C400" stroke="#111318" strokeWidth="1.5" />
      <circle cx="94" cy="34" r="3" fill="#FFFFFF" stroke="#111318" strokeWidth="1.5" />

      {/* Developer on Right */}
      <circle cx="96" cy="74" r="10" fill="#FFFFFF" stroke="currentColor" strokeWidth="2" />
      <path d="M88 70C90 64 98 64 104 68" fill="#111318" />
      
      {/* Developer body */}
      <path
        d="M86 84C86 78 92 78 96 78C100 78 106 78 106 84L108 104H84L86 84Z"
        fill="#FFFFFF"
        stroke="currentColor"
        strokeWidth="2"
      />
      {/* Laptop & desk */}
      <path d="M60 104H118" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path
        d="M74 94L88 102H98L92 90H80"
        fill="#FFFFFF"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      {/* Yellow glow */}
      <path d="M84 94L88 98" stroke="#F4C400" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function PersonWithLaptopAndPlane({ className = "w-36 h-36", ...props }: SvgProps) {
  return (
    <svg
      viewBox="0 0 130 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Developer */}
      <circle cx="68" cy="36" r="11" fill="#FFFFFF" stroke="currentColor" strokeWidth="2" />
      <path d="M59 32C61 24 71 23 77 28" fill="#111318" />
      <path
        d="M56 47C56 41 62 41 68 41C74 41 80 41 80 47L82 82H54L56 47Z"
        fill="#FFFFFF"
        stroke="currentColor"
        strokeWidth="2"
      />
      {/* Hoodie strings */}
      <path d="M66 45V52M70 45V53" stroke="#F4C400" strokeWidth="1.6" strokeLinecap="round" />

      {/* Laptop */}
      <path
        d="M44 72L56 82H76L68 68H52"
        fill="#FFFFFF"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M42 82H82" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />

      {/* Flying Paper Plane Taking Off */}
      <g transform="translate(86, 12) rotate(15)">
        <path
          d="M0 14L24 0L12 24L10 16L0 14Z"
          fill="#FFFFFF"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path d="M10 16L24 0" stroke="currentColor" strokeWidth="1.6" />
        <path d="M10 16V22L13 19" stroke="#F4C400" strokeWidth="1.5" />
      </g>
      {/* Trajectory flight dashed line */}
      <path
        d="M62 66C70 54 80 42 90 28"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="3 3"
      />
    </svg>
  );
}

export function BrokenTerminal({ className = "w-20 h-20", ...props }: SvgProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <rect x="6" y="10" width="52" height="44" rx="4" fill="#FFFFFF" stroke="currentColor" strokeWidth="2" />
      <path d="M6 22H58" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="14" cy="16" r="2" fill="#111318" />
      <circle cx="20" cy="16" r="2" fill="#111318" />
      <circle cx="26" cy="16" r="2" fill="#F4C400" />
      
      {/* Crack zig-zag */}
      <path
        d="M28 22L36 34L30 42L40 54"
        stroke="#111318"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Error >_ text */}
      <path d="M14 32L20 37L14 42M24 42H32" stroke="#F4C400" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
