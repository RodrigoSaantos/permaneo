'use client'

import { getInitials } from "@/utils/function"
import { Avatar, AvatarFallback } from "../ui/avatar"
import { useEffect } from "react"
import { getUserByIdCookie, setUserCookie } from "./action"
import { getUserById } from "@/api/getUserById"
import { useUserStore } from "@/store/userStore"

export function Menu() {
  const { user, setUser } = useUserStore()

  useEffect(() => {
    const checkUser = async () => {
      try {
        const userCookie = await getUserByIdCookie();
        if (!userCookie) {
          const userData = await getUserById('1');
          setUserCookie(userData)
          setUser(userData);
          return
        }
        if (!user.id) setUser(userCookie);
      } catch (error) {
        console.error("Erro ao obter usuário:", error);
      }
    };
    checkUser();
  }, [setUser, user?.id])

  return (
    <div className='flex items-center space-x-2'>
      <Avatar className="h-8 w-8">
        <AvatarFallback>{getInitials(user?.name ?? '')}</AvatarFallback>
      </Avatar>
      <span className='text-primary'>{user?.name}</span>
    </div>
  )
}