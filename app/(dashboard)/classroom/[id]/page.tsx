import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ClassRoom() {
  return (
    <main className="w-full flex flex-col px-4 gap-4 mt-4">
        <Link href={'/'} className="text-left w-fit">
          <ArrowLeft />
        </Link>

      <section className="w-full px-6 m-auto flex flex-col justify-center  text-center space-y-4 py-8 rounded-md">
        <h1 className="text-6xl font-bold">Machine Learning com Python</h1>
        <video className="aspect-video border w-[720px] m-auto">

        </video>
        <span>Introdução ao aprendizado de máquina utilizando bibliotecas como Scikit-Learn e TensorFlow.</span>
      </section>
    </main>
  )
}