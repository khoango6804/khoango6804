interface AvatarProps {
  src: string
  alt: string
  size?: "sm" | "md" | "lg" | "xl"
  border?: boolean
  className?: string
}

export function Avatar({ src, alt, size = "md", border = true, className = "" }: AvatarProps) {
  const sizeClasses = {
    sm: "w-24 h-24",
    md: "w-32 h-32",
    lg: "w-48 h-48",
    xl: "w-64 h-64 md:w-80 md:h-80",
  }

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      {border && (
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 animate-spin-slow" />
      )}
      <div className="absolute inset-1 rounded-full bg-white dark:bg-gray-950" />
      <div className="absolute inset-2 rounded-full overflow-hidden">
        <img
          alt={alt}
          className="w-full h-full object-cover"
          src={src || "/placeholder.svg"}
          width={size === "xl" ? 600 : 400}
          height={size === "xl" ? 600 : 400}
        />
      </div>
    </div>
  )
}
