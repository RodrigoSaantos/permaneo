import { Catalog } from "@/components/catalog";
import { Separator } from "@/components/ui/separator";

export default async function Home() {
  return (
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
      <Catalog />
    </main>
  );
}
