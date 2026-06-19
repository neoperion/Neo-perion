export function formatDate(input: string | Date, opts?: { withTime?: boolean }): string {
  const date = typeof input === 'string' ? new Date(input) : input;
  if (Number.isNaN(date.getTime())) return '';
  const datePart = date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  return opts?.withTime
    ? `${datePart} · ${date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}`
    : datePart;
}

export function timeAgo(input: string | Date): string {
  const seconds = Math.floor((Date.now() - (typeof input === 'string' ? new Date(input) : input).getTime()) / 1000);
  if (seconds < 60) return 'just now';
  const m = Math.floor(seconds / 60);
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  const d = Math.floor(h / 24);
  return d < 30 ? `${d}d ago` : formatDate(input);
}
