import { useRef } from "react";
import { styled } from "@mui/material/styles";
import MuiBox from "@mui/material/Box";
import { Divider, IconButton, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchIcon from "@mui/icons-material/Search";
import ClientsTable from "components/Table";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "hooks";
import { Loader } from "components";
import { useGlobalState } from "hooks";

const MainContainer = styled(MuiBox)(() => ({
  width: "100%",
  height: "100%",
}));
const Content = styled(CardContent)(() => ({
  width: "100%",
  height: "100%",
}));

const FilterContent = styled(CardContent)(() => ({
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
  const { clients, loading, getClients, notification } = useGlobalState();
  const { getSession } = useAuth();
  const sessionStringify = getSession();
  const { userid } = JSON.parse(sessionStringify ?? "{}");

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
    if (!clients) {
      getClients({ userid, identificacion: "", nombre: "" });
    }
  }, []);

  const handleFilter = () => {
    const identification =
      identificationRef.current.children[1].children[0].value;
    const name = nameRef.current.children[1].children[0].value;

    getClients({
      userid,
      identificacion: identification ?? "",
      nombre: name ?? "",
    });
  };

  const renderClientsTable = () => {
    return clients?.length > 0 ? (
      <ClientsTable clients={clients} />
    ) : !loading ? (
      <Typography variant="h6">No se encontraron clientes</Typography>
    ) : null;
  };

  const renderNotification = () => {
    const status = notification?.status;
    const messageByStatus = {
      Success: (
        <Typography variant="h6" style={{ color: "green" }}>
          {notification.message}
        </Typography>
      ),
      Error: (
        <Typography variant="h6" style={{ color: "red" }}>
          {notification.message}
        </Typography>
      ),
    };

    return messageByStatus[status];
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
          {clients ? renderClientsTable() : null}
          {loading ? <Loader /> : null}
          {notification ? renderNotification() : null}
        </TableContainer>
      </Card>
    </MainContainer>
  );
};

export default ClientsCRUD;
