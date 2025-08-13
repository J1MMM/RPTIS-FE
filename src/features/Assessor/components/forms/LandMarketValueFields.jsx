import { Button, Stack } from "@mui/material";
import { Add } from "@mui/icons-material";

import StyledFieldset from "../ui/StyledFieldset";
import { LandMarketValueTable } from "../tables/LandMarketValueTable";
import { AddLandMarketValModal } from "../modals/AddLandMarketValModal";
import { useState } from "react";
import { FIELD_NAMES } from "../../constants/fieldNames";
import { STRIPPING_FIELDS_DEFAULT } from "../../constants/defaultValues";
import { v4 } from "uuid";

export const LandMarketValueFields = (props) => {
  const { formData, setFormData } = props;
  const [modalActive, setModalActive] = useState(false);
  const [selectedRow, setSelectedRow] = useState({});
  const [strippingFields, setStrippingFields] = useState(
    STRIPPING_FIELDS_DEFAULT
  );
  const appraisalEmpty = formData[FIELD_NAMES.LAND_APPRAISAL]?.length === 0;
  console.log("formData");
  console.log(formData);

  const handleAdjustmentSubmit = () => {
    try {
      if (
        (
          selectedRow[FIELD_NAMES.MARKET_ADJUSTMENT_FACTORS] || ""
        ).toLowerCase() === "stripping"
      ) {
        // new market value adjustment obj
        const AdjustmentArr = strippingFields.map((row) => ({
          id: v4(),
          appraisalID: selectedRow.id,
          [FIELD_NAMES.LAND_BASE_MARKET_VALUE]:
            selectedRow[FIELD_NAMES.LAND_BASE_MARKET_VALUE],
          [FIELD_NAMES.MARKET_ADJUSTMENT_FACTORS]: row.name,
          [FIELD_NAMES.MARKET_ADJUSTMENT_PERCENT]: row.percentOfAdj,
          [FIELD_NAMES.ADJUSTED_MARKETVALUE]: row.valueAdjustment,
        }));

        setFormData((prev) => {
          // updated the udjusted value of appraisal
          const updatedAppraisal = prev[FIELD_NAMES.LAND_APPRAISAL]?.map(
            (row) => {
              if (row.id == selectedRow.id) {
                return {
                  ...row,
                  adjusted: true,
                };
              }
              return row;
            }
          );

          return {
            ...prev,
            [FIELD_NAMES.MARKET_ADJUSTMENT]: [
              ...(prev[FIELD_NAMES.MARKET_ADJUSTMENT] || []),
              ...AdjustmentArr,
            ],
            [FIELD_NAMES.LAND_APPRAISAL]: updatedAppraisal,
          };
        });
        setStrippingFields(STRIPPING_FIELDS_DEFAULT);
        setSelectedRow({});
        setModalActive(false);
      }
      console.log("submit");
      console.log(selectedRow);
    } catch (error) {
      console.log(error);
    }
  };

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

        <LandMarketValueTable formData={formData} />
      </StyledFieldset>

      <AddLandMarketValModal
        open={modalActive}
        onClose={() => setModalActive(false)}
        handleSubmit={handleAdjustmentSubmit}
        selectedRow={selectedRow}
        setSelectedRow={setSelectedRow}
        strippingFields={strippingFields}
        setStrippingFields={setStrippingFields}
        formData={formData}
      />
    </>
  );
};
