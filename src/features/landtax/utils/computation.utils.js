export const computeTotal = (assessed_value, tax_due, quarter) => {
  const allowedQuarters = ["first", "second", "third", "fourth"];
  for (const f of quarter) {
    if (!allowedQuarters.includes(f)) {
      throw new Error(`Invalid quarter value: ${f}`, 400);
    }
  }
  console.log(`computing`);

  const penaltyTable2024 = {
    1986: [
      9.14, 9.16, 9.18, 9.2, 9.22, 9.24, 9.26, 9.28, 9.3, 9.32, 9.34, 9.36,
    ],
    1987: [8.9, 8.92, 8.94, 8.96, 8.98, 9.0, 9.02, 9.04, 9.06, 9.08, 9.1, 9.12],
    1988: [
      8.66, 8.68, 8.7, 8.72, 8.74, 8.76, 8.78, 8.8, 8.82, 8.84, 8.86, 8.88,
    ],
    1989: [
      8.42, 8.44, 8.46, 8.48, 8.5, 8.52, 8.54, 8.56, 8.58, 8.6, 8.62, 8.64,
    ],
    1990: [8.18, 8.2, 8.22, 8.24, 8.26, 8.28, 8.3, 8.32, 8.34, 8.36, 8.38, 8.4],
    1991: [
      7.94, 7.96, 7.98, 8.0, 8.02, 8.04, 8.06, 8.08, 8.1, 8.12, 8.14, 8.16,
    ],
  };

  const _3YearsPentaltyConstant = [
    [0.5, 0.52, 0.54, 0.56, 0.58, 0.6, 0.62, 0.64, 0.66, 0.68, 0.7, 0.72],
    [0.26, 0.28, 0.3, 0.32, 0.34, 0.36, 0.38, 0.4, 0.42, 0.44, 0.46, 0.48],
    [0, 0, 0, 0.08, 0.1, 0.12, 0.14, 0.16, 0.18, 0.2, 0.22, 0.24],
  ];
  if (!assessed_value || !tax_due || !quarter)
    throw new Error("incomplete fields");
  let assessedValue = assessed_value;
  let taxDue = tax_due;
  let penalty = 0;
  let basicTax = assessedValue * 0.02;
  const dateNow = new Date();
  let yearNow = dateNow.getFullYear();
  const passedThreeYears = yearNow - 2;
  const monthNow = dateNow.getMonth();
  let totalPenalty = 0;
  let total = 0;
  let discount = 0;
  let percentage;

  console.log(`year now `, yearNow);

  const numberOfQuarter = quarter.length;
  console.log(`numberOfQuarter`, numberOfQuarter);

  if (numberOfQuarter == 1) {
    basicTax *= 0.25;
    percentage = "25%";
  } else if (numberOfQuarter == 2) {
    basicTax *= 0.5;
    percentage = "50%";
  } else if (numberOfQuarter == 3) {
    basicTax *= 0.75;
    percentage = "75%";
  } else {
    basicTax *= 1;
    percentage = "100%";
    discount = 0.1;
  }

  if (taxDue <= 1985) {
    penalty = 0.24;
  } else if (taxDue >= 1992 && taxDue <= yearNow - 3) {
    penalty = 0.72;
  } else if (taxDue >= 1986 && taxDue <= 1991) {
    penalty = penaltyTable2024[taxDue][monthNow];
    const yearDiff = yearNow - 2024;
    const increase = yearDiff * 0.24;
    penalty += increase;
  } else if (taxDue <= yearNow && taxDue >= passedThreeYears) {
    let currentPassed3YearsPenalty = {};
    for (let i = 0; i < 3; i++) {
      const yearTodecrease = 2 - i;

      currentPassed3YearsPenalty = {
        ...currentPassed3YearsPenalty,
        [yearNow - yearTodecrease]: _3YearsPentaltyConstant[i],
      };
    }
    penalty = currentPassed3YearsPenalty[taxDue][monthNow];
  }

  totalPenalty = basicTax * penalty;
  penalty = parseFloat(totalPenalty.toFixed(2));
  total = basicTax + totalPenalty;

  discount = total * discount;
  discount = parseFloat(discount.toFixed(2));
  total = total - discount;
  total = parseFloat(total.toFixed(2));

  return {
    discount,
    total,
    penalty,
    basicTax,
    percentage
  };
};
