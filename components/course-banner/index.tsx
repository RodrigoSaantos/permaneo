import Image from "next/image"
import { cn } from "@/lib/utils"
import { Course } from "./data/course"
import { Lock } from "lucide-react"
import { Button } from "../ui/button"
import Link from "next/link"

interface CourseBannerProps extends React.HTMLAttributes<HTMLDivElement> {
  course: Course
  aspectRatio?: "portrait" | "square"
  width?: number
  height?: number
}

export function CourseBanner({
  course,
  aspectRatio = "portrait",
  width,
  height,
  className,
  ...props
}: CourseBannerProps) {
  return (
    <Link className="flex justify-center" href={course.purchased ? `classroom/${course.id}` : `course/${course.id}`}>
      <div className={cn("group space-y-3", className)} {...props}>
        <div className="overflow-hidden rounded-md relative">
          <Image
            src={course.img}
            alt={course.title}
            width={width}
            height={height}
            className={cn(
              "h-auto w-auto object-cover transition-all hover:scale-105",
              aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square",
              !course.purchased && 'opacity-40'
            )}
          />
          {!course.purchased && (
            <div className="top-2 flex justify-center items-center left-2 absolute bg-background size-10 rounded-full border">
              <Lock className="size-4" />
            </div>
          )}

          <Button className="absolute hidden left-1/2 -translate-x-1/2 animate-fadeOut group-hover:flex group-hover:animate-fadeIn group-hover:bottom-4">
            {course.purchased ? 'Acessar Curso' : 'Adquirir Curso'}
          </Button>
        </div>
        <div className={cn("space-y-1 text-sm", !course.purchased && 'opacity-40')}>
          <h3 className="font-medium leading-none truncate" title={course.title}>{course.title}</h3>
          <p className="text-xs text-muted-foreground line-clamp-2" title={course.description}>{course.description}</p>
        </div>
      </div>
    </Link>
  )
}