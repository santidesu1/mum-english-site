import Link from "next/link";
import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline" | "ghost";
  asChild?: boolean;
};

export function Button({ variant = "primary", className = "", asChild, ...props }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-extrabold transition focus:outline-none focus:ring-2 focus:ring-ink/30 disabled:opacity-50 disabled:cursor-not-allowed";
  const styles: Record<string, string> = {
    primary: "bg-ink text-white hover:opacity-90",
    outline: "bg-white text-ink ring-1 ring-black/10 hover:bg-paper",
    ghost: "bg-transparent text-ink hover:bg-paper",
  };

  if (asChild) {
    // Used only with <a> or <Link> passed as child in pages.
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{props.children}</>;
  }

  return <button className={`${base} ${styles[variant]} ${className}`} {...props} />;
}
