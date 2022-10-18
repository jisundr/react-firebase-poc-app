import { FC } from "react";
import { Button, Stack, TextField } from "@mui/material";
import { SubmitHandler, useFormContext } from "react-hook-form";

import { ResetPasswordFormInputs } from "./resetPasswordValidationSchema";

type Props = {
  onResetPasswordSubmit: SubmitHandler<ResetPasswordFormInputs>;
};

const ResetPasswordForm: FC<Props> = ({ onResetPasswordSubmit }) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useFormContext<ResetPasswordFormInputs>();

  return (
    <Stack
      component="form"
      onSubmit={handleSubmit(onResetPasswordSubmit)}
      spacing={2}
    >
      <TextField
        {...register("email")}
        variant="standard"
        error={!!errors.email?.message}
        helperText={errors.email?.message}
        label="Email Address"
        margin="dense"
        size="small"
      />

      <Button
        type="submit"
        variant="contained"
        fullWidth
        disabled={isSubmitting}
      >
        Send password reset email
      </Button>
    </Stack>
  );
};

export default ResetPasswordForm;
