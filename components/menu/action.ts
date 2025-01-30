'use server'

import { User } from '@/app/data/user'
import { cookies } from 'next/headers'
 
export async function setUserCookie(user: User) {
  const cookieStore = await cookies()
  cookieStore.set({
    name: 'user',
    value: JSON.stringify(user),
    path: '/',
  })
}

export async function getUserCookie() {
  const cookieStore = await cookies()
  const user = cookieStore.get('user')?.value
  if (user) {
    return JSON.parse(user)
  }
  return user
}