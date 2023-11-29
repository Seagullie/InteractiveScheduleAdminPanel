// in src/MyUrlField.tsx
import { useRecordContext } from "react-admin";

import { Link, SxProps, Theme } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";

const MyUrlField = ({ source }: { source: string }) => {
  const record = useRecordContext();
  return record ? (
    <Link href={record[source]} sx={{ textDecoration: "none" }}>
      {record[source]}
      <LaunchIcon sx={styles} />
    </Link>
  ) : null;
};

const styles: SxProps<Theme> = {
  fontSize: 15,
  ml: 1,
};

export default MyUrlField;
