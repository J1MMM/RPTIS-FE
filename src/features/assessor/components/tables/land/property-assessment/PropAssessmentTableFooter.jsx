import { Stack, Typography } from "@mui/material";
import { roundToNearestTen } from "@utils/math";
import { formatPeso } from "@utils/formatters";

const PropAssessmentTableFooter = ({ total }) => {
  return (
    <Stack direction="row" borderTop="1px solid #E0E0E0" p={1}>
      <Typography sx={styledText} variant="body2" />
      <Typography sx={styledText} variant="body2" />
      <Typography sx={{ ...styledText, fontWeight: "600" }} variant="body2">
        Total:
      </Typography>
      <Typography
        sx={{ ...styledText, borderRight: "none", fontWeight: "600" }}
        variant="body2"
      >
        {formatPeso(roundToNearestTen(total))}
      </Typography>
    </Stack>
  );
};

export default PropAssessmentTableFooter;

const styledText = {
  flex: 1,
  borderRight: "1px solid #E0E0E0",
  padding: "8px",
};
