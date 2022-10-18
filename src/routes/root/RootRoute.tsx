import { FC } from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { AppBar, Box, Button, Stack, Toolbar, Typography } from "@mui/material";

import { auth, logout } from "../../utils/firebase";
import ROUTES from "../../constants/routes";

const RootRoute: FC = () => {
  const [user] = useAuthState(auth);

  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography fontWeight={600}>LOGO HERE</Typography>
          <Box flexGrow={1} />
          <Stack direction="row" spacing={1}>
            {!!user ? (
              <Button color="inherit" onClick={logout}>
                Logout
              </Button>
            ) : (
              <>
                <Button component={Link} color="inherit" to={ROUTES.LOGIN}>
                  Login
                </Button>
                <Button component={Link} color="inherit" to={ROUTES.REGISTER}>
                  Register
                </Button>
              </>
            )}
          </Stack>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};

export default RootRoute;
