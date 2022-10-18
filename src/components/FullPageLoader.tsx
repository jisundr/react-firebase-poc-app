import { FC } from "react";
import { CircularProgress } from "@mui/material";

import FullWidthPageContainer from "./FullWidthPageContainer";

const FullPageLoader: FC = () => {
  return (
    <FullWidthPageContainer>
      <CircularProgress />
    </FullWidthPageContainer>
  );
};

export default FullPageLoader;
