"use client";

import { useEffect, useState } from "react";
interface Prop {
  setVideoComplete: any;
}
export default function VideoLoader({ setVideoComplete }: Prop) {
  const [loading, setLoading] = useState(true);

  const handleVideoEnd = () => {
    setVideoComplete(true)
    setLoading(false);
  };

  // if (loading) {
  return loading ? (
    <div className="fixed inset-0 w-screen bg-white h-screen flex items-center justify-center white z-[9999999]">
      <video
        src={"/image/Zip-golf-entrance.mp4"}
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
        className=" h-[60vh] aspect-square object-cover"
      />
    </div>
  ) : null;
  // }

  // return <>{children}</>;
}