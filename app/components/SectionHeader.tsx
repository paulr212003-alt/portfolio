type SectionHeaderProps = {
  title: string;
  subtitle?: string;
};

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-10">
      {subtitle ? (
        <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
          {subtitle}
        </p>
      ) : null}
      <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl font-display glow-text">
        {title}
      </h2>
      <div className="mt-4 h-px w-24 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500" />
    </div>
  );
}
