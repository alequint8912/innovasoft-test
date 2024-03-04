import { styled } from "@mui/material/styles";
import MuiBox from "@mui/material/Box";
import { Divider, IconButton, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchIcon from "@mui/icons-material/Search";
import BasicTable from "components/Table";
import { GlobalContext } from "context/GlobalState";
import { useContext, useEffect } from "react";

const Content = styled(CardContent)(() => ({
  // paddingInline: 0,
  // borderBottom: "1px solid gray",
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
  const {
    persons,
    loadingPersons,
    addPerson,
    editPerson,
    removePerson,
    getPersons,
  } = useContext(GlobalContext);

  useEffect(() => {
    if (!persons) getPersons();
  }, []);

  return (
    <Card>
      <Content>
        <HeadActions>
          <HeadTitle variant="h5">Consulta de clientes</HeadTitle>
          <HeadActionsContainer>
            <ActionIcon variant="contained" startIcon={<AddIcon />}>
              Agregar
            </ActionIcon>
            <ActionIcon variant="contained" startIcon={<ArrowBackIcon />}>
              Regresar
            </ActionIcon>
          </HeadActionsContainer>
        </HeadActions>
      </Content>
      <Divider />
      <FilterContent>
        <FilterInput id="outlined-name" label="Nombre" variant="outlined" />
        <FilterInput
          id="outlined-id"
          label="Identificación"
          variant="outlined"
        />
        <FilterButton aria-label="delete" color="black">
          <SearchIcon />
        </FilterButton>
      </FilterContent>
      <Divider />
      <TableContainer>
        {persons ? (
          <BasicTable persons={persons} />
        ) : (
          <Typography variant="h1">LOADING...</Typography>
        )}
      </TableContainer>
    </Card>
  );
};

export default ClientsCRUD;
