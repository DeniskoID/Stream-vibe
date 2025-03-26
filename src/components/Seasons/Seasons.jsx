import "./Seasons.scss"
import AccordionGroup from "../AccordionGroup"
import seasonsItemsData from "./seasons-items-data"
import Accordion from "../Accordion"
<<<<<<< HEAD
import EpisodeCard from "../EpisodeCard"

const Seasons = (props) => {
  return (
    <AccordionGroup className="seasons" mode="dark" isOrderedList={false}>
=======

const Seasons = (props) => {
  return (
    <AccordionGroup mode="dark" isOrderedList={false}>
>>>>>>> 5b8f46a3140f43f8e97d5c29399e25f34c570cfd
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
<<<<<<< HEAD
          <ul className="seasons__list">
            {episodes.map((episode, index) => (
              <li className="seasons__item" key={index}>
                <EpisodeCard {...episode} />
              </li>
            ))}
          </ul>
=======
          <p className="seasons__subtitle">{subtitle}</p>
>>>>>>> 5b8f46a3140f43f8e97d5c29399e25f34c570cfd
        </Accordion>
      ))}
    </AccordionGroup>
  )
}

export default Seasons
