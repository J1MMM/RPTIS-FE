import { Checkbox, FormControlLabel } from "@mui/material";
import StyledFieldset from "../modals/StyledFieldset";

export const TaxabilityFields = (props) => {
  return (
    <StyledFieldset title="TAXABILITY">
      <FormControlLabel
        control={<Checkbox />}
        label="TAXABLE"
        checked={props?.row?.TAXABILITY == "TAXABILITY"}
        onClick={() =>
          props?.setSelectedRow((prev) => ({
            ...prev,
            TAXABILITY: "TAXABILITY",
          }))
        }
        disabled={props?.readOnly}
      />
      <FormControlLabel
        control={<Checkbox />}
        label="EXEMPT"
        checked={props?.row?.TAXABILITY == "exempted"}
        onClick={() =>
          props?.setSelectedRow((prev) => ({
            ...prev,
            TAXABILITY: "exempted",
          }))
        }
        disabled={props?.readOnly}
      />
    </StyledFieldset>
  );
};
