import classNames from "classnames"
import "./Button.scss"
import Icon from "../Icon"

const Button = (props) => {
  const {
    className,
    type = "button",
    href,
    target,
    rel,
    /**
     * mode:
     * '' - default
     * 'transparent' - transparent bg
     * 'black-10' - bg-color black-10
     *
     */
    mode = "",
    label,
    isLabelHidden = false,
    iconName,
    iconPosition = "before",
    hasFillIcon,
    extraAttrs,
  } = props

  const isLink = href !== undefined
  const Component = isLink ? "a" : "button"
  const linkProps = { href, target, rel }
  const buttonProps = { type }
  const specificProps = isLink ? linkProps : buttonProps
  const title = isLabelHidden ? label : undefined

  const iconCompnent = iconName && (
    <Icon className="button__icon" name={iconName} hasFill={hasFillIcon} />
  )

  return (
    <Component
      className={classNames(className, "button", {
        [`button--${mode}`]: mode,
      })}
      title={title}
      aria-label={title}
      {...specificProps}
      {...extraAttrs}
    >
      {iconPosition === "before" && iconCompnent}
      {!isLabelHidden && <span className="button__label">{label}</span>}
      {iconPosition === "after" && iconCompnent}
    </Component>
  )
}

export default Button
