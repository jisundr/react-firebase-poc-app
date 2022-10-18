import { FC } from "react";
import { Container } from "@mui/system";
import { Box, Button, Stack, Typography } from "@mui/material";

import { logout } from "../../utils/firebase";

const Dashboard: FC = () => {
  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack spacing={2} textAlign="center">
        <Typography>This is a dashboard</Typography>
        <Box>
          <Button type="submit" variant="contained" onClick={logout}>
            Logout
          </Button>
        </Box>
      </Stack>
    </Container>
  );
};

export default Dashboard;
