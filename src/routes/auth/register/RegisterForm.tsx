import { FC } from "react";
import { Button, Stack, TextField } from "@mui/material";
import { SubmitHandler, useFormContext } from "react-hook-form";

import { RegisterFormInputs } from "./registerValidationSchema";

type Props = {
  onRegisterSubmit: SubmitHandler<RegisterFormInputs>;
};

const RegisterForm: FC<Props> = ({ onRegisterSubmit }) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useFormContext<RegisterFormInputs>();

  return (
    <Stack
      component="form"
      onSubmit={handleSubmit(onRegisterSubmit)}
      spacing={2}
    >
      <Stack>
        <TextField
          {...register("name")}
          variant="standard"
          error={!!errors.name?.message}
          helperText={errors.name?.message}
          label="Full Name"
          margin="dense"
          size="small"
        />
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
        Register
      </Button>
    </Stack>
  );
};

export default RegisterForm;
