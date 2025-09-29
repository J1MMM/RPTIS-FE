import { Stack, Typography } from "@mui/material";
import { formatPeso } from "../../../../../../utils/formatters";

const MarketAdjustmentTableFooter = ({ total }) => {
  return (
    <Stack direction="row" borderTop="1px solid #E0E0E0" p={1}>
      <Typography sx={styledText} />
      <Typography sx={styledText} />
      {/* <Typography sx={styledText} /> */}

      <Typography sx={{ ...styledText, fontWeight: "600" }} variant="body2">
        Total:
      </Typography>

      <Typography
        sx={{ ...styledText, fontWeight: "600" }}
        variant="body2"
      >
        {formatPeso(total)}
      </Typography>

      <Typography sx={{ ...styledText, maxWidth: 70, borderRight: "none" }} />
    </Stack >
  );
};

export default MarketAdjustmentTableFooter;

const styledText = {
  flex: 1,
  borderRight: "1px solid rgba(224, 224, 224, 1)",
  padding: "8px",
};
