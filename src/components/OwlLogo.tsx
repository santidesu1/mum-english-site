import Image from "next/image";

export function OwlLogo({
  className = "h-9 w-9",
}: {
  className?: string;
}) {
  // Uses public/logo.png
  // Make sure the file exists at: public/logo.png
  return (
    <span className={`relative inline-block ${className}`} aria-hidden="true">
      <Image
        src="/logo.png"
        alt=""
        fill
        sizes="64px"
        priority
        style={{ objectFit: "contain" }}
      />
    </span>
  );
} 
