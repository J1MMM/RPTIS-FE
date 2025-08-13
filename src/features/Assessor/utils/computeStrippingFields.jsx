import { v4 } from "uuid";
import { sumByField } from "../../../utils/math";

export const computeStrippingFields = (inputArea, baseUnitVal) => {
  let visibleCount = 1;
  let updatedFields = [];

  if (inputArea > 60) {
    visibleCount = 3;
    updatedFields = [
      {
        id: v4(),
        name: "1stStripping",
        label: "1st Stripping",
        area: 30,
        percentOfAdj: 1,
        unitVal: baseUnitVal,
        valueAdjustment: baseUnitVal * 30,
      },
      {
        id: v4(),
        name: "2ndStripping",
        label: "2nd Stripping",
        area: 30,
        percentOfAdj: 0.75,
        unitVal: baseUnitVal * 0.75,
        valueAdjustment: baseUnitVal * 0.75 * 30,
      },
      {
        id: v4(),
        name: "3rdStripping",
        label: "3rd Stripping",
        area: inputArea - 60,
        percentOfAdj: 0.5,
        unitVal: baseUnitVal * 0.5,
        valueAdjustment: baseUnitVal * 0.5 * (inputArea - 60),
      },
    ];
  } else if (inputArea > 30) {
    visibleCount = 2;
    updatedFields = [
      {
        id: v4(),
        name: "1stStripping",
        label: "1st Stripping",
        area: 30,
        percentOfAdj: 1,
        unitVal: baseUnitVal,
        valueAdjustment: baseUnitVal * 30,
      },
      {
        id: v4(),
        name: "2ndStripping",
        label: "2nd Stripping",
        area: inputArea - 30,
        percentOfAdj: 0.75,
        unitVal: baseUnitVal * 0.75,
        valueAdjustment: baseUnitVal * 0.75 * (inputArea - 30),
      },
    ];
  } else {
    visibleCount = 1;
    updatedFields = [
      {
        id: v4(),
        name: "1stStripping",
        label: "1st Stripping",
        area: inputArea,
        percentOfAdj: 1,
        unitVal: baseUnitVal,
        valueAdjustment: baseUnitVal * inputArea,
      },
    ];
  }

  // sum total
  const totalValAdj = sumByField(updatedFields, "valueAdjustment");

  return { totalValAdj, updatedFields, visibleCount };
};
