import type React from "react"
import Image from "next/image"
import logo from "@/public/image.png"
interface LogoProps {
  width?: number
  height?: number
  className?: string
}

export const Logo: React.FC<LogoProps> = ({ width, height, className }) => {
  return (
    <Image
      src="/image.png"
      alt="Logo"
      width={width || 135}
      height={height || 36}
      className={`h-[clamp(2.5rem,3rem,4rem)] w-auto ${className || ""}`}
      priority
    />
  )
}
