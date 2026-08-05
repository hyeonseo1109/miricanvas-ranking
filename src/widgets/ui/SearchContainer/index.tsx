import { SearchInput } from "@entities/search/ui";
import * as styles from "./style.css";
import { ResultsContainer } from "@entities/results/ui/ResultsContainer";
import { useState } from "react";

export const SearchContainer = () => {
  const [creator, setCreator] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [rank, setRank] = useState<number>(0);
  const [error, setError] = useState<boolean>(false);

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
    </div>
  );
};
