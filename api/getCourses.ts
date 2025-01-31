import { api } from "@/lib/axios"

export interface Course {
  id: string
  title: string
  description: string
  price: number
  createdAt: string
  img: string
  purchased: boolean
  isFavorite: boolean
}

export interface CourseResponse {
  id: string
  title: string
  description: string
  price: number
  created_at: string
}

export async function getCourses() {
  const response = await api.get<CourseResponse[]>('/courses')
  return response.data
}