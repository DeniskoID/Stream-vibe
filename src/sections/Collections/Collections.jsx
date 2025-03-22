import getIdFromTitle from "@/utils/getIdFromTitle"
import Tabs from "@/components/Tabs"
import collectionGroupsData from "./collection-groups-data"
import Section from "@/layouts/Section"
import Slider from "@/components/Slider"
import SliderNavigation from "@/components/Slider/components/SliderNavigation"
import CategoryCard from "@/components/CategoryCard"
import MovieCard from "@/components/MovieCard"
import "./Collections.scss"

const Collections = () => {
  return (
    <Tabs
      className="collections container"
      title="collections"
      isEnableOnlyOnMobile
      items={collectionGroupsData.map((collectionGroup) => ({
        title: collectionGroup.title,
        isActive: collectionGroup.isActive,
        children: (
          <div className="collections__group">
            <p className="collections__title hidden-mobile">
              {collectionGroup.title}
            </p>
            {collectionGroup.items.map((collectionItem, index) => {
              const { title, categoryItemsData, movieItems, sliderParams } =
                collectionItem
              const titleFormatted = `${getIdFromTitle(collectionGroup.title)}-${getIdFromTitle(title)}`
              const titleId = `${titleFormatted}-title`
              const sliderNavigationId = `${titleFormatted}-slider-navigation`

              return (
                <Section
                  className="collections__section"
                  title={title}
                  titleId={titleId}
                  actions={
                    <SliderNavigation id={sliderNavigationId} mode="tile" />
                  }
                  isActionsHiddenOnMobile
                  key={index}
                >
                  <Slider
                    navigationTargetElementId={sliderNavigationId}
                    slidesParams={sliderParams}
                    isBeyondTheViewportOnMobileS
                  >
                    {categoryItemsData?.map((categoryItem, index) => (
                      <CategoryCard {...categoryItem} key={index} />
                    )) ??
                      movieItems?.map((movieItem, index) => (
                        <MovieCard {...movieItem} key={index} />
                      ))}
                  </Slider>
                </Section>
              )
            })}
          </div>
        ),
      }))}
    />
  )
}

export default Collections
