import { getUserById } from "./getUserById"
import { UpdateUser } from "./updateUser"

interface ToggleFavoriteProps {
  courseId: string
  userId: string
}
export async function ToggleFavorite({ courseId, userId }: ToggleFavoriteProps) {
  const user = await getUserById(userId)

  if (user.favorites.some(favorite => favorite.courseId === courseId)) {
    const favoriteRemoved = {
      ...user,
      favorites: user.favorites.filter(favorite => favorite.courseId !== courseId)
    }
    return await UpdateUser(favoriteRemoved)
  }

  user.favorites.push({
    courseId
  })

  const addFavorite = {
    ...user,
    favorites: user.favorites
  }

  return await UpdateUser(addFavorite)
}