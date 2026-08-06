import * as styles from "./style.css";

export const ResultsContainer = ({
  creator = "작가",
  name = "그림",
  rank,
  error,
}: {
  creator: string;
  name: string;
  rank: number;
  error: string | null;
}) => {
  return (
    <div className={styles.ResultsContainer}>
      <p className={styles.nameDescription}>
        {creator === "" ? "당신" : `${creator}님`}의 {name} 요소
      </p>
      <p className={styles.rankingResult}>{!error ? `${rank}위` : error}</p>
    </div>
  );
};
