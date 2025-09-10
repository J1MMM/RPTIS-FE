const standardHeightOneStorey = 2.4;
const standardHeightTwoStorey = 2.7;

export const additionalItemsComputations = {
    foundation: ({ type, area, noFloors }) => {
        switch (type) {
            case "type3":
                return area * 210 * noFloors;
            case "type4":
                return area * 300 * noFloors;
            case "type5":
                return area * 440 * noFloors;

            default:
                return 0
        }
    },
    flooring: ({ material, cost, affectedArea }) => {
        if (
            ["granolithe", "linotile", "vinyl", "asphalt", "wood"].includes(material)
        ) {
            return cost * affectedArea;
        }
        if (material === "Crazy-cut marble") {
            return cost * affectedArea;
        } else {
            return 0
        }
    },

    wallingAndPartitioning: ({ material, cost, affectedArea }) => {
        switch (material) {
            case "marble":
                return cost * affectedArea;
            case "synthetic marble":
                return cost * affectedArea;
            case "wash-out":
                return cost * affectedArea;
            default:
                return 0
        }
    },
    ceiling: ({ material, affectedArea }) => {
        switch (material) {
            case "Ordinary drop Ceiling on R.C. building":
                return 100 * affectedArea;
            case "Luminous":
                return 120 * affectedArea;
            case "Narra & other special panels add 140/sq.m.":
                return 140 * affectedArea;
            default:
                return 0

        }
    },

    specialAluminumGlassPanel: ({ material, cost, affectedArea }) => {
        switch (material) {
            case "Ordinary size":
                return cost * affectedArea;
            case "extra size":
                return cost * affectedArea;
            default:
                return 0
        }
    },

    height: ({ height, structuralType, area, storey }) => {
        let standardHeight;

        switch (storey) {
            case "oneStorey":
                standardHeight = standardHeightOneStorey;
                break;
            case "twoStorey":
                standardHeight = standardHeightTwoStorey;
                break;
            default:
                return 0
        }

        let ratePerSqm = structuralType;

        if (height > standardHeight) {
            const excess = Math.floor(height - standardHeight);
            ratePerSqm += structuralType * 0.1 * excess;
        } else if (height < standardHeight) {
            const deficiency = Math.floor(standardHeight - height);
            ratePerSqm -= structuralType * 0.1 * deficiency;
        }

        return ratePerSqm * area;
    },

    otherIncrement: ({ structuralType }) => {
        console.log("=============");
        return structuralType * 0.75
    },
    //swimmingPools to be decided
};