import { useForm } from "@formspree/react"

import Container from "design-system/components/container/Container"

import Banner from "design-system/components/banner"
import Button from "design-system/components/button"

import Navigation from "design-system/blocks/navigation"
import Footer from "design-system/blocks/footer"

import Page from "../Page"
import Form from "./components/Form"
import ContactInfo from "./components/ContactInfo"
import Response from "./components/Response"

import * as Styled from "./Contact.styled"

const Contact = () => {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM_ID, {
    data: {
      subject: "Kontakt - nowa wiadomość",
    },
  })

  return (
    <Page title="Kontakt">
      <Styled.Banner>
        <Banner
          heading="Nasi podopieczni czekają na Twoje wsparcie! Chcesz nam pomóc? Zajrzyj"
          button={
            <Button
              text="tutaj"
              href="/wsparcie"
              variant="textLine"
              size="small"
            />
          }
        />
      </Styled.Banner>
      <Navigation />
      <Container as="main" size="medium">
        <Styled.ContactContainer>
          <ContactInfo />
          {state.succeeded ? (
            <Response />
          ) : (
            <Form handleSubmit={handleSubmit} submitting={state.submitting} />
          )}
        </Styled.ContactContainer>
      </Container>
      <Footer />
    </Page>
  )
}
export default Contact
