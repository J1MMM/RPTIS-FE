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
  { label: "I", value: "type1" },
  { label: "II-A", value: "type2A" },
  { label: "II-B", value: "type2B" },
  { label: "III-A", value: "type3A" },
  { label: "III-B", value: "type3B" },
  { label: "III-C", value: "type3C" },
  { label: "III-D", value: "type3D" },
  { label: "III-E", value: "type3E" },
  { label: "IV-A", value: "type4A" },
  { label: "IV-B", value: "type4B" },
  { label: "V-A", value: "type5A" },
  { label: "V-B", value: "type5B" },
  { label: "V-C", value: "type5C" },
];

export const BUILDING_TYPE_OPTIONS = [
  { label: "(1) One Family Residence", value: "oneFamilyResidence" },
  { label: "(2) Two Family Residence", value: "twoFamilyResidence" },
  { label: "(3) Multiple Dwelling", value: "multipleDwelling" },
  { label: "(4)Accessoria or Town House", value: "accessoria/townHouses" },
  { label: "(5) Apartment", value: "apartment" },
  { label: "(6) Boarding House", value: "boardingHouse" },
  { label: "(7) Lodging / Motel", value: "lodging/motel" },
  { label: "(8) Accessory Bldg. (Quarters, Laundry, Guard House, etc.)", value: "accessoryBldg" },
  { label: "(9) School Building", value: "schoolBuilding" },
  { label: "(10) Office Building / Condo / Hospital / Hotel", value: "officeBuildingCondoHospitalHotel" },
  { label: "(11) Theater / Church / Assembly House", value: "assemblyHouse" },
  { label: "(12) Factory / Warehouse / Industrial / Hangar", value: "factoryWarehouse" },
  { label: "(13) Market Shopping Center", value: "marketShoppingCenter" },
  { label: "(14) Gymnasium Coliseum", value: "gymnasiumColiseum" },
  { label: "(15) Recreation (3 Lanes, Club)", value: "recreation" },
  { label: "(16) Saw Mills and Lumber Shields", value: "sawMillsAndLumberShields" },
  { label: "(17) Gasoline Station / Gas Refilling", value: "gasolineStation" },
  { label: "(18) Swimming pool / Bath House", value: "swimmingPool" },
  { label: "(19) Barn House, Poultry Grain House Livestock", value: "barnHouse" },
];

export const ADDITIONAL_ITEMS_OPTIONS = [
  { label: "Foundation", value: "foundation" },
  { label: "Flooring", value: "flooring" },
  { label: "Walling & Partitioning", value: "wallingAndPartitioning" },
  { label: "Ceiling", value: "ceiling" },
  { label: "Special Aluminum Glass Panel", value: "specialAluminumGlassPanel" },
  { label: "Height", value: "height" },
  { label: "Other Increment", value: "otherIncrement" },
];