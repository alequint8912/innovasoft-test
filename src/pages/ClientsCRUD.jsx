import { styled } from "@mui/material/styles";
import MuiBox from "@mui/material/Box";
import { IconButton, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchIcon from "@mui/icons-material/Search";
import BasicTable from "components/Table";

const Content = styled(CardContent)(() => ({
  // paddingInline: 0,
  borderBottom: "1px solid gray",
}));

const FilterContent = styled(CardContent)(() => ({
  borderBottom: "1px solid gray",
  display: "flex",
  gap: 10,
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

const ClientsCRUD = () => {
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
      <FilterContent>
        <FilterInput id="outlined-name" label="Nombre" variant="outlined" />
        <FilterInput
          id="outlined-id"
          label="Identificación"
          variant="outlined"
        />
        <IconButton aria-label="delete" disabled color="primary">
          <SearchIcon />
        </IconButton>
      </FilterContent>
      <TableContainer>
        <BasicTable />
      </TableContainer>
    </Card>
  );
};

export default ClientsCRUD;
