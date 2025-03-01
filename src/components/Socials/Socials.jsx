import classNames from "classnames"
import "./Socials.scss"
import Button from "../Button"

const Socials = (props) => {
  const { className, links } = props

  return (
    <div className={classNames(className, "soc1als")}>
      <ul className="soc1als__list">
        {links.map(({ label, iconName, url }, index) => (
          <li className="soc1als__item" key={index}>
            <Button
              className="soc1als__link"
              mode="black-10"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              label={label}
              isLabelHidden
              iconName={iconName}
              hasFillIcon
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Socials
