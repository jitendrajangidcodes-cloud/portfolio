/**
 * The full PNSJY wordmark — five bouncing "buddy" tiles spelling P-N-S-J-Y.
 * Ported faithfully from app-store-web's hero logo (same colors, same shape,
 * same bounce animation) so the brand looks identical across every surface.
 */
const LETTERS = [
  { ch: 'P', bg: '#e8632c', fg: '#ffffff' },
  { ch: 'N', bg: '#f0a92c', fg: '#6b4400' },
  { ch: 'S', bg: '#3fae6a', fg: '#ffffff' },
  { ch: 'J', bg: '#2f7ee3', fg: '#ffffff' },
  { ch: 'Y', bg: '#8a56d6', fg: '#ffffff' },
] as const;

function BuddyTile({
  ch,
  bg,
  fg,
  size,
}: {
  ch: string;
  bg: string;
  fg: string;
  size: number;
}) {
  const radius = Math.round(size * 0.28);
  const font = Math.round(size * 0.55);
  const eye = Math.max(3, Math.round(size * 0.13));
  const gap = Math.round(size * 0.19);
  const top = Math.round(size * 0.19);
  const pad = Math.round(size * 0.1);

  return (
    <div
      className="animate-buddy-bounce relative flex shrink-0 items-end justify-center shadow-[0_10px_24px_rgba(0,0,0,0.28)]"
      style={{ width: size, height: size, borderRadius: radius, background: bg }}
    >
      <div className="absolute flex" style={{ top, gap }}>
        <span className="block rounded-full" style={{ width: eye, height: eye, background: fg }} />
        <span className="block rounded-full" style={{ width: eye, height: eye, background: fg }} />
      </div>
      <span
        className="font-extrabold leading-none"
        style={{ fontSize: font, color: fg, paddingBottom: pad }}
      >
        {ch}
      </span>
    </div>
  );
}

export function PnsjyLogo({ size = 62 }: { size?: number }) {
  return (
    <div className="flex gap-[3px]" aria-label="PNSJY logo">
      {LETTERS.map((b) => (
        <BuddyTile key={b.ch} ch={b.ch} bg={b.bg} fg={b.fg} size={size} />
      ))}
    </div>
  );
}
