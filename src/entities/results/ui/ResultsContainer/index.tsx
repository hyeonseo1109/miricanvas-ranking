import * as styles from "./style.css";

export const ResultsContainer = ({
  creator = "작가",
  name = "그림",
  rank = 1,
}: {
  creator: string;
  name: string;
  rank: number;
}) => {
  return (
    <div className={styles.ResultsContainer}>
      <p className={styles.nameDescription}>
        {creator}님의 {name} 요소
      </p>
      <p className={styles.rankingResult}>{rank}순위</p>
    </div>
  );
};
