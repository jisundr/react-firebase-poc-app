import { useMutation } from "@tanstack/react-query";

import { logInWithEmailAndPassword } from "../../utils/firebase";
import { LoginFormInputs } from "../../routes/auth/login/loginValidationSchema";

type FormData = {
  email: string;
  password: string;
};

const loginViaFirebaseWithCredentials = async ({
  email,
  password,
}: FormData) => {
  await logInWithEmailAndPassword(email, password);
};

const useLoginMutation = () => {
  return useMutation(["login"], (data: LoginFormInputs) =>
    loginViaFirebaseWithCredentials({
      email: data.email,
      password: data.password,
    })
  );
};

export default useLoginMutation;
