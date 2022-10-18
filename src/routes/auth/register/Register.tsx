import { FC } from "react";
import { Box, Link, Stack } from "@mui/material";
import { Link as RouterLink, redirect } from "react-router-dom";
import { SubmitHandler, useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSnackbar } from "notistack";

import FullWidthPageContainer from "../../../components/FullWidthPageContainer";
import PageHeading from "../../../components/PageHeading";
import ROUTES from "../../../constants/routes";
import useRegisterMutation from "../../../api/auth/useRegisterMutation";
import RegisterForm from "./RegisterForm";
import registerValidationSchema, {
  RegisterFormInputs,
} from "./registerValidationSchema";

const Register: FC = () => {
  const formMethods = useForm<RegisterFormInputs>({
    resolver: yupResolver(registerValidationSchema),
    defaultValues: registerValidationSchema.cast({}),
  });

  const { enqueueSnackbar } = useSnackbar();
  const registerMutation = useRegisterMutation();

  const handleRegisterSubmit: SubmitHandler<RegisterFormInputs> = (values) => {
    registerMutation.mutate(values, {
      onError: (err) => {
        console.error(err);
        enqueueSnackbar("Something went wrong", {
          variant: "error",
        });
      },
      onSuccess: () => {
        enqueueSnackbar("User Registered!", {
          variant: "success",
        });
        redirect(ROUTES.LOGIN);
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
        <PageHeading title="Register" />

        <FormProvider {...formMethods}>
          <RegisterForm onRegisterSubmit={handleRegisterSubmit} />
        </FormProvider>

        <Box>
          Already have an account?{" "}
          <Link component={RouterLink} to={ROUTES.LOGIN}>
            Login
          </Link>{" "}
          now.
        </Box>
      </Stack>
    </FullWidthPageContainer>
  );
};

export default Register;
