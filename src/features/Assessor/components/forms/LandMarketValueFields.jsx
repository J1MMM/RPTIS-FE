import { Button, Stack } from "@mui/material";
import { Add } from "@mui/icons-material";

import StyledFieldset from "../ui/StyledFieldset";
import { LandMarketValueTable } from "../tables/LandMarketValueTable";
import { AddLandMarketValModal } from "../modals/AddLandMarketValModal";
import { useState } from "react";

export const LandMarketValueFields = (props) => {
  const [modalActive, setModalActive] = useState(false);

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
            disabled={props?.readOnly}
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
      />
    </>
  );
};
