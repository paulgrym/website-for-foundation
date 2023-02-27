import { string, oneOf, node } from "prop-types"

import Typography from "design-system/components/typography"
import theme from "../../tokens/theme"

import * as Styled from "./TextBanner.styled"

const sizes = {
  tiny: {
    subtitle: "h6",
    heading: "h3",
    description: "bodySmall",
  },
  small: {
    subtitle: "h6",
    heading: "h2",
    description: "bodyTitle",
  },
  medium: {
    subtitle: "h6",
    heading: "h1",
    description: "bodyTitle",
  },
  large: {
    subtitle: "h6",
    heading: "h1",
    description: "bodyTitle",
  },
}

const TextBanner = ({
  heading,
  description,
  subtitle,
  layout,
  size,
  button,
  subtitleColor,
  headingColor,
  descriptionColor,
  className,
}) => (
  <Styled.TextBanner layout={layout} size={size} className={className}>
    {subtitle && (
      <Styled.Subtitle variant={sizes[size].subtitle} color={subtitleColor}>
        {subtitle}
      </Styled.Subtitle>
    )}

    <Styled.Container size={size}>
      <Typography variant={sizes[size].heading} color={headingColor}>
        {heading}
      </Typography>
    </Styled.Container>
    <Styled.Description
      variant={sizes[size].description}
      color={descriptionColor}
    >
      {description}
    </Styled.Description>
    <Styled.ButtonContainer size={size}>
      {button && button}
    </Styled.ButtonContainer>
  </Styled.TextBanner>
)

TextBanner.propTypes = {
  heading: string.isRequired,
  description: string.isRequired,
  subtitle: string,
  layout: oneOf(["left", "center"]),
  size: oneOf(["tiny", "small", "medium", "large"]),
  button: node,
  subtitleColor: string,
  headingColor: string,
  descriptionColor: string,
  className: string,
}

TextBanner.defaultProps = {
  subtitle: "",
  layout: "left",
  size: "medium",
  button: null,
  subtitleColor: theme.colors.primary[500],
  headingColor: theme.colors.grey[600],
  descriptionColor: theme.colors.grey[500],
  className: null,
}

export default TextBanner
