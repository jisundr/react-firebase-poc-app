import { FC, PropsWithChildren, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

import { auth } from "../utils/firebase";
import ROUTES from "../constants/routes";
import FullPageLoader from "./FullPageLoader";

interface Props extends PropsWithChildren {
  isGuest?: boolean;
}

const AuthGuard: FC<Props> = ({ isGuest = false, children }) => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (isGuest && user) {
      navigate(ROUTES.DASHBOARD, { replace: true });
    }
    if (!isGuest && !user) {
      navigate(ROUTES.LOGIN, { replace: true });
    }
  }, [isGuest, loading, navigate, user]);

  return loading ? <FullPageLoader /> : <>{children}</>;
};

export default AuthGuard;
