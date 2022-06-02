import { Box, Divider, Stack, Typography } from "@mui/material";
import { FC } from "react";
import { VerticalBar } from "../../../../components/Charts";

import { IHomePart } from "../HomeSection.types";

import { Styled } from "./HobbyBlock.styled";

interface Props {
  hobbyData: IHomePart[];
}

const HobbyBlock: FC<Props> = ({ hobbyData }) => {
  return (
    <Styled.Wrapper>
      <Styled.Block>
        <Typography variant="h3">Интересы - {hobbyData.length}</Typography>
        <Styled.ChartContainer>
          {hobbyData && <VerticalBar barData={hobbyData} />}
        </Styled.ChartContainer>
      </Styled.Block>
      <Box
        sx={{
          display: "flex",
          position: "absolute",
          top: "50%",
          right: "0",
          transform: "translate(0, -50%)",
          overflow: "hidden",
          zIndex: "1000",
          backgroundColor: "#fff",
        }}
      >
        <Divider
          orientation="vertical"
          sx={{ height: "550px", color: "#E3E3E3" }}
        />
        <Styled.InfoBlock>
          <Stack spacing={2}>
            {hobbyData.map((e) => (
              <Styled.TextWrapper key={e.count}>
                <Box sx={{ width: "25px" }}>
                  <Styled.ColorBox />
                </Box>
                <Typography variant="h18b" sx={{ width: "122px" }}>
                  {e.value}
                </Typography>
                <Typography variant="h16eb">
                  - {((e.count * 100) / 30).toFixed(1)}%
                </Typography>
              </Styled.TextWrapper>
            ))}
          </Stack>
        </Styled.InfoBlock>
      </Box>
    </Styled.Wrapper>
  );
};

export default HobbyBlock;
