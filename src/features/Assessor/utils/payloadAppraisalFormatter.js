export function formatAppraisalData(appraisals, adjustments) {
  return appraisals.map((appraisal) => {
    // Find all adjustments linked to this appraisal
    const relatedAdjustments = adjustments.filter(
      (adj) => adj.appraisalID === appraisal.id
    );

    return {
      classification: appraisal.classification.toLowerCase(),
      subclassification: appraisal.subClass.toLowerCase(),
      area: Number(appraisal.area),
      actual_use: appraisal.actualUse?.toLowerCase() || "",
      adjustments: relatedAdjustments.map((adj) => ({
        adjustment_factor: adj.marketAdjustmentFactors
          ? camelCase(adj.marketAdjustmentFactors)
          : "",
        area: Number(adj.area), // keep appraisal area here
      })),
    };
  });
}

// helper: turn "Corner Influence" → "cornerInfluence"
export function camelCase(str) {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase());
}
