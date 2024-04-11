import styles from "./Display.module.css";

const Display = ({ displayValue }) => {
  return (
    <div>
      <h3>Calculator</h3>
      <input
        type="text"
        className={styles.display}
        value={displayValue}
        readOnly
      />
    </div>
  );
};

export default Display;
