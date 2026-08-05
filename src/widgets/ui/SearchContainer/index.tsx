import { SearchInput } from "@entities/search/ui";
import * as styles from "./style.css";
import { ResultsContainer } from "@entities/results/ui/ResultsContainer";
import { useEffect, useState } from "react";

export const SearchContainer = () => {
  const [creator, setCreator] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [rank, setRank] = useState<number>(0);
  const [error, setError] = useState<string | null>(
    "당신의 순위를 검색해보세요!",
  );

  useEffect(() => {
    console.log("에러", error);
  }, [error]);

  return (
    <div className={styles.searchContainer}>
      <SearchInput
        creator={creator}
        onCreatorChange={setCreator}
        name={name}
        onNameChange={setName}
        onRankChange={setRank}
        onErrorChange={setError}
      />
      <ResultsContainer
        creator={creator}
        name={name}
        rank={rank}
        error={error}
      />
      <div className={styles.descriptionText}>
        <p>가장 우선순위인 요소 한 개를 표시합니다.</p>
        <p>순위가 60위보다 낮을 경우 표시되지 않습니다.</p>
      </div>
    </div>
  );
};
