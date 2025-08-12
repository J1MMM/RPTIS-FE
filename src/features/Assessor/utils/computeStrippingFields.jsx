import { v4 } from "uuid";

export const computeStrippingFields = (inputArea, baseUnitVal) => {
  let visibleCount = 1;
  let updatedFields = [];

  if (inputArea > 60) {
    visibleCount = 3;
    updatedFields = [
      {
        id: v4(),
        name: "1stStripping",
        area: 30,
        percentOfAdj: 100,
        unitVal: baseUnitVal,
        valueAdjustment: baseUnitVal * 30,
      },
      {
        id: v4(),
        name: "2ndStripping",
        area: 30,
        percentOfAdj: 75,
        unitVal: baseUnitVal * 0.75,
        valueAdjustment: baseUnitVal * 0.75 * 30,
      },
      {
        id: v4(),
        name: "3rdStripping",
        area: inputArea - 60,
        percentOfAdj: 50,
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
        area: 30,
        percentOfAdj: 100,
        unitVal: baseUnitVal,
        valueAdjustment: baseUnitVal * 30,
      },
      {
        id: v4(),

        name: "2ndStripping",
        area: inputArea - 30,
        percentOfAdj: 75,
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
        area: inputArea,
        percentOfAdj: 100,
        unitVal: baseUnitVal,
        valueAdjustment: baseUnitVal * inputArea,
      },
    ];
  }

  // sum total
  const totalValAdj = updatedFields.reduce(
    (total, row) => total + (Number(row.valueAdjustment) || 0),
    0
  );

  return { totalValAdj, updatedFields, visibleCount };
};
