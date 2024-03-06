import { useRef, useState } from "react";
import { useAuth } from "hooks";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import {
  IconButton,
  TextField,
  Typography,
  Button,
  InputAdornment,
  Box,
  CircularProgress,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import * as yup from "yup";

const MainContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
}));

const FormContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: 15,
  minWidth: 360,
}));

const FormInput = styled(TextField)(() => ({}));

const SubmitButton = styled(Button)(() => ({
  backgroundColor: "2196f3",
}));

const MainLabel = styled(Typography)(() => ({
  color: "#30415f",
  textAlign: "center",
  fontSize: "1.3rem",
}));

const ErrorMessage = styled(Typography)(() => ({
  color: "red",

  textAlign: "center",
  fontSize: "1.2rem",
  fontStyle: "italic",
}));

const RegisterUser = () => {
  const { register, loading, notification, cleanNotification } = useAuth();

  const [errors, setErrors] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = () => {
    const username = usernameRef.current.children[1].children[0].value;
    const password = passwordRef.current.children[1].children[0].value;
    const email = emailRef.current.children[1].children[0].value;

    const schema = yup.object().shape({
      username: yup
        .string()
        .required("El nombre de usuario es requerido")
        .min(3, "El nombre de usuario debe tener al menos 3 caracteres")
        .max(30, "El nombre de usuario no debe exceder los 30 caracteres"),
      email: yup
        .string()
        .email("Debe ser un correo electrónico válido")
        .required("El correo electrónico es requerido"),
      password: yup
        .string()
        .required("La contraseña es requerida")
        .min(8, "La contraseña debe tener al menos 8 caracteres")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
          "La contraseña debe contener al menos una letra mayúscula, una letra minúscula y un número"
        ),
    });

    schema
      .validate({ username, password, email }, { abortEarly: false })
      .then(() => {
        setErrors(null);
        register({ username, password, email });
      })
      .catch((validationError) => {
        const errors = {};
        validationError.inner.forEach((error) => {
          errors[error.path] = error.message; // This is the error message
        });

        setErrors(errors);
      });
  };

  return (
    <MainContainer>
      <FormContainer>
        <MainLabel>Registro</MainLabel>
        <FormInput
          id="username"
          ref={usernameRef}
          error={errors?.username}
          label={errors?.username ?? "Nombre Usuario *"}
          variant="outlined"
        />

        <FormInput
          id="email"
          ref={emailRef}
          error={errors?.email}
          label={errors?.email ?? "Dirección de correo *"}
          variant="outlined"
        />

        <FormInput
          id="password"
          ref={passwordRef}
          error={errors?.password}
          label={errors?.password ?? "Contraseña *"}
          variant="outlined"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <SubmitButton variant="contained" onClick={handleSubmit}>
          REGISTRARME
        </SubmitButton>
        {loading ? (
          <Box style={{ width: "100%", textAlign: "center" }}>
            <CircularProgress />
          </Box>
        ) : null}
        {notification?.status && !loading ? (
          <ErrorMessage
            style={{
              ...(notification?.status === "Success" && { color: "green" }),
            }}
          >
            {notification?.message ? notification?.message : "Error"}
          </ErrorMessage>
        ) : null}
        <Link
          to={"/login"}
          style={{ textDecoration: "none", color: "#297efe" }}
          onClick={cleanNotification}
        >
          ¿Tiene una cuenta? Inicie sesión
        </Link>
      </FormContainer>
    </MainContainer>
  );
};

export default RegisterUser;
