import { useEffect, useRef, useState } from "react";
import { useAuth } from "hooks";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import MuiBox from "@mui/material/Box";
import {
  IconButton,
  TextField,
  Typography,
  Button,
  InputAdornment,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import * as yup from "yup";
import CircularProgress from "@mui/material/CircularProgress";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const MainContainer = styled(MuiBox)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
}));

const FormContainer = styled(MuiBox)(() => ({
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

const Login = () => {
  const { login, loading, notification, cleanNotification } = useAuth();
  const navigate = useNavigate();

  const userNameRef = useRef(null);
  const passwordRef = useRef(null);
  const rememberMeRef = useRef(null);
  const [errors, setErrors] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = () => {
    const schema = yup.object().shape({
      username: yup.string().required("El nombre de usuario es requerido"),
      password: yup.string().required("La contraseña es requerida"),
    });

    const username = userNameRef.current.children[1].children[0].value;
    const password = passwordRef.current.children[1].children[0].value;
    // const rememberMe = rememberMeRef.current.children[0].checked;

    schema
      .validate({ username, password }, { abortEarly: false })
      .then(() => {
        setErrors(null);
        login({ username, password });
      })
      .catch((validationError) => {
        const errors = {};
        validationError.inner.forEach((error) => {
          errors[error.path] = error.message; // This is the error message
        });

        setErrors(errors);
      });
  };

  useEffect(() => {
    if (notification?.status === "Success") {
      cleanNotification();
      navigate("/");
    }
  }, [notification]);

  const parsedErrors = {
    Unauthorized: "El usuario no esta autorizado",
  };

  return (
    <MainContainer>
      <FormContainer>
        <MainLabel>Iniciar Sesión</MainLabel>
        <FormInput
          id="username"
          ref={userNameRef}
          error={errors?.username}
          label={errors?.username ?? "Usuario *"}
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
        <FormControlLabel
          control={<Checkbox ref={rememberMeRef} />}
          label="Recuérdame"
          style={{ color: "#223354" }}
        />
        <SubmitButton variant="contained" onClick={handleSubmit}>
          INICIAR SESIÓN
        </SubmitButton>
        <Link
          to={"/register"}
          style={{ textDecoration: "none", color: "#297efe" }}
          onClick={cleanNotification}
        >
          ¿No tiene una cuenta? Regístrese
        </Link>

        {loading ? (
          <MuiBox style={{ width: "100%", textAlign: "center" }}>
            <CircularProgress />
          </MuiBox>
        ) : null}
        {notification?.status && !loading ? (
          <ErrorMessage>
            {notification?.message
              ? parsedErrors[notification?.message]
              : "Error"}
          </ErrorMessage>
        ) : null}
      </FormContainer>
    </MainContainer>
  );
};

export default Login;
