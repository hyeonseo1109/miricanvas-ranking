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
  error: boolean;
}) => {
  return (
    <div className={styles.ResultsContainer}>
      <p className={styles.nameDescription}>
        {creator}님의 {name} 요소
      </p>
      <p className={styles.rankingResult}>
        {error
          ? "오류 발생, 나중에 다시 시도해주세요."
          : rank === -1
            ? "순위 60위 안에 노출되지 않습니다."
            : `${rank}위`}
      </p>
    </div>
  );
};
