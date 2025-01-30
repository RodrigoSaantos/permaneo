import { api } from "@/lib/axios"
import { CourseResponse } from "../course-banner/data/course"
import { VideoPlayer } from "./video-player"

interface Props {
  id: string
}
export async function CourseClassroom({ id }: Props) {
  const { data: course } = await api.get<CourseResponse>(`/courses/${id}`)

  return (
    <section className="w-full px-6 m-auto flex flex-col justify-center  text-center space-y-4 py-8 rounded-md">
      <h1 className="text-4xl sm:text-6xl font-bold max-w-3xl m-auto">{course.title}</h1>
      <VideoPlayer />
      <span>{course.description}</span>
    </section>
  )
}