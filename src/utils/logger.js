export const logger = (label, ...data) => {
  const timestamp = new Date().toISOString();

  console.log(
    `%c[${timestamp}] %c${label}`,
    "color: gray; font-weight: bold;",
    "color: #1976d2; font-weight: bold;"
  );

  if (data.length) {
    data.forEach((d, i) => {
      console.log(`%c└── Data[${i}]`, "color: #4caf50; font-weight: bold;", d);
    });
  }
};
