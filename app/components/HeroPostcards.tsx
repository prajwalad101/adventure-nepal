'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { useState } from 'react';
import { Link } from '../../i18n/navigation';

export type PostcardItem = {
  src: string;
  alt: string;
  name: string;
  duration: string;
  slug: string;
};

const SPRING = { type: 'spring', stiffness: 300, damping: 28 } as const;

// Visual pose per position in the deck (0 = front).
const POSES = [
  { y: 0, rotate: 2, scale: 1 },
  { y: 12, rotate: -3, scale: 0.96 },
  { y: 22, rotate: 5, scale: 0.92 },
] as const;

export default function HeroPostcards({ items }: { items: PostcardItem[] }) {
  const [front, setFront] = useState(0);
  const count = items.length;

  const next = () => setFront((f) => (f + 1) % count);
  const prev = () => setFront((f) => (f - 1 + count) % count);

  return (
    <div className="relative mx-auto w-full max-w-md select-none lg:max-w-none">
      <div className="relative aspect-4/5">
        {items.map((item, i) => {
          const pos = (i - front + count) % count;
          const isFront = pos === 0;
          const pose = POSES[Math.min(pos, POSES.length - 1)];

          return (
            <motion.div
              key={item.slug}
              animate={{
                ...pose,
                x: 0,
                opacity: pos < POSES.length ? 1 : 0,
              }}
              transition={SPRING}
              style={{ zIndex: count - pos, touchAction: 'pan-y' }}
              drag={isFront ? 'x' : false}
              dragElastic={0.9}
              dragSnapToOrigin
              onDragEnd={(_, info) => {
                if (
                  Math.abs(info.offset.x) > 90 ||
                  Math.abs(info.velocity.x) > 500
                )
                  next();
              }}
              whileDrag={{ rotate: 6, scale: 1.03 }}
              className={`absolute inset-0 rounded-3xl bg-snow p-3 shadow-xl ring-1 ring-pine/10 ${
                isFront ? 'cursor-grab active:cursor-grabbing' : ''
              }`}
            >
              <div className="pointer-events-none relative h-full w-full overflow-hidden rounded-2xl">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  preload={i === 0}
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-cover"
                />
              </div>
              {isFront && (
                <Link
                  href={`/packages/${item.slug}`}
                  className="absolute bottom-6 left-6 rounded-full bg-marigold/95 px-3.5 py-1.5 font-display text-xs font-bold text-pine shadow-sm hover:bg-marigold-deep hover:text-snow transition-colors sm:text-sm"
                >
                  {item.name} · {item.duration}
                </Link>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* arrows */}
      <button
        type="button"
        onClick={prev}
        aria-label="Previous tour"
        className="absolute -left-5 top-1/2 z-40 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-snow text-pine shadow-md ring-1 ring-pine/10 hover:bg-marigold transition-colors sm:flex"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next tour"
        className="absolute -right-5 top-1/2 z-40 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-snow text-pine shadow-md ring-1 ring-pine/10 hover:bg-marigold transition-colors sm:flex"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M9 6l6 6-6 6" />
        </svg>
      </button>

      {/* dots */}
      <div className="mt-5 flex justify-center gap-2">
        {items.map((it, i) => (
          <span
            key={it.slug}
            className={`h-1.5 rounded-full transition-all ${
              i === front ? 'w-6 bg-marigold-deep' : 'w-1.5 bg-pine/20'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
