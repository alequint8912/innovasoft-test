import { useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { SaveAlt } from "@mui/icons-material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Divider, MenuItem, TextField, Typography } from "@mui/material";
import MuiBox from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { styled } from "@mui/material/styles";

const Content = styled(CardContent)(() => ({
  // paddingInline: 0,
  // borderBottom: "1px solid gray",
}));

const FormContainer = styled(MuiBox)(() => ({
  paddingBlock: 20,
  paddingInline: 40,
  display: "flex",
  flexDirection: "column",
  gap: 25,
}));

const FormRow = styled(MuiBox)(() => ({
  display: "flex",
  flex: 1,
  gap: 20,
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

const FormInput = styled(TextField)(() => ({
  display: "flex",
  flex: 1,
}));

const ClientMaintenance = () => {
  const { clientId } = useParams();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/clients");
  };

  const identificationRef = useRef(null);
  const nameRef = useRef(null);
  const lastnameRef = useRef(null);
  const genderRef = useRef(null);
  const birthYearRef = useRef(null);
  const assignYearRef = useRef(null);
  const phoneRef = useRef(null);
  const otherPhoneRef = useRef(null);
  const interestRef = useRef(null);
  const addressRef = useRef(null);
  const resenhaRef = useRef(null);

  const defaultDate = new Date().toISOString().slice(0, 10);

  const handleSave = () => {
    const identification =
      identificationRef.current.children[1].children[0].value;
    const name = nameRef.current.children[1].children[0].value;
    const lastname = lastnameRef.current.children[1].children[0].value;
    const gender = genderRef.current.children[1].children[1].value;
    const birthYear = birthYearRef.current.children[1].children[0].value;
    const assignYear = assignYearRef.current.children[1].children[0].value;
    const phone = phoneRef.current.children[1].children[0].value;
    const otherPhone = otherPhoneRef.current.children[1].children[0].value;
    const interest = interestRef.current.children[1].children[1].value;
    const address = addressRef.current.children[1].children[0].value;
    const resenha = resenhaRef.current.children[1].children[0].value;

    console.log({
      identification,
      name,
      lastname,
      gender,
      birthYear,
      assignYear,
      phone,
      otherPhone,
      interest,
      address,
      resenha,
    });
  };

  return (
    <Card>
      <Content>
        <HeadActions>
          <HeadTitle variant="h5">Mantenimiento de cliente</HeadTitle>
          <HeadActionsContainer>
            <ActionIcon
              variant="contained"
              startIcon={<SaveAlt />}
              onClick={handleSave}
            >
              Guardar
            </ActionIcon>
            <ActionIcon
              variant="contained"
              startIcon={<ArrowBackIcon />}
              onClick={handleGoBack}
            >
              Regresar
            </ActionIcon>
          </HeadActionsContainer>
        </HeadActions>
      </Content>
      <Divider />
      <FormContainer>
        <FormRow>
          <FormInput
            id="identification"
            label="Identificación"
            variant="outlined"
            ref={identificationRef}
          />
          <FormInput
            id="name"
            label="Nombre"
            variant="outlined"
            ref={nameRef}
          />
          <FormInput
            id="lastname"
            label="Apellidos"
            variant="outlined"
            ref={lastnameRef}
          />
        </FormRow>
        <FormRow>
          <FormInput
            id="gender"
            select
            label="Select"
            defaultValue="femenino"
            ref={genderRef}
          >
            <MenuItem key={"femenino"} value="femenino">
              Femenino
            </MenuItem>
            <MenuItem key={"masculino"} value="masculino">
              Masculino
            </MenuItem>
          </FormInput>

          <FormInput
            type="date"
            id="birthYear"
            label="Fecha de nacimiento"
            defaultValue={defaultDate}
            InputLabelProps={{
              shrink: true,
            }}
            ref={birthYearRef}
          />
          <FormInput
            type="date"
            id="assignYear"
            label="Fecha de afiliación"
            defaultValue={defaultDate}
            InputLabelProps={{
              shrink: true,
            }}
            ref={assignYearRef}
          />
        </FormRow>
        <FormRow>
          <FormInput
            id="phone"
            label="Teléfono"
            variant="outlined"
            ref={phoneRef}
          />
          <FormInput
            id="otherPhone"
            label="Teléfono otro"
            variant="outlined"
            ref={otherPhoneRef}
          />
          <FormInput
            id="interest"
            select
            label="Interes"
            defaultValue={"interes#1"}
            ref={interestRef}
          >
            <MenuItem key={"interes#1"} value="interes#1">
              Interes # 1
            </MenuItem>
            <MenuItem key={"interes#2"} value="interes#2">
              Interes # 2
            </MenuItem>
            <MenuItem key={"interes#3"} value="interes#3">
              Interes # 3
            </MenuItem>
          </FormInput>
        </FormRow>
        <FormRow>
          <FormInput
            id="address"
            label="Dirección"
            variant="outlined"
            ref={addressRef}
          />
        </FormRow>
        <FormRow>
          <FormInput
            id="resenha"
            label="Reseña"
            variant="outlined"
            ref={resenhaRef}
          />
        </FormRow>
      </FormContainer>
      <Divider />
    </Card>
  );
};

export default ClientMaintenance;
