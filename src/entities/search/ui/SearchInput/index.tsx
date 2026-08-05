import * as styles from "./style.css";
import { SearchButton } from "../SearchButton";
import { checkRank } from "@features/util";

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
  return (
    <div className={styles.searchBar}>
      <div className={styles.searchInputContainer}>
        <input
          type="text"
          placeholder="작가이름 검색"
          className={styles.searchInput}
          value={creator}
          onChange={(e) => onCreatorChange(e.target.value.trim())}
        />
        <input
          type="text"
          placeholder="요소이름 검색"
          className={styles.searchInput}
          value={name}
          onChange={(e) => onNameChange(e.target.value.trim())}
        />
      </div>
      <SearchButton
        onClick={() => checkRank(name, creator, onRankChange, onErrorChange)}
      />
    </div>
  );
};
