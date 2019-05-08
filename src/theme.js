import { grommet } from "grommet"
import { deepMerge } from "grommet/utils"

export const theme = deepMerge(grommet, {
  global: {
    font: {
      family: "Roboto",
      size: "16px"
      // height: "20px"
    },
    colors: {
      brand: "#EA3753",
      border: "#CCCCCC",
      focus: "#759EF7"
    }
  },
  heading: {
    font: {
      family: "Lato"
    },
    responsiveBreakpoint: "small", // when we scale the font size down
    weight: 600
  }
})
