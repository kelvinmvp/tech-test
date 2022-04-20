export const formatAmount = (amount) =>
  new Intl.NumberFormat("en-US", {}).format(amount.toFixed(0));
