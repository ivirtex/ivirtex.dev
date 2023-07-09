export default function Footer({ className }: { className?: string }) {
  return (
    <footer>
      <div
        className={`py-4 pt-12 text-center text-sm text-neutral-400 ${className}`}
      >
        Copyright © 2023 Hubert Jóźwiak. All rights reserved.
      </div>
    </footer>
  );
}
