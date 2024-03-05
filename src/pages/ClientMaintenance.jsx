import { SaveAlt } from "@mui/icons-material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Divider, MenuItem, TextField, Typography } from "@mui/material";
import MuiBox from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { GlobalContext } from "context/GlobalState";
import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ImageLoader from "components/ImageLoader";

const MainContainer = styled(Box)(() => ({
  width: "100%",
  height: "100%",
}));

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

  paddingInline: 40,
}));

const HeadTitle = styled(Typography)(() => ({
  fontWeight: "700",
}));

const HeadActionsContainer = styled(MuiBox)(() => ({
  display: "flex",
  gap: 10,
  alignItems: "center",
  justifyContent: "center",
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
  const { persons, loadingPersons, getPersons, editPerson, addPerson } =
    useContext(GlobalContext);
  const [personBase64Image, setPersonBase64Image] = useState(null);

  const handleGoBack = () => {
    navigate("/clients");
  };

  useEffect(() => {
    if (!persons) getPersons();
  }, []);

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

    /// validate json with yup

    const data = {
      ...(clientId
        ? { _id: clientId }
        : { _id: `${identification}-${name}-${lastname}` }),
      nombre: name,
      apellidos: lastname,
      identificacion: identification,
      telefonoCelular: phone,
      otroTelefono: otherPhone,
      direccion: address,
      fNacimiento: birthYear,
      fAfiliacion: assignYear,
      sexo: gender,
      resenaPersonal: resenha,
      imagen: personBase64Image,
      interesesId: interest,
    };
    if (clientId) {
      editPerson(data);
    } else {
      addPerson(data);
    }
  };

  const handleImageLoad = (base64Image) => {
    debugger;
    setPersonBase64Image(base64Image);
  };

  const renderForm = () => {
    const currentPerson = clientId
      ? persons?.find(({ _id }) => clientId === _id)
      : null;
    return (
      <>
        <Content>
          <HeadActions>
            <HeadActionsContainer>
              <ImageLoader onLoad={handleImageLoad} />
              <HeadTitle variant="h5">Mantenimiento de cliente</HeadTitle>
            </HeadActionsContainer>
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
              defaultValue={currentPerson?.identificacion}
            />
            <FormInput
              id="name"
              label="Nombre"
              variant="outlined"
              ref={nameRef}
              defaultValue={currentPerson?.nombre}
            />
            <FormInput
              id="lastname"
              label="Apellidos"
              variant="outlined"
              ref={lastnameRef}
              defaultValue={currentPerson?.apellidos}
            />
          </FormRow>
          <FormRow>
            <FormInput
              id="gender"
              select
              label="Select"
              ref={genderRef}
              defaultValue={currentPerson?.sexo ?? "F"}
            >
              <MenuItem key={"F"} value="F">
                Femenino
              </MenuItem>
              <MenuItem key={"M"} value="M">
                Masculino
              </MenuItem>
            </FormInput>

            <FormInput
              type="date"
              id="birthYear"
              label="Fecha de nacimiento"
              defaultValue={currentPerson?.fNacimiento ?? defaultDate}
              InputLabelProps={{
                shrink: true,
              }}
              ref={birthYearRef}
            />
            <FormInput
              type="date"
              id="assignYear"
              label="Fecha de afiliación"
              defaultValue={currentPerson?.fAfiliacion ?? defaultDate}
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
              defaultValue={currentPerson?.telefonoCelular}
            />
            <FormInput
              id="otherPhone"
              label="Teléfono otro"
              variant="outlined"
              ref={otherPhoneRef}
              defaultValue={currentPerson?.otroTelefono}
            />
            <FormInput
              id="interest"
              select
              label="Interes"
              defaultValue={currentPerson?.interesesId ?? "intereses#1"}
              ref={interestRef}
            >
              <MenuItem key={"intereses#1"} value="intereses#1">
                Interes # 1
              </MenuItem>
              <MenuItem key={"intereses#2"} value="intereses#2">
                Interes # 2
              </MenuItem>
              <MenuItem key={"intereses#3"} value="intereses#3">
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
              defaultValue={currentPerson?.direccion}
            />
          </FormRow>
          <FormRow>
            <FormInput
              id="resenha"
              label="Reseña"
              variant="outlined"
              ref={resenhaRef}
              defaultValue={currentPerson?.resenaPersonal}
            />
          </FormRow>
        </FormContainer>
        <Divider />
      </>
    );
  };

  const render = () => {
    if (clientId) {
      if (persons && !loadingPersons) return renderForm();
      else return <Typography variant="h2">LOADING...</Typography>;
    } else {
      if (!loadingPersons) return renderForm();
      else return <Typography variant="h2">LOADING...</Typography>;
    }
  };

  return (
    <MainContainer>
      <Card>{render()}</Card>
    </MainContainer>
  );
};

export default ClientMaintenance;
