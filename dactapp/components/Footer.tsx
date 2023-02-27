import Link from "next/link";

import styles from "../styles/Footer.module.css";

// Footer du site
const Footer = () => {
  return (
    <div className={styles.container}>
      <nav>
        <Link href="/mentions">Mentions légales</Link>
        <Link href="/contact">Nous contacter</Link>
        <Link href="/faq">Foire aux questions</Link>
      </nav>
      <nav className="sites-aide">
        <h2>Pour aller plus loin</h2>
        <Link href="#">Site 1</Link>
        <Link href="#">Site 2</Link>
        <Link href="#">Site 3</Link>
      </nav>
    </div>
  );
};

export default Footer;
