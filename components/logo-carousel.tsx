"use client"

import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { PlayIcon, PauseIcon } from "lucide-react"

interface LogoCarouselProps {
  logos: { src: string; alt: string }[]
}

export default function LogoCarousel({ logos }: LogoCarouselProps) {
  const [isPaused, setIsPaused] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let scrollInterval: NodeJS.Timeout | null = null

    const startScrolling = () => {
      if (carouselRef.current) {
        scrollInterval = setInterval(() => {
          if (carouselRef.current) {
            carouselRef.current.scrollLeft += 1 // Adjust scroll speed here
            if (carouselRef.current.scrollLeft >= carouselRef.current.scrollWidth - carouselRef.current.clientWidth) {
              carouselRef.current.scrollLeft = 0 // Loop back to start
            }
          }
        }, 20) // Adjust interval for smoother or faster scroll
      }
    }

    if (!isPaused) {
      startScrolling()
    }

    return () => {
      if (scrollInterval) {
        clearInterval(scrollInterval)
      }
    }
  }, [isPaused])

  const togglePause = () => {
    setIsPaused(!isPaused)
  }

  return (
    <div className="relative w-full overflow-hidden">
      <div
        ref={carouselRef}
        className="flex space-x-8 py-4 overflow-x-hidden scroll-smooth whitespace-nowrap"
        style={{ scrollBehavior: "smooth" }}
      >
        {/* Duplicate logos to create a seamless loop effect */}
        {Array(2)
          .fill(logos)
          .flat()
          .map((logo, index) => (
            <div key={index} className="inline-block flex-shrink-0 w-[160px] h-[80px] flex items-center justify-center">
              <Image
                src={logo.src || "/placeholder.svg"}
                alt={logo.alt}
                width={160}
                height={80}
                className="object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
      </div>
      <div className="absolute bottom-4 right-4 z-10">
        <Button
          variant="outline"
          size="icon"
          onClick={togglePause}
          aria-label={isPaused ? "Reanudar carrusel" : "Pausar carrusel"}
          className="bg-white/80 hover:bg-white text-blue-700"
        >
          {isPaused ? <PlayIcon className="h-5 w-5" /> : <PauseIcon className="h-5 w-5" />}
        </Button>
      </div>
    </div>
  )
}
