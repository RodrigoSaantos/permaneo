import { ToggleFavorite } from "@/api/addCourseToFavorite";
import { cn } from "@/lib/utils";
import { useUserStore } from "@/store/userStore";
import { Heart } from "lucide-react";
import { MouseEvent } from "react";

interface FavoriteCourseProps {
  courseId: string
  isFavorite: boolean
}

export function FavoriteCourse({ courseId, isFavorite }: FavoriteCourseProps) {
  const { user, setUser } = useUserStore()
  async function onFavoriteCourse(event: MouseEvent<HTMLButtonElement>) {
    event.stopPropagation()
    event.preventDefault();

    if (user.id) {
      await ToggleFavorite({
        courseId,
        userId: user.id,
      })

      if (user.favorites.some(favorite => favorite.courseId === courseId)) {
        setUser({
          ...user,
          favorites: user.favorites.filter(favorite => favorite.courseId !== courseId)
        })
        return
      }
      
      setUser({
        ...user,
        favorites: [...user.favorites, {
          courseId
        }]
      })

    }
  }

  return (
    <button onClick={onFavoriteCourse} className="top-2 flex justify-center items-center right-2 transition-colors active:animate-favorite absolute bg-background size-10 rounded-full border group/favorite">
      <Heart className={cn("size-4 group-hover/favorite:text-red-500", isFavorite && 'text-red-500')} />
    </button>
  )
}