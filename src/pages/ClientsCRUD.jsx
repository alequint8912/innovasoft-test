import { useRef, useState } from "react";
import { styled } from "@mui/material/styles";
import MuiBox from "@mui/material/Box";
import { Divider, IconButton, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchIcon from "@mui/icons-material/Search";
import ClientsTable from "components/Table";
import { GlobalContext } from "context/GlobalState";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MainContainer = styled(Box)(() => ({
  width: "100%",
  height: "100%",
}));
const Content = styled(CardContent)(() => ({
  // paddingInline: 0,
  // borderBottom: "1px solid gray",
  width: "100%",
  height: "100%",
}));

const FilterContent = styled(CardContent)(() => ({
  // borderBottom: "1px solid gray",
  display: "flex",
  gap: 10,
  alignItems: "center",
}));

const TableContainer = styled(MuiBox)(() => ({
  paddingBlock: 20,
  paddingInline: 40,
}));

const HeadActions = styled(MuiBox)(() => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

const HeadTitle = styled(Typography)(() => ({
  fontWeight: "700",
}));

const HeadActionsContainer = styled(MuiBox)(() => ({
  display: "flex",
  gap: 5,
}));

const ActionIcon = styled(Button)(() => ({
  backgroundColor: "gray",
}));

const FilterInput = styled(TextField)(() => ({
  flex: 1,
}));

const FilterButton = styled(IconButton)(() => ({
  border: "1px solid",
  flexShrink: 0,
  width: 50,
  height: 50,
}));

const ClientsCRUD = () => {
  const { persons, loadingPersons, getPersons } = useContext(GlobalContext);
  const [filteredPersons, setFilteredPersons] = useState(persons);

  const nameRef = useRef(null);
  const identificationRef = useRef(null);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  const handleAddPerson = () => {
    navigate("/clients/add");
  };

  useEffect(() => {
    if (!persons) getPersons();
    else setFilteredPersons(persons);
  }, [persons]);

  const handleFilter = () => {
    const identification =
      identificationRef.current.children[1].children[0].value;
    const name = nameRef.current.children[1].children[0].value;

    if (identification || name) {
      const lowerName = name.toLowerCase();
      const lowerIdentification = identification.toLowerCase();
      const filterResult = persons.filter(({ identificacion, nombre }) => {
        const identificacionLower = identificacion.toLowerCase();
        const nombreLower = nombre.toLowerCase();
        return (
          identificacionLower.includes(lowerIdentification) &&
          nombreLower.includes(lowerName)
        );
      });

      setFilteredPersons(filterResult);
    } else {
      setFilteredPersons(persons);
    }
  };

  return (
    <MainContainer>
      <Card>
        <Content>
          <HeadActions>
            <HeadTitle variant="h5">Consulta de clientes</HeadTitle>
            <HeadActionsContainer>
              <ActionIcon
                variant="contained"
                startIcon={<AddIcon />}
                onClick={handleAddPerson}
              >
                Agregar
              </ActionIcon>
              <ActionIcon
                variant="contained"
                startIcon={<ArrowBackIcon />}
                onClick={handleBack}
              >
                Regresar
              </ActionIcon>
            </HeadActionsContainer>
          </HeadActions>
        </Content>
        <Divider />
        <FilterContent>
          <FilterInput
            id="outlined-name"
            label="Nombre"
            variant="outlined"
            ref={nameRef}
          />
          <FilterInput
            id="outlined-id"
            label="Identificación"
            variant="outlined"
            ref={identificationRef}
          />
          <FilterButton
            aria-label="delete"
            color="black"
            onClick={handleFilter}
          >
            <SearchIcon />
          </FilterButton>
        </FilterContent>
        <Divider />
        <TableContainer>
          {filteredPersons && !loadingPersons ? (
            <ClientsTable persons={filteredPersons} />
          ) : (
            <Typography variant="h1">LOADING...</Typography>
          )}
        </TableContainer>
      </Card>
    </MainContainer>
  );
};

export default ClientsCRUD;
