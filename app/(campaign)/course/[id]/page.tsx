import { Button } from "@/components/ui/button";
import { formatDateToBR, formatToBRL } from "@/utils/function";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Campaign() {
  return (
    <main className="w-full flex flex-col px-4 gap-4 mt-4">
        <Link href={'/'} className="text-left w-fit">
          <ArrowLeft />
        </Link>

      <section className="w-full px-6 m-auto flex flex-col max-w-md text-center space-y-4 border py-8 rounded-md">
        <h1 className="text-6xl font-bold">Machine Learning com Python</h1>
        <span>Introdução ao aprendizado de máquina utilizando bibliotecas como Scikit-Learn e TensorFlow.</span>
        <div className="flex flex-col space-y-2">
          <span className="text-secondary-foreground text-5xl font-bold">{formatToBRL(199.22)}</span>
          <span className="text-secondary-foreground text-xs">Esse curso começa em {formatDateToBR('2023-02-15')}</span>
        </div>
        <Button>Comprar</Button>
      </section>
    </main>
  )
}