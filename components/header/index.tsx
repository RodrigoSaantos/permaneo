import { Icons } from '../icons'
import { Menu } from '../menu'
export async function Header() {
  return (
    <header className="min-h-20 flex h-20 w-full items-center justify-center bg-background border-b">
      <div className="mx-[5%] flex w-full max-w-[1290px] items-center justify-between">
        <Icons.logo className='h-9 w-10' />
        <div className="space-x-4 sm:block">
          <Menu />
        </div>
      </div>
    </header>
  )
}