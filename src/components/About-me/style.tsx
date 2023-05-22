import { styled } from "@/styles/stitches.config";
import { Flex } from "@/styles/Global";
import { Text } from "@/styles/Text";

export const AboutMeSectionContent = styled("div", {
    padding:120,
    display: "flex",
    flexDirection:"column",
    JustifyContent: "space-between",
    alignitems:"center",
    gap: 20,
    "@mobile": {
      flexDirection: "column"
    },
  });




export const AboutMeTitle = styled("h4", {

  color: "var(--colors-whiteFixed)"

})

export const AboutMeTxt= styled("p", {
    
  
  color: "var(--colors-whiteFixed)",
  fontWeight: "400",
  fontFamily: "Inter",

  "@mobile": {
          letf: 0,
          top: "-2.5rem",
          right: "auto",
        },
      });




