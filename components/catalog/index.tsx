import { api } from "@/lib/axios";
import { CourseBanner } from "../course-banner";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { Course, CourseResponse } from "../course-banner/data/course";
import { User } from "@/app/data/user";

export async function Catalog() {
  const { data: user } = await api.get<User>('/user/1')
  const { data } = await api.get<CourseResponse[]>('/courses')
  const courses: Course[] = data.map((course) => {
    return {
      ...course,
      createdAt: course.created_at,
      purchased: user.courses.some(userPurchased => userPurchased.courseId === course.id),
      img: 'https://images.unsplash.com/photo-1446185250204-f94591f7d702?w=300&dpr=2&q=80',
    }
  })

  console.log(courses)
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