import { api } from "@/lib/axios"

interface Course {
  courseId: string;
  dateJoined: string;
}

interface Favorite {
  courseId: string;
}

interface getUserByIdResponse {
  id: string
  name: string
  courses: Course[]
  favorites: Favorite[]
}

export interface User {
  id?: string
  name?: string
  courses: Course[]
  favorites: Favorite[]
}

export async function getUserById(id: string) {
  const userId = id ?? '1'
  const response = await api.get<getUserByIdResponse>(`/user/${userId}`)
  return response.data
}