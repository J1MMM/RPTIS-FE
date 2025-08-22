import { v4 } from "uuid";
import { FIELDS } from "../constants/fieldNames";
import { sumByField } from "../../../utils/math";

export const processStrippingAdjustment = (selectedRow, strippingFields) => {
  const updatedMarketAdj = strippingFields.map((row) => ({
    id: v4(),
    appraisalID: selectedRow.id,
    area: row.area,
    [FIELDS.LAND_BASE_MARKET_VALUE]: selectedRow[FIELDS.LAND_BASE_MARKET_VALUE],
    [FIELDS.MARKET_ADJUSTMENT_FACTORS]: row.name,
    [FIELDS.MARKET_ADJUSTMENT_PERCENT]: row.percentOfAdj,
    [FIELDS.ADJUSTED_MARKETVALUE]: row.valueAdjustment,
  }));

  const totalMarketVal = sumByField(updatedMarketAdj, [
    FIELDS.ADJUSTED_MARKETVALUE,
  ]);

  return { updatedMarketAdj, totalMarketVal };
};

export const processNonStrippingAdjustment = (selectedRow) => ({
  id: v4(),
  appraisalID: selectedRow?.id,
  [FIELDS.LAND_BASE_MARKET_VALUE]: selectedRow[FIELDS.LAND_BASE_MARKET_VALUE],
  [FIELDS.MARKET_ADJUSTMENT_FACTORS]: selectedRow[FIELDS.MARKET_ADJUSTMENT_FACTORS],
  [FIELDS.MARKET_ADJUSTMENT_PERCENT]: selectedRow[FIELDS.MARKET_ADJUSTMENT_PERCENT],
  [FIELDS.ADJUSTED_MARKETVALUE]: selectedRow[FIELDS.TOTAL_MARKET_VALUE_ADJUSTMENT],
});

export const updateLandAppraisal = (prev, updatedValue, selectedRow) => {

  const updatedAppraisal = prev[FIELDS.LAND_APPRAISAL]?.map((row) =>
    row.id === selectedRow.id
      ? {
        ...row,
        [FIELDS.LAND_MARKET_VALUE]: updatedValue,
        [FIELDS.LAND_ACTUAL_USE]: "",
        [FIELDS.LAND_ASSESSMENT_LEVEL]: 0,
        [FIELDS.LAND_ASSESSED_VALUE]: 0,
        adjusted: true,
      }
      : row
  );

  return { updatedAppraisal, totalAssessedValue: sumByField(updatedAppraisal, FIELDS.LAND_ASSESSED_VALUE) };
};
