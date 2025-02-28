import { useState } from "react"
import { useForm } from "@formspree/react"

import Button from "design-system/components/button"
import Typography from "design-system/components/typography"
import Input from "design-system/components/input"
import Select from "design-system/components/select"

import TextBanner from "design-system/patterns/textBanner"
import * as Styled from "./Microchips.styled"

const Form = () => {
  const [activeForm, setActiveForm] = useState(true)
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_PROMO_FORM_ID, {
    data: {
      subject: "[SAFE ANIMAL] Prośba o kod promocyjny",
    },
  })

  const handleForm = (e) => {
    e.preventDefault()
    setActiveForm(false)
    handleSubmit(e)
  }

  return state.succeeded && !activeForm ? (
    <TextBanner
      size="small"
      heading="Generujemy kod promocyjny"
      button={
        <Button text="Poproś o więcej" onClick={() => setActiveForm(true)} />
      }
    >
      <Typography variant="bodySmall">
        Dostaliśmy Twoją prośbę o kod promocyjny, w ciągu kilku dni otrzymasz od
        nas wiadomość z kodem na adres mailowy podany w formularzu.
      </Typography>
    </TextBanner>
  ) : (
    <Styled.Form onSubmit={(e) => handleForm(e)}>
      <Typography variant="h3">Prośba o kod promocyjny</Typography>
      <Typography variant="bodySmall">
        Otrzymasz od nas kod promocyjny na -10% przy rejestracji na stronie
        <a href="https://www.safe-animal.eu" target="_blank" rel="noreferrer">
          www.safe-animal.eu
        </a>{" "}
        Możesz poprosić o dowolną ilość kodów promocyjnych.
      </Typography>
      <Styled.InputContainer>
        <Input
          label="Wpisz Twoje imię"
          placeholder="Twoje imię"
          type="text"
          name="Imię"
          required
        />
        <Input
          label="Wpisz Twój e-mail"
          placeholder="Twój adres e-mail"
          type="email"
          name="Mail"
          required
        />
      </Styled.InputContainer>
      <Select
        label="Wpisz ilość potrzebnych kodów (jednorazowo nie więcej niż 10)"
        name="Ilość potrzebnych kodów"
        options={["2", "3", "4", "5", "6", "7", "8", "9", "10"]}
        defaultValue="1"
        required
      />
      <Styled.ButtonContainer>
        <Button
          text={state.submitting ? "Wysyłanie" : "Poproś o kod promocyjny"}
          disabled={state.submitting}
        />
      </Styled.ButtonContainer>
    </Styled.Form>
  )
}

export default Form
