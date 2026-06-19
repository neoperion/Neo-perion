type ClassValue = string | number | null | undefined | false | Record<string, boolean> | ClassValue[];

export function cn(...inputs: ClassValue[]): string {
  const flat: string[] = [];
  const walk = (v: ClassValue): void => {
    if (!v && v !== 0) return;
    if (typeof v === 'string' || typeof v === 'number') flat.push(String(v));
    else if (Array.isArray(v)) v.forEach(walk);
    else if (typeof v === 'object') for (const k in v) if (v[k]) flat.push(k);
  };
  inputs.forEach(walk);
  return flat.join(' ');
}
