
"use client";

import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactLenis
      root
      options={{
        autoRaf: true,
        duration: 1.4,
        smoothWheel: true,
        syncTouch: false,
        anchors: {
          offset: -90,
        },
        lerp: 0.08,
        wheelMultiplier: 0.9,
        touchMultiplier: 1,
        overscroll: true,
        respectReducedMotion: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
