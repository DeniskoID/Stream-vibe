import SingleMovieBanner from "@/sections/SingleMovieBanner"
import MovieDetails from "@/sections/MovieDetails"

export const metadata = {
  title: "Movie - Kantara",
  // hasOverflowX: true,
}

export default function () {
  return (
    <>
      <SingleMovieBanner />
      <MovieDetails />
    </>
  )
}
