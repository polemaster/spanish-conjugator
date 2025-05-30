type TheorySectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
};

export function TheorySection({ id, title, children }: TheorySectionProps) {
  return (
    <section id={id} className="mb-10 scroll-mt-24">
      <h2 className="text-2xl font-bold border-b border-neutral-400 pb-2 mb-4">
        {title}
      </h2>
      <div className="space-y-4 leading-relaxed">{children}</div>
    </section>
  );
}
