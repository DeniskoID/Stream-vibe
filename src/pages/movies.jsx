import MovieBanner from "@/sections/MovieBanner"
import Collections from "@/sections/Collections"

export const metadata = {
  title: "Movies & Shows",
  hasOverflowX: true,
}

export default function () {
  return (
    <>
      <MovieBanner />
      <Collections />
    </>
  )
}
