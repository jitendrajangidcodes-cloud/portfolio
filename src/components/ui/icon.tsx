import * as Icons from 'lucide-react';
import { cn } from '@/lib/utils';

/** Render a lucide-react icon by its string name (used by data-driven content). */
export function Icon({ name, className }: { name?: string; className?: string }) {
  const Cmp = (name && (Icons as unknown as Record<string, Icons.LucideIcon>)[name]) || Icons.Circle;
  return <Cmp className={cn('size-5', className)} aria-hidden />;
}
