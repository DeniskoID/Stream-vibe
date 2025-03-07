class BaseComponent {
  constructor() {
    if (this.constructor === BaseComponent) {
      throw new Error("BaseComponent is abstract class")
    }
  }

  getProxyState(initialState) {
    return new Proxy(initialState, {
      get: (target, prop) => {
        return target[prop]
      },
      set: (target, prop, newValue) => {
        const oldValue = target[prop]

        target[prop] = newValue

        if (newValue !== oldValue) {
          this.updateUI()
        }

        return true
      },
    })
  }
  /**
   * Redrawing UI in responce to state changes
   */
  updateUI() {
    throw new Error("updateUI method must be implemented")
  }
}

export default BaseComponent
