
export const getBldgAssLvl = {
  residential: (marketValue) => {
    if (typeof marketValue !== "number") {
      return 0
    }

    if (marketValue < 175000) return 0;
    if (marketValue < 300000) return 0.1;
    if (marketValue < 500000) return 0.2;
    if (marketValue < 750000) return 0.25;
    if (marketValue < 1000000) return 0.3;
    if (marketValue < 2000000) return 0.25;
    if (marketValue < 5000000) return 0.4;
    if (marketValue < 10000000) return 0.5;

    return 0.5; // for values >= 10,000,000
  },
  commercial: (marketValue) => {
    if (typeof marketValue !== "number") {
      return 0
    }
    if (marketValue < 300_000) return 0.3;
    if (marketValue < 500_000) return 0.35;
    if (marketValue < 750_000) return 0.4;
    if (marketValue < 1_000_000) return 0.5;
    if (marketValue < 2_000_000) return 0.6;
    if (marketValue < 5_000_000) return 0.7;
    if (marketValue < 10_000_000) return 0.75;

    return 0.8; // for values >= 10,000,000
  },
  industrial: (marketValue) => {
    if (typeof marketValue !== "number") {
      return 0
    }
    if (marketValue < 300000) return 0.3;
    if (marketValue < 500000) return 0.35;
    if (marketValue < 750000) return 0.4;
    if (marketValue < 1000000) return 0.5;
    if (marketValue < 2000000) return 0.6;
    if (marketValue < 5000000) return 0.7;
    if (marketValue < 10000000) return 0.75;

    return 0.8; // for values >= 10,000,000
  },
  agricultural: (marketValue) => {
    if (typeof marketValue !== "number") {
      return 0
    }
    if (marketValue < 300000) return 0.25;
    if (marketValue < 500000) return 0.3;
    if (marketValue < 750000) return 0.35;
    if (marketValue < 1000000) return 0.4;
    if (marketValue < 2000000) return 0.45;
    return 0.5;
  },
};
