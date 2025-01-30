import { CourseClassroom } from "@/components/course-classroom";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default async function ClassRoom({ params }: { params: { id: string } }) {
  const { id } = await params

  return (
    <main className="w-full flex flex-col px-4 gap-4 mt-4">
        <Link href={'/'} className="text-left w-fit">
          <ArrowLeft />
        </Link>

      <CourseClassroom id={id} />
    </main>
  )
}