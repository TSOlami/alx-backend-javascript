// Function to get the current year
function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

// Function to get the budget for the current year
export default function getBudgetForCurrentYear(income, gdp, capita) {
  return {
    [`income-${getCurrentYear()}`]: income,
    [`gdp-${getCurrentYear()}`]: gdp,
    [`capita-${getCurrentYear()}`]: capita,
  };
}
