import { Box, Stack, Typography } from "@mui/material";
import { FIELD_NAMES } from "../../constants/fieldNames";
import { formatPeso } from "../../../../utils/formatters";

const styledText = {
  flex: 1,
  borderRight: "1px solid rgba(224, 224, 224, 1)", // Right border
  padding: "8px",
};

const LandAppraisalTableFooter = ({ totalMarketValue }) => {
  return (
    <Stack direction="row" border="1px solid rgba(224, 224, 224, 1)" p={1}>
      <Typography sx={{ ...styledText, maxWidth: 55 }} variant="body2" />
      <Typography sx={styledText} variant="body2"></Typography>
      <Typography sx={styledText} variant="body2"></Typography>

      <Typography sx={styledText} variant="body2"></Typography>
      {/* Columns with borders */}
      <Typography sx={{ ...styledText, fontWeight: "600" }} variant="body2">
        Total:
      </Typography>
      <Typography
        sx={{ ...styledText, borderRight: "none", fontWeight: "600" }}
        variant="body2"
      >
        {formatPeso(totalMarketValue)}
      </Typography>
    </Stack>
  );
};

export default LandAppraisalTableFooter;
