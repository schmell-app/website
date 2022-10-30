import { MantineThemeOverride } from "@mantine/core";
import colors from "../../constants/colors";

export const theme: MantineThemeOverride = {
  components: {
    NavLink: {
      styles: {
        label: {
          fontSize: 20,
          color: colors.white[0],
        },
        root: {
          marginLeft: 8,
          marginRight: 8,
        },
      },
    },
  },
  fontFamily: "Artifika",
  colorScheme: "dark",
  colors: {
    gold: [
      "#EAE7DA",
      "#DED9BD",
      "#D7CE9F",
      "#D5C87E",
      "#DBC75A",
      "#E8CB30",
      "#FFD700",
      "#CFB217",
      "#A99525",
      "#8D7E2D",
    ],
  },
  primaryColor: "gold",
};
