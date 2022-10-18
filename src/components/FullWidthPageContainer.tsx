import { Container } from "@mui/material";
import { FC, PropsWithChildren } from "react";

const FullWidthPageContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </Container>
  );
};

export default FullWidthPageContainer;
