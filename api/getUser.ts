import { api } from "@/lib/axios"

interface Course {
  courseId: string;
  dateJoined: string;
}

interface GetUserResponse {
  id?: string
  name?: string
  courses: Course[]
}

export async function getUser() {
  const response = await api.get<GetUserResponse>('/user/1')
  return response.data
}