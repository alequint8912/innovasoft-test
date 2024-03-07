import { SaveAlt } from "@mui/icons-material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Divider, MenuItem, TextField, Typography } from "@mui/material";
import MuiBox from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { GlobalContext } from "context/GlobalProvider";
import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ImageLoader from "components/ImageLoader";
import * as yup from "yup";
import { Loader } from "components";
import { useGlobalState } from "hooks";
import { useAuth } from "hooks";

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

  const {
    clients,
    interests,
    loading,
    getUserById,
    editPerson,
    addClient,
    getInterests,
    notification,
  } = useGlobalState();
  const { getSession } = useAuth();
  const sessionStringify = getSession();
  const { userid } = JSON.parse(sessionStringify ?? "{}");

  const [personBase64Image, setPersonBase64Image] = useState(null);
  const [errors, setErrors] = useState(null);

  const handleGoBack = () => {
    navigate("/clients");
  };

  useEffect(() => {
    if (!clients && clientId) getUserById({ clientId });
    if (!interests) getInterests();
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

    const client = {
      ...(clientId && { id: clientId }),
      nombre: name,
      apellidos: lastname,
      identificacion: identification,
      celular: phone,
      otroTelefono: otherPhone,
      direccion: address,
      fNacimiento: birthYear,
      fAfiliacion: assignYear,
      sexo: gender,
      resennaPersonal: resenha,
      imagen: personBase64Image,
      interesFK: interest,
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
      celular: yup
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
      resennaPersonal: yup
        .string()
        .max(200, "La reseña personal no puede exceder los 200 caracteres")
        .required("La reseña personal es requerida"),
      interesFK: yup
        .string()
        .uuid("El ID de intereses debe ser un UUID válido")
        .required("El ID de intereses es requerido"),
    });

    schema
      .validate(client, { abortEarly: false })
      .then(() => {
        if (clientId) {
          editPerson(client);
        } else {
          addClient({ userid, client });
        }

        setErrors(null);
      })
      .catch((validationError) => {
        const errors = {};
        validationError.inner.forEach((error) => {
          errors[error.path] = error.message; // This is the error message
        });

        setErrors(errors);
      });

    /// validate json with yup
  };

  const handleImageLoad = (base64Image) => {
    setPersonBase64Image(base64Image);
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

  const renderForm = () => {
    const currentPerson = clientId
      ? clients?.find(({ id }) => clientId === id)
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
                disabled={loading}
              >
                Guardar
              </ActionIcon>
              <ActionIcon
                variant="contained"
                startIcon={<ArrowBackIcon />}
                onClick={handleGoBack}
                disabled={loading}
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
              disabled={loading}
              error={errors?.identificacion}
              id="identification"
              label={errors?.identificacion ?? "Identificación"}
              variant="outlined"
              ref={identificationRef}
              defaultValue={currentPerson?.identificacion}
            />
            <FormInput
              disabled={loading}
              error={errors?.nombre}
              id="name"
              label={errors?.nombre ?? "Nombre"}
              variant="outlined"
              ref={nameRef}
              defaultValue={currentPerson?.nombre}
            />
            <FormInput
              disabled={loading}
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
              disabled={loading}
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
              disabled={loading}
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
              disabled={loading}
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
              disabled={loading}
              error={errors?.celular}
              id="phone"
              label={errors?.celular ?? "Teléfono"}
              variant="outlined"
              ref={phoneRef}
              defaultValue={currentPerson?.celular}
            />
            <FormInput
              disabled={loading}
              error={errors?.otroTelefono}
              id="otherPhone"
              label={errors?.otroTelefono ?? "Teléfono otro"}
              variant="outlined"
              ref={otherPhoneRef}
              defaultValue={currentPerson?.otroTelefono}
            />
            <FormInput
              disabled={loading}
              error={errors?.interesesId}
              id="interest"
              select
              label={errors?.interesesId ?? "Interes"}
              defaultValue={currentPerson?.interesesId ?? interests?.[0]?.id}
              ref={interestRef}
            >
              {interests?.map(({ id, descripcion }) => (
                <MenuItem key={id} value={id}>
                  {descripcion}
                </MenuItem>
              ))}
            </FormInput>
          </FormRow>
          <FormRow>
            <FormInput
              disabled={loading}
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
              disabled={loading}
              error={errors?.resenaPersonal}
              id="resenha"
              label={errors?.resenaPersonal ?? "Reseña personal"}
              variant="outlined"
              ref={resenhaRef}
              defaultValue={currentPerson?.resenaPersonal}
            />
          </FormRow>
        </FormContainer>
      </>
    );
  };

  const render = () => {
    if (clientId) {
      if (clients && interests) return renderForm();
      return;
    } else {
      if (interests) return renderForm();
      return;
    }
  };

  return (
    <MainContainer>
      <Card>{render()}</Card>
      <Box style={{ paddingTop: 30, textAlign: "center" }}>
        {notification ? renderNotification() : null}
        {loading ? <Loader /> : null}
      </Box>
    </MainContainer>
  );
};

export default ClientMaintenance;
