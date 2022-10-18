import { useMutation } from "@tanstack/react-query";

import { sendPasswordReset } from "../../utils/firebase";
import { ResetPasswordFormInputs } from "../../routes/auth/resetPassword/resetPasswordValidationSchema";

type FormData = {
  email: string;
};

const sendPasswordResetToEmail = async ({ email }: FormData) => {
  return await sendPasswordReset(email);
};

const useSendResetPasswordToEmailMutation = () => {
  return useMutation(["send-reset-password"], (data: ResetPasswordFormInputs) =>
    sendPasswordResetToEmail({ email: data.email })
  );
};

export default useSendResetPasswordToEmailMutation;
