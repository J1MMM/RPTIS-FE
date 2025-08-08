import { Button, Stack } from "@mui/material";
import { Add } from "@mui/icons-material";

import StyledFieldset from "../ui/StyledFieldset";
import { LandMarketValueTable } from "../tables/LandMarketValueTable";
import { AddLandMarketValModal } from "../modals/AddLandMarketValModal";
import { useState } from "react";
import { FIELD_NAMES } from "../../constants/fieldNames";

export const LandMarketValueFields = (props) => {
  const { formData } = props;
  const [modalActive, setModalActive] = useState(false);
  const [inputFields, setInputFields] = useState({});

  const appraisalEmpty = formData[FIELD_NAMES.LAND_APPRAISAL]?.length === 0;
  const handleFieldsChange = () => {};
  return (
    <>
      <StyledFieldset title="Market Value Adjustment">
        <Stack mb={2}>
          <Button
            sx={{
              alignSelf: "flex-start",
            }}
            onClick={() => setModalActive(true)}
            variant="contained"
            disabled={appraisalEmpty}
            startIcon={<Add />}
          >
            Adjustment
          </Button>
        </Stack>

        <LandMarketValueTable props={props} />
      </StyledFieldset>

      <AddLandMarketValModal
        open={modalActive}
        onClose={() => setModalActive(false)}
        inputFields={inputFields}
        formData={formData}
      />
    </>
  );
};
