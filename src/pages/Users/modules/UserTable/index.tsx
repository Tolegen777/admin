// library
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import { Box, Button, Divider, Typography } from "@mui/material";

// style
import {
  StyledBodyCell,
  StyledBodyCellFirst,
  StyledBodyCellLast,
  StyledBodyRow,
  StyledHeadCell,
  StyledHeadRow,
} from "./style";

function createData(
  user: string,
  number: string,
  status: string,
  complains: string
) {
  return { user, number, status, complains };
}

const rows = [
  createData("Досжан Даурен", "+7 707 777 77 77", "Активный", "Нет"),
  createData("Нуров Даурен", "+7 707 777 77 77", "Активный", "Нет"),
  createData("Нуров Даурен", "+7 707 777 77 77", "Активный", "Нет"),
  createData("Нуров Даурен", "+7 707 777 77 77", "Активный", "Нет"),
  createData("Нуров Даурен", "+7 707 777 77 77", "Активный", "Нет"),
];

export default function UserTable() {
  return (
    <TableContainer component={Box}>
      <Table
        sx={{ minWidth: 650, boxShadow: "none" }}
        aria-label="simple table"
      >
        <TableHead sx={{ position: "relative" }}>
          <StyledHeadRow>
            <StyledHeadCell>Пользователь</StyledHeadCell>
            <StyledHeadCell>Телефон</StyledHeadCell>
            <StyledHeadCell>Статус</StyledHeadCell>
            <StyledHeadCell>Жалобы</StyledHeadCell>
          </StyledHeadRow>
          <Divider
            sx={{
              ml: "17px",
              position: "absolute",
              width: "calc(100% - 32px)",
              backgroundColor: "primary.main",
            }}
          />
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <StyledBodyRow key={row.user}>
              <StyledBodyCellFirst>{row.user}</StyledBodyCellFirst>
              <StyledBodyCell>{row.number}</StyledBodyCell>
              <StyledBodyCell>{row.status}</StyledBodyCell>
              <StyledBodyCell>{row.complains}</StyledBodyCell>
              <StyledBodyCellLast>
                <Button
                  sx={{
                    width: "180px",
                    height: "50px",
                    background: "rgba(35, 152, 171, 0.3)",
                    borderRadius: "10px",
                    "&:hover": {
                      background: "rgba(35, 152, 171, 1)",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: "18px",
                      fontWeight: "700",
                      textTransform: "capitalize",
                    }}
                  >
                    Подробнее
                  </Typography>
                </Button>
              </StyledBodyCellLast>
            </StyledBodyRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
