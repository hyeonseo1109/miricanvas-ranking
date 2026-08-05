import * as styles from "./style.css";

import { SearchButton } from "../SearchButton";
import { useEffect } from "react";
import { getResults } from "@features/getResults";

export const SearchInput = ({
  creator,
  onCreatorChange,
  name,
  onNameChange,
}: {
  creator: string;
  onCreatorChange: (value: string) => void;
  name: string;
  onNameChange: (value: string) => void;
}) => {
  useEffect(() => {
    console.log("creator", creator);
    console.log("name", name);
  });

  return (
    <div className={styles.searchBar}>
      <div className={styles.searchInputContainer}>
        <input
          type="text"
          placeholder="작가이름 검색"
          className={styles.searchInput}
          value={creator}
          onChange={(e) => onCreatorChange(e.target.value)}
        />
        <input
          type="text"
          placeholder="요소이름 검색"
          className={styles.searchInput}
          value={name}
          onChange={(e) => onNameChange(e.target.value)}
        />
      </div>
      <SearchButton onClick={() => getResults(name)} />
    </div>
  );
};
