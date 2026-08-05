const URL_1 = import.meta.env.VITE_API_URL_1;
const URL_2 = import.meta.env.VITE_API_URL_2;
const URL_3 = import.meta.env.VITE_API_URL_3;
const MODE = ["PREMIUM", "FREE"];

export const getResults = async (name: string = "수박") => {
  const data = await Promise.all(
    MODE.map((m) =>
      fetch(`${URL_1}${encodeURIComponent(name)}${URL_2}${m}${URL_3}`),
    ),
  );
  console.log(data);
  const result = await Promise.all(data.map((d) => d.json()));
  return result;
};
