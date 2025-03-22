import getParams from "@/utils/getParams"
import Swiper from "swiper"
import { Navigation, Pagination, Scrollbar } from "swiper/modules"

const rootSelector = "[data-js-slider]"

const defaultSliderParams = {
  slidesPerView: 5,
  slidesPerGroup: 5,
  spaceBetween: 30,
  loop: true,
  breakpoints: {
    1441: {
      spaceBetween: 30,
      allowTouchMove: false,
    },
    1024: {
      spaceBetween: 20,
      allowTouchMove: false,
    },
    768: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 20,
    },
    481: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 20,
    },
    0: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 10,
    },
  },
}

class Slider {
  selectors = {
    root: rootSelector,
    swiper: "[data-js-slider-swiper]",
    navigation: "[data-js-slider-navigation]",
    previousButton: "[data-js-slider-previous-button]",
    nextButton: "[data-js-slider-next-button]",
    pagination: "[data-js-slider-pagination]",
    scrollbar: "[data-js-slider-scrollbar]",
  }

  constructor(rootElement) {
    this.rootElement = rootElement
    this.swiperElement = rootElement.querySelector(this.selectors.swiper)
    this.params = getParams(this.rootElement, this.selectors.root)
    this.navigationElement = this.params.navigationTargetElementId
      ? document.getElementById(this.params.navigationTargetElementId)
      : this.rootElement.querySelector(this.selectors.navigation)
    this.previousButtonElement = this.navigationElement.querySelector(
      this.selectors.previousButton,
    )
    this.nextButtonElement = this.navigationElement.querySelector(
      this.selectors.nextButton,
    )
    this.paginationElement = this.navigationElement.querySelector(
      this.selectors.pagination,
    )
    this.scrollbarElement = this.rootElement.querySelector(
      this.selectors.scrollbar,
    )
    this.init()
  }

  init() {
    const params = this.params.sliderParams || defaultSliderParams

    new Swiper(this.swiperElement, {
      ...params, // Use provided params or defaults
      modules: [Navigation, Pagination, Scrollbar],
      navigation: {
        prevEl: this.previousButtonElement,
        nextEl: this.nextButtonElement,
      },
      pagination: {
        el: this.paginationElement,
        bulletClass: "slider-navigation__pagination-bullet",
        bulletActiveClass: "is-active",
      },
      scrollbar: {
        el: this.scrollbarElement,
        dragClass: "slider__scrollbar-drag",
      },
    })
  }
}

class SliderCollection {
  constructor() {
    this.init()
  }

  init() {
    const sliders = document.querySelectorAll(rootSelector)
    sliders.forEach((element) => {
      new Slider(element)
    })
  }
}

export default SliderCollection
