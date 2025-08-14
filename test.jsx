const adjustmentComputations = {
  stripping1st: ({ unitValue, area }) => unitValue * 1 * area,
  stripping2nd: ({ unitValue, area }) => unitValue * 0.75 * area,
  stripping3rd: ({ unitValue, area }) => unitValue * 0.5 * area,
  cornerInfluence: ({ baseMarketValue, unitValue, area }) =>
    unitValue * 0.3 * area + baseMarketValue,
  rightOfWay: ({ unitValue, area }) => unitValue * 0.1 * area,
  openSpaces: ({ unitValue, area }) => unitValue * 0.3 * area,
};
/* ==================================COMMENTS==================================*/
