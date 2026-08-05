import * as styles from "./style.css";
import { SearchButton } from "../SearchButton";
import { checkRank } from "@features/util";
import React from "react";

export const SearchInput = ({
  creator,
  onCreatorChange,
  name,
  onNameChange,
  onRankChange,
  onErrorChange,
}: {
  creator: string;
  onCreatorChange: (value: string) => void;
  name: string;
  onNameChange: (value: string) => void;
  onRankChange: (value: number) => void;
  onErrorChange: (value: boolean) => void;
}) => {
  const handleSearch = () => {
    void checkRank(name, creator, onRankChange, onErrorChange);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className={styles.searchBar}>
      <div className={styles.searchInputContainer}>
        <input
          type="text"
          placeholder="작가이름 검색"
          className={styles.searchInput}
          value={creator}
          onChange={(e) => onCreatorChange(e.target.value.trim())}
          onKeyDown={handleKeyDown}
        />
        <input
          type="text"
          placeholder="요소이름 검색"
          className={styles.searchInput}
          value={name}
          onChange={(e) => onNameChange(e.target.value.trim())}
          onKeyDown={handleKeyDown}
        />
      </div>
      <SearchButton onClick={handleSearch} />
    </div>
  );
};
