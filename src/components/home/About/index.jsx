import styles from "./about.module.css";

const statNumbers = [
  { value: "200+", label: "Mandatos Atendidos" },
  { value: "98%", label: "Satisfacao de Clientes" },
  { value: "24/7", label: "Suporte Especializado" },
];

export default function About() {
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
      <section id="about" className={styles.aboutContainer}>
        <div className={styles.aboutContent}>
          <h2 className={styles.aboutTitle}>Sobre Nós</h2>
          <p className={styles.AboutText}>
            Somos uma plataforma inovadora dedicada a modernizar a gestão de
            gabinetes políticos. Com anos de experiência no setor público,
            desenvolvemos uma solução completa que atende às necessidades
            específicas de mandatos eletivos.
          </p>
          <p className={styles.AboutText}>
            Nossa missão é simplificar processos, aumentar a transparência e
            potencializar o impacto positivo dos representantes eleitos em suas
            comunidades. Através de tecnologia de ponta e uma interface
            intuitiva, transformamos a forma como gabinetes gerenciam suas
            atividades diárias.
          </p>
          <div className={styles.statNumbers}>
            {statNumbers.map((stat) => (
              <div className={styles.statItem} key={stat.label}>
                <h3 className={styles.statNum} data-value={stat.value}>
                  {stat.value}
                </h3>
                <p className={styles.statLabel}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
