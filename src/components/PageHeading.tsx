import { FC, PropsWithChildren } from "react";
import { Typography } from "@mui/material";

interface Props extends PropsWithChildren {
  title?: string;
}

const PageHeading: FC<Props> = ({ title, children }) => {
  return (
    <Typography textAlign="center" fontWeight="500" fontSize="24px">
      {title ?? children}
    </Typography>
  );
};

export default PageHeading;
