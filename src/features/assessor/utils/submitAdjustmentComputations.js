import { FIELDS } from "../constants/shared/fieldNames";
import { sumByField } from "../../../utils/math";

export const normalizeStripping = (strippingFields) => {
  const adjustments = strippingFields.map((row) => ({
    [FIELDS.MARKET_ADJUSTMENT_FACTORS]: row.name,
    [FIELDS.MARKET_ADJUSTMENT_PERCENT]: row.percentOfAdj,
    [FIELDS.ADJUSTED_MARKETVALUE]: row.valueAdjustment,
    area: row.area,
  }));
  const adjustedMarketVal = sumByField(adjustments, [FIELDS.ADJUSTED_MARKETVALUE]);

  return { adjustments, adjustedMarketVal };
};

export const normalizeNonStripping = (selectedRow, area) => ([
  {
    [FIELDS.MARKET_ADJUSTMENT_FACTORS]: selectedRow[FIELDS.MARKET_ADJUSTMENT_FACTORS],
    [FIELDS.MARKET_ADJUSTMENT_PERCENT]: selectedRow[FIELDS.MARKET_ADJUSTMENT_PERCENT],
    [FIELDS.ADJUSTED_MARKETVALUE]: selectedRow[FIELDS.TOTAL_MARKET_VALUE_ADJUSTMENT],
    area,
  }
]);

export const updateAppraisals = (prev, adjustedMarketVal, id, adjustments) => {
  const updatedAppraisals = prev?.map((row) =>
    row.id === id
      ? {
        ...row,
        [FIELDS.LAND_MARKET_VALUE]: adjustedMarketVal,
        [FIELDS.LAND_ACTUAL_USE]: "",
        [FIELDS.LAND_ASSESSMENT_LEVEL]: 0,
        [FIELDS.LAND_ASSESSED_VALUE]: 0,
        adjusted: true,
        adjustments,
      }
      : row
  );
  const assessedValue = sumByField(updatedAppraisals, FIELDS.LAND_ASSESSED_VALUE);

  return { updatedAppraisals, assessedValue };
};
