import getIdFromTitle from "@/utils/getIdFromTitle"
import classNames from "classnames"
import "./Checkbox.scss"

const Checkbox = (props) => {
  const { className, label, id = getIdFromTitle(label), isRequired } = props

  return (
    <label className={classNames(className, "checkbox")} htmlFor={id}>
      <input
        className="checkbox__input"
        type="checkbox"
        id={id}
        required={isRequired}
      />
      <span className="checkbox__label">{label}</span>
    </label>
  )
}

export default Checkbox
