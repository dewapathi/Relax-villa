interface SectionTitleProps {
  tagline?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  light?: boolean;
  className?: string;
}

export default function SectionTitle({
  tagline,
  title,
  subtitle,
  align = "center",
  light = false,
  className = "",
}: SectionTitleProps) {
  const alignClass = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  }[align];

  return (
    <div className={`flex flex-col gap-3 ${alignClass} ${className}`}>
      {tagline && (
        <div className="flex items-center gap-3">
          {align !== "left" && <span className="block w-8 h-px bg-gold" />}
          <p
            className={`text-xs tracking-[0.3em] uppercase font-sans font-medium ${
              light ? "text-gold-light" : "text-gold-dark"
            }`}
          >
            {tagline}
          </p>
          {align !== "right" && <span className="block w-8 h-px bg-gold" />}
        </div>
      )}
      <h2
        className={`font-serif font-light leading-[1.15] ${
          light ? "text-ivory" : "text-green-950"
        } text-4xl sm:text-5xl lg:text-6xl`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-2 text-base sm:text-lg leading-relaxed max-w-xl ${
            align === "center" ? "mx-auto" : ""
          } ${light ? "text-ivory/70" : "text-stone-600"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
