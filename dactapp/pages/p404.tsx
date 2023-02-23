import Link from "next/link";
import styles from "@/styles/P404.module.css";

// Page d'erreur 404
const P404 = () => {
  return (
    <div className={styles.container}>
      <h2>404</h2>
      <span>La page que vous recherchez n'existe pas</span>
      <Link href="/">Retourner dans Raxie</Link>
    </div>
  );
};

export default P404;
