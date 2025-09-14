
const assessmentValueBldg = {
    residential: ({ fairMarketValue }) => {
        console.log(fairMarketValue);

        if (typeof fairMarketValue !== "number") {
            throw new HttpError("Invalid input for fairMarketValue", 400);
        }

        if (fairMarketValue < 175000) return 0;
        if (fairMarketValue < 300000) return 0.1;
        if (fairMarketValue < 500000) return 0.2;
        if (fairMarketValue < 750000) return 0.25;
        if (fairMarketValue < 1000000) return 0.3;
        if (fairMarketValue < 2000000) return 0.25;
        if (fairMarketValue < 5000000) return 0.4;
        if (fairMarketValue < 10000000) return 0.5;

        return 0.5; // for values >= 10,000,000
    },
    aggricultural: ({ fairMarketValue }) => {
        if (typeof fairMarketValue !== "number") {
            throw new HttpError("invalid input for fairMarketValue", 400);
        }
        if (fairMarketValue < 300000) return 0.25;
        if (fairMarketValue < 500000) return 0.3;
        if (fairMarketValue < 750000) return 0.35;
        if (fairMarketValue < 1000000) return 0.4;
        if (fairMarketValue < 2000000) return 0.45;
        return 0.5;
    }, commercial: ({ fairMarketValue }) => {
        if (typeof fairMarketValue !== "number") {
            throw new HttpError("invalid input for fairMarketValue", 400);
        }

        if (fairMarketValue < 300000) return 0.3;
        if (fairMarketValue < 500000) return 0.35;
        if (fairMarketValue < 750000) return 0.4;
        if (fairMarketValue < 1000000) return 0.5;
        if (fairMarketValue < 2000000) return 0.6;
        if (fairMarketValue < 5000000) return 0.7;
        if (fairMarketValue < 10000000) return 0.75;

        return 0.8; // for values >= 10,000,000
    },
    industrial: ({ fairMarketValue }) => {
        if (typeof fairMarketValue !== "number") {
            throw new HttpError("invalid input for fairMarketValue", 400);
        }

        if (fairMarketValue < 300000) return 0.3;
        if (fairMarketValue < 500000) return 0.35;
        if (fairMarketValue < 750000) return 0.4;
        if (fairMarketValue < 1000000) return 0.5;
        if (fairMarketValue < 2000000) return 0.6;
        if (fairMarketValue < 5000000) return 0.7;
        if (fairMarketValue < 10000000) return 0.75;

        return 0.8; // for values >= 10,000,000
    },
};
