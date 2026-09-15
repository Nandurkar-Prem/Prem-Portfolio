import { useEffect, useRef, useState } from "react";

const CHARACTER_FRAMES = Array.from(
  { length: 19 },
  (_, index) =>
    `/character/hero/character-${String(index + 1).padStart(2, "0")}.png`,
);

const INITIAL_FRAME = 9;

export default function CharacterImageSequence() {
  const [loaded, setLoaded] = useState(false);
  const [frame, setFrame] = useState(INITIAL_FRAME);

  const containerRef = useRef<HTMLDivElement>(null);

  const targetFrame = useRef(INITIAL_FRAME);
  const animatedFrame = useRef(INITIAL_FRAME);

  const animationFrameId = useRef<number | null>(null);

  /*
   * ----------------------------------------
   * PRELOAD ALL IMAGES
   * ----------------------------------------
   */

  useEffect(() => {
    let loadedCount = 0;
    let isMounted = true;

    CHARACTER_FRAMES.forEach((src) => {
      const image = new Image();

      image.onload = () => {
        loadedCount++;

        if (
          loadedCount === CHARACTER_FRAMES.length &&
          isMounted
        ) {
          setLoaded(true);
        }
      };

      image.onerror = () => {
        console.error(`Failed to load: ${src}`);
      };

      image.src = src;
    });

    return () => {
      isMounted = false;
    };
  }, []);

  /*
   * ----------------------------------------
   * SMOOTH ANIMATION
   * ----------------------------------------
   */

  const animate = () => {
    const difference =
      targetFrame.current - animatedFrame.current;

    /*
     * Lower number = smoother/slower
     * Higher number = faster/snappier
     */
    animatedFrame.current += difference * 0.12;

    setFrame(animatedFrame.current);

    if (Math.abs(difference) > 0.01) {
      animationFrameId.current =
        requestAnimationFrame(animate);
    } else {
      animationFrameId.current = null;
    }
  };

  /*
   * ----------------------------------------
   * MOUSE MOVEMENT
   * ----------------------------------------
   */

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement>,
  ) => {
    const container = containerRef.current;

    if (!container) return;

    const rect = container.getBoundingClientRect();

    const mouseX = event.clientX - rect.left;

    const normalizedX = Math.max(
      0,
      Math.min(1, mouseX / rect.width),
    );

    targetFrame.current =
      normalizedX * (CHARACTER_FRAMES.length - 1);

    if (animationFrameId.current === null) {
      animationFrameId.current =
        requestAnimationFrame(animate);
    }
  };

  /*
   * ----------------------------------------
   * CLEANUP
   * ----------------------------------------
   */

  useEffect(() => {
    return () => {
      if (animationFrameId.current !== null) {
        cancelAnimationFrame(
          animationFrameId.current,
        );
      }
    };
  }, []);

  /*
   * ----------------------------------------
   * LOADING
   * ----------------------------------------
   */

  if (!loaded) {
    return (
      <div
        ref={containerRef}
        className="flex h-full w-full items-center justify-center"
      >
        Loading character...
      </div>
    );
  }

  /*
   * ----------------------------------------
   * FRACTIONAL FRAME BLENDING
   * ----------------------------------------
   */

  const currentIndex = Math.floor(frame);

  const nextIndex = Math.min(
    currentIndex + 1,
    CHARACTER_FRAMES.length - 1,
  );

  const blend = frame - currentIndex;

  /*
   * ----------------------------------------
   * CHARACTER
   * ----------------------------------------
   */

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative flex h-full w-full items-center justify-center"
    >
      {/* Current frame */}
      <img
        src={CHARACTER_FRAMES[currentIndex]}
        alt="Portfolio character"
        draggable={false}
        className="absolute inset-0 m-auto h-full w-auto object-contain select-none"
        style={{
          opacity: 1 - blend,
        }}
      />

      {/* Next frame */}
      <img
        src={CHARACTER_FRAMES[nextIndex]}
        alt=""
        draggable={false}
        className="absolute inset-0 m-auto h-full w-auto object-contain select-none"
        style={{
          opacity: blend,
        }}
      />
    </div>
  );
}