import ErrorOutlineTwoToneIcon from "@mui/icons-material/ErrorOutlineTwoTone";
import styles from "./NotFound.module.scss";

export const NotFound = () => {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.description}>Страница не найдена</p>
      <ErrorOutlineTwoToneIcon fontSize="large" color="error" />
    </div>
  );
};
