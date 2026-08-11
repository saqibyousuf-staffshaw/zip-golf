"use client"
import React, { useState } from 'react'
import ScrollGif from "@/components/zipper/zipper";
import VideoLoader from "@/components/VideoLoader/VideoLoader";

type Props = {}

function LoaderComp({ }: Props) {
    const [videoComplete, setVideoComplete] = useState(false)
    return (
        <>
            {!videoComplete ?
                <VideoLoader setVideoComplete={setVideoComplete} />
                : null}
            {videoComplete ?
                <ScrollGif />
                : null}
        </>
    )
}

export default LoaderComp