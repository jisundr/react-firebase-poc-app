import * as yup from "yup";

const registerValidationSchema = yup.object({
  name: yup.string().label("Full Name").trim().required().default(""),
  email: yup
    .string()
    .label("Email Address")
    .trim()
    .email()
    .required()
    .default(""),
  password: yup.string().label("Password").required().default(""),
});

export interface RegisterFormInputs
  extends yup.InferType<typeof registerValidationSchema> {}

export default registerValidationSchema;
