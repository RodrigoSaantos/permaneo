import { formatDateToBR, formatToBRL } from "@/utils/function";
import { CourseResponse } from "@/components/course-banner/data/course";
import { Button } from "@/components/ui/button";
import { api } from "@/lib/axios";

interface Props {
  id: string
}

export async function CourseCampaign({ id }: Props) {
  const { data: course } = await api.get<CourseResponse>(`/courses/${id}`)

  return (
    <section className="w-full px-6 m-auto flex flex-col max-w-xl text-center space-y-4 border py-8 rounded-md overflow-hidden">
      <h1 className="text-4xl sm:text-6xl font-bold">{course.title}</h1>
      <span>{course.description}</span>
      <div className="flex flex-col space-y-2">
        <span className="text-secondary-foreground text-5xl font-bold">{formatToBRL(course.price)}</span>
        <span className="text-secondary-foreground text-xs">Esse curso começa em {formatDateToBR(course.created_at)}</span>
      </div>
      <Button>Comprar</Button>
    </section>
  )
}