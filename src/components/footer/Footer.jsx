import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Class Connect</div>
      <div className={styles.text}>
        Building community. Made with LOVE
      </div>
    </div>
  );
};

export default Footer;
