import Section from "@/layouts/Section"
import Button from "@/components/Button"
import AccordionGroup from "@/components/AccordionGroup"
import Accordion from "@/components/Accordion"
import faqData from "./faq-data"

const Questions = () => {
  return (
    <Section
      title="Frequently Asked Questions"
      titleId="questions-title"
      description="Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe."
      actions={<Button label="Ask a Question" href="/support" />}
    >
      <AccordionGroup columns={2}>
        {faqData.map((item, index) => (
          <Accordion
            title={item.question}
            id={`question-${index}`}
            name="questions"
            isOpen={index === 0}
            key={index}
          >
            <p>{item.answer}</p>
          </Accordion>
        ))}
      </AccordionGroup>
    </Section>
  )
}

export default Questions
