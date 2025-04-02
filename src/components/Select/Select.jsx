import getIdFromTitle from "@/utils/getIdFromTitle"
import classNames from "classnames"
import "./Select.scss"

const Select = (props) => {
  const {
    className,
    label,
    id = getIdFromTitle(label),
    /**
     * Array <{
     *   value: string,
     *   isSelected?: boolean,
     * }>
     *
     */
    options = [],
    isLabelHidden = true,
    buttonClassName,
  } = props

  const IDs = {
    originalControl: id,
    label: `${id}-label`,
    dropdown: `${id}-dropdown`,
  }

  const selectedOption =
    options.find(({ isSelected }) => isSelected) ?? options[0]

  return (
    <div className={classNames(className, "select")} data-js-select="">
      <label
        className={classNames("select__label", {
          "visually-hidden": isLabelHidden,
        })}
        id={IDs.label}
        htmlFor={IDs.originalControl}
      >
        {label}
      </label>
      <select
        className={classNames("select__original-control", buttonClassName)}
        id={IDs.originalControl}
        tabIndex={-1}
        defaultValue={selectedOption.value}
        data-js-select-original-control=""
      >
        {options.map(({ value }, index) => (
          <option value={value} key={index}>
            {value}
          </option>
        ))}
      </select>
      <div className="select__body">
        <div
          className={classNames("select__button", buttonClassName)}
          role="combobox"
          aria-expanded="false"
          aria-haspopup="listbox"
          aria-controls={IDs.dropdown}
          aria-labelledby={IDs.label}
          tabIndex={0}
          data-js-select-button=""
        >
          {selectedOption.value}
        </div>
        <div
          id={IDs.dropdown}
          className="select__dropdown"
          role="listbox"
          aria-labelledby={IDs.label}
          data-js-select-dropdown=""
        >
          {options.map((option, index) => {
            const { value, isSelected } = option

            return (
              <div
                className={classNames("select__option", {
                  "is-selected": isSelected,
                  "is-current": isSelected,
                })}
                id={`${id}-option-${index}`}
                role="option"
                aria-selected={isSelected}
                data-js-select-option=""
                key={index}
              >
                {value}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Select
