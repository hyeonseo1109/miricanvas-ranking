import { getResults } from "@features/hook/getResults";

const chunkSize = 5;

export const checkCreator = async (
  name: string,
  creator: string,
  onRankChange: (value: number) => void,
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

  const findRank = mergedData.findIndex((item) => item.licenseName === creator);
  const rank = findRank === -1 ? null : findRank + 1;

  if (rank) onRankChange(rank);
};
