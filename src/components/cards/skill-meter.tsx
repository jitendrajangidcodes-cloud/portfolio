'use client';

import { motion } from 'framer-motion';
import type { Skill } from '@/types/content';

const levelColor: Record<Skill['level'], string> = {
  expert: 'from-primary to-accent',
  advanced: 'from-primary to-primary/60',
  proficient: 'from-accent to-accent/60',
  learning: 'from-muted-foreground/60 to-muted-foreground/30',
};

export function SkillMeter({ skill }: { skill: Skill }) {
  return (
    <div>
      <div className="mb-1.5 flex items-baseline justify-between gap-2">
        <span className="text-sm font-medium">{skill.name}</span>
        <span className="text-xs capitalize text-muted-foreground">{skill.level}</span>
      </div>
      <div
        className="h-2 w-full overflow-hidden rounded-full bg-muted"
        role="meter"
        aria-valuenow={skill.proficiency}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${skill.name} proficiency`}
      >
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${levelColor[skill.level]}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.proficiency}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        />
      </div>
      {skill.note && <p className="mt-1 text-xs text-muted-foreground">{skill.note}</p>}
    </div>
  );
}
