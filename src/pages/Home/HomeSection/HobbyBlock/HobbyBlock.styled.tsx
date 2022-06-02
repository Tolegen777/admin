import { styled } from "@mui/system";
import { Box, BoxProps } from "@mui/material";

export const Wrapper = styled((props: BoxProps) => <Box {...props} />)(
  ({ theme }) => ({
    display: "flex",
    height: "100%",
    width: "100%",
    position: "relative",
  })
);

export const Block = styled((props: BoxProps) => <Box {...props} />)(
  ({ theme }) => ({
    width: "100%",
    marginTop: "20px",
    marginRight: "30px",
  })
);

export const ChartContainer = styled((props: BoxProps) => <Box {...props} />)(
  ({ theme }) => ({
    width: "clamp(350px, 26.04vw, 500px)",
    height: "290px",
  })
);

export const InfoBlock = styled((props: BoxProps) => <Box {...props} />)(
  ({ theme }) => ({
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: "30px",
    paddingRight: "20px",
  })
);

export const TextWrapper = styled((props: BoxProps) => <Box {...props} />)(
  ({ theme }) => ({
    width: "200px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  })
);

export const ColorBox = styled((props: BoxProps) => <Box {...props} />)(
  ({ theme }) => ({
    width: "10px",
    height: "10px",
    backgroundColor: "#EECBCB",
    borderRadius: "50px",
  })
);

export const Styled = {
  Wrapper,
  Block,
  ChartContainer,
  InfoBlock,
  TextWrapper,
  ColorBox,
};
