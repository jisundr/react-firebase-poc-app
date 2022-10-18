import { FC } from "react";
import { Button, Stack, TextField } from "@mui/material";
import { SubmitHandler, useFormContext } from "react-hook-form";

import { LoginFormInputs } from "./loginValidationSchema";

type Props = {
  onLoginSubmit: SubmitHandler<LoginFormInputs>;
};

const LoginForm: FC<Props> = ({ onLoginSubmit }) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useFormContext<LoginFormInputs>();

  return (
    <Stack component="form" onSubmit={handleSubmit(onLoginSubmit)} spacing={2}>
      <Stack>
        <TextField
          {...register("email")}
          variant="standard"
          error={!!errors.email?.message}
          helperText={errors.email?.message}
          label="Email Address"
          margin="dense"
          size="small"
        />
        <TextField
          {...register("password")}
          error={!!errors.password?.message}
          helperText={errors.password?.message}
          variant="standard"
          type="password"
          label="Password"
          margin="dense"
          size="small"
        />
      </Stack>
      <Button
        type="submit"
        variant="contained"
        fullWidth
        disabled={isSubmitting}
      >
        Login
      </Button>
    </Stack>
  );
};

export default LoginForm;
