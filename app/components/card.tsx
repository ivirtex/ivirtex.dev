export default function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-lg bg-neutral-900 p-4 pb-4 shadow-md ${className}`}
    >
      {children}
    </div>
  );
}
