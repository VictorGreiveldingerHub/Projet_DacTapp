import styles from "@/styles/Inscription.module.css";

// Page d'inscription
const Inscription = () => {
  return (
    <div className={styles.container}>
      <form action="/signup" method="post">
        {/* Ajouter la civilité ? */}
        <div>
          <label htmlFor="firstname">Nom :</label>
          <input type="text" id="firstname" name="user_firstname" />
        </div>
        <div>
          <label htmlFor="lastname">Prénom :</label>
          <input type="text" id="lastname" name="user_lastname" />
        </div>
        <div>
          <label htmlFor="pseudo">Pseudo :</label>
          <input type="text" id="pseudo" name="user_pseudo" />
        </div>
        <div>
          <label htmlFor="mail">Mail :</label>
          <input type="email" id="mail" name="user_mail" />
        </div>
        <div>
          <label htmlFor="confirm_mail">Confirmation du mail :</label>
          <input type="email" id="confirm_mail" name="confirm_user_mail" />
        </div>
        <div>
          <label htmlFor="password">Mot de passe :</label>
          <input type="password" id="password" name="user_password" />
        </div>
        {/* Ajouter une vérification robot */}
      </form>
    </div>
  );
};

export default Inscription;
