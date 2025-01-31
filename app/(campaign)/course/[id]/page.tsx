import { PageProps } from "@/.next/types/app/layout";
import { CourseCampaign } from "@/components/course-campaign";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default async function Campaign({ params }: PageProps) {
  const { id } = await params
  return (
    <main className="w-full flex flex-col px-4 gap-4 mt-4">
      <Link href={'/'} className="text-left w-fit">
        <ArrowLeft />
      </Link>
      <CourseCampaign id={id} />
    </main>
  )
}