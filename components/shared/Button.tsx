import Link from "next/link";
import { type LucideIcon } from "lucide-react";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "white";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  variant?: Variant;
  size?: Size;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  href?: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  external?: boolean;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-hover shadow-lg shadow-primary/25 hover:shadow-primary/40",
  secondary:
    "bg-secondary text-white hover:bg-secondary-light",
  outline:
    "border-2 border-secondary text-secondary hover:bg-secondary hover:text-white",
  ghost:
    "text-secondary hover:bg-secondary/8",
  white:
    "bg-white text-secondary hover:bg-gray-50 shadow-lg",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm gap-1.5",
  md: "px-6 py-3 text-sm gap-2",
  lg: "px-8 py-4 text-base gap-2.5",
};

export default function Button({
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "left",
  href,
  className = "",
  children,
  onClick,
  type = "button",
  disabled = false,
  external = false,
}: ButtonProps) {
  const baseClasses = `inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 ${variantClasses[variant]} ${sizeClasses[size]} ${className} ${disabled ? "opacity-50 pointer-events-none" : ""}`;

  const content = (
    <>
      {Icon && iconPosition === "left" && (
        <Icon size={size === "sm" ? 14 : size === "lg" ? 20 : 16} aria-hidden="true" />
      )}
      {children}
      {Icon && iconPosition === "right" && (
        <Icon size={size === "sm" ? 14 : size === "lg" ? 20 : 16} aria-hidden="true" />
      )}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={baseClasses}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={baseClasses}>
      {content}
    </button>
  );
}
