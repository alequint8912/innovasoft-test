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
import { useContext } from "react";
import { GlobalContext } from "context/GlobalState";
import { useNavigate } from "react-router-dom";

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

function ClientsTable({ persons }) {
  const { removePerson } = useContext(GlobalContext);

  const navigate = useNavigate();

  const handleRemove = ({ id, name, lastName }) => {
    if (
      window.confirm(`Esta seguro de eliminar el usuario ${name} ${lastName}?`)
    )
      removePerson(id);
  };

  const handleEdit = (id) => {
    navigate(`/clients/${id}`);
  };

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
          {persons.map(({ _id, identificacion, nombre, apellidos }, index) => (
            <TableRow
              key={_id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <BodyCell component="th" scope="row">
                {identificacion}
              </BodyCell>
              <BodyCell align="left">{`${nombre} ${apellidos}`}</BodyCell>
              <BodyCell align="left">
                <IconButton onClick={() => handleEdit(_id)}>
                  <Edit />
                </IconButton>
                <IconButton
                  onClick={() =>
                    handleRemove({ id: _id, name: nombre, lastName: apellidos })
                  }
                >
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

export default ClientsTable;
