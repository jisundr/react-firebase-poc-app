import * as yup from "yup";

const resetPasswordValidationSchema = yup.object({
  email: yup
    .string()
    .label("Email Address")
    .trim()
    .email()
    .required()
    .default(""),
});

export interface ResetPasswordFormInputs
  extends yup.InferType<typeof resetPasswordValidationSchema> {}

export default resetPasswordValidationSchema;
