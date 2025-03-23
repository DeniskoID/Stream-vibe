import Slider from "@/components/Slider"
import SliderNavigation from "@/components/Slider/components/SliderNavigation"
import PersonCard from "@/components/PersonCard"
import ReviewCard from "@/components/ReviewCard"
import "./MovieDetails.scss"
import Button from "@/components/Button"
import castItemsData from "./cast-items-data"
import reviewItemsData from "./review-items-data"
import Icon from "@/components/Icon"
import Tags from "@/components/Tags"
import Ratings from "@/components/Ratings"

const MovieDetails = () => {
  const titleId = "movie-details-title"
  const castSliderNavigationId = "movie-cast-slider-navigation"

  return (
    <section className="movie-details container" aria-labelledby={titleId}>
      <h2 id={titleId} className="visually-hidden">
        Detailed movie information
      </h2>
      <div className="movie-details__main">
        <div className="movie-details__panel movie-details__panel--description">
          <div className="movie-details__group">
            <h3 className="movie-details__title">Description</h3>
            <div className="movie-details__description">
              <p>
                A fiery young man clashes with an unflinching forest officer in
                a south Indian village where spirituality, fate and folklore
                rule the lands.
              </p>
            </div>
          </div>
        </div>
        <div className="movie-details__panel">
          <header className="movie-details__panel-header">
            <h3 className="movie-details__title">Cast</h3>
            <SliderNavigation
              id={castSliderNavigationId}
              hasPagination={false}
              mode="rounded"
              buttonMode="black-08"
            />
          </header>
          <Slider
            navigationTargetElementId={castSliderNavigationId}
            hasScrollbarOnMobile={false}
            slidesParams={{
              slidesPerView: "auto",
              spaceBetween: 10,
              breakpoints: {
                1024: {
                  slidesPerView: "auto",
                  spaceBetween: 20,
                  allowTouchMove: false,
                },
              },
            }}
          >
            {castItemsData.map((castItem, index) => (
              <PersonCard {...castItem} key={index} />
            ))}
          </Slider>
        </div>
        <div className="movie-details__panel movie-details__panel--large-gap-y">
          <header className="movie-details__panel-header">
            <h3 className="movie-details__title">Reviews</h3>
            <Button
              mode="black-08"
              iconName="plus"
              label="Add Your Review"
              href="/"
            />
          </header>
          <Slider
            navigationMode="rounded"
            isNavigationHiddenMobile={false}
            hasScrollbarOnMobile={false}
            slidesParams={{
              slidesPerView: 2,
              slidesPerGroup: 2,
              breakpoints: {
                0: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                  spaceBetween: 16,
                },
                1024: {
                  slidesPerView: 2,
                  slidesPerGroup: 2,
                  spaceBetween: 20,
                  allowTouchMove: false,
                },
              },
            }}
          >
            {reviewItemsData.map((reviewItem, index) => (
              <ReviewCard {...reviewItem} key={index} />
            ))}
          </Slider>
        </div>
      </div>
      <aside className="movie-details__info">
        <div className="movie-details__panel">
          <div className="movie-details__groups">
            <div className="movie-details__group">
              <h3 className="movie-details__title">
                <Icon name="calendar" />
                <span>Released Year</span>
              </h3>
              <div className="movie-details__description">
                <time className="h6" dateTime="2022">
                  2025
                </time>
              </div>
            </div>
            <div className="movie-details__group">
              <h3 className="movie-details__title">
                <Icon name="translate" />
                <span>Available Languages</span>
              </h3>
              <Tags
                items={["English", "Hindi", "Tamil", "Telegu", "Kannada"]}
              />
            </div>
            <div className="movie-details__group">
              <h3 className="movie-details__title">
                <Icon name="star" />
                <span>Ratings</span>
              </h3>
              <Ratings
                items={[
                  { title: "IMDb", ratingValue: 4.5 },
                  { title: "Streamvibe", ratingValue: 4 },
                ]}
              />
            </div>
            <div className="movie-details__group">
              <h3 className="movie-details__title">
                <Icon name="genres" />
                <span>Genres</span>
              </h3>
              <Tags items={["Action", "Adventure"]} />
            </div>
            <div className="movie-details__group">
              <h3 className="movie-details__title">Director</h3>
              <PersonCard
                name="Rishab Shetty"
                subtitle="From India"
                imgSrc="/src/assets/images/people/director.jpg"
                imgAlt="Director name"
              />
            </div>
            <div className="movie-details__group">
              <h3 className="movie-details__title">Music</h3>
              <PersonCard
                name="B. Ajaneesh Loknath"
                subtitle="From India"
                imgSrc="/src/assets/images/people/music.jpg"
                imgAlt="Music"
              />
            </div>
          </div>
        </div>
      </aside>
    </section>
  )
}
export default MovieDetails
