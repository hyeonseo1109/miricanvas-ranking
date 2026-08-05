import { SearchContainer } from "@widgets/ui";
import * as styles from "./style.css";

export const MainPage = () => {
  return (
    <div className={styles.mainPageContainer}>
      <h1>Main Page</h1>
      <SearchContainer />
    </div>
  );
};
