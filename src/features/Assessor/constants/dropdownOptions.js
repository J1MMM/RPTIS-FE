export const CLASSIFICATION_OPTIONS = [
  { value: "Residential", label: "Residential" },
  { value: "Commercial", label: "Commercial" },
  { value: "Industrial", label: "Industrial" },
  { value: "Agricultural", label: "Agricultural" },
];

export const SUBCLASS_OPTIONS = {
  Residential: [
    { value: "R1", label: "R1" },
    { value: "R2", label: "R2" },
    { value: "R3", label: "R3" },
    { value: "R4", label: "R4" },
    { value: "R5", label: "R5" },
    { value: "R6", label: "R6" },
  ],
  Commercial: [
    { value: "C1", label: "C1" },
    { value: "C2", label: "C2" },
    { value: "C3", label: "C3" },
    { value: "C4", label: "C4" },
  ],
  Industrial: [
    { value: "I1", label: "I1" },
    { value: "I2", label: "I2" },
    { value: "I3", label: "I3" },
  ],
  Agricultural: [
    { value: "A1", label: "A1" },
    { value: "A2", label: "A2" },
    { value: "A3", label: "A3" },
    { value: "A4", label: "A4" },
    { value: "B1", label: "B1" },
    { value: "B2", label: "B2" },
    { value: "B3", label: "B3" },
    { value: "C1", label: "C1" },
    { value: "C2", label: "C2" },
    { value: "C3", label: "C3" },
    { value: "D1", label: "D1" },
    { value: "D2", label: "D2" },
    { value: "D3", label: "D3" },
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
  { value: "Corner Influence", label: "Corner Influence" },
  { value: "Right of Way", label: "Right of Way" },
  { value: "Open Spaces", label: "Open Spaces" },
];

export const ACTUAL_USE_OPTIONS = [
  { value: "Residential", label: "Residential" },
  { value: "Commercial", label: "Commercial" },
  { value: "Industrial", label: "Industrial" },
  { value: "Agricultural", label: "Agricultural" },
  // { value: "Special(Educational)", label: "Special(Educational)" },
  // { value: "Special(Religious)", label: "Special(Religious)" },
  // { value: "Special(Government)", label: "Special(Government)" },
  // { value: "Special(Charitable)", label: "Special(Charitable)" },
  // { value: "Special(OTHERS)", label: "Special(OTHERS)" },
];

export const TAXABLE_OPTIONS = [
  { label: "Taxable", value: "taxable" },
  { label: "Exempt", value: "exempt" },
];
