import "./Seasons.scss"
import AccordionGroup from "../AccordionGroup"
import seasonsItemsData from "./seasons-items-data"
import Accordion from "../Accordion"

const Seasons = (props) => {
  return (
    <AccordionGroup mode="dark" isOrderedList={false}>
      {seasonsItemsData.map(({ title, subtitle, episodes }, index) => (
        <Accordion
          title={title}
          titleLevelClassName="h4"
          subtitle={subtitle}
          id={`season-${index}`}
          name="seasons"
          isOpen={index === 0}
          key={index}
          isArrowButton
        >
          <p className="seasons__subtitle">{subtitle}</p>
        </Accordion>
      ))}
    </AccordionGroup>
  )
}

export default Seasons
