class OverlayMenu {
  selectors = {
    root: "[data-js-ovarlay-menu]",
    dialog: "[data-js-ovarlay-menu-dialog]",
    burgerButton: "[data-js-ovarlay-menu-burger-button]",
  }

  stateClasses = {
    isActive: "is-active",
    isLock: "is-lock",
  }

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root)
    this.dialogElement = this.rootElement.querySelector(this.selectors.dialog)
    this.burgerButtonElement = this.rootElement.querySelector(
      this.selectors.burgerButton,
    )
    this.bindEvents()
  }

  onBurgerButtonClick = () => {
    this.burgerButtonElement.classList.toggle(this.stateClasses.isActive)
    this.dialogElement.open = !this.dialogElement.open
    document.documentElement.classList.toggle(this.stateClasses.isLock)
  }

  bindEvents() {
    this.burgerButtonElement.addEventListener("click", this.onBurgerButtonClick)
  }
}

export default OverlayMenu
