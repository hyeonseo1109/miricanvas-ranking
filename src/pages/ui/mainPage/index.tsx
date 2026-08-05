import { SearchContainer } from "@widgets/ui";
import * as styles from "./style.css";
import { HeaderContainer } from "@shared/ui";

export const MainPage = () => {
  return (
    <div className={styles.mainPageContainer}>
      <HeaderContainer />
      <SearchContainer />
    </div>
  );
};
