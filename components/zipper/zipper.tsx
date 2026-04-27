"use client";

import { useEffect, useRef, useState } from "react";
// @ts-ignore
export default function ScrollVideo(): JSX.Element | null {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [show, setShow] = useState(true);
  const hasPlayedRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();
    video.currentTime = 0;

    const lockScroll = () => {
      document.body.style.overflow = "hidden";
    };

    const unlockScroll = () => {
      document.body.style.overflow = "";
    };

    const handleVideoEnd = () => {
      unlockScroll();
      setShow(false);
    };

    video.addEventListener("ended", handleVideoEnd);

    lockScroll(); // initial lock

    const handleWheel = () => {
      if (hasPlayedRef.current) return;

      hasPlayedRef.current = true;

      video.play().catch(() => {
        // autoplay safety fallback
      });
    };

    window.addEventListener("wheel", handleWheel, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      video.removeEventListener("ended", handleVideoEnd);
      unlockScroll();
    };
  }, []);

  if (!show) return null;

  return (
    <div
      ref={containerRef}
      style={{
        height: "100vh",
        width: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 999999,
      }}
    >
      <video
        ref={videoRef}
        src="/image/zipper.webm"
        muted
        playsInline
        preload="auto"
        className="w-full h-full md:object-contain object-cover object-top"
        // style={{
        //   width: "100%",
        //   height: "100%",
        //   objectFit: "cover",
        //   objectPosition: "top",
        // }}
      />
    </div>
  );
}