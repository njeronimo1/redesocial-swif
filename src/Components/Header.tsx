
import styles from './Header.module.css';
import logoSwif from '../Assets/logoSwif.png';

export function Header(){
    return(
        <header className={styles.header}>
            <img src={logoSwif} alt="logo SwiF" />
            <strong>Swif Feed</strong>
        </header>
    )
}