'use client'

import { Course, getCourses } from "@/api/getCourses";
import { useUserStore } from "@/store/userStore";
import { useEffect, useState } from "react";
import { CourseBanner } from "../course-banner";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

export function Catalog() {
  const { user } = useUserStore()
  const [courses, setCourses] = useState<Course[]>([])

  useEffect(() => {
    const coursesFetch = async () => {
      try {
        const coursesResponse = await getCourses()
        if (coursesResponse.length) {
          const coursesFormatted = coursesResponse.map((course) => {
            return {
              ...course,
              createdAt: course.created_at,
              purchased: user?.courses.some(userPurchased => userPurchased.courseId === course.id),
              img: 'https://images.unsplash.com/photo-1446185250204-f94591f7d702?w=300&dpr=2&q=80',
              isFavorite: user?.favorites.some(userFavorite => userFavorite.courseId === course.id)
            }
          })
          setCourses(coursesFormatted)
        }
        
      } catch (error) {
        console.error("Erro ao obter os cursos:", error);
      }
    }
    coursesFetch()
  }, [user?.courses, user?.favorites])

  return (
    <div className="relative">
      <ScrollArea>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 pb-4 gap-8">
          {courses.map((course) => (
            <CourseBanner
              key={course.id}
              course={course}
              className="w-[250px]"
              aspectRatio="portrait"
              width={250}
              height={330}
            />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  )
}