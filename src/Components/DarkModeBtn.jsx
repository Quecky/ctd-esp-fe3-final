import styles from "./darkModeBtn.module.css";
const DarkModeBtn = ({ status, trigger }) => {
  return (
    <>
      <button className={styles.box} onClick={trigger}>
        <div className={status.theme === 'light' ? styles.circleLight:styles.circleDark }>
        </div>
      </button>
    </>
  );
};
export default DarkModeBtn;
