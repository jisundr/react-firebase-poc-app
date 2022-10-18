import * as yup from "yup";

const loginValidationSchema = yup.object({
  email: yup.string().email().required().label("Email Address").default(""),
  password: yup.string().required().label("Password").default(""),
});

export interface LoginFormInputs
  extends yup.InferType<typeof loginValidationSchema> {}

export default loginValidationSchema;
