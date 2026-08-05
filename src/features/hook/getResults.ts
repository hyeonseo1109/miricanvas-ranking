const URL_1 = import.meta.env.VITE_API_URL_1;
const URL_2 = import.meta.env.VITE_API_URL_2;
const URL_3 = import.meta.env.VITE_API_URL_3;
const MODE = ["PREMIUM", "FREE"];

export const getResults = async (name: string = "수박") => {
  const [premiumResponse, freeResponse] = await Promise.all(
    MODE.map((mode) =>
      fetch(`${URL_1}${encodeURIComponent(name)}${URL_2}${mode}${URL_3}`),
    ),
  );
  const [premiumObject, freeObject] = await Promise.all([
    premiumResponse.json(),
    freeResponse.json(),
  ]);

  const premiumData = premiumObject.data.list;
  const freeData = freeObject.data.list;

  return {
    premiumData,
    freeData,
  };
};
