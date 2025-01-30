import { CourseResponse } from "@/components/course-banner/data/course";
import { api } from "@/lib/axios"

export async function getCourses() {
  const response = await api.get<CourseResponse[]>('/courses')
  return response.data
}