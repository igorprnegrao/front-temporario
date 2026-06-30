import styles from "./footer.module.css";

const socialLinks = [
  { href: "#", icon: "fa-facebook-f", label: "Facebook" },
  { href: "#", icon: "fa-instagram", label: "Instagram" },
  { href: "#", icon: "fa-linkedin-in", label: "LinkedIn" },
  { href: "#", icon: "fa-youtube", label: "YouTube" },
];

export default function Footer() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
      <footer className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h4>Sobre a Plataforma</h4>
            <p>
              Modernizando a gestão de gabinetes políticos com tecnologia de
              ponta e interface intuitiva.
            </p>
            <div className={styles.socialLinks}>
              {socialLinks.map((social) => (
                <a
                  href={social.href}
                  className={styles.socialIcon}
                  aria-label={social.label}
                  key={social.label}
                >
                  <i className={`fab ${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          <div className={styles.footerSection}>
            <h4>Links Rápidos</h4>
            <ul className={styles.footerLinks}>
              <li>
                <a href="/#about">Sobre Nós</a>
              </li>
              <li>
                <a href="/#features">Funcionalidades</a>
              </li>
              <li>
                <a href="/#pricing">Planos e Preços</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Suporte</a>
              </li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4>Legal</h4>
            <ul className={styles.footerLinks}>
              <li>
                <a href="/terms-of-use">Termos de Uso e Condições</a>
              </li>
              <li>
                <a href="#">Política de Privacidade</a>
              </li>
              <li>
                <a href="#">LGPD</a>
              </li>
              <li>
                <a href="#">Cookies</a>
              </li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4>Contato</h4>
            <ul className={styles.footerContact}>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>
                  Av. Paulista, 1000 - São Paulo, SP
                  <br />
                  CEP: 01310-100
                </span>
              </li>
              <li>
                <i className="fas fa-phone"></i>
                <span>(11) 3000-0000</span>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <span>contato@politicbase.com.br</span>
              </li>
              <li>
                <i className="fas fa-clock"></i>
                <span>Seg - Sex: 9h às 18h</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; 2026 Politic Base. Todos os direitos reservados.</p>
          <p className={styles.footerCredit}>
            Desenvolvido com <i className="fas fa-heart"></i> para melhorar a
            gestão pública
          </p>
        </div>
      </footer>
    </>
  );
}
