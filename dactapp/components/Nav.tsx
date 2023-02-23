import Link from "next/link";

// Header du site
const Nav = () => {
  return (
    <nav className="navigation-container">
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
