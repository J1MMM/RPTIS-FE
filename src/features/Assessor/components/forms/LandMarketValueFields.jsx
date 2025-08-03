import { Button, Stack } from "@mui/material";
import { Add } from "@mui/icons-material";

import StyledFieldset from "../modals/StyledFieldset";
import { LandMarketValueTable } from "../tables/LandMarketValueTable";

export const LandMarketValueFields = ({
  props,
  addClassOnlick,
  open,
  onClose,
  handleAddClassification,
  handleClassificationChange,
  classificationData,
}) => {
  return (
    <>
      <StyledFieldset title="Market Value Adjustment">
        <Stack mb={2}>
          <Button
            sx={{
              alignSelf: "flex-start",
            }}
            variant="contained"
            onClick={addClassOnlick}
            disabled={props?.readOnly}
            startIcon={<Add />}
          >
            Adjustment
          </Button>
        </Stack>

        <LandMarketValueTable
          props={props}
          classification={props?.row?.classification}
          setFormData={props?.setSelectedRow}
        />
      </StyledFieldset>

      {/* <AddLandMarketValModal
        props={props}
        open={open}
        onClose={onClose}
        handleAddClassification={handleAddClassification}
        handleClassificationChange={handleClassificationChange}
        classificationData={classificationData}
      /> */}
    </>
  );
};
