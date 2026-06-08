interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon';
  dark?: boolean;
}

const Logo = ({ className = '', variant = 'full', dark = false }: LogoProps) => {
  const bgColor = dark ? '#fff' : '#111';
  const textColor = dark ? '#111' : '#fff';
  const subColor = dark ? '#666' : '#888';

  if (variant === 'icon') {
    return (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <rect width="48" height="48" rx="12" fill={bgColor} />
        <path
          d="M14 12V36H18V24L28 36H34L22 22L34 12H28L18 23V12H14Z"
          fill={textColor}
        />
        <path
          d="M33 33L38 38M38 38L38 33M38 38L33 38"
          stroke={textColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.4"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 220 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Icon */}
      <rect width="48" height="48" rx="12" fill={bgColor} />
      <path
        d="M14 12V36H18V24L28 36H34L22 22L34 12H28L18 23V12H14Z"
        fill={textColor}
      />
      <path
        d="M33 33L38 38M38 38L38 33M38 38L33 38"
        stroke={textColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.4"
      />

      {/* Text */}
      <text
        x="60"
        y="22"
        fontFamily="Inter, system-ui, -apple-system, sans-serif"
        fontWeight="800"
        fontSize="20"
        fill={textColor}
        letterSpacing="1"
      >
        KALKI
      </text>

      <text
        x="60"
        y="38"
        fontFamily="Inter, system-ui, -apple-system, sans-serif"
        fontWeight="500"
        fontSize="9"
        fill={subColor}
        letterSpacing="4"
      >
        TRAVEL MAGIC
      </text>
    </svg>
  );
};

export default Logo;
