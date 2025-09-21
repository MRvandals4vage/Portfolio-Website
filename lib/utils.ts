export type ClassValue = string | number | null | false | undefined | ClassValue[] | { [key: string]: any };

function toClassName(input: ClassValue): string {
  if (!input) return '';
  if (typeof input === 'string' || typeof input === 'number') return String(input);
  if (Array.isArray(input)) return input.map(toClassName).filter(Boolean).join(' ');
  if (typeof input === 'object') return Object.keys(input).filter((k) => (input as any)[k]).join(' ');
  return '';
}

export function cn(...inputs: ClassValue[]) {
  return inputs.map(toClassName).filter(Boolean).join(' ');
}
