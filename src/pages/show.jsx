import SingleShowBanner from "@/sections/SingleShowBanner"
import MovieDetails from "@/sections/MovieDetails"
import Seasons from "@/components/Seasons"

export const metadata = {
  title: "Show - Strange Things",
  // hasOverflowX: true,
}

export default function () {
  return (
    <>
      <SingleShowBanner />
      <MovieDetails seasons={<Seasons />} />
    </>
  )
}
