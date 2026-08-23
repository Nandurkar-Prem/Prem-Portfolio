import { motion } from "framer-motion";

interface TransitionMarqueeProps {
  items: string[];
  speed?: number;
  reverse?: boolean;
}

function MarqueeItems({ items }: { items: string[] }) {
  return (
    <div className="flex shrink-0 items-center">
      {items.map((item, index) => (
        <div
          key={`${item}-${index}`}
          className="flex shrink-0 items-center"
        >
          <span
            className="
              whitespace-nowrap
              px-6
              text-[0.65rem]
              font-semibold
              uppercase
              tracking-[0.28em]
              text-[#D7E2EA]/45
              transition-colors
              duration-300
              hover:text-[#D7E2EA]/80
              sm:px-8
              sm:text-xs
            "
          >
            {item}
          </span>

          <span
            className="
              bg-gradient-to-r
              from-[#5EDCF5]
              to-[#A855F7]
              bg-clip-text
              text-sm
              text-transparent
              sm:text-base
            "
          >
            ✦
          </span>
        </div>
      ))}
    </div>
  );
}

export function TransitionMarquee({
  items,
  speed = 28,
  reverse = false,
}: TransitionMarqueeProps) {
  return (
    <section
      className="
        relative
        z-20
        overflow-hidden
        border-y
        border-white/[0.08]
        bg-[#0C0C0C]
      "
      aria-label="Portfolio transition"
    >
      {/* Ambient glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-20
          w-[40%]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-purple-500/[0.035]
          blur-3xl
        "
      />

      {/* Marquee viewport */}
      <div className="relative flex h-[72px] items-center overflow-hidden sm:h-[78px]">
        <motion.div
          className="flex w-max shrink-0"
          animate={{
            x: reverse ? ["-25%", "0%"] : ["0%", "-25%"],
          }}
          transition={{
            duration: speed,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
        >
          {/* Copy 1 */}
          <MarqueeItems items={items} />

          {/* Copy 2 */}
          <MarqueeItems items={items} />

          {/* Copy 3 */}
          <MarqueeItems items={items} />

          {/* Copy 4 */}
          <MarqueeItems items={items} />
        </motion.div>
      </div>

      {/* Top cyan highlight */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-px
          w-32
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-[#5EDCF5]/45
          to-transparent
        "
      />

      {/* Bottom purple highlight */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2
          h-px
          w-32
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-[#A855F7]/45
          to-transparent
        "
      />
    </section>
  );
}