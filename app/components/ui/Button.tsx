type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-8 py-4 font-medium transition-all duration-300";

  const styles = {
    primary:
      "bg-white text-black hover:scale-105 hover:shadow-xl",
    secondary:
      "border border-white/20 bg-white/10 backdrop-blur text-white hover:bg-white hover:text-black",
  };

  return (
    <button className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  );
}