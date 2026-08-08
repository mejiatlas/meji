interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
}

export default function Button({
  children,
  href,
  className = "",
}: ButtonProps) {
  const styles = `
    group
    relative
    inline-flex
    items-center
    justify-center
    overflow-hidden
    rounded-full
    border
    border-white/40
    bg-transparent
    px-8
    py-4
    text-sm
    font-semibold
    uppercase
    tracking-[0.2em]
    text-white
    transition-all
    duration-300
    hover:border-[#ff5c8a]
    hover:bg-[#ff5c8a]
    hover:text-[#050505]
    hover:shadow-[0_0_30px_rgba(255,92,138,0.25)]
    ${className}
  `;

  const content = (
    <>
      <span className="transition-transform duration-300 group-hover:translate-x-1">
        {children}
      </span>

      <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={styles}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={styles}>
      {content}
    </button>
  );
}