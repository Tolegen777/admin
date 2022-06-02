import { Box, BoxProps } from "@mui/material";
import { styled } from "@mui/system";

export const Wrapper = styled((props: BoxProps) => <Box {...props} />)(
  ({ theme }) => ({
    width: "clamp(500px, 31.25vw, 600px)",
  })
);

export const Styled = {
  Wrapper,
};
