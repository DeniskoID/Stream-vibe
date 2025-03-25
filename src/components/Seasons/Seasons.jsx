import "./Seasons.scss"
import AccordionGroup from "../AccordionGroup"
import seasonsItemsData from "./seasons-items-data"
import Accordion from "../Accordion"
import EpisodeCard from "../EpisodeCard"

const Seasons = (props) => {
  return (
    <AccordionGroup className="seasons" mode="dark" isOrderedList={false}>
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
          <ul className="seasons__list">
            {episodes.map((episode, index) => (
              <li className="seasons__item" key={index}>
                <EpisodeCard {...episode} />
              </li>
            ))}
          </ul>
        </Accordion>
      ))}
    </AccordionGroup>
  )
}

export default Seasons
