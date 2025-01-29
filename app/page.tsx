import { CourseBanner } from "@/components/course-banner";
import { Header } from "@/components/header";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const courses = [
  {
    "id": 1,
    "title": "Introdução à Programação com Python",
    "description": "Aprenda os fundamentos da programação utilizando Python, uma das linguagens mais populares e versáteis.",
    "price": 49.99,
    "createdAt": "2023-01-15",
    "img": "https://images.unsplash.com/photo-1446185250204-f94591f7d702?w=300&dpr=2&q=80",
    "purchased": true
  },
  {
    "id": 2,
    "title": "Desenvolvimento Web com React",
    "description": "Construa interfaces modernas e interativas para a web utilizando React e suas melhores práticas.",
    "price": 69.99,
    "createdAt": "2023-02-10",
    "img": "https://images.unsplash.com/photo-1446185250204-f94591f7d702?w=300&dpr=2&q=80",
    "purchased": false
  },
  {
    "id": 3,
    "title": "JavaScript Avançado",
    "description": "Aprofunde seus conhecimentos em JavaScript, abordando conceitos avançados e boas práticas.",
    "price": 59.99,
    "createdAt": "2023-03-05",
    "img": "https://images.unsplash.com/photo-1446185250204-f94591f7d702?w=300&dpr=2&q=80",
    "purchased": false
  },
]

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <div className="flex items-center justify-between mt-8">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold tracking-tight">
              Catálogo
            </h2>
            <p className="text-sm text-muted-foreground">
              Navegue por todo o conteúdo.
            </p>
          </div>
        </div>
        <Separator className="my-4" />
        <div className="relative">
          <ScrollArea>
            <div className="flex space-x-4 pb-4">
              {courses.map((course) => (
                <CourseBanner
                  key={course.id}
                  course={course}
                  className="w-[250px]"
                  aspectRatio="portrait"
                  width={250}
                  height={330}
                />
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </main>
    </div>
  );
}
