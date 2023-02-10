export const formatDate = (time) => {
  const setDate = new Date(time);
  return setDate.toLocaleDateString();
};
