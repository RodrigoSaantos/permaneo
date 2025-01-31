import { api } from "@/lib/axios"
import { User } from "./getUserById"

export async function UpdateUser(props: User) {
  const response = await api.patch(`/user/${props.id}`, props)
  return response.data
}