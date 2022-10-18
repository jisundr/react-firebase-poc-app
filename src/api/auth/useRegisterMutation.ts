import { useMutation } from "@tanstack/react-query";

import { registerWithEmailAndPassword } from "../../utils/firebase";
import { RegisterFormInputs } from "../../routes/auth/register/registerValidationSchema";

type FormData = {
  name: string;
  email: string;
  password: string;
};

const registerViaFirebase = async ({ name, email, password }: FormData) => {
  return await registerWithEmailAndPassword(name, email, password);
};

const useRegisterMutation = () => {
  return useMutation(["register"], (data: RegisterFormInputs) =>
    registerViaFirebase({
      name: data.name,
      email: data.email,
      password: data.password,
    })
  );
};

export default useRegisterMutation;
