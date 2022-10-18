import { FC } from "react";
import { useSnackbar } from "notistack";
import { Box, Link, Stack } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link as RouterLink, redirect } from "react-router-dom";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

import ROUTES from "../../../constants/routes";
import useSendResetPasswordToEmailMutation from "../../../api/auth/useSendResetPasswordToEmailMutation";
import FullWidthPageContainer from "../../../components/FullWidthPageContainer";
import PageHeading from "../../../components/PageHeading";
import ResetPasswordForm from "./ResetPasswordForm";
import resetPasswordValidationSchema, {
  ResetPasswordFormInputs,
} from "./resetPasswordValidationSchema";

const ResetPassword: FC = () => {
  const formMethods = useForm<ResetPasswordFormInputs>({
    resolver: yupResolver(resetPasswordValidationSchema),
    defaultValues: resetPasswordValidationSchema.cast({}),
  });

  const { enqueueSnackbar } = useSnackbar();
  const sendPasswordResetToEmailMutation =
    useSendResetPasswordToEmailMutation();

  const handleResetPasswordSubmit: SubmitHandler<ResetPasswordFormInputs> = (
    values
  ) => {
    sendPasswordResetToEmailMutation.mutate(values, {
      onSuccess: () => {
        enqueueSnackbar("Reset Password Request Sent", {
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
        <PageHeading title="Reset Password" />

        <FormProvider {...formMethods}>
          <ResetPasswordForm
            onResetPasswordSubmit={handleResetPasswordSubmit}
          />
        </FormProvider>

        <Box>
          Don't have an account?{" "}
          <Link component={RouterLink} to={ROUTES.REGISTER}>
            Register
          </Link>{" "}
          now.
        </Box>
      </Stack>
    </FullWidthPageContainer>
  );
};

export default ResetPassword;
