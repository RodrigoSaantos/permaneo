export interface Course {
  id: string
  title: string
  description: string
  price: number
  createdAt: string
  img: string
  purchased: boolean
}

export interface CourseResponse {
  id: string
  title: string
  description: string
  price: number
  created_at: string
}