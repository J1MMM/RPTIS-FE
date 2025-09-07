
const additionalItemsComputations = {
    foundation: ({ type, area, noFloors }) => {
        switch (type) {
            case "type3":
                return area * 210 * noFloors;
            case "type4":
                return area * 300 * noFloors;
            case "type5":
                return area * 440 * noFloors;

            default:
                throw new HttpError("invalid Input for foundation", 400);
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
            throw new HttpError("invalid input for flooring", 400);
        }
    },
    wallingAndPartitioning: ({ material, affectedArea }) => {
        switch (material) {
            case "marble":
                return cost * affectedArea;
            case "synthetic marble":
                return cost * affectedArea;
            case "wash-out":
                return cost * affectedArea;
            default:
                throw new HttpError("invalid input for walling and partitioning", 400);
        }
    },
    ceiling: ({ material, affectedArea }) => {
        switch (material) {
            case "Ordinary drop Ceiling on R.C. building":
                return 100 * affectedArea;
            case "Luminous":
                return 120 * affectedArea;
            case "Ordinary drop Ceiling on R.C. building":
                return 140 * affectedArea;
            default:
                throw new HttpError("invalid material", 400);
        }
    },
    specialAluminumGlassPanel: ({ material, cost, affectedArea }) => {
        switch (material) {
            case "Ordinary size":
                return cost * affectedArea;
            case "extra size":
                return cost * affectedArea;
            default:
                throw new HttpError("invalid material", 400);
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
                throw new HttpError("Invalid input for storey", 400);
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
    otherIncrement: ({ structuralType }) => structuralType * 0.75,
    //swimmingPools to be decided
};