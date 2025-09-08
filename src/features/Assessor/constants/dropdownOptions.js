export const CLASSIFICATION_OPTIONS = [
  { value: "residential", label: "Residential" },
  { value: "commercial", label: "Commercial" },
  { value: "industrial", label: "Industrial" },
  { value: "agricultural", label: "Agricultural" },
];

export const SUBCLASS_OPTIONS = {
  residential: [
    { value: "r1", label: "R1" },
    { value: "r2", label: "R2" },
    { value: "r3", label: "R3" },
    { value: "r4", label: "R4" },
    { value: "r5", label: "R5" },
    { value: "r6", label: "R6" },
  ],
  commercial: [
    { value: "c1", label: "C1" },
    { value: "c2", label: "C2" },
    { value: "c3", label: "C3" },
    { value: "c4", label: "C4" },
  ],
  industrial: [
    { value: "i1", label: "I1" },
    { value: "i2", label: "I2" },
    { value: "i3", label: "I3" },
  ],
  agricultural: [
    { value: "a1", label: "A1" },
    { value: "a2", label: "A2" },
    { value: "a3", label: "A3" },
    { value: "a4", label: "A4" },
    { value: "b1", label: "B1" },
    { value: "b2", label: "B2" },
    { value: "b3", label: "B3" },
    { value: "c1", label: "C1" },
    { value: "c2", label: "C2" },
    { value: "c3", label: "C3" },
    { value: "d1", label: "D1" },
    { value: "d2", label: "D2" },
    { value: "d3", label: "D3" },
  ],
};

export const TRANSACTION_CODE = [
  { value: "SD", label: "SD" },
  { value: "CS", label: "CS" },
  { value: "DC", label: "DC" },
  { value: "PC", label: "PC" },
  { value: "DP", label: "DP" },
  { value: "DT", label: "DT" },
  { value: "TR", label: "TR" },
  { value: "RC", label: "RC" },
  { value: "GR", label: "GR" },
  { value: "SP", label: "SP" },
];

export const QUATER_OPTIONS = [
  { value: "1st Quarter", label: "1st Quarter" },
  { value: "2nd Quarter", label: "2nd Quarter" },
  { value: "3rd Quarter", label: "3rd Quarter" },
  { value: "4th Quarter", label: "4th Quarter" },
];

export const ADJUSTMENT_FACTOR_OPTIONS = [
  { value: "Stripping", label: "Stripping" },
  { value: "cornerInfluence", label: "Corner Influence" },
  { value: "rightOfWay", label: "Right of Way" },
  { value: "openSpaces", label: "Open Spaces" },
];

export const ACTUAL_USE_OPTIONS = [
  { value: "residential", label: "Residential" },
  { value: "commercial", label: "Commercial" },
  { value: "industrial", label: "Industrial" },
  { value: "agricultural", label: "Agricultural" },
  // { value: "Special(Educational)", label: "Special(Educational)" },
  // { value: "Special(Religious)", label: "Special(Religious)" },
  // { value: "Special(Government)", label: "Special(Government)" },
  // { value: "Special(Charitable)", label: "Special(Charitable)" },
  // { value: "Special(OTHERS)", label: "Special(OTHERS)" },
];

export const TAXABLE_OPTIONS = [
  { label: "Taxable", value: true },
  { label: "Exempt", value: false },
];

export const STRUC_CLASS_OPTIONS = [
  { label: "I", value: "I" },
  { label: "II-A", value: "II-A" },
  { label: "II-B", value: "II-B" },
  { label: "III-A", value: "III-A" },
  { label: "III-B", value: "III-B" },
  { label: "III-C", value: "III-C" },
  { label: "III-D", value: "III-D" },
  { label: "III-E", value: "III-E" },
  { label: "IV-A", value: "IV-A" },
  { label: "IV-B", value: "IV-B" },
  { label: "V-A", value: "V-A" },
  { label: "V-B", value: "V-B" },
  { label: "V-C", value: "V-C" },
];

export const BUILDING_TYPE_OPTIONS = [
  { label: "One Family Residence", value: "oneFamilyResidence" },
  { label: "Two Family Residence", value: "twoFamilyResidence" },
  { label: "Multiple Dwelling", value: "multipleDwelling" },
  { label: "Accessoria or Town House", value: "accessoria/townHouses" },
  { label: "Apartment", value: "apartment" },
  { label: "Boarding House", value: "boardingHouse" },
  { label: "Lodging / Motel", value: "lodging/motel" },
  { label: "Accessory Bldg. (Quarters, Laundry, Guard House, etc.)", value: "accessoryBldg" },
  { label: "School Building", value: "schoolBuilding" },
  { label: "Office Building / Condo / Hospital / Hotel", value: "officeBuildingCondoHospitalHotel" },
  { label: "Theater / Church / Assembly House", value: "assemblyHouse" },
  { label: "Factory / Warehouse / Industrial / Hangar", value: "factoryWarehouse" },
  { label: "Market Shopping Center", value: "marketShoppingCenter" },
  { label: "Gymnasium Coliseum", value: "gymnasiumColiseum" },
  { label: "Recreation (3 Lanes, Club)", value: "recreation" },
  { label: "Saw Mills and Lumber Shields", value: "sawMillsAndLumberShields" },
  { label: "Gasoline Station / Gas Refilling", value: "gasolineStation" },
  { label: "Swimming pool / Bath House", value: "swimmingPool" },
  { label: "Barn House, Poultry Grain House Livestock", value: "barnHouse" },
];