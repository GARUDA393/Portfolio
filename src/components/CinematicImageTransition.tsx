"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

type Visual = {
  id: string;
  src: string;
  alt: string;
};

export function CinematicImageTransition({
  visuals
}: {
  visuals: readonly Visual[];
}) {
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const glassSheenRef = useRef<HTMLDivElement | null>(null);
  const activeIndex = useRef(-1);
  const ticking = useRef(false);

  useEffect(() => {
    if (!visuals.length) return;

    const images = imageRefs.current.filter(
      Boolean
    ) as HTMLDivElement[];

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    gsap.set(images, {
      autoAlpha: 0,
      scale: reducedMotion ? 1 : 1.06
    });

    const activate = (index: number) => {
      if (index === activeIndex.current) return;

      const target = images[index];

      if (!target) return;

      activeIndex.current = index;

      if (glassSheenRef.current && !reducedMotion) {
        gsap.fromTo(
          glassSheenRef.current,
          { xPercent: -140, autoAlpha: 0 },
          {
            xPercent: 420,
            autoAlpha: 1,
            duration: 1.2,
            ease: "power2.inOut",
            overwrite: true,
            onComplete: () => {
              gsap.set(glassSheenRef.current, { autoAlpha: 0 });
            }
          }
        );
      }

      images.forEach((image, imageIndex) => {
        if (imageIndex === index) {
          gsap.to(image, {
            autoAlpha: 1,
            scale: 1,
            duration: reducedMotion ? 0 : 0.9,
            ease: "power3.out",
            overwrite: true
          });
        } else {
          gsap.to(image, {
            autoAlpha: 0,
            scale: reducedMotion ? 1 : 1.06,
            duration: reducedMotion ? 0 : 0.6,
            ease: "power2.out",
            overwrite: true
          });
        }
      });
    };

    const update = () => {
      ticking.current = false;

      const viewportPoint = window.innerHeight * 0.45;

      let active = 0;
      let bestDistance = Infinity;

      visuals.forEach((visual, index) => {
        const section = document.getElementById(visual.id);

        if (!section) {
          console.warn(
            `[GARUDA] Section not found: #${visual.id}`
          );
          return;
        }

        const rect = section.getBoundingClientRect();

        /*
         * If the viewport point is inside the section,
         * that section is definitely active.
         */
        if (
          rect.top <= viewportPoint &&
          rect.bottom >= viewportPoint
        ) {
          active = index;
          bestDistance = 0;
          return;
        }

        /*
         * Otherwise find the section closest to the
         * viewport activation point.
         */
        const distance =
          rect.top > viewportPoint
            ? rect.top - viewportPoint
            : viewportPoint - rect.bottom;

        if (distance < bestDistance) {
          bestDistance = distance;
          active = index;
        }
      });

      activate(active);
    };

    const requestUpdate = () => {
      if (ticking.current) return;

      ticking.current = true;
      requestAnimationFrame(update);
    };

    /*
     * Initial activation
     */
    update();

    window.addEventListener(
      "scroll",
      requestUpdate,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      requestUpdate
    );

    return () => {
      window.removeEventListener(
        "scroll",
        requestUpdate
      );

      window.removeEventListener(
        "resize",
        requestUpdate
      );

      gsap.killTweensOf(images);
    };
  }, [visuals]);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {visuals.map((visual, index) => (
        <div
          key={`${visual.id}-${visual.src}`}
          ref={(element) => {
            imageRefs.current[index] = element;
          }}
          className="absolute inset-0"
        >
          <Image
            src={visual.src}
            alt=""
            fill
            priority={index < 2}
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* Main darkening layer */}
          <div className="absolute inset-0 bg-black/10" />

          {/* Cinematic vertical gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#08090B]/15 to-[#08090B]/75" />

          {/* Edge vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(8,9,11,.12)_65%,rgba(8,9,11,.7)_100%)]" />
        </div>
      ))}

      <div className="glass-surface absolute inset-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(255,255,255,.08),transparent_38%)]" />
      <div
        ref={glassSheenRef}
        className="absolute -inset-y-1/2 left-[-18%] w-[18%] rotate-[18deg] bg-white/[0.13] blur-3xl"
        style={{ opacity: 0 }}
      />
    </div>
  );
}