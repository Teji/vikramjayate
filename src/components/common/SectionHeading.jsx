export default function SectionHeading({
  eyebrow,
  title,
  description,
  centered = true,
}) {
  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
          {eyebrow}
        </p>
      )}

      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}
