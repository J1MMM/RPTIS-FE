import { useFormContext, useWatch } from "react-hook-form";
import { Divider, InputAdornment } from "@mui/material";
import StyledFieldset from "@components/ui/StyledFieldset";
import { FIELDS } from "../../../../constants/fieldNames";
import TextInput from "../../../../../../components/ui/TextInput";
import NumberInput from "@components/ui/NumberInput";
import { ADORNMENTS } from "@constants/adornments";
import Row from "../../../../../../components/ui/Row";
import { useEffect, useState } from "react";
import { SYMBOLS } from "../../../../../../constants/symbols";
import { structuralType } from "../../../../constants/structuralType";

function PropertyAppraisalFields({ control, readOnly }) {
  const { setValue, getValues } = useFormContext();
  const [
    strucClass,
    buildingType,
    totalFloorArea,
    uccSubTotal,
    totalPercentDep,
    depreciationCost,
  ] = useWatch({
    control,
    name: [
      FIELDS.STRUCTURAL_TYPE,
      FIELDS.STRUCTURAL_CATEGORY,
      FIELDS.TOTAL_FLOOR_AREA,
      FIELDS.UCC_SUB_TOTAL,
      FIELDS.TOTAL_PERCENT_DEPRECIATION,
      FIELDS.DEPRECIATION_COST,
    ],
  });

  // Calculate unit cost & subtotal
  useEffect(() => {
    if (!strucClass || !buildingType) return;

    const unitConstructionCost = structuralType?.[buildingType]?.[strucClass] || 0;

    const area = Number(totalFloorArea) || 0;
    const subTotal = unitConstructionCost * area;

    setValue(FIELDS.UNIT_CONSTRUCTION_COST, unitConstructionCost);
    setValue(FIELDS.UCC_SUB_TOTAL, subTotal);
  }, [strucClass, buildingType, totalFloorArea, structuralType]);

  // Calculate depreciation cost
  useEffect(() => {
    const subTotal = Number(uccSubTotal) || 0;
    const totalPercent = Number(totalPercentDep) || 0;

    const depCost = subTotal * (totalPercent / 100);

    setValue(FIELDS.DEPRECIATION_COST, depCost || "");
  }, [uccSubTotal, totalPercentDep]);

  // Calculate market value
  useEffect(() => {
    if (!uccSubTotal && !depreciationCost) return;

    const subTotal = Number(uccSubTotal) || 0;
    const depCost = Number(depreciationCost) || 0;
    const marketVal = subTotal - depCost;

    setValue(FIELDS.BUILDING_MARKET_VALUE, marketVal);
  }, [uccSubTotal, depreciationCost]);

  return (
    <StyledFieldset title="Property Appraisals">
      <Row>
        <TextInput
          isNumeric
          readOnly={true}
          control={control}
          label="Unit Construction Cost"
          name={FIELDS.UNIT_CONSTRUCTION_COST}
          adornment={{
            startAdornment: (
              <InputAdornment position="start">Php</InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">/ {SYMBOLS.SQUARE_METER}</InputAdornment>
            ),
          }}
        />

        <TextInput
          isNumeric
          readOnly={true}
          control={control}
          label="Sub-Total"
          name={FIELDS.UCC_SUB_TOTAL}
          adornment={{
            startAdornment: (
              <InputAdornment position="start">Php</InputAdornment>
            ),
          }}
        />

      </Row>
      <Row>
        <Row>

          <NumberInput
            maxLength={3}
            readOnly={readOnly}
            control={control}
            label="Depreciation Rate"
            name={FIELDS.DEPRECIATION_RATE}
            adornment={ADORNMENTS.PERCENT}
            onChange={() => {
              const [rate, years] = getValues([FIELDS.DEPRECIATION_RATE, FIELDS.DEPRECIATION_YEARS])
              setValue(FIELDS.TOTAL_PERCENT_DEPRECIATION, rate * years)
            }}
          />
          <NumberInput
            maxLength={2}
            readOnly={readOnly}
            control={control}
            label="Years of Depreciation"
            name={FIELDS.DEPRECIATION_YEARS}
            onChange={() => {
              const [rate, years] = getValues([FIELDS.DEPRECIATION_RATE, FIELDS.DEPRECIATION_YEARS])
              setValue(FIELDS.TOTAL_PERCENT_DEPRECIATION, rate * years)
            }}
          />
        </Row>
        <NumberInput
          readOnly={true}
          control={control}
          label="Total % Depreciation"
          name={FIELDS.TOTAL_PERCENT_DEPRECIATION}
          adornment={ADORNMENTS.PERCENT}

        />


      </Row>
      <Row>
        <TextInput
          isNumeric
          readOnly={true}
          control={control}
          label="Depreciation Cost"
          name={FIELDS.DEPRECIATION_COST}
          adornment={ADORNMENTS.PESO}
        />
        <TextInput
          isNumeric
          readOnly={true}
          control={control}
          label="Market Value"
          name={FIELDS.BUILDING_MARKET_VALUE}
          adornment={ADORNMENTS.PESO}

        />
      </Row>

      <Divider sx={{ my: 1, borderColor: "primary.main" }} />
    </StyledFieldset >
  );
}

export default PropertyAppraisalFields;
