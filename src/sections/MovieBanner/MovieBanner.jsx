import "./MovieBanner.scss"
import Slider from "@/components/Slider"
import MovieBannerCard from "@/components/MovieBannerCard"
import movieCardsData from "./movie-cards-data"

const MovieBanner = () => {
  const titleId = "movies-banner-title"

  return (
    <section className="movies-banner container" aria-labelledby={titleId}>
      <h1 id={titleId} className="visually-hidden">
        Movies & Shows
      </h1>
      <Slider
        slidesParams={{
          slidesPerView: 1,
          breakpoints: {
            1024: {
              allowTouchMove: false,
            },
          },
        }}
        navigationPosition="abs-bottom"
        hasScrollbarOnMobile={false}
      >
        {movieCardsData.map((movieCard, index) => (
          <MovieBannerCard key={index} {...movieCard} />
        ))}
      </Slider>
    </section>
  )
}

export default MovieBanner
