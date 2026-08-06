import { getResults } from "@features/hook";

const chunkSize = 5;

export const checkRank = async (
  name: string,
  creator: string,
  onRankChange: (value: number) => void,
  onErrorChange: (value: string | null) => void,
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

  if (!rank) {
    onErrorChange("오류 발생. 잠시후 다시 시도해주세요.");
  } else if (!name || !creator) {
    onErrorChange("검색어를 모두 입력해주세요.");
  } else if (rank === -1) {
    onErrorChange("요소가 순위 200위 안에 노출되지 않습니다.");
  } else {
    onErrorChange(null);
    onRankChange(rank + 1);
  }
};
