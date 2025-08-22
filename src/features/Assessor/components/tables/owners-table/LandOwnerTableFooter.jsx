import { Stack, Typography } from "@mui/material";
import { formatPeso } from "../../../../../utils/formatters";

const LandOwnerTableFooter = ({ totalBaseMarketVal }) => {
  return (
    <Stack direction="row" border="1px solid #E0E0E0" p={1}>
      <Typography sx={{ ...styledText, maxWidth: 70 }} />
      <Typography sx={styledText} />
      <Typography sx={styledText} />

      <Typography sx={styledText} variant="body2"></Typography>
      <Typography sx={{ ...styledText, fontWeight: "600" }} variant="body2">
        Total:
      </Typography>
      <Typography
        sx={{ ...styledText, borderRight: "none", fontWeight: "600" }}
        variant="body2"
      >
        {formatPeso(totalBaseMarketVal)}
      </Typography>
    </Stack>
  );
};

export default LandOwnerTableFooter;

const styledText = {
  flex: 1,
  borderRight: "1px solid #E0E0E0",
  padding: "8px",
};
