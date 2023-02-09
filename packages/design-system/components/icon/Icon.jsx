import { string, oneOf } from "prop-types"

import ArrowDown from "design-system/tokens/icons/ArrowDown.svg"
import ArrowRight from "design-system/tokens/icons/ArrowRight.svg"
import Cat from "design-system/tokens/icons/Cat.svg"
import Charity from "design-system/tokens/icons/Charity.svg"
import ChevronRight from "design-system/tokens/icons/ChevronRight.svg"
import Dog from "design-system/tokens/icons/Dog.svg"
import Done from "design-system/tokens/icons/Done.svg"
import DoubleArrow from "design-system/tokens/icons/DoubleArrow.svg"
import Download from "design-system/tokens/icons/Download.svg"
import Facebook from "design-system/tokens/icons/Facebook.svg"
import Heart from "design-system/tokens/icons/Heart.svg"
import HeartOutline from "design-system/tokens/icons/HeartOutline.svg"
import Instagram from "design-system/tokens/icons/Instagram.svg"
import Location from "design-system/tokens/icons/Location.svg"
import Mail from "design-system/tokens/icons/Mail.svg"
import Phone from "design-system/tokens/icons/Phone.svg"
import Error from "design-system/tokens/icons/Error.svg"
import Success from "design-system/tokens/icons/Success.svg"
import Attachment from "design-system/tokens/icons/Attachment.svg"
import Bowl from "design-system/tokens/icons/Bowl.svg"
import Hamburger from "design-system/tokens/icons/Hamburger.svg"
import ArrowUp from "design-system/tokens/icons/ArrowUp.svg"

export const sizes = {
  small: {
    width: 16,
    height: 16,
  },
  medium: {
    width: 24,
    height: 24,
  },
  large: {
    width: 30,
    height: 30,
  },
  xlarge: {
    width: 23,
    height: 36,
  },
  xxlarge: {
    width: 30,
    height: 48,
  },
}

export const icons = {
  arrowDown: ArrowDown,
  arrowUp: ArrowUp,
  arrowRight: ArrowRight,
  chevronRight: ChevronRight,
  done: Done,
  doubleArrow: DoubleArrow,
  download: Download,
  facebook: Facebook,
  instagram: Instagram,
  location: Location,
  phone: Phone,
  mail: Mail,
  charity: Charity,
  heart: Heart,
  heartOutline: HeartOutline,
  cat: Cat,
  dog: Dog,
  error: Error,
  success: Success,
  attachment: Attachment,
  bowl: Bowl,
  hamburger: Hamburger,
}

const Icon = ({ name, color, size }) => {
  const IconComponent = icons[name]

  return (
    <IconComponent
      color={color}
      width={sizes[size].width}
      height={sizes[size].height}
      title={name}
    />
  )
}

Icon.propTypes = {
  name: oneOf(Object.keys(icons)).isRequired,
  color: string,
  /**
   * The small, medium and large sizes have square proportions that fit most of the icons we use.
   */
  size: oneOf(Object.keys(sizes)),
}

Icon.defaultProps = {
  color: "primary",
  size: "medium",
}

export default Icon
