import Link from "next/link";

import styles from "../styles/Nav.module.css";

// Header du site
const Nav = () => {
  return (
    <nav className={styles.container}>
      <Link href="/">Accueil</Link>
      <Link href="/jeux">Jeux</Link>
      <Link href="/profil">Profil</Link>
      <Link href="/tableauBord">Tableau de bord</Link>
      <Link href="/inscription">Inscription</Link>
      <Link href="/connexion">Connexion</Link>
    </nav>
  );
};

export default Nav;
