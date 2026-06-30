import styles from "./features.module.css";

const features = [
  {
    icon: "fa-calendar-alt",
    title: "Agenda Parlamentar",
    desc: "Organize suas reuniões e encontros parlamentares de forma eficiente.",
  },
  {
    icon: "fa-users",
    title: "Gestão de Eleitores e Simpatizantes",
    desc: "Cadastre pessoas e controle seu público de forma simples e direta.",
  },
  {
    icon: "fa-user-friends",
    title: "Múltiplos Assessores",
    desc: "Gerencie sua equipe com controle de acessos e permissões personalizadas.",
  },
  {
    icon: "fa-chart-bar",
    title: "Relatórios de Atendimentos",
    desc: "Tenha relatórios completos sobre seus atendimentos e acompanhe métricas importantes.",
  },
  {
    icon: "fa-chart-pie",
    title: "Relatórios da Base Eleitoral",
    desc: "Analise dados detalhados sobre sua base eleitoral e tome decisões estratégicas.",
  },
  {
    icon: "fa-headset",
    title: "CRM para Gestão de Atendimentos",
    desc: "Crie atendimentos para acompanhar solicitações de seus eleitores.",
  },
  {
    icon: "fa-clipboard-check",
    title: "Gestão de Visitas e Fiscalizações",
    desc: "Gerencie suas visitas e fiscalizações por dentro do sistema.",
  },
  {
    icon: "fa-folder-open",
    title: "Controle de Protocolo do Gabinete",
    desc: "Organize e acompanhe todos os protocolos do seu gabinete em um só lugar.",
  },
  {
    icon: "fa-bell",
    title: "Notificações de Agenda",
    desc: "Receba notificações da sua agenda e nunca perca um compromisso importante.",
  },
  {
    icon: "fa-chart-line",
    title: "Dashboard com Dados do TSE",
    desc: "Acesse dados do TSE sobre eleições e insights sobre o mandato em tempo real.",
  },
];

export default function Features() {
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
      <section id="features" className={styles.featuresContainer}>
        <div className={styles.featuresContent}>
          <h2 className={styles.featureTitle}>Funcionalidades</h2>
          <div className={styles.featuresGrid}>
            {features.map((feature) => (
              <div className={styles.featureCard} key={feature.title}>
                <div className={styles.featureIcon}>
                  <i className={`fas ${feature.icon}`}></i>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
