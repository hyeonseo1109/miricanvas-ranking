import { getResults } from "@features/hook";

const chunkSize = 5;

export const checkRank = async (
  name: string,
  creator: string,
  onRankChange: (value: number) => void,
  onErrorChange: (value: boolean) => void,
) => {
  const data = await getResults(name);
  const premiumData = data.premiumData;
  const freeData = data.freeData;

  const maxLength = Math.max(freeData.length, premiumData.length);
  const mergedData = [];

  for (let idx = 0; idx < maxLength; idx += chunkSize) {
    mergedData.push(
      ...freeData.slice(idx, idx + chunkSize),
      ...premiumData.slice(idx, idx + chunkSize),
    );
  }

  const rank = mergedData.findIndex((item) => item.licenseName === creator);

  console.log("랭크", rank);

  if (rank) {
    onErrorChange(false);
    onRankChange(rank);
  } else onErrorChange(true);
};
