interface Course {
  courseId: string;
  dateJoined: string;
}

export interface User {
  id: string
  name: string
  courses: Course[]
}