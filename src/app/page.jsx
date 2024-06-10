import Image from "next/image";
import styles from "./home.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Class Connect</h1>
          <p className={styles.desc}>
            Think notes, advice, and connections <br></br> <br></br>Think CC!
          </p>
          <div className={styles.buttons}>
            <button className={styles.button}>Notes</button>
            <button className={styles.button}>Resources</button>
            <button className={styles.button}>PYQ</button>
            <button className={styles.button}>Groups</button>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image src="/herogg.png" alt="" fill className={styles.heroImg} />
        </div>
      </div>
      <div className={styles.heroCont}>
        <h1 className={styles.middleTitle}>Our Team</h1>
        <div className={styles.teamContainer}>
  <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }}>
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '40px 40px 20px',
      backgroundColor: 'rgba(255, 255, 255, 0.3)', /* glass morphism background */
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      backdropFilter: 'blur(10px)',
      marginRight: '20px',
    }}>
      <Image src="/rid.jpg" alt="" width={200} height={200} style={{
        borderRadius: '50%',
        marginBottom: '20px'
      }} />
      <h2 style={{
        textAlign: 'center',
        fontSize: '24px',
        marginBottom: '10px',
        color: '#fff' /* dark text color */
      }}>Riddhesh C</h2>
      <p style={{
        textAlign: 'center',
        fontSize: '18px',
        color: '#fff', /* medium dark text color */
        marginBottom: '20px'
      }}>Project Lead</p>
      <p style={{
        textAlign: 'center',
        fontSize: '18px',
        color: '#fff', /* medium dark text color */
        marginBottom: '20px'
      }}>
        <a href="https://github.com/your-github-username" style={{ marginRight: '10px' }}>
          <img src="/github.png" alt="GitHub" width="30" height="30" />
        </a>
        <a href="https://www.wensite.com/" style={{ marginRight: '10px' }}>
          <img src="/web.png" alt="Wensite" width="33" height="33" />
        </a>
        <a href="https://www.linkedin.com/in/your-linkedin-username/" style={{ marginRight: '10px' }}>
          <img src="/linkedin.png" alt="LinkedIn" width="30" height="30" />
        </a>
      </p>
    </div>
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '40px 40px 20px',
      backgroundColor: 'rgba(255, 255, 255, 0.3)', /* glass morphism background */
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      backdropFilter: 'blur(10px)'
    }}>
      <Image src="/rid.jpg" alt="" width={200} height={200} style={{
        borderRadius: '50%',
        marginBottom: '20px'
      }} />
      <h2 style={{
        textAlign: 'center',
        fontSize: '24px',
        marginBottom: '10px',
        color: '#fff' /* dark text color */
      }}>Laxman Bafna</h2>
      <p style={{
        textAlign: 'center',
        fontSize: '18px',
        color: '#fff', /* medium dark text color */
        marginBottom: '20px'
      }}>Project Lead</p>
      <p style={{
        textAlign: 'center',
        fontSize: '18px',
        color: '#fff', /* medium dark text color */
        marginBottom: '10px'
      }}>
        <a href="https://github.com/jane-github-username" style={{ marginRight: '10px' }}>
          <img src="/github.png" alt="GitHub" width="30" height="30" />
        </a>
        <a href="https://www.wensite.com/" style={{ marginRight: '10px' }}>
          <img src="/web.png" alt="Wensite" width="33" height="33 " />
        </a>
        <a href="https://www.linkedin.com/in/jane-linkedin-username/" style={{ marginRight: '10px' }}>
          <img src="/linkedin.png" alt="LinkedIn" width="30" height="30" />
        </a>
      </p>
    </div>
  </div>
</div>
          
          
      </div>
    </div>
  );
};

export default Home;