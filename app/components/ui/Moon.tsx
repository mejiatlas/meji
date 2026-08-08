interface MoonProps {
  className?: string;
}

export default function Moon({ className = "h-6 w-6" }: MoonProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        d="M30.5 5.5C26.8 8.2 24.4 12.7 24.4 17.8C24.4 25.9 31 32.5 39 32.5C40.1 32.5 41.1 32.4 42 32.2C39.1 36.7 34 39.5 28.2 39.5C19.2 39.5 11.9 32.2 11.9 23.2C11.9 14.2 19.2 6.9 28.2 6.9C29 6.9 29.8 7 30.5 7.1Z"
        transform="translate(-4 -3)"
      />
    </svg>
  );
}