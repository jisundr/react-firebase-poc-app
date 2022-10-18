import { FC } from "react";
import { redirect } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Divider, Link, Stack } from "@mui/material";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import GoogleIcon from "@mui/icons-material/Google";

import ROUTES from "../../../constants/routes";
import useLoginMutation from "../../../api/auth/useLoginMutation";
import FullWidthPageContainer from "../../../components/FullWidthPageContainer";
import PageHeading from "../../../components/PageHeading";
import { signInWithGoogle } from "../../../utils/firebase";
import loginValidationSchema, {
  LoginFormInputs,
} from "./loginValidationSchema";
import LoginForm from "./LoginForm";

const Login: FC = () => {
  const formMethods = useForm<LoginFormInputs>({
    resolver: yupResolver(loginValidationSchema),
    defaultValues: loginValidationSchema.cast({}),
  });

  const loginMutation = useLoginMutation();

  const handleLoginSubmit: SubmitHandler<LoginFormInputs> = (values) => {
    loginMutation.mutate(values, {
      onSuccess: () => {
        redirect(ROUTES.DASHBOARD);
      },
    });
  };

  return (
    <FullWidthPageContainer>
      <Stack
        spacing={2}
        sx={{
          minWidth: "300px",
          padding: "32px 24px",
        }}
      >
        <PageHeading title="Login" />

        <FormProvider {...formMethods}>
          <LoginForm onLoginSubmit={handleLoginSubmit} />
        </FormProvider>

        <Divider>OR</Divider>

        <Button variant="outlined" fullWidth onClick={signInWithGoogle}>
          <GoogleIcon
            fontSize="inherit"
            sx={{
              marginRight: "8px",
            }}
          />
          Login via Google
        </Button>

        <Box textAlign="center">
          <Link component={RouterLink} to={ROUTES.RESET_PASSWORD}>
            Forgot Password
          </Link>
        </Box>
      </Stack>
    </FullWidthPageContainer>
  );
};

export default Login;
