import * as styles from "./style.css";
import { SearchButton } from "../SearchButton";
import { checkCreator } from "@features/util/checkCreator";

export const SearchInput = ({
  creator,
  onCreatorChange,
  name,
  onNameChange,
  onRankChange,
}: {
  creator: string;
  onCreatorChange: (value: string) => void;
  name: string;
  onNameChange: (value: string) => void;
  onRankChange: (value: number) => void;
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
      <SearchButton onClick={() => checkCreator(name, creator, onRankChange)} />
    </div>
  );
};
