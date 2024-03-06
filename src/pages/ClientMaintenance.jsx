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
import * as yup from "yup";

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
  const [errors, setErrors] = useState(null);

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

    const schema = yup.object().shape({
      nombre: yup
        .string()
        .max(50, "El nombre no puede exceder los 50 caracteres")
        .required("El nombre es requerido"),
      apellidos: yup
        .string()
        .max(100, "Los apellidos no pueden exceder los 100 caracteres")
        .required("Los apellidos son requeridos"),
      identificacion: yup
        .string()
        .max(20, "La identificación no puede exceder los 20 caracteres")
        .required("La identificación es requerida"),
      telefonoCelular: yup
        .string()
        .max(20, "El teléfono celular no puede exceder los 20 caracteres")
        .required("El teléfono celular es requerido"),
      otroTelefono: yup
        .string()
        .max(20, "El otro teléfono no puede exceder los 20 caracteres")
        .required("El otro teléfono es requerido"),
      direccion: yup
        .string()
        .max(200, "La dirección no puede exceder los 200 caracteres")
        .required("La dirección es requerida"),
      fNacimiento: yup.date().required("La fecha de nacimiento es requerida"),
      fAfiliacion: yup.date().required("La fecha de afiliación es requerida"),
      sexo: yup
        .string()
        .matches(/^[FM]$/, "El sexo debe ser F o M")
        .required("El sexo es requerido"),
      resenaPersonal: yup
        .string()
        .max(200, "La reseña personal no puede exceder los 200 caracteres")
        .required("La reseña personal es requerida"),
      interesesId: yup
        .string()
        .uuid("El ID de intereses debe ser un UUID válido")
        .required("El ID de intereses es requerido"),
    });

    schema
      .validate(data, { abortEarly: false })
      .then(() => {
        if (clientId) {
          editPerson(data);
        } else {
          addPerson(data);
        }

        setErrors(null);
      })
      .catch((validationError) => {
        const errors = {};
        validationError.inner.forEach((error) => {
          errors[error.path] = error.message; // This is the error message
        });

        console.log("Validation errors:", errors);
        setErrors(errors);
      });

    /// validate json with yup
  };

  const handleImageLoad = (base64Image) => {
    setPersonBase64Image(base64Image);
  };

  const renderForm = () => {
    console.log(errors);
    const currentPerson = clientId
      ? persons?.find(({ _id }) => clientId === _id)
      : null;
    return (
      <>
        <Content>
          <HeadActions>
            <HeadActionsContainer>
              <ImageLoader
                onLoad={handleImageLoad}
                base64Image={currentPerson?.imagen}
              />
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
              error={errors?.identificacion}
              id="identification"
              label={
                errors?.identificacion
                  ? errors?.identificacion
                  : "Identificación"
              }
              variant="outlined"
              ref={identificationRef}
              defaultValue={currentPerson?.identificacion}
            />
            <FormInput
              error={errors?.nombre}
              id="name"
              label={errors?.nombre ?? "Nombre"}
              variant="outlined"
              ref={nameRef}
              defaultValue={currentPerson?.nombre}
            />
            <FormInput
              error={errors?.apellidos}
              id="lastname"
              label={errors?.apellidos ?? "Apellidos"}
              variant="outlined"
              ref={lastnameRef}
              defaultValue={currentPerson?.apellidos}
            />
          </FormRow>
          <FormRow>
            <FormInput
              error={errors?.sexo}
              id="gender"
              select
              label={errors?.sexo ?? "Sexo"}
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
              error={errors?.fNacimiento}
              label={errors?.fNacimiento ?? "Fecha de nacimiento"}
              type="date"
              id="birthYear"
              defaultValue={currentPerson?.fNacimiento ?? defaultDate}
              InputLabelProps={{
                shrink: true,
              }}
              ref={birthYearRef}
            />
            <FormInput
              error={errors?.fAfiliacion}
              type="date"
              id="assignYear"
              label={errors?.fAfiliacion ?? "Fecha de afiliación"}
              defaultValue={currentPerson?.fAfiliacion ?? defaultDate}
              InputLabelProps={{
                shrink: true,
              }}
              ref={assignYearRef}
            />
          </FormRow>
          <FormRow>
            <FormInput
              error={errors?.telefonoCelular}
              id="phone"
              label={errors?.telefonoCelular ?? "Teléfono"}
              variant="outlined"
              ref={phoneRef}
              defaultValue={currentPerson?.telefonoCelular}
            />
            <FormInput
              error={errors?.otroTelefono}
              id="otherPhone"
              label={errors?.otroTelefono ?? "Teléfono otro"}
              variant="outlined"
              ref={otherPhoneRef}
              defaultValue={currentPerson?.otroTelefono}
            />
            <FormInput
              error={errors?.interesesId}
              id="interest"
              select
              label={errors?.interesesId ?? "Interes"}
              defaultValue={
                currentPerson?.interesesId ??
                "3fa85f64-5717-4562-b3fc-2c963f66afa6"
              }
              ref={interestRef}
            >
              <MenuItem
                key={"intereses#1"}
                value="3fa85f64-5717-4562-b3fc-2c963f66afa6"
              >
                Interes # 1
              </MenuItem>
              <MenuItem
                key={"intereses#2"}
                value="3fa85f64-5717-4562-b3fc-2c963f66aab5"
              >
                Interes # 2
              </MenuItem>
              <MenuItem
                key={"intereses#3"}
                value="3fa85f64-5717-4562-b3fc-2c963f66aab6"
              >
                Interes # 3
              </MenuItem>
            </FormInput>
          </FormRow>
          <FormRow>
            <FormInput
              error={errors?.direccion}
              id="address"
              label={errors?.direccion ?? "Dirección"}
              variant="outlined"
              ref={addressRef}
              defaultValue={currentPerson?.direccion}
            />
          </FormRow>
          <FormRow>
            <FormInput
              error={errors?.resenaPersonal}
              id="resenha"
              label={errors?.resenaPersonal ?? "Reseña personal"}
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
