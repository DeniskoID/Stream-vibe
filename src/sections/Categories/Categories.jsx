import Section from "@/layouts/Section"
import CategoryCard from "@/components/CategoryCard"
import Slider from "@/components/Slider"
import SliderNavigation from "@/components/Slider/components/SliderNavigation"
import categoryItemsData from "./category-items-data"
const Categories = () => {
  const sliderNavigationId = "categories-slider-navigation"

  return (
    <Section
      title="Explore our wide variety of categories"
      titleId="categories-title"
      description="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
      actions={<SliderNavigation mode="tile" id={sliderNavigationId} />}
      isActionsHiddenOnMobile
      className="overflow-x-clip"
    >
      <Slider
        navigationTargetElementId={sliderNavigationId}
        isBeyondTheViewportOnMobileS
      >
        {categoryItemsData.map((categoryItem, index) => (
          <CategoryCard key={index} {...categoryItem} />
        ))}
      </Slider>
    </Section>
  )
}

export default Categories
