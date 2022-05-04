import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import {
  StyledBodyCell,
  StyledBodyCellFirst,
  StyledBodyCellLast,
  StyledBodyRow,
  StyledHeadCell,
  StyledHeadRow,
} from "./../../users/UserTable/StyledHead";
import { Box, Button, Divider, Typography } from "@mui/material";

function createData(
  user: string,
  number: string,
  bin: string,
  role: string
) {
  return { user, number, bin, role };
}

const rows = [
  createData("Нуров Даурен", "+7 707 777 77 77", "023546589564", "Админинистратор"),
  createData("Нуров Даурен", "+7 707 777 77 77", "023546589564", "Админинистратор"),
  createData("Нуров Даурен", "+7 707 777 77 77", "023546589564", "Админинистратор"),
  createData("Нуров Даурен", "+7 707 777 77 77", "023546589564", "Админинистратор"),

];

export default function StaffTable() {
  return (
    <TableContainer component={Box}>
      <Table
        sx={{ minWidth: 650, boxShadow: "none" }}
        aria-label="simple table"
      >
        <TableHead sx={{ position: "relative" }}>
          <StyledHeadRow>
            <StyledHeadCell>Сотрудник</StyledHeadCell>
            <StyledHeadCell>Телефон</StyledHeadCell>
            <StyledHeadCell>ИИН</StyledHeadCell>
            <StyledHeadCell>Уровень доступа</StyledHeadCell>
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
              <StyledBodyCell>{row.bin}</StyledBodyCell>
              <StyledBodyCell><b>{row.role}</b></StyledBodyCell>
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
