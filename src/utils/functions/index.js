export const formatDate = (time) => {
  const setDate = new Date(time);
  return setDate.toLocaleDateString();
};

export const sumTotal = (items) => {
  return items?.map((item) => item.price * item.quantity).reduce((a, b) => a + b, 0);
};
