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
import { Navigate, useNavigate } from "react-router-dom";
import { FC } from "react";

function createData(
  id: number,
  user: string,
  number: string,
  status: string,
  complains: string
) {
  return { id, user, number, status, complains };
}

const rows = [
  createData(1, "Ахманов Нурбол", "+7 747 148 77 71", "Активный", "Нет"),
  createData(2, "Андрей Романович", "+7 707 332 12 72", "Активный", "Нет"),
  createData(3, "Дмитрий Медведев", "+7 701 010 11 22", "Активный", "Нет"),
  createData(
    4,
    "Тринкер Борис",
    "+7 707 452 73 12",
    "Активный",
    "На обработке"
  ),
  createData(
    5,
    "Михаил Васильев",
    "+7 747 555 23 32",
    "Пассивный",
    "Заблокирован"
  ),
];

const UserTable = () => {
  const navigate = useNavigate();

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
          {/* .filter(name => name.includes(search)) */}
          {/* .filter(name => name.match(new RegExp(search, "i"))) */}
          {/* .filter((row) =>
              Object.values(row).some(
                (val) => typeof val === "string" && val.includes(`${search}`)
              )
            ) */}
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
                  onClick={() => navigate(`/app/users/one/${row.id}`)}
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
};

export default UserTable;
