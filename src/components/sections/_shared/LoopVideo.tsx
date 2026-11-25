"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export interface LoopVideoSource {
  /** MP4 (H.264, ohne Ton) unter /public/videos/, 1280×720. */
  src: string;
  /** Standbild, das vor dem Start und bei reduzierter Bewegung stehen bleibt. */
  poster: string;
  /** Kurze Beschreibung, was im Video zu sehen ist (wie ein Alt-Text). */
  label: string;
}

interface LoopVideoProps extends LoopVideoSource {
  className?: string;
}

/**
 * Stumme Endlosschleife (wenige Sekunden) als Ersatz für ein Standbild.
 * Lädt erst, wenn sie in Sichtweite kommt, spielt nur sichtbar, bleibt bei
 * „Bewegung reduzieren“ auf dem Standbild stehen und lässt sich jederzeit
 * anhalten (Knopf unten rechts).
 */
export function LoopVideo({ src, poster, label, className }: LoopVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [stoppedByUser, setStoppedByUser] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (reduceMotion || stoppedByUser) {
      video.pause();
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!video.getAttribute("src")) video.src = src;
          void video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { rootMargin: "200px 0px" },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [src, reduceMotion, stoppedByUser]);

  const toggle = () => {
    const video = ref.current;
    if (!video) return;
    if (playing) {
      setStoppedByUser(true);
      video.pause();
    } else {
      setStoppedByUser(false);
      if (!video.getAttribute("src")) video.src = src;
      void video.play().catch(() => {});
    }
  };

  return (
    <div className={cn("relative", className)}>
      <video
        ref={ref}
        poster={poster}
        muted
        loop
        playsInline
        preload="none"
        width={1280}
        height={720}
        aria-label={label}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        className="block h-auto w-full"
      />
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Video anhalten" : "Video abspielen"}
        className="absolute bottom-3 right-3 flex h-11 w-11 items-center justify-center rounded-full bg-black/55 text-white transition-colors hover:bg-black/75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        {playing ? (
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
            <rect x="6" y="5" width="4" height="14" rx="1" />
            <rect x="14" y="5" width="4" height="14" rx="1" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
            <path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5Z" />
          </svg>
        )}
      </button>
    </div>
  );
}
