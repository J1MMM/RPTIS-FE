import React from "react";
import Fieldset from "../../shared/Fieldset";
import { Button, Stack } from "@mui/material";
import { ClassificationTable } from "../table/ClassificationTable";
import { AddClassificationModal } from "../modal/AddClassificationModal";
import { Add } from "@mui/icons-material";
import { LandMarketValueTable } from "../table/LandMarketValueTable";
import { AddLandMarketValModal } from "../modal/AddLandMarketValModal";

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
      <Fieldset title="Market Value Adjustment">
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
      </Fieldset>

      <AddLandMarketValModal
        props={props}
        open={open}
        onClose={onClose}
        handleAddClassification={handleAddClassification}
        handleClassificationChange={handleClassificationChange}
        classificationData={classificationData}
      />
    </>
  );
};
