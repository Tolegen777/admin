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
} from "./../../../Users/modules/UserTable/style";
import { Box, Button, Divider, Typography } from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setOneStaff} from "../../../../redux/store/reducers/staff/staff.slice";
import React from "react";

function createData(

    name:string,
    phone: string,
  bin: string,
  position: string,
    workerStatus:string,
  email:string,
  date:string,
) {
  return { name, phone, bin, position, workerStatus, email,date};
}

const rows = [
  createData("Досбол Акынов", "+7 707 432 21 12", "020306600213", "Админинистратор","Активный","dosbol@mail.ru","21.04.1998"),
  createData("Даулет Жаксыбек", "+7 777 324 54 23", "120909500436", "Админинистратор", "Женат","daulet@mail.ru","12.12.1990"),
  createData("Бакыт Кайратов", "+7 707 546 74 22", "010201502914", "Админинистратор","Женат","bakit@mail.ru","11.09.1979"),
  createData("Улжан Амангелды", "+7 700 123 44 12", "110406320100", "Админинистратор","Активный","ulzhan@mail.ru","28.04.1987"),

];

interface Props {
    searchedName:string
}

const StaffTable:React.FC<Props> = ({ searchedName}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSetWorker = (user:any) => {
        dispatch(setOneStaff(user))
        navigate('one-worker')
    }


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



          {rows.map((row,ind) => {
              if (searchedName && row.name.toLowerCase().includes(searchedName.toLowerCase())
                  ) {
                  return <StyledBodyRow key={ind}>
                      <StyledBodyCellFirst>{row.name}</StyledBodyCellFirst>
                      <StyledBodyCell>{row.phone}</StyledBodyCell>
                      <StyledBodyCell>{row.bin}</StyledBodyCell>
                      <StyledBodyCell><b>{row.position}</b></StyledBodyCell>
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
                              onClick={()=>handleSetWorker(row)}
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
              } else if(!searchedName) {
                  return <StyledBodyRow key={ind}>
                      <StyledBodyCellFirst>{row.name}</StyledBodyCellFirst>
                      <StyledBodyCell>{row.phone}</StyledBodyCell>
                      <StyledBodyCell>{row.bin}</StyledBodyCell>
                      <StyledBodyCell><b>{row.position}</b></StyledBodyCell>
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
                              onClick={()=>handleSetWorker(row)}
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
              } else return

          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default StaffTable