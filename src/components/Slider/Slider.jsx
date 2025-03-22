import "swiper/css"
import "./Slider.scss"
import SliderNavigation from "./components/SliderNavigation"
import classNames from "classnames"

const Slider = (props) => {
  const {
    children,
    navigationTargetElementId = null,
    slidesParams = null, // Changed from sliderParams to slidesParams
    isBeyondTheViewportOnMobileS,
    hasScrollbarOnMobile = true,
    navigationPosition = "",
    isNavigationHiddenMobile = true,
    navigationMode,
  } = props

  return (
    <div
      className={classNames("slider", {
        "slider--beyond-the-viewport-on-mobile-s": isBeyondTheViewportOnMobileS,
      })}
      data-js-slider={JSON.stringify({
        sliderParams: slidesParams, // Pass directly without default values
        navigationTargetElementId,
      })}
    >
      <div className="slider__swiper swiper" data-js-slider-swiper="">
        <ul className="slider__list swiper-wrapper">
          {children.map((slide, index) => (
            <li className="slider__item swiper-slide" key={index}>
              {slide}
            </li>
          ))}
        </ul>
      </div>
      {!navigationTargetElementId && (
        <SliderNavigation
          className="slider__navigation"
          position={navigationPosition}
          isHiddenMobile={isNavigationHiddenMobile}
          mode={navigationMode}
        />
      )}
      {hasScrollbarOnMobile && (
        <div
          className="slider__scrollbar visible-mobile"
          data-js-slider-scrollbar=""
        />
      )}
    </div>
  )
}

export default Slider
