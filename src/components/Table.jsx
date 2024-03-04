import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import styled from "@emotion/styled";

const rows = [
  {
    _id: "601",
    identification: "1234561",
    name: "John",
    lastName: "Doe",
  },
  {
    _id: "602",
    identification: "1234562",
    name: "Jane",
    lastName: "Smith",
  },
  {
    _id: "603",
    identification: "1234563",
    name: "Michael",
    lastName: "Johnson",
  },
  {
    _id: "604",
    identification: "1234564",
    name: "Emily",
    lastName: "Williams",
  },
  {
    _id: "605",
    identification: "1234565",
    name: "Robert",
    lastName: "Brown",
  },
  {
    _id: "606",
    identification: "1234566",
    name: "Linda",
    lastName: "Jones",
  },
  {
    _id: "607",
    identification: "1234567",
    name: "James",
    lastName: "Miller",
  },
  {
    _id: "608",
    identification: "1234568",
    name: "Patricia",
    lastName: "Davis",
  },
  {
    _id: "609",
    identification: "1234569",
    name: "Mary",
    lastName: "Garcia",
  },
  {
    _id: "610",
    identification: "12345610",
    name: "William",
    lastName: "Rodriguez",
  },
];

const HeadCell = styled(TableCell)(() => ({
  paddingBlock: 10,
  paddingInline: 20,
  backgroundColor: "#1975ff",
  color: "#fff",
  fontSize: "1rem",
  border: "1px solid #fff",
}));

const BodyCell = styled(TableCell)(() => ({
  color: "#aaa5bd",
  paddingBlock: 5,
  paddingInline: 20,
  border: "1px solid #eef0f2",
}));

export default function BasicTable({ persons }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <HeadCell>Identificación</HeadCell>
            <HeadCell align="left">Nombre completo</HeadCell>
            <HeadCell align="left">Acciones</HeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {persons.map(({ id, identificacion, nombre, apellidos }, index) => (
            <TableRow
              key={id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <BodyCell component="th" scope="row">
                {identificacion}
              </BodyCell>
              <BodyCell align="left">{`${nombre} ${apellidos}`}</BodyCell>
              <BodyCell align="left">
                <IconButton>
                  <Edit />
                </IconButton>
                <IconButton>
                  <Delete />
                </IconButton>
              </BodyCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
